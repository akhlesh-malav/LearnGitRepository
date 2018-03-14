import { EnvisionAppPage } from './referenceListValue.po';
import {  browser, element, by, By, $, $$, ExpectedConditions, protractor}from 'protractor'; 

describe('Admin Epic - Reference List - Value ', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

    it('1.Verify that user should be reach at Reference List page when click at Reference List link', done => {
    page.navigateTo();
    page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    page.getPassword().sendKeys('kaustav@123');
    page.signIn().click();
    browser.sleep(3000);
    page.menuClick().click();
    page.referenceListLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/referenceList'))
      .then(done, done.fail);
  });

      it('2.Verify page title when user click at Reference List link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.referenceListLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Reference List'))
      .then(done, done.fail);
  });

          it('3.Verify page title when user click at Reference list value link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.referenceListLink().click();
    page.referenceValueLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Reference List Values'))
      .then(done, done.fail);
  });

          it('4.Verify page title when user click at Reference list value link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.referenceListLink().click();
    page.referenceValueLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/referenceListValues'))
      .then(done, done.fail);
  });


          it('5.Verify  user able to add reference value', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.referenceListLink().click();
    page.referenceValueLink().click();
    page.clickSelectRefTypeDropdown().click();
    page.downArrowKey();
    page.enterArrowKey();
    page.refDataValue().sendKeys('test third');
    page.saveReferenceValue().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Reference Value Saved Successfully'))
      .then(done, done.fail);
  });


          it('6.Verify user able to clear ref value', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.referenceListLink().click();
    page.referenceValueLink().click();
    page.clickSelectRefTypeDropdown().click();
    page.downArrowKey();
    page.enterArrowKey();
    page.selectRefValueClick().click();
    page.clearRefValue().click();
    page.checkRefValuetextBox()
      .then(msg => expect(msg).toEqual(''))
      .then(done, done.fail);
  });


          it('7.Verify user able to update reference value', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.referenceListLink().click();
    page.referenceValueLink().click();
    page.clickSelectRefTypeDropdown().click();
    page.downArrowKey();
    page.enterArrowKey();
    page.selectRefValueClick().click();
    page.refDataValue().sendKeys('s');
    page.saveReferenceValue().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Reference Value Saved Successfully'))
      .then(done, done.fail);
  });


         it('8.Verify user able to delete reference value', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.referenceListLink().click();
    page.referenceValueLink().click();
    page.clickSelectRefTypeDropdown().click();
    page.downArrowKey();
    page.enterArrowKey();
    page.selectRefValueClick().click();
    page.deleteRefValue().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Type Deleted Successfully'))
      .then(done, done.fail);
  });

});
