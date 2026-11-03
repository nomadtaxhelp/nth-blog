import type { APIRoute } from 'astro';

export const GET: APIRoute = () => new Response(JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://nomadtaxhelp.com/services#service',
  name: 'Premium+ Done-for-You Paraguay Setup',
  url: 'https://nomadtaxhelp.com/services',
  description: 'Coordinated Paraguay residency setup, document preparation, banking guidance and ongoing support.',
  provider: { '@type': 'Organization', '@id': 'https://nomadtaxhelp.com/#organization', name: 'Nomad Tax Help', url: 'https://nomadtaxhelp.com' },
  areaServed: { '@type': 'Country', name: 'Paraguay' },
  offers: { '@type': 'Offer', name: 'Premium+', price: 5950, priceCurrency: 'USD', url: 'https://nomadtaxhelp.com/services' },
}, null, 2), { headers: { 'Content-Type': 'application/ld+json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
