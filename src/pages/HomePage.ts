import { BasePage } from './BasePage';
import { Page, expect } from '@playwright/test';
import { ElemLocators } from '../locators/elemLocators';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Opens the site's base URL (configured in playwright.config.ts)
   */
  async open() {
    this.log('Opening Home Page...');
    await this.page.goto('/');
    await this.waitForPageLoad();
  }

  /**
   * Navigates to a specific section by its link path.
   */
  async navigateTo(section: string) {
    const link = this.page.locator(ElemLocators.HomePage.SECTION_LINK(section));

    await expect(
      link,
      `Section link '/${section}' should exist on the Home page`
    ).toBeVisible();

    this.log(`Navigating to section: /${section}`);

    await link.click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}