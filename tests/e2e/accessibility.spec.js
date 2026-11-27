const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

test('supports the main flow with keyboard and reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(pathToFileURL(path.resolve(__dirname, '../../index.html')).href);
  await page.getByLabel('Your name').focus();
  await page.keyboard.type('Alex');
  await page.keyboard.press('Enter');
  await expect(page.locator('#stream-heading')).toBeFocused();
  await page.getByRole('button', { name: 'Magical moment' }).focus();
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: 'Something fascinating' }).focus();
  await page.keyboard.press('Enter');
  for (let attempt = 0; attempt < 12 && await page.getByRole('button', { name: 'Play animation' }).count() === 0; attempt += 1) {
    await page.getByRole('button', { name: 'Magical moment' }).focus();
    await page.keyboard.press('Enter');
  }
  await page.getByRole('button', { name: 'Play animation' }).focus();
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: 'Stop animation' }).focus();
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: "Let's play" }).focus();
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: "I'm feeling lucky" }).focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('button', { name: 'Seen so far' })).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Lock kit' })).toHaveCount(0);
  expect(await page.locator('audio, video').count()).toBe(0);
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
});