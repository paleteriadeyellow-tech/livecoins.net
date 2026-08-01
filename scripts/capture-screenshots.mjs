import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'screenshots');
const base = process.env.CAPTURE_BASE || 'http://localhost:3000';

const shots = [
  { file: 'overlay-giftvs.png', url: '/giftvs.html?embed=1', viewport: { width: 540, height: 720 } },
  { file: 'overlay-winscounter.png', url: '/contador-wins.html?embed=1', viewport: { width: 540, height: 720 } },
  { file: 'overlay-joinlive.png', url: '/join-live.html?embed=1', viewport: { width: 540, height: 720 } },
  { file: 'overlay-meta.png', url: '/meta.html?embed=1', viewport: { width: 540, height: 720 } },
  { file: 'overlay-batallalikes.png', url: '/batallalikes.html?embed=1', viewport: { width: 540, height: 720 } },
  { file: 'login.png', url: '/login.html', viewport: { width: 1280, height: 800 } },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

for (const shot of shots) {
  try {
    await page.setViewportSize(shot.viewport);
    await page.goto(`${base}${shot.url}`, { waitUntil: 'networkidle', timeout: 20000 });
    await page.waitForTimeout(1200);
    await page.screenshot({
      path: path.join(outDir, shot.file),
      type: 'png',
      fullPage: shot.file === 'login.png',
    });
    console.log('OK', shot.file);
  } catch (err) {
    console.warn('SKIP', shot.file, err instanceof Error ? err.message : err);
  }
}

await browser.close();
console.log('Done ->', outDir);
