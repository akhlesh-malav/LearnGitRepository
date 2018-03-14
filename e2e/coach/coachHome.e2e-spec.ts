import { EnvisionAppPage } from './coachHome.po';
import {  browser, element, by, By, $, $$, ExpectedConditions}from 'protractor';  

describe('Student Epic - Home Page', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    //browser.ignoreSynchronization = true;
    page = new EnvisionAppPage();
  });

  it('1.Verify that user is able to reach at coach home page after login successfully', done=> {
    page.navigateTo();
    let username = page.userName();
    let password = page.passWord();
    page.getEmailAddress().sendKeys(username);
    page.getPassword().sendKeys(password);
    page.signIn().click();
    browser.sleep(3500);
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/coach/home'))
      .then(done, done.fail);
  });


  it('2.Verify home page title whem user click at coach home link at menu', done=> {
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
    page.coachHomeLink().click();
    page.PageTitle()
      .then(msg => expect(msg).toEqual('Home'))
      .then(done, done.fail);
  });

  it('3.Verify home page url when user click at coach home link at menu', done=> {
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
    page.coachHomeLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/coach/home'))
      .then(done, done.fail);
  });

 it('4.Verify coach home page conetents when open coach home page link', ()=> {
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
    page.coachHomeLink().click();
    expect(page.coachHomeContents1()).toMatch('Students')
    expect(page.coachHomeContents2()).toMatch('My Favorites:')
  });



});
