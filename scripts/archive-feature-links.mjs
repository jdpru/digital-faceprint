#!/usr/bin/env node

/**
 * Preserve a point-in-time copy of every externally linked page in the project
 * features. Snapshots are intentionally kept outside src/ so they are versioned
 * with the site without becoming part of its public build.
 */
import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const projectDir = 'src/content/projects';
const archiveDir = 'archive/feature-link-snapshots';
const capturedAt = new Date().toISOString();
const captureDate = capturedAt.slice(0, 10);
const captureDir = join(archiveDir, captureDate);
const urlPattern = /https?:\/\/[^)\]"\s]+/g;

function snapshotName(url) {
  const parsed = new URL(url);
  const readable = `${parsed.hostname}${parsed.pathname}`
    .replace(/^www\./, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 72);
  const digest = createHash('sha256').update(url).digest('hex').slice(0, 10);
  return `${readable || 'page'}-${digest}`.toLowerCase();
}

async function featureLinks() {
  const files = (await readdir(projectDir)).filter((file) => file.endsWith('.mdx'));
  const links = new Map();

  for (const file of files) {
    const body = await readFile(join(projectDir, file), 'utf8');
    for (const url of body.match(urlPattern) ?? []) {
      const sourceFiles = links.get(url) ?? new Set();
      sourceFiles.add(join(projectDir, file));
      links.set(url, sourceFiles);
    }
  }

  return links;
}

async function snapshot(url, sourceFiles) {
  const directory = join(captureDir, snapshotName(url));
  await mkdir(directory, { recursive: true });

  const response = await fetch(url, {
    redirect: 'follow',
    headers: { 'user-agent': 'digital-faceprint-feature-link-archiver/1.0' },
  });
  const bytes = Buffer.from(await response.arrayBuffer());
  const contentType = response.headers.get('content-type') ?? 'application/octet-stream';
  const extension = contentType.includes('html') ? 'html' : 'bin';
  const filename = `response.${extension}`;
  const checksum = createHash('sha256').update(bytes).digest('hex');
  const metadata = {
    originalUrl: url,
    finalUrl: response.url,
    capturedAt,
    status: response.status,
    contentType,
    contentLength: bytes.length,
    sha256: checksum,
    sourceFiles: [...sourceFiles].sort(),
    snapshot: filename,
  };

  await writeFile(join(directory, filename), bytes);
  await writeFile(join(directory, 'metadata.json'), `${JSON.stringify(metadata, null, 2)}\n`);
  return { ...metadata, directory };
}

const links = await featureLinks();
await mkdir(captureDir, { recursive: true });

const results = [];
for (const [url, sourceFiles] of [...links].sort(([a], [b]) => a.localeCompare(b))) {
  try {
    results.push({ ok: true, ...(await snapshot(url, sourceFiles)) });
  } catch (error) {
    results.push({
      ok: false,
      originalUrl: url,
      capturedAt,
      sourceFiles: [...sourceFiles].sort(),
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

const archiveIndex = {
  capturedAt,
  snapshotDirectory: captureDate,
  pages: results,
};
await writeFile(join(captureDir, 'index.json'), `${JSON.stringify(archiveIndex, null, 2)}\n`);

const manifest = [
  '# Feature link snapshot manifest',
  '',
  `Latest capture: [${captureDate}](${captureDate}/index.json) (${capturedAt}).`,
  '',
  '| Original page | Local snapshot | Source feature |',
  '| --- | --- | --- |',
  ...results.map((result) => {
    if (!result.ok) {
      return `| ${result.originalUrl} | Capture failed: ${result.error} | ${result.sourceFiles.join(', ')} |`;
    }
    return `| ${result.originalUrl} | [${result.snapshot}](${captureDate}/${basename(result.directory)}/${result.snapshot}) | ${result.sourceFiles.join(', ')} |`;
  }),
  '',
].join('\n');
await writeFile(join(archiveDir, 'MANIFEST.md'), manifest);

const succeeded = results.filter((result) => result.ok).length;
console.log(`Archived ${succeeded}/${results.length} feature links in ${captureDir}.`);
if (succeeded !== results.length) process.exitCode = 1;
