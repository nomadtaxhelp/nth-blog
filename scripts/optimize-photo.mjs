// One-off photo optimiser for public/images/felix.png.
// Source PNGs straight from a phone are typically 3+ MB which destroys
// the LCP score on the About page. This resizes to 600x600 (enough for
// the 200px About hero at 3x DPR), strips metadata, and re-encodes.
//
// Run: node scripts/optimize-photo.mjs

import sharp from 'sharp';
import { readFileSync, writeFileSync, statSync } from 'node:fs';

const SOURCE = 'public/images/felix.png';
const before = statSync(SOURCE).size;

const buffer = readFileSync(SOURCE);
const out = await sharp(buffer)
  .resize(600, 600, { fit: 'cover', position: 'attention' })
  .png({ compressionLevel: 9, adaptiveFiltering: true, palette: true })
  .toBuffer();

writeFileSync(SOURCE, out);
const after = statSync(SOURCE).size;

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
const pct = (((before - after) / before) * 100).toFixed(0);
console.log(`Optimised ${SOURCE}`);
console.log(`  Before: ${kb(before)}`);
console.log(`  After:  ${kb(after)}  (${pct}% smaller)`);
