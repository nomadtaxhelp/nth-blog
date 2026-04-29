# NTH Blog — Strategic Playbook

The single document for: what this blog is, how it grows, how to operate it weekly, and what success looks like.

---

## What this blog is

A topical-authority funnel for NomadTaxHelp. Six cluster posts pointing at one cornerstone Paraguay guide, plus a glossary entity hub. Audience: European and rest-of-world digital nomads earning €50k–300k. Single conversion goal: book a 20-minute clarity call.

We do not serve US persons. We do not chase generic "tax tips" SEO traffic. We dominate a small, high-intent surface area and own it.

---

## What success looks like

### Month 2–4 targets

| Metric | Target | Why |
|---|---|---|
| Weekly visitors | 200+ | Crossing this means SEO is starting to compound |
| Visitor → call click | ≥1% | Industry-typical for high-intent niche content |
| Posts ranked top-10 (Google) | ≥2 | At least two cluster posts hitting page-1 |
| AI engine citations | ≥1 confirmed | Perplexity / ChatGPT / Claude citing a post |
| Inbound clarity calls/month | 4–10 | First leads attributable to blog traffic |

### Month 6 targets

- 1,000+ weekly visitors
- ≥5 attributable clarity-call leads per week
- 3+ pieces of cluster content beyond the starter 5
- 1+ piece syndicated/guest-published externally

If we're not on this curve by month 4, something is wrong with content quality, distribution, or both. The weekly review catches this.

---

## How traffic actually arrives (the channel mix)

```
Direct + Felix's distribution        →  Weeks 1–4 dominate
Google organic search                →  Compounds from week 4–6 onwards
LLM/AI engine citations              →  Trickles from week 2, scales month 3+
Backlinks (HN / Reddit / podcasts)   →  Spike-driven, lasting effect
Social referrals (LinkedIn / X)      →  Rises with each post we publish
Email / Substack cross-promo         →  Steady when we do it
```

The data layer (PostHog) tells us which is actually working week by week. Don't guess — look.

---

## The weekly cadence

One review per week. Same day every week (suggested: Monday morning). Three steps:

### 1. Check the data — `npm run stats`

Pulls last-7-days vs previous-7-days from PostHog into the terminal. Look at:

- **Visitors trend.** Is it up week-over-week? If not, distribution problem.
- **Lead conversion rate.** Aim ≥1%. If lower, CTAs or content fit are off.
- **Top posts.** Which ones are pulling weight?
- **Traffic sources.** Where are visits coming from? Diversifying or single-source?
- **CTA placements.** Which placement is converting (hero / inline / sidebar / exit-intent)? Double down on what works.

### 2. Run the weekly review skill — `/nth-weekly-review`

Triggers Claude Code to:

1. Run the stats pull
2. Read the previous week's notes (if any) at `WEEKLY_REVIEWS/<date>.md`
3. Identify 3–5 highest-leverage actions for THIS week, based on data
4. Spawn focused agents to execute the ones approved

### 3. Execute the week's work

Tasks fall into four buckets. Aim for one of each per week:

| Bucket | Example tasks | Cadence |
|---|---|---|
| **Distribute** | Post existing piece on LinkedIn / Reddit / HN. Cross-link from Substack. | Every week |
| **Improve** | Audit a weak post (stats-wise). Rewrite intro, add internal links, expand FAQs. | Every week |
| **Create** | One new post, OR a major update to an existing piece. | 1–2x/month |
| **Outreach** | Pitch a guest post. Submit to AI engines. Apply to be on a podcast. | Every other week |

---

## The agent-driven workflow

Each weekly review spawns fresh agents because each agent gets clean, focused context. They're cheaper to run and produce more consistent output than one mega-agent doing everything.

### Standard agent assignments

**SEO auditor** — picks the lowest-performing post (or one Felix flags) and produces a list of concrete improvements: missing keywords, weak headlines, internal-link gaps, FAQ additions.

**Distributor** — drafts ready-to-post content for: LinkedIn (1 long-form post), Reddit (1 targeted subreddit answer linking to a post), and X/Twitter thread.

**Content scout** — surfaces 5 keyword opportunities competitors are ranking for that we haven't covered. Returns a brief on the highest-leverage one.

**Writer** — produces a single new post end-to-end, given a brief from the content scout (or a topic Felix specifies).

**Cross-link auditor** — runs through the cluster looking for missing internal links between posts, between posts and the glossary, and to the cornerstone.

**Conversion auditor** — reads through 1–2 posts and checks whether the CTA placement, copy, and density match what's converting in the PostHog data.

### Rule: agents act, Felix decides

Agents propose and execute. Felix approves before anything ships. Default to "show me before you publish" — never auto-publish blog content.

---

## When to escalate

Pull these levers when the weekly review surfaces them:

- **Conversion <0.5% for 2+ weeks** → audit CTAs, possibly rebuild the inline CTA component or add a sticky bar
- **One post is suddenly trending** → write a follow-up post the same week, capture the wave
- **Bounce rate >80% on a post** → the intro is failing. Rewrite the first 3 paragraphs
- **Search Console showing impressions but no clicks** → the title/meta description isn't compelling. Rewrite both
- **Dead post (zero traffic in 30 days)** → either kill it (redirect to a stronger post) or rewrite the angle
- **No backlinks after 8 weeks** → manual outreach is the bottleneck — pitch 5 guest posts that week

---

## What we don't do

- Generic SEO tips listicles (low intent, low conversion)
- Anything US-tax-focused (we don't serve US persons)
- Content for content's sake (every post must serve the funnel)
- Chasing trending topics outside the niche
- Auto-publishing — every post is reviewed by Felix
- Tracking vanity metrics (impressions, time on site without context). Visits + lead conversion is what matters.

---

## Reference

- Stats CLI: `npm run stats`
- Weekly review: `/nth-weekly-review` (Claude Code skill)
- Past reviews: `WEEKLY_REVIEWS/<YYYY-MM-DD>.md`
- Cornerstone post: `/posts/paraguay-tax-residency-guide`
- Glossary: `/glossary`
- PostHog dashboard: posthog.com (see PostHog setup guide in README)
