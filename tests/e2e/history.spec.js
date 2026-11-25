const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

test('does not expose history or lock controls to the keyboard', async ({ page }) => {
  await page.goto(pathToFileURL(path.resolve(__dirname, '../../index.html')).href);
  await page.getByLabel('Password').fill('survival');
  await page.getByRole('button', { name: 'Open kit' }).click();
  await page.getByRole('button', { name: 'Skip' }).click();
  await expect(page.getByRole('button', { name: 'Seen so far' })).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Lock kit' })).toHaveCount(0);
  for (let index = 0; index < 12; index += 1) {
    await page.keyboard.press('Tab');
    const name = await page.evaluate(() => document.activeElement.textContent);
    expect(name).not.toMatch(/Seen so far|Lock kit/);
  }
});