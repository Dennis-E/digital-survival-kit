const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const assets = path.join(root, 'assets');
fs.mkdirSync(assets, { recursive: true });

const games = [
  ['phone', 'https://neal.fun/design-the-next-iphone/', 'DESIGN THE NEXT IPHONE'],
  ['craft', 'https://neal.fun/infinite-craft/', 'INFINITE CRAFT'],
  ['useless-web', 'https://theuselessweb.com/', 'THE USELESS WEB'],
  ['quick-draw', 'https://quickdraw.withgoogle.com/', 'QUICK, DRAW'],
  ['patatap', 'https://www.patatap.com/', 'PATATAP'],
  ['zoomquilt', 'https://zoomquilt.org/', 'ZOOMQUILT'],
  ['weavesilk', 'https://weavesilk.com/', 'SILK'],
  ['mondrian', 'https://mondrianandme.com/', 'MONDRIAN AND ME']
];

async function fallback(page, name, label) {
  const png = await page.evaluate(({ label }) => {
    const canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 360;
    const context = canvas.getContext('2d');
    context.fillStyle = '#d9eee8';
    context.fillRect(0, 0, 640, 360);
    context.fillStyle = '#fffdf4';
    context.fillRect(40, 40, 560, 280);
    context.strokeStyle = '#173c35';
    context.lineWidth = 8;
    context.strokeRect(40, 40, 560, 280);
    context.fillStyle = '#173c35';
    context.font = 'bold 42px sans-serif';
    context.textAlign = 'center';
    context.fillText(label, 320, 180);
    context.fillStyle = '#e95442';
    context.fillRect(235, 215, 170, 48);
    context.fillStyle = '#fffdf4';
    context.font = 'bold 20px sans-serif';
    context.fillText('PLAY', 320, 246);
    return canvas.toDataURL('image/png').split(',')[1];
  }, { label });
  fs.writeFileSync(path.join(assets, `game-${name}.png`), Buffer.from(png, 'base64'));
}

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 640, height: 360 } });

  for (const [name, url, label] of games) {
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 12000 });
      await page.waitForTimeout(700);
      await page.screenshot({ path: path.join(assets, `game-${name}.png`), type: 'png' });
    } catch {
      await fallback(page, name, label);
    }
  }

  await browser.close();
}

main().catch(error => { console.error(error); process.exitCode = 1; });
