// NTH Blog stats — pulls last-7-days metrics from PostHog and prints them.
//
// Setup:
//   1. PostHog → Settings → Personal API keys → create one with "query:read" scope
//   2. PostHog → Settings → Project → grab the numeric Project ID
//   3. Add to .env:
//        POSTHOG_PROJECT_ID=12345
//        POSTHOG_PERSONAL_API_KEY=phx_xxx
//        POSTHOG_HOST=https://eu.posthog.com   (only if not on EU)
//
// Run:  npm run stats

import { existsSync, readFileSync } from 'node:fs';

// Lightweight .env loader (works on any Node version)
if (existsSync('.env')) {
  const content = readFileSync('.env', 'utf-8');
  content.split('\n').forEach((line) => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;
    const eq = line.indexOf('=');
    if (eq < 0) return;
    const key = line.slice(0, eq).trim();
    const val = line.slice(eq + 1).trim().replace(/^['"]|['"]$/g, '');
    if (!process.env[key]) process.env[key] = val;
  });
}

const PROJECT_ID = process.env.POSTHOG_PROJECT_ID;
const API_KEY = process.env.POSTHOG_PERSONAL_API_KEY;
const HOST = process.env.POSTHOG_HOST || 'https://eu.posthog.com';

if (!PROJECT_ID || !API_KEY) {
  console.error('\n  Missing PostHog credentials.\n');
  console.error('  Add to .env:');
  console.error('    POSTHOG_PROJECT_ID=12345');
  console.error('    POSTHOG_PERSONAL_API_KEY=phx_xxx');
  console.error('');
  console.error('  Get them at posthog.com → Settings → Personal API keys + Project.');
  console.error('');
  process.exit(1);
}

async function query(hogql) {
  const res = await fetch(`${HOST}/api/projects/${PROJECT_ID}/query/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({ query: { kind: 'HogQLQuery', query: hogql } }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PostHog query failed (${res.status}): ${text}`);
  }
  return res.json();
}

function pct(curr, prev) {
  if (!prev) return curr ? '   new' : '    —';
  const change = ((curr - prev) / prev) * 100;
  const sign = change >= 0 ? '+' : '';
  return `${sign}${change.toFixed(0).padStart(4)}%`;
}

function bar(value, max, width = 30) {
  if (!max) return '';
  const filled = Math.round((value / max) * width);
  return '█'.repeat(filled) + '░'.repeat(width - filled);
}

function header(text) {
  console.log(`\n  ${text}`);
  console.log('  ' + '─'.repeat(60));
}

const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';
const GREEN = '\x1b[32m';
const AMBER = '\x1b[33m';
const RED = '\x1b[31m';
const TEAL = '\x1b[36m';

function delta(curr, prev) {
  if (!prev) return `${DIM}new${RESET}`;
  const change = ((curr - prev) / prev) * 100;
  const colour = change >= 0 ? GREEN : RED;
  const sign = change >= 0 ? '+' : '';
  return `${colour}${sign}${change.toFixed(0)}%${RESET}`;
}

async function main() {
  console.log('');
  console.log(`${BOLD}${TEAL}  NTH BLOG — STATS${RESET}  ${DIM}${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}${RESET}`);
  console.log(`  ${DIM}Last 7 days vs previous 7 days${RESET}`);

  // ── Top-line metrics ───────────────────────────────────────────────
  const top = await query(`
    SELECT
      count(distinct if(timestamp >= now() - INTERVAL 7 DAY, distinct_id, null)) as visitors_7d,
      count(distinct if(timestamp >= now() - INTERVAL 14 DAY and timestamp < now() - INTERVAL 7 DAY, distinct_id, null)) as visitors_prev,
      countIf(timestamp >= now() - INTERVAL 7 DAY) as views_7d,
      countIf(timestamp >= now() - INTERVAL 14 DAY and timestamp < now() - INTERVAL 7 DAY) as views_prev
    FROM events
    WHERE event = '$pageview'
      AND timestamp >= now() - INTERVAL 14 DAY
  `);
  const t = top.results?.[0] || [0, 0, 0, 0];
  header('Headline');
  console.log(`  Visitors      ${BOLD}${String(t[0]).padStart(5)}${RESET}    ${delta(t[0], t[1])}`);
  console.log(`  Pageviews     ${BOLD}${String(t[2]).padStart(5)}${RESET}    ${delta(t[2], t[3])}`);

  // ── Lead conversion ────────────────────────────────────────────────
  const conv = await query(`
    SELECT
      countIf(event = 'clarity_call_click' and timestamp >= now() - INTERVAL 7 DAY) as clicks_7d,
      countIf(event = 'clarity_call_click' and timestamp >= now() - INTERVAL 14 DAY and timestamp < now() - INTERVAL 7 DAY) as clicks_prev,
      count(distinct if(event = 'clarity_call_click' and timestamp >= now() - INTERVAL 7 DAY, distinct_id, null)) as unique_clickers_7d
    FROM events
    WHERE timestamp >= now() - INTERVAL 14 DAY
  `);
  const c = conv.results?.[0] || [0, 0, 0];
  const rate = t[0] ? ((c[2] / t[0]) * 100).toFixed(2) : '0.00';
  header('Lead conversion');
  console.log(`  Clarity calls ${BOLD}${String(c[0]).padStart(5)}${RESET}    ${delta(c[0], c[1])}`);
  console.log(`  Unique leads  ${BOLD}${String(c[2]).padStart(5)}${RESET}`);
  console.log(`  Conv. rate    ${BOLD}${rate.padStart(5)}%${RESET}    ${DIM}(visitor → call click)${RESET}`);

  // ── Top posts ──────────────────────────────────────────────────────
  const posts = await query(`
    SELECT
      properties.$pathname as path,
      count() as views,
      count(distinct distinct_id) as visitors
    FROM events
    WHERE event = '$pageview'
      AND properties.$pathname LIKE '/posts/%'
      AND properties.$pathname NOT LIKE '%.md'
      AND timestamp >= now() - INTERVAL 7 DAY
    GROUP BY path
    ORDER BY views DESC
    LIMIT 8
  `);
  header('Top posts (by views)');
  if (!posts.results?.length) {
    console.log(`  ${DIM}No post traffic yet.${RESET}`);
  } else {
    const max = posts.results[0][1];
    posts.results.forEach((r) => {
      const path = String(r[0]).replace('/posts/', '');
      const views = r[1];
      const visitors = r[2];
      console.log(`  ${path.slice(0, 38).padEnd(38)} ${TEAL}${bar(views, max, 14)}${RESET}  ${BOLD}${String(views).padStart(4)}${RESET} ${DIM}/ ${visitors}u${RESET}`);
    });
  }

  // ── Traffic sources ────────────────────────────────────────────────
  const sources = await query(`
    SELECT
      coalesce(nullif(properties.$referring_domain, ''), '(direct)') as source,
      count() as visits,
      count(distinct distinct_id) as visitors
    FROM events
    WHERE event = '$pageview'
      AND timestamp >= now() - INTERVAL 7 DAY
    GROUP BY source
    ORDER BY visits DESC
    LIMIT 8
  `);
  header('Traffic sources');
  if (!sources.results?.length) {
    console.log(`  ${DIM}No traffic yet.${RESET}`);
  } else {
    const max = sources.results[0][1];
    sources.results.forEach((r) => {
      const source = String(r[0]).slice(0, 38);
      const visits = r[1];
      console.log(`  ${source.padEnd(38)} ${AMBER}${bar(visits, max, 14)}${RESET}  ${BOLD}${String(visits).padStart(4)}${RESET}`);
    });
  }

  // ── CTA placements ─────────────────────────────────────────────────
  const placements = await query(`
    SELECT
      coalesce(nullif(properties.location, ''), '(unknown)') as location,
      count() as clicks
    FROM events
    WHERE event = 'clarity_call_click'
      AND timestamp >= now() - INTERVAL 7 DAY
    GROUP BY location
    ORDER BY clicks DESC
  `);
  header('CTA placements that converted');
  if (!placements.results?.length) {
    console.log(`  ${DIM}No conversions yet.${RESET}`);
  } else {
    const max = placements.results[0][1];
    placements.results.forEach((r) => {
      console.log(`  ${String(r[0]).padEnd(20)} ${GREEN}${bar(r[1], max, 14)}${RESET}  ${BOLD}${String(r[1]).padStart(3)}${RESET}`);
    });
  }

  console.log('');
  console.log(`  ${DIM}Trends matter more than absolutes. Run weekly.${RESET}`);
  console.log('');
}

main().catch((err) => {
  console.error(`\n  ${RED}Stats failed:${RESET} ${err.message}\n`);
  process.exit(1);
});
