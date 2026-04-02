import { Sections } from '../../locators/sections';
import { authUiTest as test, expect } from '../../fixtures/authUiTest';

test.describe('Digest Authentication', () => {
  test('Valid digest credentials', async ({ homePage, page }) => {
    await homePage.navigateTo(Sections.DIGEST_AUTH);
    const message = page.locator('p');
    await expect(message).toHaveText(/Congratulations/);
  });
});