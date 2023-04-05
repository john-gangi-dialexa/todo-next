import { test, expect, Config } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
});

test('add an item', async ({ page }) => {
  await page.goto('localhost:3000');
  const card  = page.getByTestId('todo-list-card');
  const button = page.getByTestId('todo-list-add-button');
  await page.getByRole('textbox').fill("Go to work");
  await button.click();
  await expect(card).toHaveText(/Go to work/);

});
