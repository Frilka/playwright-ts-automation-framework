import { uiTest } from './baseUiFixture';

/**
 * Hybrid fixture providing httpCredentials (for Basic/Digest Auth)
 * plus all Page Objects and base URL startup from baseUiFixture.
 */
export const authUiTest = uiTest.extend({
  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      httpCredentials: {
        username: process.env.AUTH_USER || 'admin',
        password: process.env.AUTH_PASS || 'admin'
      },
    });
    await use(context);
    await context.close();
  },
});

export const expect = authUiTest.expect;
