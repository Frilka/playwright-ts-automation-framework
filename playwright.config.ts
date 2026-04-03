import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { defineConfig, devices } from '@playwright/test';
import { ConfigManager } from './src/config/ConfigManager';

dotenv.config();
const htmlReportDir = path.resolve('playwright-report');
const jsonReportDir = path.resolve('json-report');
fs.mkdirSync(htmlReportDir, { recursive: true });
fs.mkdirSync(jsonReportDir, { recursive: true });

export default defineConfig({
  testDir: './src/tests',
  timeout: 30_000,
  fullyParallel: true,
  retries: 0,
  use: {
    baseURL: ConfigManager.getBaseUrl(),
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'], 
    ['json', { outputFile: path.join(jsonReportDir, `results_${process.env.REPORT_NAME || 'default'}.json`) }],
    ['html', { outputFolder: htmlReportDir, open: 'never' }],
  ],
  outputDir: 'test-results/',
   /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
