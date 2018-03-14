import { EnvisionAppPage } from './securityUser.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Security - Users', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');

  //   it('1.Verify that user should be reach at Reference List page when click at security link', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   page.currentUrl()
  //     .then(msg => expect(msg).toEqual('http://envision-test/#/admin/users'))
  //     .then(done, done.fail);
  // });

  //   it('2.Verify page title when user click at security link', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   page.pageTitleText()
  //     .then(msg => expect(msg).toEqual('Users'))
  //     .then(done, done.fail);
  // });

  //   it('3.Verify searching functionality for users', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.firstNameSearch().sendKeys('test');
  //   page.searchUserBtnClick().click();
  //   browser.sleep(2500);
  //   page.firstNameValue()
  //     .then(msg => expect(msg).toMatch('test'))
  //     .then(done, done.fail);
  // });

  //     it('4.Verify clear search  functionality for users', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.firstNameTextForClear().sendKeys('test');
  //   page.clearSearchButton().click();
  //   browser.sleep(2500);
  //   page.firstNameTextValueForClear()
  //     .then(msg => expect(msg).toEqual(''))
  //     .then(done, done.fail);
  // });

  //      it('5.Verify that new user blank form is appearing or not when click at new user button', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userFromFirstNameFieldValue()
  //     .then(msg => expect(msg).toEqual(''))
  //     .then(done, done.fail);
  // });

  //       it('6.Verify that user is able to save user form data', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   //page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.uploadBtnAvtar().click();
  //   var fileToUpload = 'C:/Users/allcad/Downloads/user.jpg',
  //   absolutePath = path.resolve(__dirname, fileToUpload);
  //   page.uploadAvtarInputData().sendKeys(absolutePath);
  //  // page.uplodaAvtarFinalBtn().click();
  //   browser.sleep(2000);
  //   page.userClientId().sendKeys('12121');
  //   page.userFirstName().sendKeys('test');
  //   page.userLastName().sendKeys('data');
  //   page.userPhone().sendKeys('1234567898');
  //   page.userMailId().sendKeys('abc@gmail.com');
  //   page.userRole().click();
  //   page.userStatus().click();
  //   page.userSaveBtn().click();
  //   page.successMsg()
  //     .then(msg => expect(msg).toEqual('User Data Saved Successfully'))
  //     .then(done, done.fail);
  // });

  //       it('7.Verify delete functionality for users', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   browser.sleep(3500);
  //   //page.lastLinkPagination().click();.
  //   page.deleteBtn().click();
  //   page.deleteYesBtn().click();
  //   page.successMsg()
  //     .then(msg => expect(msg).toEqual('User Data Delete Successfully'))
  //     .then(done, done.fail);
  // });

  //         it('8.Verify bulk import button functionality here', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.bulkImportBtn().click();
  //   browser.sleep(5000);
  //   //page.lastLinkPagination().click();.
  //   var fileToUpload = 'C:/Users/allcad/Downloads/DataFile(1).xlsx',
  //     absolutePath = path.resolve(__dirname, fileToUpload);
  //   page.inputFile().sendKeys(absolutePath);  
  //   browser.sleep(2000);
  //   page.uploadBtnClick().click();
  //   page.successMsg()
  //     .then(msg => expect(msg).toEqual('File uploaded Successfully'))
  //     .then(done, done.fail);
  // });

  //    it('9.Verify error message when user left client id blank during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().click();
  //   page.tabKeyClick();
  //   page.clientIdError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid Client ID'))
  //     .then(done, done.fail);
  // });

  // it('10.Verify error message when user enter alphanumeric value for client id during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('abc123');
  //   page.tabKeyClick();
  //   page.clientIdError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid Client ID'))
  //     .then(done, done.fail);
  // });

  //   it('11.Verify error message when user enter character or alphabatic value for client id during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('abc');
  //   page.tabKeyClick();
  //   page.clientIdError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid Client ID'))
  //     .then(done, done.fail);
  // });

  //    it('12.Verify error message when user enter special character value for client id during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('@#$%^');
  //   page.tabKeyClick();
  //   page.clientIdError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid Client ID'))
  //     .then(done, done.fail);
  // });


  //      it('13.Verify validation error message when first name left blank during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('12121');
  //   page.userFirstName().click();
  //   page.tabKeyClick();
  //   browser.sleep(1500);
  //   page.firstNameError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid First Name'))
  //     .then(done, done.fail);
  // });

  //         it('14.Verify validation error message when enter numeric value as first name  during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('12121');
  //   page.userFirstName().sendKeys('12345');
  //   page.tabKeyClick();
  //    browser.sleep(1500);
  //   page.firstNameError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid First Name'))
  //     .then(done, done.fail);
  // });

  //        it('15.Verify validation error message when enter alphanumeric value as first name  during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('12123');
  //   page.userFirstName().sendKeys('tst123');
  //   page.tabKeyClick();
  //    browser.sleep(1500);
  //   page.firstNameError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid First Name'))
  //     .then(done, done.fail);
  // });

  //        it('16.Verify validation error message when enter special character value as first name  during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('12121');
  //   page.userFirstName().sendKeys('@#test');
  //   page.tabKeyClick();
  //    browser.sleep(1500);
  //   page.firstNameError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid First Name'))
  //     .then(done, done.fail);
  // });
  

  //   it('17.Verify validation error message when last name left blank during user registrationa', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('12121');
  //   page.userFirstName().sendKeys('test');
  //   page.userLastName().click();
  //   page.tabKeyClick();
  //   page.lastNameError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid Last Name'))
  //     .then(done, done.fail);
  // });
  
  //  it('18.Verify validation error message when enter special character value as last name  during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('12121');
  //   page.userFirstName().sendKeys('test');
  //   page.userLastName().sendKeys('test@#');
  //   page.tabKeyClick();
  //   browser.sleep(1500);
  //   page.lastNameError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid Last Name'))
  //     .then(done,done.fail);
  // });

  //  it('19.Verify validation error message when enter numeric character value as first name  during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('12121');
  //   page.userFirstName().sendKeys('test');
  //   page.userLastName().sendKeys('12345');
  //   page.tabKeyClick();
  //   page.lastNameError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid Last Name'))
  //     .then(done, done.fail);
  // });

  //  it('20.Verify validation error message when enter alphanumeric character value as first name  during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('12121');
  //   page.userFirstName().sendKeys('test');
  //   page.userLastName().sendKeys('test12345');
  //   page.tabKeyClick();
  //   page.lastNameError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid Last Name'))
  //     .then(done, done.fail);
  // }); 

  //        it('21.Verify validation error message when phone number field data left blank during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('12121');
  //   page.userFirstName().sendKeys('test');
  //   page.userLastName().sendKeys('data');
  //   page.userPhone().click();
  //   page.tabKeyClick();
  //   browser.sleep(1500);
  //   page.phoneNoError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid Phone Number'))
  //     .then(done, done.fail);
  // });

  //        it('22.Verify validation error message when enter invalid phone number value during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('12121');
  //   page.userFirstName().sendKeys('test');
  //   page.userLastName().sendKeys('data');
  //   page.userPhone().sendKeys('95482');
  //   page.tabKeyClick();
  //    browser.sleep(1500);
  //   page.phoneNoError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid Phone Number'))
  //     .then(done, done.fail);
  // });

  //        it('23.Verify validation error message when email id field dataleft blank during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('12121');
  //   page.userFirstName().sendKeys('test');
  //   page.userLastName().sendKeys('data');
  //   page.userPhone().sendKeys('1234567898');
  //   page.userMailId().click();
  //   page.tabKeyClick();
  //    browser.sleep(1500);
  //   page.emailIdError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid Email'))
  //     .then(done, done.fail);
  // });


  //        it('24.Verify validation error message when enter invalid email id  during user registration', done => {
  //   page.navigateTo();
  //   // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   // browser.sleep(3000);
  //   page.menuClick().click();
  //   page.securityLink().click();
  //   page.userLinkClick().click();
  //   browser.sleep(1500);
  //   page.selectPartnerValue().click();
  //   page.newUserBtnClick().click();
  //   page.userClientId().sendKeys('12121');
  //   page.userFirstName().sendKeys('test');
  //   page.userLastName().sendKeys('data');
  //   page.userPhone().sendKeys('1234567898');
  //   page.userMailId().sendKeys('abc');
  //   page.tabKeyClick();
  //    browser.sleep(1500);
  //   page.emailIdError()
  //     .then(msg => expect(msg).toEqual('Please Enter Valid Email'))
  //     .then(done, done.fail);
  // });


});
