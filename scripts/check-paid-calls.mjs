// 28 Nov 2026: every call is paid. No public blog page offers a free call or links to /application.
// Run: node scripts/check-paid-calls.mjs (exits 1 and lists the files when a rule is broken).
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const full = path.join(dir, name);
  return statSync(full).isDirectory() ? walk(full) : [full];
});
const files = [...walk(path.join(root, 'src')), ...walk(path.join(root, 'public'))]
  .filter((f) => /\.(astro|mdx?|ts|tsx|js|json|txt|html)$/.test(f));

const rules = [
  ['links to the application', /nomadtaxhelp\.com\/application|\]\(\/application\)|href="\/application/],
  ['offers a free call', /free (service |clarity |managed-service |strategy )?(call|consultation)/i],
  ['asks people to apply for a call', /apply (for a call|to speak|first, then)/i],
];
let failed = false;
for (const [label, pattern] of rules) {
  const hits = files.filter((f) => pattern.test(readFileSync(f, 'utf8'))).map((f) => path.relative(root, f));
  if (hits.length) { failed = true; console.error(`FAIL: ${label}:\n  ${hits.join('\n  ')}`); }
}
if (failed) process.exit(1);
console.log(`PASS: ${files.length} blog files, no free call and no application link`);
