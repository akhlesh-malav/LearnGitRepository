import { EnvisionAppPage } from './contentEditor.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Content Editor', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');

    it('1.Verify that user should be reach at Reference List page when click at security link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.contentEditorLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/contentEditor'))
      .then(done, done.fail);
  });

    it('2.Verify page title when user click at security link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.contentEditorLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Content Editor'))
      .then(done, done.fail);
  });

  it('3.Verify blank form should be open on screen when click at new content button', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.contentEditorLink().click();
    page.newContentButton().click();
    page.valueContentUsage()
      .then(msg => expect(msg).toEqual('Select Content Usage'))
      .then(done, done.fail);
  });

// /* this is uncomplete tes here focus is not moing at editor */
  it('4.Verify save content functionality through content form', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.contentEditorLink().click();
    page.newContentButton().click();
    page.selectPartnerValue().click();
    page.selectContentUsageValue().click();
    page.selectContentCategory().click();
    page.selectGradeValue().click();
    page.contentTopicTitle().sendKeys('Test title');
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    browser.sleep(2000);
    page.contentEditorText().sendKeys('this is test data');
    browser.sleep(1200);
    page.contentSaveTempBtn().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Select Content Usage'))
      .then(done, done.fail);
  });

  it('5.Verify validation error message when content usage value is not selected', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.contentEditorLink().click();
    page.newContentButton().click();
    page.selectPartnerValue().click();
    page.selectContentCategory().click();
    page.selectGradeValue().click();
    page.contentTopicTitle().sendKeys('Test title');
    browser.sleep(1200);
    page.contentSaveTempBtn().click();
    page.contentUsageValidtnError()
      .then(msg => expect(msg).toEqual('Please Select Content Usage'))
      .then(done, done.fail);
  });

    it('6.Verify validation error message when content category value is not selected', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.contentEditorLink().click();
    page.newContentButton().click();
    page.selectPartnerValue().click();
    page.selectContentUsageValue().click();
    page.selectGradeValue().click();
    page.contentTopicTitle().sendKeys('Test title');
    browser.sleep(1200);
    page.contentSaveTempBtn().click();
    page.contentCategoryValidtnError()
      .then(msg => expect(msg).toEqual('Please Select Category'))
      .then(done, done.fail);
  });

     it('7.Verify validation error message when content topic title value is not entered', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.contentEditorLink().click();
    page.newContentButton().click();
    page.selectPartnerValue().click();
    page.selectContentUsageValue().click();
    page.selectContentCategory().click();
    page.selectGradeValue().click();
    page.contentSaveTempBtn().click();
    page.contentTopicTitleValidtnError()
      .then(msg => expect(msg).toEqual('Please add topic title'))
      .then(done, done.fail);
  });


  it('8.Verify validation error message when no content add here in editor', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.contentEditorLink().click();
    page.newContentButton().click();
    page.selectPartnerValue().click();
    page.selectContentUsageValue().click();
    page.selectContentCategory().click();
    page.selectGradeValue().click();
    page.contentTopicTitle().sendKeys('Test title');
    page.contentSaveTempBtn().click();
    browser.sleep(2000);
    page.contentEditorValidtnError()
      .then(msg => expect(msg).toEqual('Please Add Some Content'))
      .then(done, done.fail);
  });

  

   it('9.Verify that user is able to publish content here', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.contentEditorLink().click();
    browser.sleep(1000);
    page.selectPartnerValue().click();
    page.filterByContentValue().click();
    page.filterByCategoryValue().click();
    browser.sleep(3500);
    page.selectPublishCheck().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('content Published Successfully'))
      .then(done, done.fail);
  });

  it('10.Verify delete functionality for contents', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.contentEditorLink().click();
    browser.sleep(1000);
    page.selectPartnerValue().click();
    page.filterByContentValue().click();
    page.filterByCategoryValue().click();
    browser.sleep(2500);
    page.deleteBtnClick().click();
    page.deleteConfirmationYes().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Content Editor Item Deleted Successfully'))
      .then(done, done.fail);
  });


});
