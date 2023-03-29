import { test, expect, Config } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
});

test('add an item', async ({ page }) => {
  await page.goto('localhost:3000');
  const card  = page.getByTestId('todo-list-test');
  const button = page.getByText('Add to list');
  await page.getByRole('textbox').type("Go to work", {delay: 100});
  await button.click();
  await expect(card).toHaveText(/Go to work/);

});
