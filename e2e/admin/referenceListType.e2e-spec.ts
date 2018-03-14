import { EnvisionAppPage } from './referenceListType.po';
import {  browser, element, by, By, $, $$, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Reference List - Types', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    page = new EnvisionAppPage();
  });

    it('1.Verify that user should be reach at Reference List page when click at Reference List link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
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

          it('3.Verify page title when user click at Reference list type link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.referenceListLink().click();
    page.referenceListTypeLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Reference List Types'))
      .then(done, done.fail);
  });

          it('4.Verify page title when user click at Reference list type link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.referenceListLink().click();
    page.referenceListTypeLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/referenceListTypes'))
      .then(done, done.fail);
  });

        it('5.Verify reference type save functionality', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.referenceListLink().click();
    page.referenceListTypeLink().click();
    page.referenceTextBox().sendKeys('aaa');
    page.saveReferenceData().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Reference Type Saved Successfully'))
      .then(done, done.fail);
  });


          it('6.Verify reference type clear button functionality', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.referenceListLink().click();
    page.referenceListTypeLink().click();
    page.selectTypeData().click();
    page.clearRefTypeData().click();
    page.checkRefTypeValue()
      .then(msg => expect(msg).toEqual(''))
      .then(done, done.fail);
  });

          it('7.Verify reference type delete functionality', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.referenceListLink().click();
    page.referenceListTypeLink().click();
    page.selectTypeData().click();
    page.deleteRefData().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Type Deleted Successfully'))
      .then(done, done.fail);
  });
});
