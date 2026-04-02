import { test, expect } from '@playwright/test';
import { Sections } from '../../locators/sections';
import { ConfigManager } from '../../config/ConfigManager';


test.describe('Basic Authentication Negative check', () => { 
  test('No credentials provided (API check)', async ({ request }) => {
    const response = await request.get(`${ConfigManager.getBaseUrl()}/${Sections.BASIC_AUTH}`);
    expect(response?.status()).toBe(401);
  });
});

test.describe('Digest Authentication', () => {
  test('No credentials provided (API check)', async ({ request }) => {
    const response = await request.get(`${ConfigManager.getBaseUrl()}/${Sections.DIGEST_AUTH}`);
    expect(response?.status()).toBe(401);
  });

  test('Ininvalid credentials (API check)', async ({ request }) => {
    const response = await request.get(`${ConfigManager.getBaseUrl()}/${Sections.DIGEST_AUTH}`, {
        headers: {
          Authorization: 'Basic ' + Buffer.from('wrong:creds').toString('base64'),
        }
      },
    );
    expect(response?.status()).toBe(400);
  });
});

