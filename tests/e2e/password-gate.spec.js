const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

const pageUrl = pathToFileURL(path.resolve(__dirname, '../../index.html')).href;

test('only opens the normal view with the password and asks again after reload', async ({ page }) => {
  await page.goto(pageUrl);
  await page.getByRole('button', { name: 'Open kit' }).click();
  await expect(page.getByRole('alert')).toContainText('Try again');
  await page.getByLabel('Password').fill('wrong');
  await page.getByLabel('Password').press('Enter');
  await expect(page.locator('#greeting-view')).toBeHidden();
  await page.getByLabel('Password').fill('survival');
  await page.getByLabel('Password').press('Enter');
  await expect(page.getByLabel('Your name')).toBeVisible();
  await expect(page.getByLabel('Your name')).toBeFocused();
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.reload();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.locator('#surprise-view')).toBeHidden();
});