import { EnvisionAppPage } from './heatMap.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Plan Manager - Heat Map', () => {
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
    page.heatMapLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/heatMap'))
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
    page.heatMapLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Heat Map'))
      .then(done, done.fail);
  });

     it('3.Verify page title when user click at Mapped Content List page', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.brickManagerLink().click();
    page.selectBrickCategory().click();
    page.brickDataTextbox().sendKeys('brickss to test');
    page.brickRankTextbox().sendKeys('2');
    page.selectTempThirdQuater().click();
    page.selectTempFouthQuater().click();
    page.selectActiveChkbox().click();
    page.saveBtnBrickData().click();
    browser.sleep(2000);
    page.heatMapLink().click();
    page.clicktTransfer().click();
    page.clickFourthQuater().click();
    browser.sleep(2000);
    page.verifyBrickText()
      .then(msg => expect(msg).toEqual('brickss to test'))
      .then(done, done.fail);
  });


});