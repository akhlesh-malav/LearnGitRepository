import { EnvisionAppPage } from './brickManager.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Plan Manager - Brick Manager', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');

    it('1.Verify that user should be reach at plan manager page when click at plan manager link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/planManager'))
      .then(done, done.fail);
  });

    it('2.Verify page title when user click at plan manager page', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Plan Manager'))
      .then(done, done.fail);
  });


    it('3.Verify that user should be reach at brick manager page when click at  brick manager link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.brickManagerLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/brickManager'))
      .then(done, done.fail);
  });

    it('4.Verify page title when user click at brick manager page', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.brickManagerLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Brick Manager'))
      .then(done, done.fail);
  });

    it('5.Verify new button functionality of brick manager page', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.brickManagerLink().click();
    page.brickDataTextbox().sendKeys('test brick');
    page.newBtnBrickManger().click();
    page.brickDataTextboxData()
      .then(msg => expect(msg).toEqual(''))
      .then(done, done.fail);
  });

     it('6.Verify save button functionality of brick manager page', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.brickManagerLink().click();
    page.selectBrickCategory().click();
    page.brickDataTextbox().sendKeys('test data brick');
    page.brickRankTextbox().sendKeys('2');
    page.selectEightGradeQuater().click();
    page.selectFreshmanFourthQuater().click();
    page.saveBtnBrickData().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Bricks Data Saved Successfully'))
      .then(done, done.fail);
  });

   it('7.Verify update  functionality of brick manager', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.brickManagerLink().click();
    page.selectBrickRowData().click();
    browser.sleep(3500);
    page.selectBrickCategory().click();
    page.brickDataTextbox().clear();
    page.brickDataTextbox().sendKeys('Read Study Tip..');
    page.saveBtnBrickData().click();
    browser.sleep(2000);
    page.successMsg()
      .then(msg => expect(msg).toEqual('Bricks Data Saved Successfully'))
      .then(done, done.fail);
  });

     it('8.Verify delete  functionality of brick manager', done => {
    page.navigateTo();
    page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    page.getPassword().sendKeys('kaustav@123');
    page.signIn().click();
    browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.brickManagerLink().click();
    browser.sleep(3500);
    browser.executeScript('window.scrollTo(0,500);');
    //sbrowser.sleep(1500);
    page.deleteBtnClick().click();
    page.deleteConfirmationYes().click();
    //browser.sleep(2000);
    page.successMsg()
      .then(msg => expect(msg).toEqual('Bricks Data Deleted Successfully'))
      .then(done, done.fail);
  });

       it('9.Verify validation error message when brick category is not selected', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.brickManagerLink().click();
    //page.selectBrickCategory().click();
    page.brickDataTextbox().sendKeys('test brick');
    page.brickRankTextbox().sendKeys('2');
    page.selectEightGradeQuater().click();
    page.selectFreshmanFourthQuater().click();
    page.saveBtnBrickData().click();
    page.brickCategoryValidatnError()
      .then(msg => expect(msg).toEqual('Please Select a category'))
      .then(done, done.fail);
  });

        it('10.Verify validation error message when brick name is not entered', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.brickManagerLink().click();
    page.selectBrickCategory().click();
    //page.brickDataTextbox().sendKeys('test brick');
    page.brickRankTextbox().sendKeys('2');
    page.selectEightGradeQuater().click();
    page.selectFreshmanFourthQuater().click();
    page.saveBtnBrickData().click();
    page.brickNameValidatnError()
      .then(msg => expect(msg).toEqual('Please Enter Brick Name'))
      .then(done, done.fail);
  });

       it('11.Verify validation error message when brick rank is not enetred', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.planManagerLink().click();
    page.brickManagerLink().click();
    page.selectBrickCategory().click();
    page.brickDataTextbox().sendKeys('test brick');
    //page.brickRankTextbox().sendKeys('2');
    page.selectEightGradeQuater().click();
    page.selectFreshmanFourthQuater().click();
    page.saveBtnBrickData().click();
    page.brickRankValidatnError()
      .then(msg => expect(msg).toEqual('Please Enter Rank'))
      .then(done, done.fail);
  });


});