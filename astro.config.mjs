// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import { readdirSync, readFileSync } from 'node:fs';

// Keep sitemap dates tied to the article's editorial update, not each deployment.
const articleDates = new Map(readdirSync(new URL('./src/content/posts/', import.meta.url)).filter(name => name.endsWith('.mdx')).map(name => {
  const source = readFileSync(new URL(`./src/content/posts/${name}`, import.meta.url), 'utf8').split('---')[1];
  const slug = source.match(/^slug: ["']?([^"'\n]+)/m)?.[1].trim();
  const date = (source.match(/^updatedDate: ["']?(\d{4}-\d{2}-\d{2})/m) || source.match(/^publishDate: ["']?(\d{4}-\d{2}-\d{2})/m))?.[1];
  return [`https://nomadtaxhelp.com/blog/posts/${slug}`, date];
}));

export default defineConfig({
  site: 'https://nomadtaxhelp.com',
  base: '/blog',
  trailingSlash: 'never',
  integrations: [mdx(), sitemap({
    filter: (page) => !page.endsWith('/blog/v2') && !page.endsWith('.xml'),
    serialize: (item) => ({ ...item, ...(articleDates.get(item.url) ? { lastmod: articleDates.get(item.url) } : {}) }),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
