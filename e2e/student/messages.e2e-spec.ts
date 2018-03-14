import { EnvisionAppPage } from './messages.po';
import {  browser, element, by, By, $, $$, ExpectedConditions}from 'protractor';  
describe('Student Epic - Messages', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');

  it('1.Verify message page title whem user click at message link at menu', done=> {
    page.navigateTo();
    let username = page.userName();
    let password = page.passWord();
    page.getEmailAddress().sendKeys(username);
    page.getPassword().sendKeys(password);
    page.signIn().click();
    browser.sleep(1500);
    page.menuClick().click();
    browser.sleep(1500);
    page.MessagePageLink().click();
    page.messagePageTitle()
      .then(msg => expect(msg).toEqual('Messages'))
      .then(done, done.fail);
  });

  it('2.Verify message page url when user click at message link at menu', done=> {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(1500);
    page.menuClick().click();
    browser.sleep(1500);
    page.MessagePageLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/student/messages'))
      .then(done, done.fail);
  });

    it('3.Verify document upload functionality', done=> {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(1500);
    page.menuClick().click();
    browser.sleep(1500);
    page.MessagePageLink().click();
   
    page.clickDocUpload().click();
    browser.sleep(1000);
    var fileToUpload = 'C:/Users/allcad/Downloads/user.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    page.selectFileForUpload().sendKeys(absolutePath);  
    browser.sleep(2000);
    page.selectDoctype().click(); 
    browser.sleep(2000);
    page.uploadButton().click();
    browser.sleep(1000);
    page.successMsg()
      .then(msg => expect(msg).toEqual('Document Uploaded Successfully !!'))
      .then(done, done.fail);
  });

       it('4.Verify send message functionality from message page', done=> {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(2500);
    page.menuClick().click();
    browser.sleep(1500);
    page.MessagePageLink().click();
    page.clickDocUpload().click();
    browser.sleep(1000);
    var fileToUpload = 'C:/Users/allcad/Downloads/user.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    page.selectFileForUpload().sendKeys(absolutePath);  
    browser.sleep(2000);
    page.selectDoctype().click(); 
    browser.sleep(2000);
    page.uploadButton().click();
    browser.sleep(2500);
    page.messageTopic().sendKeys('test subject');
    page.messageContent().sendKeys('test content data');
    browser.sleep(5500);
    page.sendBtnText().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('message data saved successfully'))
      .then(done, done.fail);
  });




});
