import { EnvisionAppPage } from './coachLogout.po';
import {  browser, element, by, By, $, $$, ExpectedConditions}from 'protractor';  

describe('Student Epic -  Logout Link', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    page = new EnvisionAppPage();
  });

  //   it('1.Verify user is able to logout when click at logout button in menu', done => {
  //   page.navigateTo();
  //   let username = page.userName();
  //   let password = page.passWord();
  //   page.getEmailAddress().sendKeys(username);
  //   page.getPassword().sendKeys(password);
  //   page.signIn().click();
  //   browser.sleep(3000);
  //   page.menuClick().click();
  //   browser.sleep(1200);
  //   page.logoutLinkMenu().click();
  //   page.currentUrl()
  //     .then(msg => expect(msg).toEqual('http://envision-test/#/login'))
  //     .then(done, done.fail);
  // });


    it('2.Verify user is able to logout  when click at logout option in user setting popup options ', done => {
    page.navigateTo();
    let username = page.userName();
    let password = page.passWord();
    page.getEmailAddress().sendKeys(username);
    page.getPassword().sendKeys(password);
    page.signIn().click();
    browser.sleep(5000);
    page.userSettingBtn();
    browser.sleep(2500);
    page.logoutLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/login'))
      .then(done, done.fail);
  });


});
