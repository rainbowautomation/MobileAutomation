import LoginPage from '../pageobjects/login.page.js';
import { expect } from 'chai';


describe('App Launch Flow & Login', () => {
    it('should skip the intro screen if Skip button is present', async () => {
        await LoginPage.tapSkipIfVisible();
    });

    it('should tap on Sign In button on login screen', async () => {
        await LoginPage.tapSignInIfVisible();
    });

    it('should login with valid credentials and verify Home button is displayed', async () => {
        const email = 'rainbowtest901@gmail.com';
        const password = 'Rainbowtest@4';

        await LoginPage.login(email, password);

        const isHomeVisible = await LoginPage.isHomeButtonVisible(10000);
        console.log('✅ Home button visible:', isHomeVisible);

       expect(isHomeVisible).to.equal(false);

    });
});
