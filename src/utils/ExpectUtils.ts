import * as fs from 'fs';
import * as path from 'path';
import { expect, Locator, Page } from '@playwright/test';

/**
 * Enhanced assertion utilities with logging and screenshots on failure.
 */
export class ExpectUtils {
  /**
   * Checks that an element is visible and logs result.
   */
  static async toBeVisible(page: Page, locator: Locator, elementName: string) {
    console.log(`🔎 Checking visibility of: ${elementName}`);

    try {
      await expect(locator, `${elementName} should be visible`).toBeVisible();
      console.log(`✅ ${elementName} is visible`);
    } catch (error) {
      console.error(`❌ ${elementName} not visible`);
      await this.captureScreenshot(page, `visibility-${this.sanitize(elementName)}`);
      throw error; // re‑throw to still fail the test
    }
  }

  /**
   * Checks that an element contains specific text.
   */
  static async toContainText(page: Page, locator: Locator, expected: string | RegExp, elementName: string) {
    console.log(`🔎 Validating text of ${elementName} includes "${expected}"`);

    try {
      await expect(locator).toContainText(expected);
      console.log(`✅ ${elementName} contains expected text`);
    } catch (error) {
      console.error(`❌ Text not matching for ${elementName}`);
      await this.captureScreenshot(page, `text-${this.sanitize(elementName)}`);
      throw error;
    }
  }

  /** Screenshot helper */
  private static async captureScreenshot(page: Page, baseName: string) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const dir = path.resolve('test-results/screenshots');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const fullPath = path.join(dir, `${baseName}-${timestamp}.png`);
    await page.screenshot({ path: fullPath, fullPage: true });
    console.log(`📸 Screenshot captured: ${fullPath}`);
  }

  private static sanitize(name: string): string {
    return name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9-_]/g, '');
  }
}