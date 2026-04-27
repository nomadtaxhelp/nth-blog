// Per-post raw Markdown endpoints.
// Each blog post is also served at /posts/<slug>.md as a clean Markdown twin
// so LLM crawlers (ChatGPT, Perplexity, Claude, Gemini) can ingest the article
// without parsing HTML, sidebars, modals, or other site chrome.

import { getCollection } from 'astro:content';
import type { APIRoute, GetStaticPaths } from 'astro';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.data.slug },
    props: { post },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: any };
  const { data, body } = post;

  const url = `https://blog.nomadtaxhelp.com/posts/${data.slug}`;
  const publishDate = new Date(data.publishDate).toISOString().split('T')[0];

  // Strip MDX-specific imports and component invocations from the body so the
  // markdown is clean for LLM ingestion. Keep the prose, drop the JSX.
  const cleanBody = (body || '')
    // Remove import lines
    .replace(/^import\s+.+from\s+['"].+['"];?\s*$/gm, '')
    // Remove <InlineCTA ...>...</InlineCTA> blocks (multiline)
    .replace(/<InlineCTA[\s\S]*?<\/InlineCTA>/g, '')
    // Remove self-closing or block <Callout> components — keep their text
    .replace(/<Callout[^>]*>([\s\S]*?)<\/Callout>/g, (_, inner) => `> ${inner.trim()}`)
    // Remove <div class="not-prose ...">...</div> wrappers around SVGs / cards (keep nothing)
    .replace(/<div class="not-prose[\s\S]*?<\/div>\s*$/gm, '')
    .replace(/<div class="not-prose[^>]*>[\s\S]*?<\/div>/g, '')
    // Remove inline SVGs entirely (LLMs can't read them)
    .replace(/<svg[\s\S]*?<\/svg>/g, '')
    // Remove MDX comments
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    // Collapse 3+ newlines to 2
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  const frontmatterLines: string[] = [
    `# ${data.title}`,
    '',
    `> ${data.description}`,
    '',
    `**Author:** Felix Yanez-Bowker (Co-Founder, NomadTaxHelp)`,
    `**Published:** ${publishDate}`,
    `**Canonical URL:** ${url}`,
    `**Category:** ${data.category}`,
  ];
  if (data.tags?.length) {
    frontmatterLines.push(`**Tags:** ${data.tags.join(', ')}`);
  }
  frontmatterLines.push('');
  if (data.answerCapsule) {
    frontmatterLines.push('## Summary', '', data.answerCapsule, '');
  }
  frontmatterLines.push('---', '');
  const frontmatter = frontmatterLines.join('\n');

  const faqSection =
    data.faqItems && data.faqItems.length > 0
      ? [
          '',
          '## Frequently asked questions',
          '',
          ...data.faqItems.map(
            (faq: { question: string; answer: string }) =>
              `### ${faq.question}\n\n${faq.answer}\n`
          ),
        ].join('\n')
      : '';

  const footer = [
    '',
    '---',
    '',
    'NomadTaxHelp is not a tax or legal adviser. We coordinate with licensed partners. Educational content only — confirm specifics with a professional.',
    '',
    'Book a free clarity call: https://cal.com/nomadtaxhelp/clarity-call',
    'Tax Residency Health Check: https://nomadtaxhelp.com/health-check',
    'Main site: https://nomadtaxhelp.com',
    '',
  ].join('\n');

  const md = frontmatter + cleanBody + faqSection + footer;

  return new Response(md, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'all',
    },
  });
};
