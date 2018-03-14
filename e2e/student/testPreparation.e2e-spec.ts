import { EnvisionAppPage } from './testPreparation.po';
import {  browser, element, by, By, $, $$, ExpectedConditions}from 'protractor';  

describe('Student Epic - Test Preparation Page', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

it('1.Verify test preparation page title whem user click at test prepparation link at menu', done=> {
    page.navigateTo();
    let username = page.userName();
    let password = page.passWord();
    page.getEmailAddress().sendKeys(username);
    page.getPassword().sendKeys(password);
    page.signIn().click();
    browser.sleep(1500);
    page.menuClick().click();
    browser.sleep(1500);
    page.testPreparationLink().click();
    page.testPrpaTitle()
      .then(msg => expect(msg).toEqual('Test Preparation'))
      .then(done, done.fail);
  });

  it('2.Verify test prparation page url when user click at test preparation link at menu', done=> {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(1500);
    page.menuClick().click();
    browser.sleep(1500);
    page.testPreparationLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/student/testprep'))
      .then(done, done.fail);
  });


});
