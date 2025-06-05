import Page from '../page.js';

class BuyerLoginPage extends Page {
    get skipButton() {
        return $('//android.widget.TextView[@text="Skip"]');
    }

    get signInButton() {
        return $('//android.view.ViewGroup[@content-desc="Sign In"]');
    }

    get emailInput() {
        return $('//android.widget.EditText[@text="name@example.com"]');
    }

    get passwordInput() {
        return $('//android.widget.EditText[@text="*****"]');
    }

    get loginButton() {
        return $('//android.widget.TextView[@text="login"]');
    }

    get homeButton() {
        return $('//android.widget.TextView[contains(@text, "Home")]');
    }

    async waitForElement(element, timeout = 5000) {
        try {
            await element.waitForDisplayed({ timeout });
            return true;
        } catch {
            return false;
        }
    }

    async tapSkipIfVisible() {
        if (await this.waitForElement(this.skipButton)) {
            await this.skipButton.click();
        }
    }

    async tapSignInIfVisible() {
        if (await this.waitForElement(this.signInButton)) {
            await this.signInButton.click();
        }
    }

    async login(email, password) {
        if (await this.waitForElement(this.emailInput)) {
            await this.emailInput.setValue(email);
        } else {
            throw new Error('Email input not found');
        }

        if (await this.waitForElement(this.passwordInput)) {
            await this.passwordInput.setValue(password);
        } else {
            throw new Error('Password input not found');
        }

        if (await this.waitForElement(this.loginButton)) {
            await this.loginButton.click();
        } else {
            throw new Error('Login button not found');
        }
    }

    async isHomeButtonVisible(timeout = 10000) {
        return await this.waitForElement(this.homeButton, timeout);
    }
}

export default new BuyerLoginPage();
