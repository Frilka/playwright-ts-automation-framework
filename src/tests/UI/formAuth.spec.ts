import { Sections } from '../../locators/sections';
import { uiTest as test } from '../../fixtures/baseUiFixture';

const validUser = process.env.FORM_AUTH_USER!;
const validPass = process.env.FORM_AUTH_PASS!;

test.describe('Form Authentication', () => {
  test('Successful login (valid credentials)', async ({ homePage, loginPage }) => {
    await homePage.navigateTo(Sections.FORM_AUTH);
    const secureArea = await loginPage.login(validUser, validPass, true);
    await secureArea!.logout();
  });

  test('Invalid login (wrong username)', async ({ homePage, loginPage }) => {
    await homePage.navigateTo(Sections.FORM_AUTH);
    await loginPage.login('wronguser', validPass, false);
  });

  test('Invalid login (wrong password)', async ({ homePage, loginPage }) => {
    await homePage.navigateTo(Sections.FORM_AUTH);
    await loginPage.login(validUser, 'wrongpass', false, 'password');
  });
});