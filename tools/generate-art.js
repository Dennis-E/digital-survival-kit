const { chromium } = require('playwright');
const { GIFEncoder, quantize, applyPalette } = require('gifenc');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const assets = path.join(root, 'assets');
fs.mkdirSync(assets, { recursive: true });

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const art = await page.evaluate(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1600;
    canvas.height = 1000;
    const context = canvas.getContext('2d');
    context.fillStyle = '#d9eee8';
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (let x = 20; x < canvas.width; x += 42) {
      for (let y = 20; y < canvas.height; y += 42) {
        context.fillStyle = 'rgba(24,62,54,.08)';
        context.beginPath();
        context.arc(x, y, 2, 0, Math.PI * 2);
        context.fill();
      }
    }
    context.save();
    context.translate(1190, 510);
    context.rotate(-0.09);
    context.fillStyle = '#173c35';
    context.fillRect(-245, -330, 530, 700);
    context.fillStyle = '#f9f8ec';
    context.fillRect(-265, -350, 530, 700);
    context.strokeStyle = '#173c35';
    context.lineWidth = 5;
    context.strokeRect(-265, -350, 530, 700);
    context.fillStyle = '#e95442';
    context.fillRect(-225, -305, 450, 62);
    context.fillStyle = '#fffdf1';
    context.font = 'bold 25px sans-serif';
    context.fillText('GOOD DAY DEPARTMENT', -195, -264);
    context.fillStyle = '#173c35';
    context.font = 'bold 55px sans-serif';
    context.fillText('OFFICIAL', -215, -155);
    context.fillText('NOTICE', -215, -90);
    context.font = '22px sans-serif';
    context.fillText('A VERY IMPORTANT DOCUMENT', -212, -40);
    context.strokeStyle = '#9db1a4';
    context.lineWidth = 4;
    for (let line = 0; line < 5; line += 1) {
      context.beginPath();
      context.moveTo(-210, 15 + line * 26);
      context.lineTo(175 - line * 18, 15 + line * 26);
      context.stroke();
    }
    context.save();
    context.translate(30, 205);
    context.rotate(-0.2);
    context.strokeStyle = '#e95442';
    context.lineWidth = 10;
    context.strokeRect(-180, -55, 360, 110);
    context.fillStyle = '#e95442';
    context.font = 'bold 51px sans-serif';
    context.fillText('APPROVED', -165, 18);
    context.restore();
    context.restore();
    context.save();
    context.translate(790, 700);
    context.rotate(0.13);
    context.fillStyle = '#f5cb5c';
    context.fillRect(-150, -120, 300, 240);
    context.strokeStyle = '#173c35';
    context.lineWidth = 5;
    context.strokeRect(-150, -120, 300, 240);
    context.fillStyle = '#173c35';
    context.font = 'bold 29px sans-serif';
    context.fillText('BREAK TIME', -115, -45);
    context.font = '25px sans-serif';
    context.fillText('is a perfectly', -115, 3);
    context.fillText('valid strategy.', -115, 38);
    context.restore();
    context.fillStyle = '#ee8d7b';
    context.beginPath();
    context.arc(1460, 170, 88, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = '#173c35';
    context.lineWidth = 5;
    context.stroke();
    context.fillStyle = '#173c35';
    context.font = 'bold 24px sans-serif';
    context.fillText('100%', 1425, 160);
    context.font = '18px sans-serif';
    context.fillText('UNOFFICIAL', 1405, 188);
    return canvas.toDataURL('image/webp', 0.9).split(',')[1];
  });
  fs.writeFileSync(path.join(assets, 'good-day-department.webp'), Buffer.from(art, 'base64'));

  const gif = GIFEncoder();
  for (let frame = 0; frame < 8; frame += 1) {
    const image = await page.evaluate(index => {
      const canvas = document.createElement('canvas');
      canvas.width = 720;
      canvas.height = 480;
      const context = canvas.getContext('2d');
      context.fillStyle = '#c9e8e4';
      context.fillRect(0, 0, 720, 480);
      context.fillStyle = '#fffdf4';
      context.fillRect(90, 60, 540, 360);
      context.strokeStyle = '#173c35';
      context.lineWidth = 5;
      context.strokeRect(90, 60, 540, 360);
      context.fillStyle = '#173c35';
      context.font = 'bold 26px sans-serif';
      context.fillText('GOOD DAY DEPARTMENT', 125, 115);
      context.font = '22px sans-serif';
      context.fillText('Your request for a little break:', 125, 160);
      context.save();
      context.translate(360, 290 + (index < 3 ? -30 : 0));
      context.rotate(-0.1);
      context.strokeStyle = '#e95442';
      context.lineWidth = 9;
      context.strokeRect(-205, -62, 410, 124);
      context.fillStyle = '#e95442';
      context.font = 'bold 52px sans-serif';
      context.fillText('APPROVED', -185, 18);
      context.restore();
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
      let raw = '';
      for (let offset = 0; offset < pixels.length; offset += 8192) {
        raw += String.fromCharCode(...pixels.subarray(offset, offset + 8192));
      }
      return { png: canvas.toDataURL('image/png').split(',')[1], rgba: btoa(raw) };
    }, frame);
    const rgba = Buffer.from(image.rgba, 'base64');
    const palette = quantize(rgba, 256);
    gif.writeFrame(applyPalette(rgba, palette), 720, 480, { palette, delay: 500 });
    if (frame === 7) fs.writeFileSync(path.join(assets, 'surprise-still.png'), Buffer.from(image.png, 'base64'));
  }
  await browser.close();
  gif.finish();
  fs.writeFileSync(path.join(assets, 'surprise.gif'), gif.bytes());
}

main().catch(error => { console.error(error); process.exitCode = 1; });