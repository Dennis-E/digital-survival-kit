const { chromium } = require('playwright');
const { GIFEncoder, quantize, applyPalette } = require('gifenc');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const assets = path.join(root, 'assets');
fs.mkdirSync(assets, { recursive: true });

const scenes = [
  ['tiny-crown', '#f5cb5c', '#173c35', 'TINY CROWN'],
  ['happy-tabs', '#c9e8e4', '#173c35', 'TABS CLOSED'],
  ['confetti-yes', '#f3a18d', '#173c35', 'YES!'],
  ['desk-dance', '#d8f46c', '#173c35', 'DESK DANCE'],
  ['rubber-stamp', '#fbe2a0', '#173c35', 'APPROVED'],
  ['paper-plane', '#c9e8e4', '#173c35', 'FLIGHT PLAN'],
  ['moon-snack', '#d9d0ff', '#173c35', 'SNACK TIME'],
  ['tiny-triumph', '#f5cb5c', '#173c35', 'TRIUMPH'],
  ['office-wave', '#c9e8e4', '#173c35', 'HELLO!'],
  ['wiggle', '#f3a18d', '#173c35', 'WIGGLE'],
  ['sparkle-break', '#d8f46c', '#173c35', 'TAKE A BREAK'],
  ['good-news', '#fbe2a0', '#173c35', 'GOOD NEWS']
];

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const [name, background, ink, label] of scenes) {
    const gif = GIFEncoder();
    for (let frame = 0; frame < 10; frame += 1) {
      const image = await page.evaluate(({ background, ink, label, frame }) => {
        const canvas = document.createElement('canvas');
        canvas.width = 480;
        canvas.height = 320;
        const context = canvas.getContext('2d');
        context.fillStyle = background;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#fffdf4';
        context.fillRect(55, 45, 370, 230);
        context.strokeStyle = ink;
        context.lineWidth = 6;
        context.strokeRect(55, 45, 370, 230);
        context.save();
        context.translate(240, 160);
        context.rotate(Math.sin(frame / 2) * 0.08);
        context.fillStyle = ink;
        context.font = 'bold 38px sans-serif';
        context.textAlign = 'center';
        context.fillText(label, 0, 8);
        context.restore();
        context.fillStyle = ink;
        for (let dot = 0; dot < 7; dot += 1) {
          const x = 80 + dot * 52;
          const y = 245 + Math.sin((frame + dot) / 2) * 10;
          context.beginPath();
          context.arc(x, y, 5, 0, Math.PI * 2);
          context.fill();
        }
        const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
        let raw = '';
        for (let offset = 0; offset < pixels.length; offset += 8192) {
          raw += String.fromCharCode(...pixels.subarray(offset, offset + 8192));
        }
        return btoa(raw);
      }, { background, ink, label, frame });
      const rgba = Buffer.from(image, 'base64');
      const palette = quantize(rgba, 128);
      gif.writeFrame(applyPalette(rgba, palette), 480, 320, { palette, delay: 90 });
      if (frame === 0) {
        const still = await page.evaluate(({ background, ink, label }) => {
          const canvas = document.createElement('canvas');
          canvas.width = 480;
          canvas.height = 320;
          const context = canvas.getContext('2d');
          context.fillStyle = background;
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.fillStyle = '#fffdf4';
          context.fillRect(55, 45, 370, 230);
          context.strokeStyle = ink;
          context.lineWidth = 6;
          context.strokeRect(55, 45, 370, 230);
          context.fillStyle = ink;
          context.font = 'bold 38px sans-serif';
          context.textAlign = 'center';
          context.fillText(label, 240, 168);
          return canvas.toDataURL('image/png').split(',')[1];
        }, { background, ink, label });
        fs.writeFileSync(path.join(assets, `${name}-still.png`), Buffer.from(still, 'base64'));
      }
    }
    gif.finish();
    fs.writeFileSync(path.join(assets, `${name}.gif`), gif.bytes());
  }

  await browser.close();
}

main().catch(error => { console.error(error); process.exitCode = 1; });
