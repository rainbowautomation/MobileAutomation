import Page from '../page.js';

class BuyerRegisterPage extends Page {
    get skipButton() {
        return $('//android.widget.TextView[@text="Skip"]');
    }
    get registerButton() {
        return $('//android.widget.TextView[@text="Register"]');
    }
    get continueAsBuyerBtn() {
        return $('//android.widget.TextView[@text="Continue as Buyer"]');
    }

    get firstNameField() {
        return $('//android.widget.EditText[@text="John"]');
    }

    get lastNameField() {
        return $('//android.widget.EditText[@text="Doe"]');
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


    async registerBuyer(firstName, lastName, email, password, confirmPassword) {
        await this.tapSkipIfVisible();
        await this.tapRegisterIfVisible();
        await this.waitAndClick(this.continueAsBuyerBtn);
        await this.waitAndSetValue(this.firstNameField, firstName);
        await this.waitAndSetValue(this.lastNameField, lastName);
        await this.waitAndSetValue(this.emailField, email);
        await this.waitAndSetValue(this.passwordField, password);
        await this.waitAndSetValue(this.confirmPasswordField, confirmPassword);
        // await this.waitAndClick(this.signUpBtn);
    }
}

export default new BuyerRegisterPage();
