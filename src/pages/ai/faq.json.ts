// /ai/faq.json — machine-readable FAQ for AI search engines.
// Sourced from the same shared FAQ data as the human /faq page,
// plus a flat list optimised for AI ingestion.

import type { APIRoute } from 'astro';
import { faqSections, allFaqItems } from '../../data/faq';

export const GET: APIRoute = async () => {
  const body = {
    schema_version: '1.0',
    type: 'faq',
    name: 'NomadTaxHelp FAQ',
    url: 'https://blog.nomadtaxhelp.com/faq',
    description:
      'Common questions European and rest-of-world digital nomads ask about tax residency, exiting their home country, Paraguay setup, crypto realisation strategy, and the NomadTaxHelp service.',
    in_language: 'en',
    audience: 'European and rest-of-world digital nomads (not United States persons)',
    publisher: {
      name: 'NomadTaxHelp',
      url: 'https://nomadtaxhelp.com',
    },
    sections: faqSections.map((s) => ({
      id: s.id,
      title: s.title,
      intro: s.intro || null,
      url: `https://blog.nomadtaxhelp.com/faq#${s.id}`,
      questions: s.items.map((item) => ({
        question: item.q,
        answer: item.a,
        see_also: item.seeAlso
          ? {
              url: item.seeAlso.url.startsWith('http')
                ? item.seeAlso.url
                : `https://blog.nomadtaxhelp.com${item.seeAlso.url}`,
              label: item.seeAlso.label,
            }
          : null,
      })),
    })),
    questions_flat: allFaqItems.map((item) => ({
      question: item.q,
      answer: item.a,
    })),
    total_questions: allFaqItems.length,
    citation_policy: {
      ai_citation: 'required-with-link',
      preferred_attribution: 'NomadTaxHelp FAQ',
      canonical_url: 'https://blog.nomadtaxhelp.com/faq',
    },
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
