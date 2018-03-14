import { EnvisionAppPage } from './mappedContentList.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Plan Manager - Mapped Content List', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');



    it('1.Verify that user should be reach at Mapped Content List page when click at  Mapped Content List link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.mappedContentListLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/mappedContentList'))
      .then(done, done.fail);
  });

    it('2.Verify page title when user click at Mapped Content List page', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.mappedContentListLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Mapped Content List'))
      .then(done, done.fail);
  });

      it('3.Verify save functionlaity of new content map button', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.mappedContentListLink().click();
    page.selectPartnerValue().click();
    page.newContentMapButton().click();
    browser.sleep(2500);
    page.selectPartnerValue().click();
    page.selectBrickCategoryValue().click();
    page.selectBrickValue().click();
    page.selectContentTemplateValue().click();
    page.saveBtnContentMapper().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Content Mapper Saved Successfully'))
      .then(done, done.fail);
  });


      it('4.Verify that mappedcontent list is rendering as per selected category ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.mappedContentListLink().click();
    browser.sleep(1500);
    page.selectPartnerValue().click();
    page.selectCategoryClick().click();
    page.downArrowKey();
    page.enterArrowKey();
    browser.sleep(5500);
    page.selectedMappedContentListData()
      .then(msg => expect(msg).toEqual('Student Success'))
      .then(done, done.fail);
  });

     it('5.Verify delete functionality for content mapped data list', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.mappedContentListLink().click();
    page.selectPartnerValue().click();
    browser.sleep(2500);
    page.deleteMappedContentDataList().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Content Mapper Deleted Successfully'))
      .then(done, done.fail);
  });


      it('6.Verify update functionality for mapped content ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.mappedContentListLink().click();
    browser.sleep(1500);
    page.selectRowData().click();
    page.updateContentTemplate().click();
    browser.sleep(1500);
    page.saveBtnContentMapper().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Content Mapper Saved Successfully'))
      .then(done, done.fail);
  });
 
});