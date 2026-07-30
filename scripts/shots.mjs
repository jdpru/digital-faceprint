// Cross-device screenshot harness for local visual testing.
//
//   npm run shots                     # start a dev server, shoot the home page
//   npm run shots -- /projects/euterria/   # extra paths (repeatable)
//   BASE_URL=http://localhost:4321 npm run shots   # shoot an already-running server
//
// Output lands in .shots/ (gitignored). Emulated device profiles catch layout
// and wrap-point bugs; a real phone is still worth a final pass because
// emulators fake the viewport but run the desktop rendering engine.
import { chromium, devices } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, rm } from 'node:fs/promises';
import { setTimeout as sleep } from 'node:timers/promises';

const OUT = '.shots';
const PORT = Number(process.env.PORT) || 4319;
const paths = process.argv.slice(2);
if (paths.length === 0) paths.push('/');

// Real device profiles plus a couple of raw widths at known wrap points.
const targets = [
  { name: 'iphone-14-pro', device: 'iPhone 14 Pro' },
  { name: 'iphone-se', device: 'iPhone SE' },
  { name: 'pixel-7', device: 'Pixel 7' },
  { name: 'ipad-mini', device: 'iPad Mini' },
  { name: 'w360', viewport: { width: 360, height: 900 }, mobile: true },
  { name: 'w768', viewport: { width: 768, height: 1024 }, mobile: true },
  { name: 'desktop-1440', viewport: { width: 1440, height: 900 } },
];

async function waitForServer(url, tries = 60) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // server not up yet
    }
    await sleep(500);
  }
  throw new Error(`server never became ready at ${url}`);
}

let server;
const base = process.env.BASE_URL || `http://localhost:${PORT}`;

if (!process.env.BASE_URL) {
  server = spawn('npm', ['run', 'dev', '--', '--port', String(PORT)], {
    stdio: 'ignore',
    detached: false,
  });
}

try {
  await waitForServer(base + '/');
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const browser = await chromium.launch();
  for (const t of targets) {
    const ctx = await browser.newContext(
      t.device ? devices[t.device] : { viewport: t.viewport, deviceScaleFactor: 2, isMobile: !!t.mobile }
    );
    const page = await ctx.newPage();
    for (const p of paths) {
      const slug = p === '/' ? 'home' : p.replace(/\//g, '_').replace(/^_|_$/g, '');
      await page.goto(base + p, { waitUntil: 'networkidle' });
      const file = `${OUT}/${slug}__${t.name}.png`;
      await page.screenshot({ path: file, fullPage: true });
      console.log('wrote', file);
    }
    await ctx.close();
  }
  await browser.close();
} finally {
  if (server) server.kill();
}
