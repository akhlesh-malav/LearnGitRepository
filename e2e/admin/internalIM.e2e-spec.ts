import { EnvisionAppPage } from './internalIM.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Internal IM', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');

    it('1.Verify that user should be reach atinternal IM page when click at security link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.InternalIMLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/internalIm'))
      .then(done, done.fail);
  });

    it('2.Verify page title when user click at internal IM page', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.InternalIMLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Internal IM'))
      .then(done, done.fail);
  });

     it('3.Verify that instant messages are save sucessfully ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.InternalIMLink().click();
    page.selectPartnerValue().click();
    page.selectInstantMessage().click();
    page.writeTextareaText().sendKeys('This is test data');
    page.sendBtnClick().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Internal IM Saved Successfully'))
      .then(done, done.fail);
  });

       it('4.Verify that delete functionality for instant messages is working ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.InternalIMLink().click();
    page.selectPartnerValue().click();
    page.deleteBtnClick().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Deleted Successfully !!'))
      .then(done, done.fail);
  });


 
});
