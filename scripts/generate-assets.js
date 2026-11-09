const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'public', 'vox');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function generateAssets() {
  console.log('Generating Vox analog assets...');

  // 1. highlighter.webp (Organic broad marker chisel swipe, black on transparent)
  const highlighterSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="600" height="120" viewBox="0 0 600 120">
    <path d="M 12,24 
             C 45,18 120,28 250,22 
             C 380,16 510,25 588,20 
             C 596,22 600,35 595,50 
             C 598,72 594,92 585,102 
             C 530,96 410,104 280,98 
             C 150,102 60,94 15,100 
             C 5,96 2,82 6,65 
             C 1,48 5,32 12,24 Z" 
          fill="#000000" />
    <path d="M 8,32 C 120,26 350,30 592,26 C 588,55 592,75 586,92 C 450,88 200,94 10,90 Z" fill="#000000" opacity="0.95"/>
  </svg>`;
  await sharp(Buffer.from(highlighterSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'highlighter.webp'));

  // 2. circle.webp (Hand-drawn, imperfect loop circle/oval marker outline, black on transparent)
  const circleSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">
    <path d="M 70,120 
             C 65,60 140,25 220,25 
             C 310,25 375,65 375,125 
             C 375,185 295,220 200,218 
             C 110,215 45,175 50,115 
             C 54,65 130,35 240,30
             C 320,26 365,65 362,110" 
          fill="none" 
          stroke="#000000" 
          stroke-width="16" 
          stroke-linecap="round" 
          stroke-linejoin="round" />
    <path d="M 68,125 C 65,75 145,35 230,32 C 305,28 368,70 365,120 C 362,175 285,212 195,212 C 115,212 55,170 58,122" 
          fill="none" 
          stroke="#000000" 
          stroke-width="12" 
          stroke-linecap="round" 
          opacity="0.9" />
  </svg>`;
  await sharp(Buffer.from(circleSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'circle.webp'));

  // 3. arrow.webp (Hand-drawn sketchy annotation arrow, black on transparent)
  const arrowSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
    <path d="M 30,150 
             C 80,165 160,155 220,110 
             C 250,85 270,55 280,35" 
          fill="none" 
          stroke="#000000" 
          stroke-width="14" 
          stroke-linecap="round" />
    <path d="M 235,32 
             C 255,30 275,32 282,34 
             C 280,50 275,70 268,85" 
          fill="none" 
          stroke="#000000" 
          stroke-width="14" 
          stroke-linecap="round" 
          stroke-linejoin="round" />
  </svg>`;
  await sharp(Buffer.from(arrowSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'arrow.webp'));

  // 4. torn.webp (Jagged torn paper edge mask, black on transparent)
  const tornSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="200" viewBox="0 0 800 200">
    <path d="M 0,0 L 800,0 L 800,140 
             L 780,145 L 760,135 L 740,150 L 710,138 L 685,152 L 660,142 
             L 630,155 L 600,138 L 570,149 L 540,140 L 515,156 L 490,139 
             L 460,152 L 430,141 L 400,158 L 370,139 L 340,151 L 310,142 
             L 280,157 L 250,141 L 220,153 L 190,138 L 160,150 L 130,143 
             L 100,155 L 70,140 L 40,152 L 15,138 L 0,148 Z" 
          fill="#000000" />
  </svg>`;
  await sharp(Buffer.from(tornSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'torn.webp'));

  // 5. tape-1.webp & tape-2.webp (Semi-translucent beige masking tape)
  const tape1Svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="90" viewBox="0 0 300 90">
    <defs>
      <filter id="tapeRough">
        <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="rough" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.95   0 0 0 0 0.91   0 0 0 0 0.78  0 0 0 0.72 0"/>
      </filter>
    </defs>
    <!-- Base Tape Body with jagged torn ends -->
    <path d="M 12,8 
             L 288,8 
             L 295,20 L 288,32 L 296,48 L 289,62 L 297,76 L 288,82 
             L 12,82 
             L 4,74 L 11,60 L 5,46 L 12,32 L 6,18 Z" 
          fill="#f6eedb" 
          fill-opacity="0.82" 
          stroke="#e2d6be" 
          stroke-width="1.5" />
    <path d="M 18,12 L 282,12 L 282,78 L 18,78 Z" fill="#ffffff" fill-opacity="0.15" />
  </svg>`;
  await sharp(Buffer.from(tape1Svg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'tape-1.webp'));

  const tape2Svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="90" viewBox="0 0 300 90">
    <path d="M 8,14 
             L 292,6 
             L 298,22 L 290,36 L 299,50 L 291,66 L 298,78 L 288,84 
             L 10,88 
             L 3,76 L 12,62 L 4,48 L 11,34 L 5,20 Z" 
          fill="#fbf4e2" 
          fill-opacity="0.85" 
          stroke="#dfd2b5" 
          stroke-width="1.5" />
  </svg>`;
  await sharp(Buffer.from(tape2Svg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'tape-2.webp'));

  // 6. pin.webp (Pushpin / thumbtack)
  const pinSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
    <defs>
      <radialGradient id="pinGrad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#ff7b72" />
        <stop offset="45%" stop-color="#e63946" />
        <stop offset="100%" stop-color="#9d0208" />
      </radialGradient>
      <radialGradient id="pinHighlight" cx="35%" cy="30%" r="40%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </radialGradient>
      <filter id="pinShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="4" dy="8" stdDeviation="5" flood-color="#000000" flood-opacity="0.4" />
      </filter>
    </defs>
    <!-- Shadow & Pin Base -->
    <circle cx="56" cy="56" r="32" fill="url(#pinGrad)" filter="url(#pinShadow)" />
    <!-- Metallic Rim -->
    <circle cx="56" cy="56" r="28" fill="none" stroke="#670000" stroke-width="2" opacity="0.4" />
    <circle cx="56" cy="56" r="18" fill="url(#pinGrad)" />
    <!-- 3D Specular Highlight -->
    <circle cx="50" cy="48" r="14" fill="url(#pinHighlight)" />
    <circle cx="56" cy="56" r="6" fill="#ffffff" opacity="0.5" />
  </svg>`;
  await sharp(Buffer.from(pinSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'pin.webp'));

  // 7. avatar-halftone.webp (Tactile halftone avatar)
  const avatarSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">
    <rect width="320" height="320" fill="#f4ebd9" />
    <pattern id="halftonePattern" width="10" height="10" patternUnits="userSpaceOnUse">
      <circle cx="5" cy="5" r="3" fill="#1b1c1d" />
    </pattern>
    <circle cx="160" cy="160" r="130" fill="#e2d4bd" />
    <!-- Stylized investigator silhouette with halftone dots -->
    <g fill="#1b1c1d">
      <circle cx="160" cy="115" r="55" />
      <path d="M 75,260 C 75,200 115,185 160,185 C 205,185 245,200 245,260 Z" />
    </g>
    <!-- Overlay halftone grid texture -->
    <rect x="30" y="30" width="260" height="260" fill="url(#halftonePattern)" opacity="0.25" style="mix-blend-mode: multiply;" />
    <!-- Red rubber stamp border -->
    <circle cx="160" cy="160" r="145" fill="none" stroke="#e63946" stroke-width="5" stroke-dasharray="14 6" opacity="0.8" />
  </svg>`;
  await sharp(Buffer.from(avatarSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'avatar-halftone.webp'));

  // 8. paper.webp (Tileable paper texture with warm subtle grain)
  const paperSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
    <rect width="400" height="400" fill="#f8f4eb" />
    <!-- Subtle fibrous flecks and speckles -->
    <g fill="#3c3022" opacity="0.08">
      <circle cx="45" cy="80" r="1.5" />
      <circle cx="120" cy="220" r="1" />
      <circle cx="310" cy="95" r="2" />
      <circle cx="270" cy="310" r="1.2" />
      <circle cx="85" cy="350" r="1.8" />
      <circle cx="190" cy="140" r="1" />
      <circle cx="340" cy="260" r="1.5" />
      <circle cx="210" cy="30" r="1" />
      <path d="M 60,180 Q 75,185 90,182" stroke="#3c3022" stroke-width="0.75" fill="none" />
      <path d="M 230,280 Q 245,275 260,282" stroke="#3c3022" stroke-width="0.75" fill="none" />
      <path d="M 140,70 Q 155,75 170,72" stroke="#3c3022" stroke-width="0.75" fill="none" />
    </g>
    <rect width="400" height="400" fill="#f3ede0" opacity="0.4" />
  </svg>`;
  await sharp(Buffer.from(paperSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'paper.webp'));

  console.log('Successfully generated all 8 Vox assets in /public/vox/!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
