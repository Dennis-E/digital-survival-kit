const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const assets = path.join(root, 'assets');

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 640, height: 480 } });
  const gifs = fs.readdirSync(assets).filter(name => /^\d{2}-.*\.gif$/i.test(name)).sort();

  for (const gif of gifs) {
    const still = gif.replace(/\.gif$/i, '-still.png');
    await page.goto(`file://${path.join(assets, gif).replace(/\\/g, '/')}`, { waitUntil: 'load' });
    await page.waitForTimeout(100);
    await page.screenshot({ path: path.join(assets, still), type: 'png' });
  }

  await browser.close();
  console.log(`Generated ${gifs.length} GIF stills.`);
}

main().catch(error => { console.error(error); process.exitCode = 1; });
