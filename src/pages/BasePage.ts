import { Page, Locator, expect } from '@playwright/test';

/**
 * BasePage is the abstract parent class for all page objects.
 * It provides shared helpers and conventions across pages.
 */
export abstract class BasePage {
  protected page: Page;
  protected flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flashMessage = page.locator('#flash');
  }

  /**
   * Waits until the DOM is loaded, ensuring the page structure is ready.
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Logs a lightweight action for reporting or debugging.
   */
  log(message: string): void {
    console.log(`[PAGE LOG]: ${message}`);
  }
}