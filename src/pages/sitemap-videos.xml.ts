import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const prerender = true;
const xml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts', ({ data }) => !data.draft && !!data.video);
  const entries = posts.map(({ data }) => {
    const video = data.video!;
    return `<url><loc>https://nomadtaxhelp.com/blog/posts/${xml(data.slug)}</loc><lastmod>${(data.updatedDate || data.publishDate).toISOString()}</lastmod><video:video><video:thumbnail_loc>${xml(video.poster)}</video:thumbnail_loc><video:title>${xml(video.title)}</video:title><video:description>${xml(video.description)}</video:description><video:content_loc>${xml(video.contentUrl)}</video:content_loc><video:publication_date>${video.uploadDate.toISOString()}</video:publication_date></video:video></url>`;
  });
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${entries.join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
