import { BasePage } from './BasePage';
import { SecureAreaPage } from './SecureAreaPage';
import { ExpectUtils } from '../utils/ExpectUtils';
import { ElemLocators } from '../locators/elemLocators';
import { Locator, expect, Page } from '@playwright/test';

export class LoginPage extends BasePage {
  private username: Locator;
  private password: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.locator(ElemLocators.LoginPage.USERNAME);
    this.password = page.locator(ElemLocators.LoginPage.PASSWORD);
    this.loginButton = page.locator(ElemLocators.LoginPage.SUBMIT);
  }

  async clickLoginButton() {
    await ExpectUtils.toBeVisible(this.page, this.loginButton, 'Login Button');
    await this.loginButton.click();
  }

  async login(user: string, pass: string, expectSuccess: boolean = true, fieldName = 'username'): Promise<SecureAreaPage | null> {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.clickLoginButton();

    if (expectSuccess) {
      await expect(this.page).toHaveURL(/\/secure/);
      await ExpectUtils.toContainText(this.page, this.flashMessage, 'You logged into a secure area!', 'Flash Message');
      return new SecureAreaPage(this.page);
    } else {
      const expMassage = `Your ${fieldName} is invalid!`;
      await ExpectUtils.toContainText(this.page, this.flashMessage, new RegExp(expMassage), 'Flash Message');
      return null;
    }
  }
}