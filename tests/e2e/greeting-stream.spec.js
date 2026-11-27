const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

const pageUrl = pathToFileURL(path.resolve(__dirname, '../../index.html')).href;

test('opens the kit, greets by name and shows each surprise once', async ({ page }) => {
  await page.goto(pageUrl);
  await page.getByLabel('Your name').fill('Alex');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('For you, Alex')).toBeVisible();
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
  await page.getByRole('button', { name: 'Skip' }).click();
  await expect(page.getByText('For you, friend')).toBeVisible();
});

test('randomizes the first fascinating surprise', async ({ page }) => {
  const titles = [];
  for (const randomValue of [0, 0.999999]) {
    const testPage = await page.context().newPage();
    await testPage.addInitScript(value => { Math.random = () => value; }, randomValue);
    await testPage.goto(pageUrl);
    await testPage.getByRole('button', { name: 'Skip' }).click();
    titles.push(await testPage.locator('#surprise-title').innerText());
    await testPage.close();
  }
  expect(titles[0]).not.toBe(titles[1]);
});

test('continues if the optional skip button is missing its id', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.addInitScript(() => {
    const observer = new MutationObserver(() => {
      const skipButton = document.querySelector('#skip-name');
      if (!skipButton) return;
      skipButton.removeAttribute('id');
      observer.disconnect();
    });
    observer.observe(document, { childList: true, subtree: true });
  });
  await page.goto(pageUrl);
  await page.getByLabel('Your name').fill('Alex');
  await page.getByLabel('Your name').press('Enter');
  await expect(page.getByText('For you, Alex')).toBeVisible();
  expect(pageErrors).toEqual([]);
});