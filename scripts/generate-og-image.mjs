import sharp from "sharp";

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0d0d0d;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)" />
  <text x="80" y="280" font-family="sans-serif" font-size="72" font-weight="700" fill="#fafaf5" letter-spacing="-2">
    Sean Burt
  </text>
  <text x="80" y="350" font-family="sans-serif" font-size="32" font-weight="400" fill="#a8a29e">
    Software Engineer
  </text>
  <text x="80" y="520" font-family="sans-serif" font-size="20" font-weight="400" fill="#78716c">
    sdburt.com
  </text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/nano.png");
console.log("Generated public/nano.png (1200x630)");
