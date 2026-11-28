// Per-post raw Markdown endpoints.
// Each blog post is also served at /posts/<slug>.md as a clean Markdown twin
// so LLM crawlers (ChatGPT, Perplexity, Claude, Gemini) can ingest the article
// without parsing HTML, sidebars, modals, or other site chrome.

import { articleMarkdown } from '../../lib/article-markdown';
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
  const md = articleMarkdown(props.post);
  const footer = [
    '',
    '---',
    '',
    'Nomad Tax Help is not a tax or legal adviser. We coordinate with licensed partners. Educational content only. Confirm specifics with a professional.',
    '',
    'Book a 40-minute consultation with an expert for $67: https://nomadtaxhelp.com/call',
    'Main site: https://nomadtaxhelp.com',
    '',
  ].join('\n');

  return new Response(md + footer, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'all',
    },
  });
};
