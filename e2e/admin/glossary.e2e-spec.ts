import { EnvisionAppPage } from './glossary.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Glossary', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');

    it('1.Verify that user should be reach at glosaary page when click at glossary link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.glossaryLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/glossary'))
      .then(done, done.fail);
  });

    it('2.Verify page title when user click at glosaary link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.glossaryLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Glossary'))
      .then(done, done.fail);
  });

  it('3.Verify that glossary terms are dispalying as per selected tab', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.glossaryLink().click();
    page.glossaryClickAll().click();
    browser.sleep(2500);
    page.gridGlossaryTexts()
      .then(msg => expect(msg).toMatch('a'))
      .then(done, done.fail);
  });

   it('4.Verify that delete functionality at glossary fro terms', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.glossaryLink().click();
    page.glossaryClickAll().click();
    page.deleteGlossaryTerm().click();
    browser.sleep(2500);
    page.successMsg()
      .then(msg => expect(msg).toMatch('Term Deleted Successfully'))
      .then(done, done.fail);
  });

 it('5.Verify searching functionlaity for glossary terms', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.glossaryLink().click();
    page.searchTextBox().sendKeys('test');
    page.searchBtnClick().click();
    //page.glossaryClickAll().click();/
    browser.sleep(2500);
    page.gridGlossaryTexts()
      .then(msg => expect(msg).toMatch('test'))
      .then(done, done.fail);
  });

 it('6.Verify terms list when user click at any tab after searching', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.glossaryLink().click();
    page.searchTextBox().sendKeys('test');
    page.searchBtnClick().click();
    page.glossaryClickAll().click();
    page.glossaryClickA().click();
    browser.sleep(2500);
    page.gridGlossaryTexts()
      .then(msg => expect(msg).toMatch('a'))
      .then(done, done.fail);
  });
 

});
