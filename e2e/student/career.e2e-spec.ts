import { EnvisionAppPage } from './career.po';
import {  browser, element, by, By, $, $$, ExpectedConditions}from 'protractor';  

describe('Student Epic - Career Page', () => {
  let page: EnvisionAppPage;
  

  beforeEach(() => {
    page = new EnvisionAppPage();

  });

 

  it('1.should reach at career explore page', done => {

    page.navigateTo();
    let username = page.userName();
    let password = page.passWord();
    page.getEmailAddress().sendKeys(username);
    page.getPassword().sendKeys(password);
    page.signIn().click();
    browser.sleep(2500);
    page.menuClick().click();
    browser.sleep(4500);
    page.careerLink().click();
    browser.sleep(2500);
    page.careerExploreLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/student/explore'))
      .then(done, done.fail);
  });

   it('2.Verify user is able to pin career option from explore page', done => {

    page.navigateTo();
    // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    browser.sleep(4500);
    page.menuClick().click();
    browser.sleep(3500);
    page.careerLink().click();
    browser.sleep(4500);
    page.careerExploreLink().click()
    browser.sleep(3500);
    page.careerToggleLink().click();
    browser.sleep(3500);
    page.selectCareerOption1().click(); 
    page.selectCareerOption2().click();
    browser.sleep(2500);
    page.successMsg()
      .then(msg => expect(msg).toEqual('Career Pinned Successfully'))
      .then(done, done.fail);
  });

      it('3.Verify user is able to un-pin career option from list', done => {

    page.navigateTo();
    // page.getEmailAddress().sendKeys('kaustav.mishra@gmail.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    browser.sleep(1500);
    page.menuClick().click();
    browser.sleep(4500);
    page.careerLink().click();
    browser.sleep(3500);
    page.careerExploreLink().click()
    browser.sleep(3500);
    page.careerToggleLink().click();
    browser.sleep(3500);
    page.selectCareerOption1().click();
    browser.sleep(2500);
    page.successMsg()
      .then(msg => expect(msg).toEqual('Career Un-Pinned Successfully'))
      .then(done, done.fail);
  });

  it('4.Verify user is able reach at my career page ', done => {

    page.navigateTo();
    // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    browser.sleep(1500);
    page.menuClick().click();
    browser.sleep(1500);
    page.careerLink().click();
    browser.sleep(1500);
    page.myCareerLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/student/myCareers'))
      .then(done, done.fail);
  });

  it('5.Verify user is able to mention comments at my career list ', done => {

    page.navigateTo();
    // page.getEmailAddress().sendKeys('kaustav.mishra@gmail.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    browser.sleep(1500);
    page.menuClick().click();
    browser.sleep(1500);
    page.careerLink().click();
    browser.sleep(1000);
    page.myCareerLink().click();
    browser.sleep(1000);
    page.editLinkMyCareerList().click();
    page.inputMycomment().clear();
    page.inputMycomment().sendKeys('This is test comment');
    browser.sleep(1000);
    page.saveUpdatedMyComments().click();
    browser.sleep(1000);
    page.successMsg()
      .then(msg => expect(msg).toEqual('Career Updated Successfully'))
      .then(done, done.fail);
  });

    it('6.Verify user is able to delete selected career from my career list ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('kaustav.mishra@gmail.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    browser.sleep(1500);
    page.menuClick().click();
    browser.sleep(1500);
    page.careerLink().click();
    browser.sleep(1000);
    page.myCareerLink().click();
    browser.sleep(1000);
    page.deleteCareer().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Career Un-Pinned Successfully'))
      .then(done, done.fail);
  });

});
