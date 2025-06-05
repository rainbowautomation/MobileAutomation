import BuyerRegisterPage from '../../pageobjects/buyer/register.page.js';
import { expect } from 'chai';

describe('Buyer Registration Flow', () => {
    it('should skip intro screen if Skip is present', async () => {
        await BuyerRegisterPage.tapSkipIfVisible();
    });

    it('should tap Register button if visible', async () => {
        await BuyerRegisterPage.tapRegisterIfVisible();
    });

    it('should complete buyer registration successfully', async () => {
        const firstName = 'John';
        const lastName = 'Doe';
        const email = 'ducke1974@gustr.com';
        const password = 'Rainbowtest@3';
        const confirmPassword = 'Rainbowtest@3';

        await BuyerRegisterPage.registerBuyer(
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        );

    //     const successMsg = await $('//android.widget.TextView[contains(@text, "Home")]');
    //     expect(await successMsg.isDisplayed()).to.be.true;
    // 
  })
});
