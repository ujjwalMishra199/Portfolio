import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, '../public/images/source/ujjwal-headshot.png');
const outDir = path.join(__dirname, '../public/images');
const appDir = path.join(__dirname, '../src/app');
const out = (f) => path.join(outDir, f);

console.log('Reading source:', src);
const meta = await sharp(src).metadata();
console.log(`Source: ${meta.width}x${meta.height} ${meta.format}`);

// 1. Hero WebP — full photo, 1290px wide
await sharp(src)
  .resize({ width: 1290 })
  .webp({ quality: 88 })
  .toFile(out('ujjwal-hero.webp'));
console.log('✓ ujjwal-hero.webp');

// 2. Hero SM WebP — 720px for mobile
await sharp(src)
  .resize({ width: 720 })
  .webp({ quality: 85 })
  .toFile(out('ujjwal-hero-sm.webp'));
console.log('✓ ujjwal-hero-sm.webp');

// 3. Avatar 512x512 — face crop scaled for 1024x967 source
// Face center is roughly x:170..820, y:0..540 → 650x540 → crop to 540x540 from x:215
await sharp(src)
  .extract({ left: 215, top: 0, width: 540, height: 540 })
  .resize(512, 512)
  .webp({ quality: 88 })
  .toFile(out('ujjwal-avatar.webp'));
console.log('✓ ujjwal-avatar.webp');

// 4. App icons from avatar crop
const avatarBuf = await sharp(src)
  .extract({ left: 215, top: 0, width: 540, height: 540 })
  .toBuffer();

await sharp(avatarBuf)
  .resize(64, 64)
  .png()
  .toFile(path.join(appDir, 'icon.png'));
console.log('✓ src/app/icon.png (64x64)');

await sharp(avatarBuf)
  .resize(180, 180)
  .png()
  .toFile(path.join(appDir, 'apple-icon.png'));
console.log('✓ src/app/apple-icon.png (180x180)');

// 5. OG image 1200x630
// Resize photo to fit 630px height, place on right side
const photoForOg = await sharp(src)
  .resize({ height: 630 })
  .toBuffer();
const photoMeta = await sharp(photoForOg).metadata();
console.log(`OG photo resized: ${photoMeta.width}x${photoMeta.height}`);

const leftX = Math.max(0, 1200 - photoMeta.width);

// SVG text overlay for left side
const svgText = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#5cc8ff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b7bff;stop-opacity:1" />
    </linearGradient>
  </defs>
  <text x="60" y="240" font-family="Georgia,Times New Roman,serif" font-size="68" font-style="italic" font-weight="700" fill="#f3f5f7">Ujjwal</text>
  <text x="60" y="318" font-family="Georgia,Times New Roman,serif" font-size="68" font-style="italic" font-weight="700" fill="#f3f5f7">Mishra</text>
  <rect x="60" y="345" width="80" height="2" fill="url(#textGrad)" />
  <text x="60" y="385" font-family="Arial,Helvetica,sans-serif" font-size="20" fill="#a3adb8">Full Stack &amp; Backend Developer</text>
  <text x="60" y="415" font-family="Arial,Helvetica,sans-serif" font-size="16" fill="#5cc8ff">Oracle Certified GenAI Professional</text>
  <text x="60" y="560" font-family="Courier New,monospace" font-size="13" letter-spacing="3" fill="#5a6478">GURGAON, INDIA</text>
</svg>`;

// Dark gradient overlay on the left part of photo to let text be legible
const gradientOverlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#05070a;stop-opacity:1" />
      <stop offset="45%" style="stop-color:#05070a;stop-opacity:0.85" />
      <stop offset="70%" style="stop-color:#05070a;stop-opacity:0.1" />
      <stop offset="100%" style="stop-color:#05070a;stop-opacity:0" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#fade)" />
</svg>`;

await sharp({ create: { width: 1200, height: 630, channels: 3, background: { r: 5, g: 7, b: 10 } } })
  .composite([
    { input: photoForOg, left: leftX, top: 0 },
    { input: Buffer.from(gradientOverlay), left: 0, top: 0 },
    { input: Buffer.from(svgText), left: 0, top: 0 },
  ])
  .png()
  .toFile(out('ujjwal-og.png'));
console.log('✓ ujjwal-og.png (1200x630)');

// Print file sizes
const files = [
  'ujjwal-hero.webp', 'ujjwal-hero-sm.webp', 'ujjwal-avatar.webp', 'ujjwal-og.png'
];
console.log('\n--- Output sizes ---');
for (const f of files) {
  const stats = fs.statSync(out(f));
  console.log(`  ${f}: ${(stats.size / 1024).toFixed(1)} KB`);
}
const icon64 = fs.statSync(path.join(appDir, 'icon.png'));
const icon180 = fs.statSync(path.join(appDir, 'apple-icon.png'));
console.log(`  icon.png: ${(icon64.size / 1024).toFixed(1)} KB`);
console.log(`  apple-icon.png: ${(icon180.size / 1024).toFixed(1)} KB`);
console.log('\n✅ All assets generated successfully!');
