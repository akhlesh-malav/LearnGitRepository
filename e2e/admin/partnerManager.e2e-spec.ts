import { EnvisionAppPage } from './partnerManager.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Partner Manager', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');

    it('1.Verify that user should be reach at partner manager page when click at partner manager link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/partnerManager'))
      .then(done, done.fail);
  });

    it('2.Verify page title when user click at partner manager link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Partner Manager'))
      .then(done, done.fail);
  });

  it('3.Verify that blank partner form should be appeared here when click at new partner button', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameTextCheck()
      .then(msg => expect(msg).toEqual(''))
      .then(done, done.fail);
  });

    it('4.Verify that logo of user is uploaded successsfully', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.uploadClientLogo().click();
    var fileToUpload = 'C:/Users/allcad/Downloads/user.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    page.uploadFile().sendKeys(absolutePath);  
    page.uploadBtn().click();
     browser.sleep(4500);
    page.successMsg()
      .then(msg => expect(msg).toEqual('Logo Uploaded'))
      .then(done, done.fail);
  });

      it('5.Verify that user is able to save partner details successfully', done => {      
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com'');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    //browser.actions().doubleClick(page.uploadClientLogo()).perform();
    // page.uploadClientLogo().click();
    // var fileToUpload = 'C:/Users/allcad/Downloads/user.jpg',
    // absolutePath = path.resolve(__dirname, fileToUpload);
    // page.uploadFile().sendKeys(absolutePath);  
    // page.uploadBtn().click();
    // page.uploadClientLogo().click();
    // browser.sleep(2500);  
    page.partnerNameAbbreviation().sendKeys('testpartnerss');
    page.partnerContactFirstName().sendKeys('test');
    page.partnerContactLastName().sendKeys('testdata');
    page.partnerContactEmail().sendKeys('a@gmail.com');
    page.partnerContactPhoneNum().sendKeys('9658956230');
    page.partnerLicense().click();
    page.partnerDatbaseServer().click();
    page.partnerSaveBtn().click();
    browser.sleep(1500);
    page.successMsg()
      .then(msg => expect(msg).toEqual('Partner Detail Saved Successfully'))
      .then(done, done.fail);
  });

   it('6.Verify validtion error message on screen when partner abbreviation field value left blank during partner registration', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameAbbreviation().sendKeys('');
    page.partnerContactFirstName().sendKeys('test');
    page.partnerAbberviationError()
      .then(msg => expect(msg).toEqual('Please Enter Partner Name'))
      .then(done, done.fail);
  });

   it('7.Verify validtion error message on screen when enter alphanumeric value as partner abbreviation field value during partner registration', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameAbbreviation().sendKeys('testpartner123');
    page.partnerContactFirstName().sendKeys('test');
    browser.sleep(1500);
    page.partnerAbberviationError()
      .then(msg => expect(msg).toEqual('Please Enter Partner Name'))
      .then(done, done.fail);
  });
it('8.Verify validtion error message on screen when enter special character value as partner abbreviation field value during partner registration', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameAbbreviation().sendKeys('testpartner!@#$');
    page.partnerContactFirstName().sendKeys('test');
    browser.sleep(1500);
    page.partnerAbberviationError()
      .then(msg => expect(msg).toEqual('Please Enter Partner Name'))
      .then(done, done.fail);
  });

 it('9.Verify validtion error message on screen when partner first name field value left blank during partner registration', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameAbbreviation().sendKeys('testpartner');
    page.partnerContactFirstName().sendKeys('');
    page.tabKeyClick();
    page.partnerFirstNameError()
      .then(msg => expect(msg).toEqual('Please Enter First Name'))
      .then(done, done.fail);
  });

   it('10.Verify validtion error message on screen when enter alphanumeric value as partner first name field value during partner registration', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameAbbreviation().sendKeys('testpartner');
    page.partnerContactFirstName().sendKeys('test123');
    page.tabKeyClick();
    browser.sleep(1500);
    page.partnerFirstNameError()
      .then(msg => expect(msg).toEqual('Please Enter First Name'))
      .then(done, done.fail);
  });
it('11.Verify validtion error message on screen when enter special character value as partner first name field value during partner registration', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameAbbreviation().sendKeys('testpartner');
    page.partnerContactFirstName().sendKeys('test!@#$');
    page.tabKeyClick();
    browser.sleep(1500);
    page.partnerFirstNameError()
      .then(msg => expect(msg).toEqual('Please Enter First Name'))
      .then(done, done.fail);
  });

 it('12.Verify validtion error message on screen when partner last name field value left blank during partner registration', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameAbbreviation().sendKeys('testpartner');
    page.partnerContactFirstName().sendKeys('testdata');
    page.partnerContactLastName().sendKeys('');
    page.tabKeyClick();
    page.partnerLastNameError()
      .then(msg => expect(msg).toEqual('Please Enter Last Name'))
      .then(done, done.fail);
  });

   it('13.Verify validtion error message on screen when enter alphanumeric value as partner last name field value during partner registration', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameAbbreviation().sendKeys('testpartner');
    page.partnerContactFirstName().sendKeys('test');
    page.partnerContactLastName().sendKeys('testdata12345');
    page.tabKeyClick();
    browser.sleep(1500);
    page.partnerLastNameError()
      .then(msg => expect(msg).toEqual('Please Enter Last Name'))
      .then(done, done.fail);
  });
it('14.Verify validtion error message on screen when enter special character value as partner last name field value during partner registration', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameAbbreviation().sendKeys('testpartner');
    page.partnerContactFirstName().sendKeys('test');
    page.partnerContactLastName().sendKeys('testdata!@#$');
    page.tabKeyClick();
    browser.sleep(1500);
    page.partnerLastNameError()
      .then(msg => expect(msg).toEqual('Please Enter Last Name'))
      .then(done, done.fail);
  });

 it('15.Verify validtion error message on screen when partner email field value left blank during partner registration', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameAbbreviation().sendKeys('testpartner');
    page.partnerContactFirstName().sendKeys('testdata');
    page.partnerContactLastName().sendKeys('testdata');
     page.partnerContactEmail().sendKeys('');
    page.tabKeyClick();
    page.partnerEmailError()
      .then(msg => expect(msg).toEqual('Please Enter Valid Email'))
      .then(done, done.fail);
  });

   it('16.Verify validtion error message on screen when enter invalid email as partner email field value during partner registration', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameAbbreviation().sendKeys('testpartner');
    page.partnerContactFirstName().sendKeys('testdata');
    page.partnerContactLastName().sendKeys('testdata');
     page.partnerContactEmail().sendKeys('testemail.com');
    page.tabKeyClick();
    page.partnerEmailError()
      .then(msg => expect(msg).toEqual('Please Enter Valid Email'))
      .then(done, done.fail);
  });

 it('17.Verify validtion error message on screen when partner phone number field value left blank during partner registration', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameAbbreviation().sendKeys('testpartner');
    page.partnerContactFirstName().sendKeys('testdata');
    page.partnerContactLastName().sendKeys('testdata');
     page.partnerContactEmail().sendKeys('test@gmail.com');
     page.partnerContactPhoneNum().sendKeys('');
    page.tabKeyClick();
    page.partnerPhoneNumError()
      .then(msg => expect(msg).toEqual('Please Enter Valid Phone Number'))
      .then(done, done.fail);
  });

   it('18.Verify validtion error message on screen when enter phone number as partner phone number field value during partner registration', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.partnerManagerLink().click();
    page.newPartnerBtn().click();
    page.partnerNameAbbreviation().sendKeys('testpartner');
    page.partnerContactFirstName().sendKeys('testdata');
    page.partnerContactLastName().sendKeys('testdata');
     page.partnerContactEmail().sendKeys('test@gmail.com');
     page.partnerContactPhoneNum().sendKeys('1234567897');
    page.tabKeyClick();
    page.partnerPhoneNumError()
      .then(msg => expect(msg).toEqual('Please Enter Valid Phone Number'))
      .then(done, done.fail);
  });
});
