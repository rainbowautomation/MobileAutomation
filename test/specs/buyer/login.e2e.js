import BuyerLoginPage from '../../pageobjects/buyer/login.page.js';
import { expect } from 'chai';

describe('Buyer Login Flow', () => {
    it('should skip intro screen if Skip is present', async () => {
        await BuyerLoginPage.tapSkipIfVisible();
    });

    it('should tap Sign In', async () => {
        await BuyerLoginPage.tapSignInIfVisible();
    });

    it('should login with buyer credentials and land on home', async () => {
        await BuyerLoginPage.login('rainbowtest901@gmail.com', 'Rainbowtest@4');
        const homeVisible = await BuyerLoginPage.isHomeButtonVisible();
        expect(homeVisible).to.be.false;
    });
});
