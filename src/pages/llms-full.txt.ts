import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  const sections = sorted.map((p) => {
    const url = `https://nomadtaxhelp.com/blog/posts/${p.data.slug}`;
    const sources = p.data.sources.map((source) => `- [${source.name}](${source.url})`).join('\n');
    const author = p.data.author === 'nth' ? 'Nomad Tax Help' : 'Felix Yanez-Bowker';
    return `# ${p.data.title}\nURL: ${url}\nAuthor: ${author}\nPublished: ${p.data.publishDate.toISOString().split('T')[0]}\nUpdated: ${(p.data.updatedDate || p.data.publishDate).toISOString().split('T')[0]}\n\n${p.body || ''}\n\n## Sources\n\n${sources}`;
  });

  const body = `# NomadTaxHelp Blog: Full Content\n\nGenerated at build time. All published blog posts in full.\n\n---\n\n${sections.join('\n\n---\n\n')}`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
