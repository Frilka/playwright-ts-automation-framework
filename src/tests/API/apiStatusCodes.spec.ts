import { test, expect } from '@playwright/test';
import { Sections } from '../../locators/sections';
import { ConfigManager } from '../../config/ConfigManager';

const statusCodes = [200, 301, 404, 500];

test.describe('Status Codes API', () => {
  for (const code of statusCodes) {
    test(`Verify HTTP ${code} response`, async ({ request }) => {
      const response = await request.get(`${ConfigManager.getBaseUrl()}/${Sections.STATUS_CODES}/${code}`);
      expect(response.status()).toBe(code);
    });
  }
});
