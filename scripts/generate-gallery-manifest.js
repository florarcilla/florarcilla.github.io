#!/usr/bin/env node
/**
 * scripts/generate-gallery-manifest.js
 *
 * Scans src/assets/gallery/ for media files and writes
 * src/assets/gallery/manifest.json so the Angular app can discover
 * gallery items without any server-side filesystem access.
 *
 * Expected filename format: {type}_{month}_{year}[_{sequence}].{ext}
 *
 *   Single image for a period:
 *     realestate_june_2025.jpg
 *
 *   Multiple images for the same type / month / year — append a sequence
 *   number or any descriptive label after the year:
 *     insurance_march_2024_01.jpg
 *     insurance_march_2024_02.jpg
 *     insurance_march_2024_award_ceremony.jpg
 *
 *   Supported types  : general | insurance | realestate
 *   Supported months : january … december (full English name)
 *   Supported media  : jpg jpeg png gif webp avif mp4 webm mov avi ogg
 *
 * Run automatically via npm "prebuild" / "prestart" hooks.
 */

const fs   = require('fs');
const path = require('path');

const GALLERY_DIR    = path.join(__dirname, '..', 'src', 'assets', 'gallery');
const MANIFEST_PATH  = path.join(GALLERY_DIR, 'manifest.json');

const MEDIA_EXTS = new Set([
  '.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif',
  '.mp4', '.webm', '.mov', '.avi', '.ogg',
]);

// Ensure directory exists
fs.mkdirSync(GALLERY_DIR, { recursive: true });

// Collect media files (exclude manifest itself)
let files = [];
if (fs.existsSync(GALLERY_DIR)) {
  files = fs.readdirSync(GALLERY_DIR)
    .filter(name => {
      if (name === 'manifest.json') return false;
      const ext = path.extname(name).toLowerCase();
      return MEDIA_EXTS.has(ext);
    })
    .sort();                 // alphabetical — parser uses month/year for chronological order
}

fs.writeFileSync(MANIFEST_PATH, JSON.stringify({ files }, null, 2), 'utf8');

const count = files.length;
console.log(`[gallery-manifest] ${count} file${count !== 1 ? 's' : ''} → ${MANIFEST_PATH}`);
if (count === 0) {
  console.log(`[gallery-manifest] Tip: place images in src/assets/gallery/`);
  console.log(`[gallery-manifest]      Single : insurance_june_2025.jpg`);
  console.log(`[gallery-manifest]      Multiple for same month: insurance_june_2025_01.jpg, insurance_june_2025_02.jpg`);
}
