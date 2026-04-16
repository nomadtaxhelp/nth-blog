import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  const contentIndex = sorted
    .map((p) => `- [${p.data.title}](https://blog.nomadtaxhelp.com/posts/${p.data.slug}): ${p.data.description}`)
    .join('\n');

  const body = `# NomadTaxHelp Blog

> Practical guides on tax residency, international tax exit strategies, and location-independent business setups for digital nomads and remote entrepreneurs. Written by Felix Yanez-Bowker, co-founder of NomadTaxHelp.

## About

NomadTaxHelp is a tax residency facilitation service for digital nomads and remote entrepreneurs. We help clients establish a legal 0% tax setup via Paraguay residency, paired with optional US LLC formation. We are not tax or legal advisers; we coordinate with licensed partners.

## Core topics

- Paraguay tax residency: setup, documents, timelines, costs
- UK tax exit: HMRC deregistration, Statutory Residence Test, P85
- EU tax exits: Spain, France, Germany, Netherlands, Portugal
- US LLC for non-residents: formation, banking, compliance
- Digital nomad banking: Wise, Mercury, Revolut
- OECD tie-breaker rules, centre of vital interests
- Crypto tax reporting for nomads
- Tax residency certificates (TRC), RUC, cedula

## Most important pages

- [About Felix and NomadTaxHelp](https://blog.nomadtaxhelp.com/about)
- [Tax Residency Health Check](https://nomadtaxhelp.com/health-check)
- [Book a clarity call](https://cal.com/nomadtaxhelp/clarity-call)
- [Main site](https://nomadtaxhelp.com)

## Content index

${contentIndex}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
