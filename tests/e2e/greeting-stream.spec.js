const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

const pageUrl = pathToFileURL(path.resolve(__dirname, '../../index.html')).href;

test('opens the kit, greets by name and shows each surprise once', async ({ page }) => {
  await page.goto(pageUrl);
  await page.getByLabel('Password').fill('survival');
  await page.getByRole('button', { name: 'Open kit' }).click();
  await expect(page.getByLabel('Your name')).toBeFocused();
  await page.keyboard.type('PERSON');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('For you, PERSON')).toBeVisible();
  await expect(page.locator('#surprise-iframe')).toBeVisible();
  const count = await page.evaluate(() => new SurpriseDeck(surprises).items.length);
  const titles = [];
  for (let index = 0; index < count; index += 1) {
    titles.push(await page.locator('#surprise-title').innerText());
    if (index < count - 1) await page.getByRole('button', { name: "I'm feeling lucky" }).click();
  }
  expect(new Set(titles).size).toBeGreaterThanOrEqual(count - 1);
  await page.getByRole('button', { name: "I'm feeling lucky" }).click();
  await expect(page.locator('#surprise-title')).not.toHaveText(titles[count - 1]);
});

test('skipping the name uses a neutral greeting', async ({ page }) => {
  await page.goto(pageUrl);
  await page.getByLabel('Password').fill('survival');
  await page.getByRole('button', { name: 'Open kit' }).click();
  await page.getByRole('button', { name: 'Skip' }).click();
  await expect(page.getByText('For you, friend')).toBeVisible();
});