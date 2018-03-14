import { EnvisionAppPage } from './myAccount.po';
import {  browser, element, protractor, by, By, $, $$, ExpectedConditions}from 'protractor';  

describe('College Page -Envision App', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

 

  it('1.Verify user is able to reach at my account page', done => {
   page.navigateTo();
    browser.sleep(4000);
    let username = page.userName();
    let password = page.passWord();
    page.getEmailAddress().sendKeys(username);
    page.getPassword().sendKeys(password);
    page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.myAccountLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/parent/myAccount'))
      .then(done, done.fail);
  });


  it('2.Verify user is able to reach at my account page when click at my account link ', done => {
   page.navigateTo();
    // browser.sleep(4000);
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.myAccountLink().click();
    page.pageTitle()
      .then(msg => expect(msg).toEqual('My Account'))
      .then(done, done.fail);
  });


});
