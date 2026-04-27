// /sitemap.xml — alias that 301-redirects to /sitemap-index.xml.
// @astrojs/sitemap generates the index at /sitemap-index.xml by convention,
// but many tools (Google Search Console previews, third-party SEO checkers,
// human reviewers) expect the canonical /sitemap.xml path. This serves both.
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(null, {
    status: 301,
    headers: {
      Location: '/sitemap-index.xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
