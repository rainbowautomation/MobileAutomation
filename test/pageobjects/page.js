// test/pageobjects/page.js
export default class Page {
  open(path) {
    return browser.url(path);
  }
}
