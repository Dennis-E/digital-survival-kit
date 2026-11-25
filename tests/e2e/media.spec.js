const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

const pageUrl = pathToFileURL(path.resolve(__dirname, '../../index.html')).href;

async function openKit(page) {
  await page.goto(pageUrl);
  await page.getByLabel('Password').fill('survival');
  await page.getByRole('button', { name: 'Open kit' }).click();
  await page.getByRole('button', { name: 'Skip' }).click();
  for (let attempt = 0; attempt < 12; attempt += 1) {
    await page.getByRole('button', { name: 'Magical moment' }).click();
    if (await page.locator('#surprise-media').getAttribute('src')) break;
  }
}

test('starts with a still image and can start and stop motion', async ({ page }) => {
  await openKit(page);
  await expect(page.locator('#surprise-media')).toHaveAttribute('src', /surprise-still\.png$/);
  await expect(page.locator('#surprise-media')).toHaveAttribute('alt', /approved/i);
  await page.getByRole('button', { name: 'Play animation' }).click();
  await expect(page.locator('#surprise-media')).toHaveAttribute('src', /surprise\.gif$/);
  const firstFrame = await page.locator('#surprise-media').screenshot();
  await expect.poll(async () => (await page.locator('#surprise-media').screenshot()).equals(firstFrame), { timeout: 5000 }).toBe(false);
  await page.getByRole('button', { name: 'Stop animation' }).click();
  await expect(page.locator('#surprise-media')).toHaveAttribute('src', /surprise-still\.png$/);
});

test('stops motion when reduced motion is enabled and handles missing media', async ({ page }) => {
  await openKit(page);
  await page.getByRole('button', { name: 'Play animation' }).click();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('#surprise-media')).toHaveAttribute('src', /surprise-still\.png$/);
  await page.locator('#surprise-media').evaluate(element => element.dispatchEvent(new Event('error')));
  await expect(page.locator('#media-error')).toBeVisible();
  await page.getByRole('button', { name: 'Magical moment' }).click();
  await expect(page.locator('#surprise-title')).not.toBeEmpty();
});