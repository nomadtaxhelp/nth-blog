// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://nomadtaxhelp.com',
  base: '/blog',
  trailingSlash: 'never',
  integrations: [mdx(), sitemap({ filter: (page) => !page.endsWith('/blog/v2') })],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
