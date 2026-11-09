const sharp = require('sharp');
const fs = require('fs');

const src = 'C:/Users/prema.PRATYUSH/.gemini/antigravity/brain/dc84be5c-b4b6-44a7-a680-f778823328a2/.user_uploaded/media_1794234369585_99c5ef87.jpg';

async function generate() {
  const maskSvg = Buffer.from('<svg width="1024" height="1024"><circle cx="512" cy="512" r="500" fill="white"/></svg>');

  const transparentSeal = await sharp(src)
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/seal.png', transparentSeal);
  console.log('Saved public/seal.png');

  // Next.js App Router root app/icon.png
  await sharp(transparentSeal).resize(192, 192).png().toFile('app/icon.png');
  console.log('Saved app/icon.png');

  // Next.js App Router app/apple-icon.png
  await sharp(transparentSeal).resize(180, 180).png().toFile('app/apple-icon.png');
  console.log('Saved app/apple-icon.png');

  // Standard public favicons
  await sharp(transparentSeal).resize(32, 32).png().toFile('public/favicon.png');
  console.log('Saved public/favicon.png');

  await sharp(transparentSeal).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  console.log('Saved public/apple-touch-icon.png');

  await sharp(transparentSeal).resize(32, 32).toFile('public/favicon.ico');
  console.log('Saved public/favicon.ico');
}

generate().catch(console.error);
