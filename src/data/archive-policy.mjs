// Use the more specific article for these overlapping one-post tag archives.
// A tag automatically becomes eligible again when a second article is added.
const overlappingTags = new Set([
  '0-percent-tax', 'alternatives', 'bitcoin', 'capital-gains', 'compliance',
  'crs', 'ifici', 'oecd', 'pricing', 'residency', 'tax-exit',
]);
export const navigationOnly = (tag, postCount) => overlappingTags.has(tag) && postCount === 1;
