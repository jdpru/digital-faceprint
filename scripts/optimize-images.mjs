// Optimize images in public/. Re-runnable: files are only replaced when the
// re-encode saves at least 20%, so a second pass is a no-op.
// Usage: node scripts/optimize-images.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const MIN_SAVINGS = 0.2;

const rows = [];

function record(file, before, after, action) {
  rows.push({ file: path.relative(PUBLIC, file), before, after, action });
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

// Write next to the original; only swap in if it saves >= MIN_SAVINGS.
async function optimizeInPlace(file, transform) {
  const before = fs.statSync(file).size;
  const tmp = `${file}.tmp`;
  await transform(sharp(file)).toFile(tmp);
  const after = fs.statSync(tmp).size;
  if (after <= before * (1 - MIN_SAVINGS)) {
    fs.renameSync(tmp, file);
    record(file, before, after, 'replaced');
  } else {
    fs.unlinkSync(tmp);
    record(file, before, before, 'kept');
  }
}

// Mean absolute pixel error between two encoded images (posterization check).
async function pixelError(a, b) {
  const [ra, rb] = await Promise.all([
    sharp(a).ensureAlpha().raw().toBuffer(),
    sharp(b).ensureAlpha().raw().toBuffer(),
  ]);
  if (ra.length !== rb.length) return Infinity;
  let sum = 0;
  for (let i = 0; i < ra.length; i++) sum += Math.abs(ra[i] - rb[i]);
  return sum / ra.length;
}

async function portrait() {
  const src = path.join(PUBLIC, 'portrait.png');
  const out = path.join(PUBLIC, 'portrait.jpg');
  if (!fs.existsSync(src)) return; // already converted
  const before = fs.statSync(src).size;
  const tmp = `${out}.tmp`;
  await sharp(src)
    .resize(480, 480, { fit: 'cover' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(tmp);
  fs.renameSync(tmp, out);
  fs.unlinkSync(src);
  record(out, before, fs.statSync(out).size, 'portrait.png -> portrait.jpg');
}

async function gallery() {
  const dir = path.join(PUBLIC, 'gallery');
  if (!fs.existsSync(dir)) return;
  for (const file of walk(dir)) {
    if (!file.endsWith('.jpg')) continue;
    if (file.endsWith(path.join('sf', 'golden-gate.jpg'))) continue; // already tiny
    const isThumb = file.endsWith('-thumb.jpg');
    const max = isThumb ? 510 : 1400;
    const quality = isThumb ? 80 : 78;
    await optimizeInPlace(file, (img) =>
      img
        .resize(max, max, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality, mozjpeg: true })
    );
  }
}

async function covers() {
  const dir = path.join(PUBLIC, 'covers');
  if (!fs.existsSync(dir)) return;
  for (const file of walk(dir)) {
    if (!file.endsWith('.png')) continue;
    const before = fs.statSync(file).size;
    const resize = (img) =>
      img.resize(1380, 900, { fit: 'inside', withoutEnlargement: true });
    const tmpPalette = `${file}.palette.tmp`;
    const tmpPlain = `${file}.plain.tmp`;
    await resize(sharp(file))
      .png({ compressionLevel: 9, palette: true, quality: 92 })
      .toFile(tmpPalette);
    await resize(sharp(file)).png({ compressionLevel: 9 }).toFile(tmpPlain);
    // Palette quantization can posterize plots; fall back if it strays too far.
    const err = await pixelError(tmpPalette, tmpPlain);
    const posterized = err > 2;
    const tmp = posterized ? tmpPlain : tmpPalette;
    fs.unlinkSync(posterized ? tmpPalette : tmpPlain);
    const after = fs.statSync(tmp).size;
    if (after <= before * (1 - MIN_SAVINGS)) {
      fs.renameSync(tmp, file);
      record(file, before, after, posterized ? 'replaced (plain png)' : 'replaced (palette)');
    } else {
      fs.unlinkSync(tmp);
      record(file, before, before, 'kept');
    }
  }
}

await portrait();
await gallery();
await covers();

const w = Math.max(4, ...rows.map((r) => r.file.length));
const kb = (n) => `${(n / 1024).toFixed(1)} KB`.padStart(10);
console.log(`${'file'.padEnd(w)}  ${'before'.padStart(10)}  ${'after'.padStart(10)}  action`);
let beforeTotal = 0;
let afterTotal = 0;
for (const r of rows) {
  beforeTotal += r.before;
  afterTotal += r.after;
  console.log(`${r.file.padEnd(w)}  ${kb(r.before)}  ${kb(r.after)}  ${r.action}`);
}
console.log(`${'total'.padEnd(w)}  ${kb(beforeTotal)}  ${kb(afterTotal)}`);
