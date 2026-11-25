const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

test('offers magical, fascinating, play and a larger lucky action without a dropdown', async ({ page }) => {
  await page.goto(pathToFileURL(path.resolve(__dirname, '../../index.html')).href);
  await page.getByLabel('Password').fill('survival');
  await page.getByRole('button', { name: 'Open kit' }).click();
  await page.getByRole('button', { name: 'Skip' }).click();
  await expect(page.locator('#category-actions button')).toHaveCount(4);
  await expect(page.locator('select')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Magical moment' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Something fascinating' })).toBeVisible();
  await page.getByRole('button', { name: 'Something fascinating' }).click();
  await expect(page.locator('#surprise-iframe')).toBeVisible();
  await expect(page.locator('#surprise-iframe')).toHaveAttribute('src', /^https:\/\/www\.youtube-nocookie\.com\/embed\/[^?]+\?autoplay=0&rel=0$/);
  await page.getByRole('button', { name: 'Magical moment' }).click();
  await expect(page.getByRole('button', { name: 'Make me laugh' })).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Show me a GIF' })).toHaveCount(0);
  await page.getByRole('button', { name: 'Magical moment' }).click();
  const moments = [await page.locator('#surprise-title').innerText()];
  for (let index = 1; index < 6; index += 1) {
    await page.getByRole('button', { name: 'Magical moment' }).click();
    moments.push(await page.locator('#surprise-title').innerText());
  }
  expect(new Set(moments).size).toBeGreaterThanOrEqual(2);
  await page.getByRole('button', { name: 'Magical moment' }).click();
  await expect(page.locator('#surprise-title')).not.toHaveText(moments[5]);
  await expect(page.locator('#surprise-category')).toHaveText('MAGICAL MOMENT');
  await page.getByRole('button', { name: "I'm feeling lucky" }).click();
  const categoryWidth = await page.getByRole('button', { name: 'Magical moment' }).evaluate(element => element.getBoundingClientRect().width);
  const luckyWidth = await page.getByRole('button', { name: "I'm feeling lucky" }).evaluate(element => element.getBoundingClientRect().width);
  expect(luckyWidth).toBeGreaterThan(categoryWidth);
});