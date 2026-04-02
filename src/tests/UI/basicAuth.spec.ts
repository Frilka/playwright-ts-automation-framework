import { Sections } from '../../locators/sections';
import { authUiTest as test, expect } from '../../fixtures/authUiTest';

test.describe('Basic Authentication', () => {
  test('Valid credentials', async ({ homePage, page }) => {
    await homePage.navigateTo(Sections.BASIC_AUTH);
    await expect(page.locator('p')).toContainText('Congratulations');
  });

  test('Wrong credentials', async ({ browser }) => {
    const context = await browser.newContext({
      httpCredentials: { username: 'wrong', password: 'creds' },
    });
    const page = await context.newPage();
    const response = await page.goto(Sections.BASIC_AUTH);
    expect(response?.status()).toBe(401);
    await context.close();
  });
});