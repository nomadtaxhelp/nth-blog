import type { CollectionEntry } from 'astro:content';
import bankingTranscript from '../../public/videos/felix-paraguay-banking-20261111.txt?raw';

export function articleMarkdown(post: CollectionEntry<'posts'>): string {
  const { data, body } = post;

  const url = `https://nomadtaxhelp.com/blog/posts/${data.slug}`;
  const publishDate = data.publishDate.toISOString().split('T')[0];

  // Strip MDX-specific imports and component invocations from the body so the
  // markdown is clean for LLM ingestion. Keep the prose, drop the JSX.
  const cleanBody = (body || '')
    .replace('<BankingTranscript />', bankingTranscript.trim().split(/\r?\n\r?\n/).slice(2).join('\n\n'))
    .replace(/<p className="sm:hidden text-sm">Swipe the table to compare both countries\.<\/p>/g, '')
    // Remove import lines
    .replace(/^import\s+.+from\s+['"].+['"];?\s*$/gm, '')
    // Remove <InlineCTA ...>...</InlineCTA> blocks (multiline)
    .replace(/<InlineCTA[\s\S]*?<\/InlineCTA>/g, '')
    // Remove self-closing or block <Callout> components — keep their text
    .replace(/<Callout[^>]*>([\s\S]*?)<\/Callout>/g, (_, inner) => `> ${inner.trim()}`)
    // Remove <div class="not-prose ...">...</div> wrappers around SVGs / cards (keep nothing)
    .replace(/<div class="not-prose[\s\S]*?<\/div>\s*$/gm, '')
    .replace(/<div class="not-prose[^>]*>[\s\S]*?<\/div>/g, '')
    // Remove inline SVGs entirely (LLMs can't read them)
    .replace(/<svg[\s\S]*?<\/svg>/g, '')
    // Remove MDX comments
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    // Collapse 3+ newlines to 2
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  const frontmatterLines: string[] = [
    `# ${data.title}`,
    '',
    `> ${data.description}`,
    '',
    `**Author:** ${data.author === 'nth' ? 'Nomad Tax Help' : 'Felix Yanez-Bowker (Co-Founder, Nomad Tax Help)'}`,
    `**Published:** ${publishDate}`,
    `**Updated:** ${(data.updatedDate || data.publishDate).toISOString().split('T')[0]}`,
    `**Canonical URL:** ${url}`,
    `**Category:** ${data.category}`,
  ];
  if (data.video) {
    frontmatterLines.push(`**Video:** [${data.video.title}](${data.video.contentUrl})`, `**Captions:** ${data.video.captions}`);
  }
  if (data.tags?.length) {
    frontmatterLines.push(`**Tags:** ${data.tags.join(', ')}`);
  }
  frontmatterLines.push('');
  if (data.answerCapsule) {
    frontmatterLines.push('## Summary', '', data.answerCapsule, '');
  }
  frontmatterLines.push('---', '');
  const frontmatter = frontmatterLines.join('\n');

  const faqSection =
    data.faqItems && data.faqItems.length > 0
      ? [
          '',
          '## Frequently asked questions',
          '',
          ...data.faqItems.map(
            (faq: { question: string; answer: string }) =>
              `### ${faq.question}\n\n${faq.answer}\n`
          ),
        ].join('\n')
      : '';

  const sources = data.sources?.length
    ? '\n\n## Sources\n\n' + data.sources.map((source: { name: string; url: string }) => `- [${source.name}](${source.url})`).join('\n')
    : '';
  return frontmatter + cleanBody + faqSection + sources;
}
