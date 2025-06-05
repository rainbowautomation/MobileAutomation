export default class Page {
    async open(path) {
        await browser.url(path);
    }

    async waitAndClick(element, timeout = 5000) {
        await element.waitForDisplayed({ timeout });
        await element.click();
    }

    async waitAndSetValue(element, value, timeout = 5000) {
        await element.waitForDisplayed({ timeout });
        await element.setValue(value);
    }

    async waitForElement(element, timeout = 5000) {
        try {
            await element.waitForDisplayed({ timeout });
            return true;
        } catch {
            return false;
        }
    }
}
