import { browser, element, by } from 'protractor';

export class TDDAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nav-component nav a')).getText();
  }
}
