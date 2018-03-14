import { EnvisionAppPage } from './messages.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Messages', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');

    it('1.Verify that user should be reach at message page when click at security link', done => {
     page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.messageLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/message'))
      .then(done, done.fail);
  });

    it('2.Verify page title when user click at message page', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.messageLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Message'))
      .then(done, done.fail);
  });


    it('3.Verify send message functionality ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.messageLink().click();
    page.selectPartner().click();
    page.addDocumentBtn().click();
    browser.sleep(1000);
    var fileToUpload = 'C:/Users/allcad/Downloads/user.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    page.selectFileForUpload().sendKeys(absolutePath);  
    browser.sleep(2000);
    page.selectDocType().click(); 
    browser.sleep(2000);
    page.uploadBtn().click();
    browser.sleep(2500);
    page.messageSubject().sendKeys('test subject');
    page.messageDetails().sendKeys('this is test details for email');
    page.sendBtn().click();
    browser.sleep(2500);
    page.successMsg()
      .then(msg => expect(msg).toEqual('message data saved successfully'))
      .then(done, done.fail);
  });

    it('4.Verify that admin is able to reply coach messages', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.messageLink().click();
    page.selectPartner().click();
    page.selectMessgaeForrply().click();
    browser.sleep(2500);
    page.messageSubject().sendKeys('test subject');
    page.messageDetails().sendKeys('this is test details for email');
    page.sendBtn().click();
    browser.sleep(1500);
    page.successMsg()
      .then(msg => expect(msg).toEqual('message data saved successfully'))
      .then(done, done.fail);
  });
   
});
