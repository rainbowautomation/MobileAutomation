import Page from '../page.js';

class SellerRegisterPage extends Page {
    get skipButton() {
        return $('//android.widget.TextView[@text="Skip"]');
    }

    get registerButton() {
        return $('//android.widget.TextView[@text="Register"]');
    }

    get continueAsSellerBtn() {
        return $('//android.widget.TextView[@text="Continue as Seller"]');
    }

    get businessNameField() {
        return $('//android.widget.EditText[@text="Abc"]');
    }


    get emailField() {
        return $('//android.widget.EditText[@text="name@example.com"]');
    }

    get passwordField() {
        return $('(//android.widget.EditText[@text="*****"])[1]');
    }

    get confirmPasswordField() {
       return $('(//android.widget.EditText[@text="*****"])');
    }

    // get signUpBtn() {
    //     return $('//android.widget.TextView[@text="Sign Up"]');
    // }

    async tapSkipIfVisible() {
        if (await this.waitForElement(this.skipButton, 3000)) {
            await this.skipButton.click();
        }
    }

    async tapRegisterIfVisible() {
        if (await this.waitForElement(this.registerButton)) {
            await this.registerButton.click();
        }
    }

    async waitForElement(el, timeout = 5000) {
        try {
            await el.waitForDisplayed({ timeout });
            return true;
        } catch {
            return false;
        }
    }

    async waitAndClick(element, timeout = 5000) {
        await element.waitForDisplayed({ timeout });
        await element.click();
    }

    async waitAndSetValue(element, value, timeout = 5000) {
        await element.waitForDisplayed({ timeout });
        await element.setValue(value);
    }

    async registerSeller(businessName, email, password, confirmPassword) {
        await this.tapSkipIfVisible();
        await this.tapRegisterIfVisible();
        await this.waitAndClick(this.continueAsSellerBtn);
        await this.waitAndSetValue(this.businessNameField, businessName);
        await this.waitAndSetValue(this.emailField, email);
        await this.waitAndSetValue(this.passwordField, password);
        await this.waitAndSetValue(this.confirmPasswordField, confirmPassword);
        // await this.waitAndClick(this.signUpBtn);
    }
}

export default new SellerRegisterPage();
