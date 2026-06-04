#!/usr/bin/env node
/**
 * scripts/generate-webp.js
 *
 * Converts key images in src/assets/images/ to WebP format.
 * WebP is ~30% smaller than JPEG and served via <picture> elements.
 *
 * Requires: npm install --save-dev sharp
 *
 * Usage:
 *   node scripts/generate-webp.js               (converts all JPEG/PNG in assets/images)
 *   node scripts/generate-webp.js flor_banner   (converts a single file by basename)
 *
 * Output:  src/assets/images/<filename>.webp (alongside the original)
 *
 * Run this script whenever you add or update an image.
 * The Angular <picture> elements in home.component.html automatically serve WebP
 * to supporting browsers and fall back to JPEG/PNG for others.
 */

const path  = require('path');
const fs    = require('fs');

const SRC_DIR = path.join(__dirname, '..', 'src', 'assets', 'images');
const EXTS    = new Set(['.jpg', '.jpeg', '.png']);

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch {
  console.warn(
    '\n[generate-webp] sharp is not installed.\n' +
    'Run:  npm install --save-dev sharp\n' +
    'then re-run this script to generate WebP images.\n'
  );
  process.exit(0);
}

async function convertFile(filePath) {
  const ext    = path.extname(filePath).toLowerCase();
  const outPath = filePath.replace(/\.[^.]+$/, '.webp');

  if (fs.existsSync(outPath)) {
    const srcStat = fs.statSync(filePath);
    const outStat = fs.statSync(outPath);
    if (outStat.mtimeMs >= srcStat.mtimeMs) {
      console.log(`[skip] ${path.basename(outPath)} — already up to date`);
      return;
    }
  }

  await sharp(filePath)
    .webp({ quality: 82, effort: 4 })
    .toFile(outPath);

  const srcKB = (fs.statSync(filePath).size  / 1024).toFixed(0);
  const outKB = (fs.statSync(outPath).size   / 1024).toFixed(0);
  console.log(`[webp] ${path.basename(filePath)} (${srcKB}kB) -> ${path.basename(outPath)} (${outKB}kB)`);
}

async function main() {
  const filter = process.argv[2]; // optional basename filter

  const files = fs.readdirSync(SRC_DIR)
    .filter(f => EXTS.has(path.extname(f).toLowerCase()))
    .filter(f => !filter || path.basename(f, path.extname(f)) === filter)
    .map(f => path.join(SRC_DIR, f));

  if (files.length === 0) {
    console.log('[generate-webp] No matching images found in', SRC_DIR);
    return;
  }

  for (const f of files) {
    await convertFile(f);
  }
  console.log(`[generate-webp] Done. ${files.length} file(s) processed.`);
}

main().catch(err => { console.error(err); process.exit(1); });
