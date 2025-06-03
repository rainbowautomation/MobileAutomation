import Page from './page.js'; // Adjust the import path as needed

class LoginPage extends Page {
    // Selectors
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
        return $('//android.widget.TextView[@text="Login"]');
    }

get homeButton() {
    return $('//android.widget.TextView[contains(@text, "R-ainbow")]');
}

    // Utility to wait for element visibility
    async waitForElement(element, timeout = 5000) {
        try {
            await element.waitForDisplayed({ timeout });
            return true;
        } catch {
            return false;
        }
    }

    // Tap Skip button if visible
    async tapSkipIfVisible() {
        if (await this.waitForElement(this.skipButton)) {
            console.log('✅ Skip button found. Clicking...');
            await this.skipButton.click();
        } else {
            console.log('❌ Skip button not found.');
        }
    }

    // Tap Sign In button if visible
    async tapSignInIfVisible() {
        if (await this.waitForElement(this.signInButton)) {
            console.log('✅ Sign In button found. Clicking...');
            await this.signInButton.click();
        } else {
            console.log('❌ Sign In button not found.');
        }
    }

    // Login method: enter email, password, click login
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

    // Check if Home button is displayed
    async isHomeButtonVisible() {
        return await this.waitForElement(this.homeButton);
    }
}

export default new LoginPage();
