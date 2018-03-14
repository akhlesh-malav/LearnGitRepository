import { EnvisionAppPage } from './home.po';
import {  browser, element, by, By, $, $$, ExpectedConditions}from 'protractor';  

describe('Student Epic - Home Page', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    //browser.ignoreSynchronization = true;
    page = new EnvisionAppPage();
  });

  it('1.Verify that user is able to reach at home page after login successfully', done=> {
    page.navigateTo();
    let username = page.userName();
    let password = page.passWord();
    page.getEmailAddress().sendKeys(username);
    page.getPassword().sendKeys(password);
    page.signIn().click();
    browser.sleep(3500);
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/student/home'))
      .then(done, done.fail);
  });


  it('2.Verify home page title whem user click at home link at menu', done=> {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(1500);
    page.menuClick().click();
    browser.sleep(1500);
    page.homePageClick();
    page.homePageTitle()
      .then(msg => expect(msg).toEqual('Home'))
      .then(done, done.fail);
  });

  it('3.Verify home page url when user click at home link at menu', done=> {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(1500);
    page.menuClick().click();
    browser.sleep(1500);
    page.homePageClick();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/student/home'))
      .then(done, done.fail);
  });

});
