const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

test('layout stays readable without overflow and the original artwork loads', async ({ page }, testInfo) => {
  await page.goto(pathToFileURL(path.resolve(__dirname, '../../index.html')).href);
  const checkFrame = async () => {
    await expect(page.locator('.top-note')).toHaveText('MADE FOR ONE VERY GOOD HUMAN');
    await expect(page.locator('.top-note')).toBeVisible();
    await expect(page.locator('footer')).toContainText('MADE WITH CARE & QUESTIONABLE HUMOUR');
    await expect(page.getByText('MADE WITH CARE & QUESTIONABLE HUMOUR', { exact: true })).toHaveCount(1);
    await expect(page.getByText('EST. FOR THE HARD DAYS')).toHaveCount(0);
    await expect(page.getByText('A LITTLE SOMETHING FOR YOU', { exact: true })).toHaveCount(0);
  };
  await checkFrame();
  const loaded = await page.evaluate(() => new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(image.naturalWidth > 0);
    image.onerror = () => resolve(false);
    image.src = 'assets/good-day-department.webp';
  }));
  expect(loaded).toBe(true);
  await page.screenshot({ path: testInfo.outputPath('entry.png'), fullPage: true });
  await page.getByLabel('Password').fill('survival');
  await page.getByRole('button', { name: 'Open kit' }).click();
  await checkFrame();
  await page.getByLabel('Your name').fill('A very long but entirely valid name');
  await page.getByRole('button', { name: 'Continue' }).click();
  await checkFrame();
  await page.getByRole('button', { name: 'Magical moment' }).click();
  const textActions = await page.locator('#category-actions').boundingBox();
  await expect(page.locator('#surprise-title')).not.toBeEmpty();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  const content = await page.locator('.surprise-card').boundingBox();
  const actions = await page.locator('#category-actions').boundingBox();
  expect(content.x + content.width <= actions.x || content.y + content.height <= actions.y || actions.y + actions.height <= content.y).toBe(true);
  expect(Math.abs(textActions.y - actions.y)).toBeLessThan(3);
  await page.screenshot({ path: testInfo.outputPath('kit.png'), fullPage: true });
});