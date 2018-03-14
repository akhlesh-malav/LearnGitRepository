import { EnvisionAppPage } from './stuTestScore.po';
import {  browser, element, by, By, $, $$, ExpectedConditions}from 'protractor';  

describe('Career Page - envision app ', () => {

  let page: EnvisionAppPage;

  beforeEach(() => {
     browser.driver.manage().window().maximize();
    // browser.ignoreSynchronization = true;
     page = new EnvisionAppPage();
  });

 

  it('1.should reach at test score page when click at test score link', done => {

    page.navigateTo();
    browser.sleep(4000);
    let username = page.userName();
    let password = page.passWord();
    let testScoreUrl = page.testScoreUrlData();
    page.getEmailAddress().sendKeys(username);
    page.getPassword().sendKeys(password);
    page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.studentProfilePage().click();
    browser.sleep(15000);
    page.stuTestScoreLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/student/testScores'))
      .then(done, done.fail);
  });

    it('2.verify page title when user click as test score link', done => {

    page.navigateTo();
    //browser.sleep(4000);
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.studentProfilePage().click();
    browser.sleep(15000);
    page.stuTestScoreLink().click();
    page.pageTitle()
      .then(msg => expect(msg).toEqual('Test Scores'))
      .then(done, done.fail);
  });


it('3.check user is able to save test score options ', done => {

    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(10000);
    page.menuClick().click();
    browser.sleep(10000);
    page.studentProfilePage().click();
    browser.sleep(12000);
    page.stuTestScoreLink().click();
    page.unweightedValue().clear();
    page.unweightedValue().sendKeys('23');
    page.checkHonorLabel().click();
    browser.sleep(2000);
    page.saveButtonclick().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Data Saved Successfully !!'))
      .then(done, done.fail);
  });

  it('4.Verify user is able to click at PSAT scores data ', done => {

    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(10000);
    page.menuClick().click();
    browser.sleep(10000);
    page.studentProfilePage().click();
    browser.sleep(12000);
    page.stuTestScoreLink().click();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.executeScript('window.scrollTo(0,500);');
    //page.menuClick().click();
    browser.sleep(5500);
    page.psatReadWriteValue().clear();
    page.psatReadWriteValue().sendKeys('25');
    page.psatMathsValue().clear();
    page.psatMathsValue().sendKeys('75');
    // page.psatTotalValue().clear();
    // page.psatTotalValue().sendKeys('100');
    //page.psatGradeLevel().click();
    browser.sleep(5000);
    page.psatDateValue().sendKeys('8/22/2017');
    browser.sleep(7500);
    page.psatSaveClick().click();
    page.successMsg()
       .then(msg => expect(msg).toEqual('Your Score Saved Successfully'))
       .then(done, done.fail);
  });

  it('5.Verify user is able to click at Pre ACT score data ', done => {

    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(10000);
    page.menuClick().click();
    browser.sleep(10000);
    page.studentProfilePage().click();
    browser.sleep(12000);
    page.stuTestScoreLink().click();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.executeScript('window.scrollTo(0,500);');
    browser.sleep(2000);
    page.preActEnglishValue().sendKeys('23');
    page.preActMathsValue().sendKeys('24');
    page.preActReadValue().sendKeys('35');
    page.preActScienceValue().sendKeys('36');
    //page.preActCompositeValue().sendKeys('67');
    page.preActGradeValue().click();
    browser.sleep(3000);
    page.preActDateValue().sendKeys('8/22/2017');
    browser.sleep(10500);
    page.preActSave().click();
    page.successMsg()
       .then(msg => expect(msg).toEqual('Your Score Saved Successfully'))
       .then(done, done.fail);
  });

    it('6.Verify user is able to click at  ACT score data ', done => {

    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(10000);
    page.menuClick().click();
    browser.sleep(10000);
    page.studentProfilePage().click();
    browser.sleep(12000);
    page.stuTestScoreLink().click();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.executeScript('window.scrollTo(0,500);');
    browser.sleep(2500);
    page.actEnglishValue().sendKeys('23');
    page.actMathsValue().sendKeys('34');
    page.actReadValue().sendKeys('45');
    page.actSciencevalue().sendKeys('56');
    //page.actCompositeValue().sendKeys('67');
    page.actwritingValue().click();
    browser.sleep(2000);
    page.actGradeValue().click();
    browser.sleep(2000);
    page.actDateValue().sendKeys('8/22/2017');
    browser.sleep(2500);
    page.actSave().click();
    page.successMsg()
       .then(msg => expect(msg).toEqual('Your Score Saved Successfully'))
       .then(done, done.fail);
  });

 

       it('7.Verify user is able to click at  SAT score data ', done => {

    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(10000);
    page.menuClick().click();
    browser.sleep(10000);
    page.studentProfilePage().click();
    browser.sleep(12000);
    page.stuTestScoreLink().click();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.executeScript('window.scrollTo(0,500);');
    page.menuClick().click();
    browser.sleep(3500);
    page.satReadWriteValue().sendKeys('22');
    page.satMathsValue().sendKeys('22');
    page.satEassyValue().click();
    page.satGradeLevel().click();
    page.satTestDate().sendKeys('8/22/2017');
    page.satSaveData().click();
    browser.sleep(3500);
    page.successMsg()
       .then(msg => expect(msg).toEqual('Your Score Saved Successfully'))
       .then(done, done.fail);
  });

       it('8.Verify user is able to click at  SAT Subjects score data ', done => {

    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(10000);
    page.menuClick().click();
    browser.sleep(10000);
    page.studentProfilePage().click();
    browser.sleep(12000);
    page.stuTestScoreLink().click();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.executeScript('window.scrollTo(0,500);');
    browser.sleep(3500);
    page.satSubjectsScoreValue().sendKeys('234');
    page.satSubjectValue().click();
    page.satSubjectsDateValue().sendKeys('8/22/2017');
    page.satSubjectSave().click();
    page.successMsg()
       .then(msg => expect(msg).toEqual('Your Score Saved Successfully'))
       .then(done, done.fail);
  });


       it('9.Verify user is able to click at  AP score data ', (done) => {

  page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(10000);
    page.menuClick().click();
    browser.sleep(10000);
    page.studentProfilePage().click();
    browser.sleep(12000);
    page.stuTestScoreLink().click();
    browser.sleep(2500);
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    //page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.executeScript('window.scrollTo(0,500);');
    browser.sleep(3500);
    page.apSubjectValue().click();
    page.apScoreValue().sendKeys('234');
    page.apDateValue().sendKeys('8/22/2017');
    page.apSave().click();
    page.successMsg()
       .then(msg => expect(msg).toEqual('Your Score Saved Successfully'))
       .then(done, done.fail);
  });

});
