import { EnvisionAppPage } from './parentHome.po';
import {  browser, element, by, By, $, $$, ExpectedConditions}from 'protractor';  

describe('Student Epic - Home Page', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    //browser.ignoreSynchronization = true;
    page = new EnvisionAppPage();
  });

  it('1.Verify that user is able to reach at home page after login successfully', done=> {
    page.navigateTo();
    let username = page.userName();
    let password = page.passWord();
    page.getEmailAddress().sendKeys(username);
    page.getPassword().sendKeys(password);
    page.signIn().click();
    browser.sleep(3500);
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/parent/home'))
      .then(done, done.fail);
  });


  it('2.Verify home page title whem user click at parent home link at menu', done=> {
   page.navigateTo();
    // browser.sleep(4000);
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.parentHomeLink().click();
    page.homePageTitle()
      .then(msg => expect(msg).toEqual('Home'))
      .then(done, done.fail);
  });

  it('3.Verify home page url when user click at parent home link at menu', done=> {
    page.navigateTo();
    // browser.sleep(4000);
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.parentHomeLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/parent/home'))
      .then(done, done.fail);
  });

  it('4.Verify plan progress tab functionlaity at parent home page ', () => {
    page.navigateTo();
    // browser.sleep(4000);
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.parentHomeLink().click();
    page.planProgressLink().click();
    expect(page.backButtonText2()).toEqual('Back');
    expect(page.currentUrl()).toEqual('http://envision-test/#/parent/home');
  });

   it('5.Verify back button functionality at parent home page', () => {
    page.navigateTo();
    // browser.sleep(4000);
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.parentHomeLink().click();
    page.planProgressLink().click();
    page.backButtonText().click();
    expect(page.backButtonText2()).toEqual('');
    expect(page.currentUrl()).toEqual('http://envision-test/#/parent/home');
  });

   it('6.Verify summary data when click at summary tab at plan progress ', done => {
    page.navigateTo();
    // browser.sleep(4000);
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.parentHomeLink().click();
    page.planProgressLink().click();
    page.summaryContainerText()
      .then(msg => expect(msg).toMatch('Average time of website session'))
      .then(done, done.fail);
  });

  it('7.Verify heat map link tab is clickable or not at plan progress ', done => {
    page.navigateTo();
    // browser.sleep(4000);
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.parentHomeLink().click();
    page.planProgressLink().click();
    page.tabKeyClick();
    page.rightArrowKey();
    page.enterArrowKey();
    page.heatMapText()
      .then(msg => expect(msg).toMatch("Your Student's Heat Map"))
      .then(done, done.fail);
  });

   it('8.Verify message link tab is clickable or not at plan progress ', done => {
    page.navigateTo();
    // browser.sleep(4000);
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.parentHomeLink().click();
    page.planProgressLink().click();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    page.messageTabText()
      .then(msg => expect(msg).toMatch("My Messages"))
      .then(done, done.fail);
  });

      it('9.Verify calender link tab is clickable or not at plan progress ', done => {
    page.navigateTo();
    // browser.sleep(4000);
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.parentHomeLink().click();
    page.planProgressLink().click();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    page.calenderText()
      .then(msg => expect(msg).toMatch("Upcoming Important Dates and events"))
      .then(done, done.fail);
  });

    it('10.Verify career link tab is clickable or not at plan progress ', done => {
    page.navigateTo();
    // browser.sleep(4000);
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.parentHomeLink().click();
    page.planProgressLink().click();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    page.careerText()
      .then(msg => expect(msg).toMatch("Student List"))
      .then(done, done.fail);
  });

 it('11.Verify college link tab is clickable or not at plan progress ', done => {
    page.navigateTo();
    // browser.sleep(4000);
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(12000);
    page.menuClick().click();
    browser.sleep(12000);
    page.parentHomeLink().click();
    page.planProgressLink().click();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    page.collgeText()
      .then(msg => expect(msg).toMatch("My Saved Colleges How it works !"))
      .then(done, done.fail);
  });



});
