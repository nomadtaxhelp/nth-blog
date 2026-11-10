// Per-post Open Graph image generator.
// Each blog post gets a unique branded social-card PNG at /og/<slug>.png
// (1200x630), referenced from the post HTML's og:image / twitter:image.
// Generated at build time via astro-og-canvas (Skia/canvaskit under the hood).

import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

export const prerender = true;

const posts = await getCollection('posts', ({ data }) => !data.draft);

const pages = Object.fromEntries(
  posts.map((post) => [
    post.data.slug,
    {
      title: post.data.title,
      description: post.data.description,
      category: post.data.category,
    },
  ])
);

// OGImageRoute returns a Promise — must await before destructuring.
const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  param: 'slug',
  getImageOptions: (_path, page: { title: string; description: string; category: string }) => ({
    title: page.title,
    description: page.description,
    // Paper background and forest-green accent match the approved brand.
    bgGradient: [[255, 255, 255]],
    border: { color: [18, 62, 50], width: 6, side: 'inline-start' },
    padding: 80,
    font: {
      title: {
        color: [18, 62, 50], // forest #123e32
        size: 60,
        weight: 'Bold',
        lineHeight: 1.15,
      },
      description: {
        color: [83, 100, 92], // gray-600
        size: 26,
        lineHeight: 1.4,
      },
    },
  }),
});

export { getStaticPaths, GET };
