import { BasePage } from './BasePage';
import { ElemLocators } from '../locators/elemLocators';
import { Page, Locator, expect } from '@playwright/test';

export class DropdownPage extends BasePage {
  private dropdown: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdown = page.locator(ElemLocators.DropdownPage.DROPDOWN);
  }

  async selectOption(optionText: string) {
    this.log(`Selecting option: ${optionText}`);
    await this.dropdown.selectOption({ label: optionText });
  }

  async assertSelected(optionText: string) {
    const selectedValue = await this.dropdown.inputValue();
    const expectedValue = optionText.includes('1') ? '1' : '2';
    this.log(`Verifying that selected option is "${optionText}" (${expectedValue})`);
    await expect(selectedValue).toBe(expectedValue);
  }
}