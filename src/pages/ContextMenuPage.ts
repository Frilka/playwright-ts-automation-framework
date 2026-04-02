import { BasePage } from './BasePage';
import { ElemLocators } from '../locators/elemLocators';
import { Page, Locator, expect } from '@playwright/test';


export class ContextMenuPage extends BasePage {
  private hotspot: Locator;

  constructor(page: Page) {
    super(page);
    this.hotspot = page.locator(ElemLocators.ContextMenuPage.HOTSPOT);
  }

  /**
   * Triggers right-click on hotspot and verifies alert message.
   */
  async triggerContextMenuAndVerify(expectedMessage: string) {
    this.log('Triggering context menu right-click...');
    this.page.once('dialog', async (dialog) => {
      this.log(`Alert message: "${dialog.message()}"`);
      expect(dialog.message()).toBe(expectedMessage);
      await dialog.accept();
    });

    await this.hotspot.click({ button: 'right' });
  }
}