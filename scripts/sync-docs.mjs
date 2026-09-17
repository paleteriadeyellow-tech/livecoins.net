import { copyFile, mkdir, readdir, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const docs = path.join(root, 'docs');
const distAssets = path.join(dist, 'assets');
const docsAssets = path.join(docs, 'assets');

await mkdir(docsAssets, { recursive: true });
await copyFile(path.join(dist, 'index.html'), path.join(docs, 'index.html'));
await copyFile(path.join(dist, 'index.html'), path.join(docs, '404.html'));

const hashed = (await readdir(distAssets)).filter((name) => /^index-.*\.(js|css)$/.test(name));
if (hashed.length === 0) {
  throw new Error('No hashed index assets found in dist/assets');
}

for (const name of hashed) {
  await copyFile(path.join(distAssets, name), path.join(docsAssets, name));
}

const keep = new Set(hashed);
const stale = (await readdir(docsAssets)).filter(
  (name) => /^index-.*\.(js|css)$/.test(name) && !keep.has(name),
);
for (const name of stale) {
  await unlink(path.join(docsAssets, name));
}

console.log('docs synced:', hashed.join(', '));
if (stale.length) console.log('removed stale:', stale.join(', '));
