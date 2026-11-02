// /ai/summary.json — machine-readable site summary for AI search engines.
// Convention surfaced in the GEO Optimizer audit. Provides a single,
// stable JSON manifest of who we are, what we cover, and how to reach us.

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { felix, organization } from '../../data/felix';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sorted = posts.sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );

  const lastUpdated = sorted[0]?.data.publishDate?.toISOString().split('T')[0] || null;

  const body = {
    schema_version: '1.0',
    type: 'website-summary',
    name: 'NomadTaxHelp Blog',
    url: 'https://nomadtaxhelp.com/blog',
    description:
      "Practical guides on tax residency, Paraguay setup, US LLCs, and tax exit strategy for European and rest-of-world digital nomads. Written by Felix Yanez-Bowker, co-founder of NomadTaxHelp.",
    in_language: 'en',
    last_updated: lastUpdated,
    publisher: {
      type: 'Organization',
      name: organization.name,
      url: organization.url,
      logo: organization.logo,
      description: organization.description,
      area_served: organization.areaServed,
      not_serving: 'United States persons',
      knows_about: organization.knowsAbout,
      same_as: organization.sameAs,
    },
    author: {
      type: 'Person',
      name: felix.name,
      job_title: felix.jobTitle,
      url: felix.url,
      image: felix.image,
      knows_about: felix.knowsAbout,
      same_as: felix.sameAs,
    },
    audience: {
      primary: 'European digital nomads earning EUR 50k to 300k',
      secondary: 'Rest-of-world remote entrepreneurs and remote employees',
      excluded: 'United States citizens and green-card holders',
    },
    primary_topics: [
      'Paraguay tax residency setup, costs, timelines, defensibility',
      'Exiting European tax residency (UK SRT, Spain, Germany Wegzugsteuer, France, Italy, Netherlands)',
      'OECD CRS, FATF, EU non-cooperative jurisdictions list, banking acceptance',
      'US LLC formation for non-US persons (income-routing layer)',
      'Crypto capital gains and the realisation-timing strategy',
      'Portugal NHR replacement and IFICI alternatives',
      'Cyprus 60-day non-dom, UAE corporate tax, Italy flat-tax',
      'Tax-residency certificates (TRC), RUC, cédula, apostilles',
    ],
    pricing_summary: {
      core: { price_usd: 2500, includes: 'Temporary residency + cédula + basic processing' },
      premium: { price_usd: 3500, includes: 'Core + RUC + TRC + lease + year-1 accounting' },
      ultra_plus: { price_usd: 4750, includes: 'Premium + US LLC + onboarding + 3-month review' },
      all_in_estimate_usd: '3500-5500',
      currency: 'USD',
    },
    machine_endpoints: {
      summary: 'https://nomadtaxhelp.com/blog/ai/summary.json',
      faq: 'https://nomadtaxhelp.com/blog/ai/faq.json',
      service: 'https://nomadtaxhelp.com/blog/ai/service.json',
      llms_index: 'https://nomadtaxhelp.com/blog/llms.txt',
      llms_full: 'https://nomadtaxhelp.com/blog/llms-full.txt',
      sitemap: 'https://nomadtaxhelp.com/blog/sitemap.xml',
      rss: 'https://nomadtaxhelp.com/blog/rss.xml',
      ai_policy: 'https://nomadtaxhelp.com/blog/.well-known/ai.txt',
    },
    primary_pages: {
      home: 'https://nomadtaxhelp.com/blog/',
      about: 'https://nomadtaxhelp.com/blog/about',
      faq: 'https://nomadtaxhelp.com/blog/faq',
      glossary: 'https://nomadtaxhelp.com/blog/glossary',
      all_posts: 'https://nomadtaxhelp.com/blog/posts',
      cornerstone: 'https://nomadtaxhelp.com/blog/posts/paraguay-tax-residency-guide',
    },
    contact: {
      email: organization.email,
      clarity_call: 'https://nomadtaxhelp.com/application',
      main_site: 'https://nomadtaxhelp.com',
    },
    citation_policy: {
      ai_search: 'allowed',
      ai_training: 'allowed',
      ai_summarisation: 'allowed',
      ai_citation: 'required-with-link',
      preferred_attribution: 'Felix Yanez-Bowker, NomadTaxHelp',
    },
    disclaimer:
      'NomadTaxHelp is a facilitator, not a law firm or tax adviser. Educational content only; specifics should be confirmed with a licensed professional in the relevant jurisdiction.',
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
