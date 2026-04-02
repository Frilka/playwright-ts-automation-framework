import { Sections } from '../../locators/sections';
import { uiTest as test } from '../../fixtures/baseUiFixture';

test.describe('Dropdown', () => {
  test('Selects value and check display', async ({ homePage, dropdownPage }) => {
    await homePage.navigateTo(Sections.DROPDOWN);
    await dropdownPage.selectOption('Option 2');
    await dropdownPage.assertSelected('Option 2');
  });
});
