import { EnvisionAppPage } from './platformMapping.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Platform Mapping', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');

    it('1.Verify that user should be reach at platform mapping page when click at security link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.platformMappingLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/platformMapping'))
      .then(done, done.fail);
  });

    it('2.Verify page title when user click at platform mapping page', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.platformMappingLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Platform Mapping'))
      .then(done, done.fail);
  });

      it('3.Verify save license or product functionlaity under licences ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.platformMappingLink().click();
    page.tabKeyClick();
    page.tabKeyClick();
    //page.selectPartnerValue().click();
    page.selectLicenseItem().click();
    page.selectFirstChkboxValue().click();
    page.selectSecondChkboxValue().click();
    browser.sleep(2000);
    page.savePlatformMapping().click();
    browser.sleep(2000);
    page.successMsg()
      .then(msg => expect(msg).toEqual('Platform mapping - Product Data Saved Successfully'))
      .then(done, done.fail);
  });

           it('4.Verify save  products in license and modules in products functionlaity under products ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.platformMappingLink().click();
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.enterArrowKey();
    //page.selectPartnerValue().click();
    page.selectProductItem().click();
    page.selectFirstModule().click();
    page.selectSecondModule().click();
    browser.sleep(2000);
    page.savePlatformMappingProducts().click();
    browser.sleep(3000);
    page.successMsg()
      .then(msg => expect(msg).toEqual('Platform mapping - Product Data Saved Successfully'))
      .then(done, done.fail);
  });

           it('5.Verify save  products in license and modules in products functionlaity under products ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.platformMappingLink().click();
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    //page.selectPartnerValue().click();
    page.selectModuleItems().click();
    page.selectServices1().click();
    page.selectServices2().click();
    browser.sleep(2000);
    page.saveSevicesPlatformMapping().click();
    browser.sleep(3000);
    page.successMsg()
      .then(msg => expect(msg).toEqual('Platform mapping - Module Data Saved Successfully'))
      .then(done, done.fail);
  });
 
});
