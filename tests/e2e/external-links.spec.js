const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

test('opens the external site only after a click in a separate tab', async ({ page, context }) => {
  await context.route('https://neal.fun/**', route => route.fulfill({ status: 200, contentType: 'text/html', body: '<title>External test site</title>' }));
  await page.goto(pathToFileURL(path.resolve(__dirname, '../../index.html')).href);
  await page.getByLabel('Password').fill('survival');
  await page.getByRole('button', { name: 'Open kit' }).click();
  await page.getByRole('button', { name: 'Skip' }).click();
  const urls = [];
  for (let index = 0; index < 8; index += 1) {
    await page.getByRole('button', { name: "Let's play" }).click();
    urls.push(await page.locator('#external-link').getAttribute('href'));
    await expect(page.locator('#external-preview')).toBeVisible();
  }
  expect(new Set(urls).size).toBe(8);
  expect(urls).toEqual(expect.arrayContaining(['https://neal.fun/design-the-next-iphone/', 'https://neal.fun/infinite-craft/', 'https://theuselessweb.com/', 'https://quickdraw.withgoogle.com/', 'https://www.patatap.com/', 'https://zoomquilt.org/', 'https://weavesilk.com/', 'https://mondrianandme.com/']));
  expect(context.pages()).toHaveLength(1);
  const popupPromise = page.waitForEvent('popup');
  await page.locator('#external-preview-link').click();
  const popup = await popupPromise;
  await popup.waitForLoadState();
  await expect(popup).toHaveURL(/^https:\/\//);
  await expect(page.locator('#surprise-view')).toBeVisible();
});

test('external links require a click and leave the kit available offline', async ({ page, context }) => {
  await page.route('https://**/*', route => route.abort());
  await page.goto(pathToFileURL(path.resolve(__dirname, '../../index.html')).href);
  await page.getByLabel('Password').fill('survival');
  await page.getByRole('button', { name: 'Open kit' }).click();
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.getByRole('button', { name: "Let's play" }).click();
  const link = page.locator('#external-link');
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute('href', /^https:\/\//);
  await expect(link).toHaveAttribute('target', '_blank');
  await expect(link).toContainText('Visit');
  expect(context.pages()).toHaveLength(1);
  await page.getByRole('button', { name: 'Magical moment' }).click();
  await expect(page.locator('#surprise-body')).not.toBeEmpty();
});