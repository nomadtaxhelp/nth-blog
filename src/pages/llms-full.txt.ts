import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  const sections = sorted.map((p) => {
    const url = `https://blog.nomadtaxhelp.com/posts/${p.data.slug}`;
    return `# ${p.data.title}\nURL: ${url}\n\n${p.body || ''}`;
  });

  const body = `# NomadTaxHelp Blog — Full Content\n\nGenerated at build time. All published blog posts in full.\n\n---\n\n${sections.join('\n\n---\n\n')}`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
