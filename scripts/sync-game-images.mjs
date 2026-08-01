import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dest = path.join(__dirname, '..', 'public', 'img');

const src2 =
  process.env.HOKEY_IMG_SRC ||
  path.join('C:', 'Users', 'Admin', 'Desktop', 'hokey', 'desktop', 'dist2', 'win-unpacked', 'resources', 'app-server', 'public', 'img');
const src3 =
  process.env.HOKEY_IMG_SRC3 ||
  path.join('C:', 'Users', 'Admin', 'Desktop', 'hokey', 'desktop', 'dist3', 'win-unpacked', 'resources', 'app-server', 'public', 'img');

const files = [
  'minecraft-card.jpg', 'minecraft-card.webp',
  'mcparkour-card.jpg', 'mcparkour-card.webp',
  'mckoth-card.jpg', 'mckoth-card.webp',
  'mcfarm-card.jpg', 'mcfarm-card.webp',
  'mcshooter-card.png',
  'bedrock-card.jpg', 'bedrock-card.webp',
  'sandbox-card.jpg', 'sandbox-card.webp',
  'roblox.png', 'roblox3.png',
  'mariobros-card.jpg', 'mariobros-card.webp',
  'smb3-card.png', 'mari0-card.png',
  'plantasvszombies-card.jpg', 'plantasvszombies-card.webp',
  'pvzhybrid-card.jpg', 'pvzhybrid-card.webp',
  'repo-card.jpg', 'repo-card.webp',
  'l4d2-card.png',
  'ctr-card.jpg', 'ctr-card.webp',
  'metalslug.png',
];

const gdashFiles = ['gdash-card.jpg', 'gdash-card.webp'];

await mkdir(path.join(dest, 'gdash'), { recursive: true });

let ok = 0;
for (const f of files) {
  const from = path.join(src2, f);
  await copyFile(from, path.join(dest, f));
  ok += 1;
  console.log('OK', f);
}
for (const f of gdashFiles) {
  const from = path.join(src3, 'gdash', f);
  await copyFile(from, path.join(dest, 'gdash', f));
  ok += 1;
  console.log('OK gdash/' + f);
}

console.log(`Synced ${ok} images -> ${dest}`);
