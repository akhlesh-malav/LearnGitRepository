import { EnvisionAppPage } from './accountSearch.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Messages', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');

  //   it('1.Verify that user should be reach at account search page when click at account search link', done => {
  //   page.navigateTo();
  //   let username = page.userName();
  //   let password = page.passWord();
  //   page.getEmailAddress().sendKeys(username);
  //   page.getPassword().sendKeys(password);
  //   page.signIn().click();
  //   browser.sleep(3000);
  //   page.menuClick().click();
  //   page.accountSearchLink().click();
  //   page.currentUrl()
  //     .then(msg => expect(msg).toEqual('http://envision-test/#/coach/accountSearch'))
  //     .then(done, done.fail);
  // });

  //   it('2.Verify account search page title ', done => {
  //   page.navigateTo();
  //   // let username = page.userName();
  //   // let password = page.passWord();
  //   // page.getEmailAddress().sendKeys(username);
  //   // page.getPassword().sendKeys(password);
  //   // page.signIn().click();
  //   browser.sleep(3000);
  //   page.menuClick().click();
  //   page.accountSearchLink().click();
  //   page.pageTitleText()
  //     .then(msg => expect(msg).toEqual('Account Search'))
  //     .then(done, done.fail);
  // });

  //   it('3.Verify account search functionality using name of registered user', done => {
  //   page.navigateTo();
  //   let username = page.userName();
  //   let password = page.passWord();
  //   page.getEmailAddress().sendKeys(username);
  //   page.getPassword().sendKeys(password);
  //   page.signIn().click();
  //   browser.sleep(3000);
  //   page.menuClick().click();
  //   page.accountSearchLink().click();
  //   page.nameAccountSearch().sendKeys('sandeep akki')
  //   page.searchBtn().click();
  //   browser.sleep(2500);
  //   page.verifyEmailId()
  //     .then(msg => expect(msg).toEqual('sandeepc@techvedhas.com'))
  //     .then(done, done.fail);
  // });


  //   it('4.Verify account search functionality using registered email', done => {
  //   page.navigateTo();
  //   // let username = page.userName();
  //   // let password = page.passWord();
  //   // page.getEmailAddress().sendKeys(username);
  //   // page.getPassword().sendKeys(password);
  //   // page.signIn().click();
  //   browser.sleep(3000);
  //   page.menuClick().click();
  //   page.accountSearchLink().click();
  //   page.emailAccountSearch().sendKeys('sandeepc@techvedhas.com')
  //   page.searchBtn().click();
  //   browser.sleep(2500);
  //   page.verifyEmailId()
  //     .then(msg => expect(msg).toEqual('sandeepc@techvedhas.com'))
  //     .then(done, done.fail);
  // });

  // it('5.Verify account search functionality using  registered phone number', done => {
  //   page.navigateTo();
  //   // let username = page.userName();
  //   // let password = page.passWord();
  //   // page.getEmailAddress().sendKeys(username);
  //   // page.getPassword().sendKeys(password);
  //   // page.signIn().click();
  //   browser.sleep(3000);
  //   page.menuClick().click();
  //   page.accountSearchLink().click();
  //   page.phoneAccountSearch().sendKeys('9581622468')
  //   page.searchBtn().click();
  //   browser.sleep(2500);
  //   page.verifyPhoneNum()
  //     .then(msg => expect(msg).toEqual('9581622468'))
  //     .then(done, done.fail);
  // });

  //   it('6.Verify account search functionality usingregistered client id', done => {
  //   page.navigateTo();
  //   // let username = page.userName();
  //   // let password = page.passWord();
  //   // page.getEmailAddress().sendKeys(username);
  //   // page.getPassword().sendKeys(password);
  //   // page.signIn().click();
  //   browser.sleep(3000);
  //   page.menuClick().click();
  //   page.accountSearchLink().click();
  //   page.clientIdAccountSearch().sendKeys('2587412589')
  //   page.searchBtn().click();
  //   browser.sleep(2500);
  //   page.verifyClientId()
  //     .then(msg => expect(msg).toEqual('2587412589'))
  //     .then(done, done.fail);
  // });

  // it('7.Verify account search functionality using  parent checkboc option', done => {
  //   page.navigateTo();
  //   // let username = page.userName();
  //   // let password = page.passWord();
  //   // page.getEmailAddress().sendKeys(username);
  //   // page.getPassword().sendKeys(password);
  //   // page.signIn().click();
  //   browser.sleep(3000);
  //   page.menuClick().click();
  //   page.accountSearchLink().click();
  //   page.parentChkboxAccountSearch().click();
  //   page.searchBtn().click();
  //   browser.sleep(2500);
  //   page.verifyParentChkbox()
  //     .then(msg => expect(msg).toEqual('Parent'))
  //     .then(done, done.fail);
  // });


    it('8.Verify account search functionality using name of registered user', done => {
    page.navigateTo();
    let username = page.userName();
    let password = page.passWord();
    page.getEmailAddress().sendKeys(username);
    page.getPassword().sendKeys(password);
    page.signIn().click();
    browser.sleep(3000);
    page.menuClick().click();
    page.accountSearchLink().click();
    page.nameAccountSearch().sendKeys('sandeep akki')
    page.searchBtn().click();
    browser.sleep(2500);
    page.clickEmailId().click();
    browser.sleep(150000);
    page.studentNameVerification()
      .then(msg => expect(msg).toEqual('sandeep akki'))
      .then(done, done.fail);
  });


});
