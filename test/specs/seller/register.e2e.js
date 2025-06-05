import SellerRegisterPage from '../../pageobjects/seller/register.page.js';
import { expect } from 'chai';

describe('Seller Registration Flow', () => {
    it('should skip intro screen if Skip is present', async () => {
        await SellerRegisterPage.tapSkipIfVisible();
    });

    it('should tap Register button if visible', async () => {
        await SellerRegisterPage.tapRegisterIfVisible();
    });

    it('should register a new seller successfully', async () => {
        const businessName = 'John';
        const email = 'ducke1974@gustr.com';
        const password = 'Rainbowtest@3';
        const confirmPassword = 'Rainbowtest@3';

        await SellerRegisterPage.registerSeller(
            businessName,
            email,
            password,
            confirmPassword
        );

        // const successMsg = await $('//h1[contains(text(),"Welcome")]');
        // await expect(await successMsg.isDisplayed()).to.be.true;
    });
});
