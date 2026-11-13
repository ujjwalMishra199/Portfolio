// Generates ujjwal-cutout.webp (1148x1180-equivalent proportional) and ujjwal-cutout-sm.webp (720px wide)
// from the existing studio headshot source.
// Note: True background removal requires a dedicated AI tool; we output the full-colour photo.
// The CSS mask-image on the wrapper handles blending into the dark background.

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, '../public/images/source/ujjwal-headshot.png');
const out = (f) => path.join(__dirname, '../public/images', f);

const meta = await sharp(src).metadata();
console.log(`Source: ${meta.width}x${meta.height} ${meta.format}`);

// ujjwal-cutout.webp — full size, 1148px wide (match spec), quality 90
// Add extra canvas height below so full torso shows
await sharp(src)
  .resize({ width: 1148, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .webp({ quality: 90 })
  .toFile(out('ujjwal-cutout.webp'));
const s1 = fs.statSync(out('ujjwal-cutout.webp'));
console.log(`✓ ujjwal-cutout.webp  ${(s1.size/1024).toFixed(1)} KB`);

// ujjwal-cutout-sm.webp — 720px wide for mobile
await sharp(src)
  .resize({ width: 720, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .webp({ quality: 85 })
  .toFile(out('ujjwal-cutout-sm.webp'));
const s2 = fs.statSync(out('ujjwal-cutout-sm.webp'));
console.log(`✓ ujjwal-cutout-sm.webp  ${(s2.size/1024).toFixed(1)} KB`);

console.log('\n✅ Cutout assets ready!');

