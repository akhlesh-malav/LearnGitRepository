import { EnvisionAppPage } from './contentMapper.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Plan Manager - Mapped Content List', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');



    it('1.Verify that user should be reach at Content Mapper page when click at  Content Mappert link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.contentMapperLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/contentMapper'))
      .then(done, done.fail);
  });

    it('2.Verify page title when user click at Content Mapper page', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.contentMapperLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Content Mapper'))
      .then(done, done.fail);
  });

      it('3.Verify save functionlaity for conetent mapper', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.contentMapperLink().click();
    page.selectPartnerValue().click();
    page.selectBrickCategoryValue().click();
    page.selectBrickValue().click();
    page.selectContentTemplateValue().click();
    page.saveBtnContentMapper().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Content Mapper Saved Successfully'))
      .then(done, done.fail);
  });


});