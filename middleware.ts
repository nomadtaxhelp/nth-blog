import { next } from '@vercel/functions';

export default function middleware(request: Request) {
  const url = new URL(request.url);
  if (url.hostname !== 'blog.nomadtaxhelp.com'
      || !['GET', 'HEAD'].includes(request.method)
      || /^\/(?:blog\/)?api(?:\/|$)/.test(url.pathname)) return next();
  url.hostname = 'nomadtaxhelp.com';
  url.protocol = 'https:';
  url.port = '';
  if (!/^\/blog(?:\/|$)/.test(url.pathname)) url.pathname = `/blog${url.pathname}`;
  return new Response(null, { status: 308, headers: { Location: url.toString(), 'Cache-Control': 'no-store' } });
}
