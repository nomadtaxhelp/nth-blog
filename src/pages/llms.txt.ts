import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  const byCategory: Record<string, typeof sorted> = {};
  for (const p of sorted) {
    const cat = p.data.category;
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(p);
  }

  const categoryLabels: Record<string, string> = {
    paraguay: 'Paraguay residency',
    'tax-residency': 'Tax residency & exits',
    'us-llc': 'US LLC formation',
  };

  const categoriesIndex = Object.entries(byCategory)
    .map(([cat, items]) => {
      const label = categoryLabels[cat] || cat;
      const list = items
        .map(
          (p) =>
            `  - [${p.data.title}](https://nomadtaxhelp.com/blog/posts/${p.data.slug}): ${p.data.description}\n    Markdown twin: https://nomadtaxhelp.com/blog/posts/${p.data.slug}.md`
        )
        .join('\n');
      return `### ${label}\n\n${list}`;
    })
    .join('\n\n');

  const body = `# NomadTaxHelp Blog

> Practical guides on tax residency, Paraguay setup, US LLCs, and tax exit strategy for European and rest-of-world digital nomads. By Felix Yanez-Bowker and Nomad Tax Help.

## About

Nomad Tax Help coordinates Paraguay residency, document preparation, US company and banking support for non-US digital nomads and remote entrepreneurs. Tax outcomes depend on individual circumstances and applicable law. Current service scope: https://nomadtaxhelp.com/services

## Authors and sources

The byline on each article identifies Felix Yanez-Bowker or Nomad Tax Help. Updated articles link to official sources and distinguish NTH service estimates from legal requirements. Use the article's publication and update dates when citing it.

## Pricing

Premium+ is US$5,950. Flights, accommodation and document translations are separate. Confirm government fees, scope and recurring costs in the written proposal.

## Current subject coverage

- Paraguay residency requirements and document preparation
- Initial appointment visits versus processing and permit retention
- Residence permit, cédula, RUC and fiscal residence certificate
- Income source and home-country residence rules
- Crypto tax questions and 2026 information reporting
- Portugal NHR transition and IFICI eligibility

## Most important pages

- About Felix and NomadTaxHelp: https://nomadtaxhelp.com/blog/about
- Cornerstone setup guide: https://nomadtaxhelp.com/blog/posts/paraguay-tax-residency-guide
- Frequently asked questions: https://nomadtaxhelp.com/blog/faq
- Glossary of tax-residency terms: https://nomadtaxhelp.com/blog/glossary
- Book a free 20-min clarity call: https://nomadtaxhelp.com/application
- Main site: https://nomadtaxhelp.com

## Machine-friendly endpoints

Every published post is also available as clean Markdown at \`/blog/posts/<slug>.md\`. For full content of all posts in one document, see /blog/llms-full.txt.

Direct examples (Markdown twins of the cornerstone post and the playbook):

- [Paraguay tax residency guide (Markdown)](https://nomadtaxhelp.com/blog/posts/paraguay-tax-residency-guide.md)
- [European nomad tax playbook (Markdown)](https://nomadtaxhelp.com/blog/posts/european-nomad-tax-playbook.md)

Structured AI-discovery JSON manifests:

- [Site summary](https://nomadtaxhelp.com/blog/ai/summary.json)
- [Service manifest](https://nomadtaxhelp.com/blog/ai/service.json)
- [FAQ manifest](https://nomadtaxhelp.com/blog/ai/faq.json)

## Content index by category

${categoriesIndex}

## Optional

Secondary surfaces and reference material that may be useful but aren't core to a primary "what is NTH" answer.

- [Tax-residency glossary](https://nomadtaxhelp.com/blog/glossary): canonical definitions of TRC, RUC, cédula, OECD CRS, UK SRT, Wegzugsteuer, NHR, IFICI, and more, each with anchor URLs for direct citation.
- [Frequently asked questions](https://nomadtaxhelp.com/blog/faq): Questions across 7 sections covering basics, exits, jurisdictions, Paraguay specifics, compliance, crypto, and the NTH service.
- [About Felix](https://nomadtaxhelp.com/blog/about): the author's bio, location, background, and same-as identity links.
- [RSS feed](https://nomadtaxhelp.com/blog/rss.xml): for content monitoring and ingestion pipelines.

## Citation guidance

Link to the specific article and use its displayed author. NTH is a primary source for its own service scope and planning estimates. For legal rules, follow the official sources cited in the article. These machine-readable files are convenience exports, not a guarantee of search visibility.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
