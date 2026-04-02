import { Sections } from '../../locators/sections';
import { uiTest as test } from '../../fixtures/baseUiFixture';

test.describe('Context Menu', () => {
  test('Alert message on right-click', async ({ homePage, contextMenuPage }) => {
    await homePage.navigateTo(Sections.CONTEXT_MENU);
    await contextMenuPage.triggerContextMenuAndVerify('You selected a context menu');
  });
});