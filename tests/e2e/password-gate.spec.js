const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

const pageUrl = pathToFileURL(path.resolve(__dirname, '../../index.html')).href;

test('opens the greeting without a password and returns to it after reload', async ({ page }) => {
  await page.goto(pageUrl);
  await expect(page.getByLabel('Your name')).toBeVisible();
  await expect(page.getByLabel('Password')).toHaveCount(0);
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.reload();
  await expect(page.getByLabel('Your name')).toBeVisible();
  await expect(page.locator('#surprise-view')).toBeHidden();
});