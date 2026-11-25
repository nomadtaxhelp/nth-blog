// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import { readdirSync, readFileSync } from 'node:fs';
import yaml from 'js-yaml';
import { navigationOnly } from './src/data/archive-policy.mjs';

// Keep sitemap dates tied to each page's editorial update, not each deployment.
const editorialDates = new Map([
  ['https://nomadtaxhelp.com/blog/', '2026-11-25'],
  ['https://nomadtaxhelp.com/blog/about', '2026-11-25'],
  ['https://nomadtaxhelp.com/blog/posts', '2026-11-25'],
  ['https://nomadtaxhelp.com/blog/resources', '2026-11-25'],
  ['https://nomadtaxhelp.com/blog/category/us-llc', '2026-11-25'],
  ['https://nomadtaxhelp.com/blog/category/paraguay', '2026-11-25'],
  ['https://nomadtaxhelp.com/blog/category/tax-residency', '2026-11-25'],
  ['https://nomadtaxhelp.com/blog/faq', '2026-11-25'],
  ['https://nomadtaxhelp.com/blog/glossary', '2026-11-25'],
]);
const tagCounts = new Map();
for (const name of readdirSync(new URL('./src/content/posts/', import.meta.url))) {
  if (!name.endsWith('.mdx')) continue;
  const source = readFileSync(new URL('./src/content/posts/' + name, import.meta.url), 'utf8');
  const data = yaml.load(source.split('---')[1], { schema: yaml.JSON_SCHEMA });
  if (data.draft) continue;
  editorialDates.set('https://nomadtaxhelp.com/blog/posts/' + data.slug, data.updatedDate || data.publishDate);
  for (const tag of new Set(data.tags || [])) tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
}

export default defineConfig({
  site: 'https://nomadtaxhelp.com',
  base: '/blog',
  trailingSlash: 'never',
  integrations: [mdx(), sitemap({
    filter: (page) => {
      const tag = new URL(page).pathname.match(/^\/blog\/tag\/([^/]+)\/?$/)?.[1];
      return !page.endsWith('/blog/v2') && !page.endsWith('.xml') && !navigationOnly(tag, tagCounts.get(tag));
    },
    serialize: (item) => ({ ...item, ...(editorialDates.get(item.url) ? { lastmod: editorialDates.get(item.url) } : {}) }),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
