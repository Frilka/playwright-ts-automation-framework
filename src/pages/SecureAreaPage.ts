import { BasePage } from './BasePage';
import { ElemLocators } from '../locators/elemLocators';
import { Locator, Page, expect } from '@playwright/test';

export class SecureAreaPage extends BasePage {
  private logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.logoutButton = page.locator(ElemLocators.SecureAreaPage.LOGOUT_BTN);
  }

  // Logout and confirm redirect back to login page
  async logout() {
    await this.logoutButton.click();
    await this.waitForPageLoad();
    await expect(this.page).toHaveURL(/.*login/);
  }
}