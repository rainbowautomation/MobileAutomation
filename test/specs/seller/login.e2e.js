import SellerLoginPage from '../../pageobjects/seller/login.page.js';
import { expect } from 'chai';

describe('Seller Login Flow', () => {
    it('should skip intro screen if Skip is present', async () => {
        await SellerLoginPage.tapSkipIfVisible();
    });

    it('should tap Sign In', async () => {
        await SellerLoginPage.tapSignInIfVisible();
    });

    it('should login with seller credentials and land on seller home', async () => {
        await SellerLoginPage.login('rainbowtestseller84@gmail.com', 'Rainbowtest@3');
        const homeVisible = await SellerLoginPage.isHomeButtonVisible(10000);

        console.log('Home button visibility:', homeVisible);
        expect(homeVisible).to.be.true; // expect TRUE if login should succeed
    });
});
