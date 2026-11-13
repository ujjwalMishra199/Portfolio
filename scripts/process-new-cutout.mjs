import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadedCutout = 'C:/Users/ujjwal mishra/.gemini/antigravity/brain/99245bf8-d08c-4e28-a72d-89263aada694/.user_uploaded/media_1794515040014_3bb31e10.webp';
const outDir = path.join(__dirname, '../public/images');
const out = (f) => path.join(outDir, f);

console.log('Processing uploaded cutout...');

// 1. ujjwal-cutout.webp (original/1148px)
await sharp(uploadedCutout)
  .resize({ width: 1148, fit: 'inside' })
  .webp({ quality: 95, effort: 6 })
  .toFile(out('ujjwal-cutout.webp'));

// 2. ujjwal-cutout-sm.webp (720px wide)
await sharp(uploadedCutout)
  .resize({ width: 720, fit: 'inside' })
  .webp({ quality: 90, effort: 6 })
  .toFile(out('ujjwal-cutout-sm.webp'));

// 3. ujjwal-avatar.webp (512x512 circular-ready with gradient dark bg)
// First crop face from cutout
const faceBuf = await sharp(uploadedCutout)
  .extract({ left: 180, top: 20, width: 620, height: 620 })
  .resize(512, 512)
  .webp({ quality: 92 })
  .toFile(out('ujjwal-avatar.webp'));

// 4. Update public/icon.png and public/apple-icon.png
await sharp(uploadedCutout)
  .extract({ left: 180, top: 20, width: 620, height: 620 })
  .resize(64, 64)
  .png()
  .toFile(path.join(__dirname, '../public/icon.png'));

await sharp(uploadedCutout)
  .extract({ left: 180, top: 20, width: 620, height: 620 })
  .resize(180, 180)
  .png()
  .toFile(path.join(__dirname, '../public/apple-icon.png'));

// 5. ujjwal-og.png: 1200x630 with --bg background, cyan glow, cutout on right, serif name on left
const photoForOg = await sharp(uploadedCutout)
  .resize({ height: 600, fit: 'inside' })
  .toBuffer();
const ogPhotoMeta = await sharp(photoForOg).metadata();

const ogSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#5cc8ff" stop-opacity="0.32" />
      <stop offset="100%" stop-color="#05070a" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#5cc8ff" />
      <stop offset="100%" stop-color="#8b7bff" />
    </linearGradient>
  </defs>
  <!-- Background -->
  <rect width="1200" height="630" fill="#05070a" />
  <!-- Cyan glow behind person -->
  <circle cx="950" cy="350" r="320" fill="url(#cyanGlow)" />
  <!-- Text on left -->
  <text x="80" y="160" font-family="Courier New, monospace" font-size="12" letter-spacing="3" fill="#5cc8ff" font-weight="bold">BACKEND. FULL STACK. BUILDER.</text>
  <text x="80" y="270" font-family="Georgia, serif" font-size="82" font-weight="bold" fill="#f3f5f7">Ujjwal <tspan font-style="italic" fill="url(#accentGrad)">Mishra</tspan></text>
  <text x="80" y="340" font-family="Arial, sans-serif" font-size="24" fill="#a3adb8">Full Stack &amp; Backend Developer</text>
  <text x="80" y="380" font-family="Arial, sans-serif" font-size="16" fill="#64748b">Gurgaon, Haryana, India · Oracle Certified GenAI</text>
  <!-- Pill badge -->
  <rect x="80" y="440" width="260" height="42" rx="21" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
  <circle cx="106" cy="461" r="4" fill="#34d399" />
  <text x="122" y="466" font-family="Courier New, monospace" font-size="12" fill="#f3f5f7" letter-spacing="1">AVAILABLE FOR ROLES</text>
</svg>`;

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 5, g: 7, b: 10, alpha: 1 }
  }
})
  .composite([
    { input: Buffer.from(ogSvg), top: 0, left: 0 },
    { input: photoForOg, top: 30, left: 1200 - ogPhotoMeta.width - 40 }
  ])
  .png()
  .toFile(out('ujjwal-og.png'));

console.log('✅ Generated ujjwal-cutout.webp, ujjwal-cutout-sm.webp, ujjwal-avatar.webp, ujjwal-og.png, icon.png, apple-icon.png');

