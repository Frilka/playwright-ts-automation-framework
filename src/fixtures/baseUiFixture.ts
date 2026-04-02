import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { test as base } from '@playwright/test';
import { DropdownPage } from '../pages/DropdownPage';
import { SecureAreaPage } from '../pages/SecureAreaPage';
import { ContextMenuPage } from '../pages/ContextMenuPage';

/**
 * Types for our page objects — available as fixtures to all UI tests.
 */
type Pages = {
  homePage: HomePage;
  loginPage: LoginPage;
  secureAreaPage: SecureAreaPage;
  dropdownPage: DropdownPage;
  contextMenuPage: ContextMenuPage;
};

/**
 * Base fixture that opens the base URL before each test
 * and provides all common Page Objects.
 */
export const uiTest = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    const home = new HomePage(page);
    await home.open(); // pre-open base URL
    await use(home);
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  secureAreaPage: async ({ page }, use) => {
    await use(new SecureAreaPage(page));
  },

  dropdownPage: async ({ page }, use) => {
    await use(new DropdownPage(page));
  },

  contextMenuPage: async ({ page }, use) => {
    await use(new ContextMenuPage(page));
  },
});

export const expect = uiTest.expect;