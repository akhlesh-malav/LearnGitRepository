import { EnvisionAppPage } from './accountSearch.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Messages', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');

    it('1.Verify that user should be reach at account search page when click at account search link', done => {
    page.navigateTo();
    let username = page.userName();
    let password = page.passWord();
    page.getEmailAddress().sendKeys(username);
    page.getPassword().sendKeys(password);
    page.signIn().click();
    browser.sleep(3000);
    page.menuClick().click();
    page.accountSearchLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/coach/accountSearch'))
      .then(done, done.fail);
  });

    it('2.Verify account search page title ', done => {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(3000);
    page.menuClick().click();
    page.accountSearchLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Account Search'))
      .then(done, done.fail);
  });


    
});
