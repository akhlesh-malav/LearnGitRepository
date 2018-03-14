import { EnvisionAppPage } from './parentProfile.po';
import {  browser, element, by, By, $, $$, ExpectedConditions}from 'protractor';  
describe('student Profile Envision App', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
    page = new EnvisionAppPage();
  });

  var path = require('path');


  // it('1.Verify user parent profile page title', done => {
  //   page.navigateTo();
  //   browser.sleep(4000);
  //   let username = page.userName();
  //   let password = page.passWord();
  //   page.getEmailAddress().sendKeys(username);
  //   page.getPassword().sendKeys(password);
  //   page.signIn().click();
  //   browser.sleep(15000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.parentProfileLink().click();
  //   page.pageTitle()
  //     .then(msg => expect(msg).toEqual('Parent Profile'))
  //     .then(done, done.fail);
  // });

  // it('2.Verify user is able to reach at parent profile page', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(15000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.parentProfileLink().click();
  //   page.currentUrl()
  //     .then(msg => expect(msg).toEqual('http://envision-test/#/parent/parentProfile'))
  //     .then(done, done.fail);
  // });

  //  it('3.Verify validation error message when parent first name left blank', done => {
  //   page.navigateTo();
  //   browser.sleep(4000);
  //   let username = page.userName();
  //   let password = page.passWord();
  //   page.getEmailAddress().sendKeys(username);
  //   page.getPassword().sendKeys(password);
  //   page.signIn().click();
  //   browser.sleep(15000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.parentProfileLink().click();
  //   browser.sleep(18000);
  //   page.parentFirstName().clear();
  //   browser.sleep(18000);
  //   page.tabKeyClick();
  //    browser.sleep(15000);
  //   page.parentFirstNameError1()
  //     .then(msg => expect(msg).toEqual('Please enter required field'))
  //     .then(done, done.fail);
  // });

 //   it('4.Verify validation error message when parent first name left blank', done => {
 //    page.navigateTo();
 //    // browser.sleep(4000);
 //    // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
 //    // page.getPassword().sendKeys('kaustav@123');
 //    // page.signIn().click();
 //    browser.sleep(15000);
 //    page.menuClick().click();
 //    browser.sleep(15000);
 //    page.parentProfileLink().click();
 //    browser.sleep(12000);
 //    page.parentFirstName().clear();
 //    page.parentFirstName().sendKeys('#$@$WFW');
 //    page.tabKeyClick();
 //    page.parentFirstNameError1()
 //      .then(msg => expect(msg).toEqual('Please enter alpha characters only'))
 //      .then(done, done.fail);
 //  });

 // it('5.Verify validation error message when parent first name left blank', done => {
 //    page.navigateTo();
 //    // browser.sleep(4000);
 //    // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
 //    // page.getPassword().sendKeys('kaustav@123');
 //    // page.signIn().click();
 //    browser.sleep(15000);
 //    page.menuClick().click();
 //    browser.sleep(15000);
 //    page.parentProfileLink().click();
 //    browser.sleep(12000);
 //    page.parentFirstName().clear();
 //    page.parentFirstName().sendKeys('123456');
 //    page.tabKeyClick();
 //    page.parentFirstNameError1()
 //      .then(msg => expect(msg).toEqual('Please enter alpha characters only'))
 //      .then(done, done.fail);
 //  });



  //  it('6.Verify validation error message when parent last name left blank', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // let username = page.userName();
  //   // let password = page.passWord();
  //   // page.getEmailAddress().sendKeys(username);
  //   // page.getPassword().sendKeys(password);
  //   // page.signIn().click();
  //   browser.sleep(15000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.parentProfileLink().click();
  //   browser.sleep(12000);
  //   page.parentLastName().clear();
  //   page.parentFirstName().click();
  //   //page.tabKeyClick();
  //   page.parentLastNameError()
  //     .then(msg => expect(msg).toEqual('Please enter required field'))
  //     .then(done, done.fail);
  // });

 //    it('7.Verify validation error message when parent last name left blank', done => {
 //    page.navigateTo();
 //    // browser.sleep(4000);
 //    // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
 //    // page.getPassword().sendKeys('kaustav@123');
 //    // page.signIn().click();
 //    browser.sleep(15000);
 //    page.menuClick().click();
 //    browser.sleep(15000);
 //    page.parentProfileLink().click();
 //    browser.sleep(12000);
 //    page.parentLastName().clear();
 //    page.parentLastName().sendKeys('1234568');
 //    page.tabKeyClick();
 //    page.parentLastNameError()
 //      .then(msg => expect(msg).toEqual('Please enter alpha characters only'))
 //      .then(done, done.fail);
 //  });


 // it('8.Verify validation error message when parent last name left blank', done => {
 //    page.navigateTo();
 //    // browser.sleep(4000);
 //    // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
 //    // page.getPassword().sendKeys('kaustav@123');
 //    // page.signIn().click();
 //    browser.sleep(15000);
 //    page.menuClick().click();
 //    browser.sleep(15000);
 //    page.parentProfileLink().click();
 //    browser.sleep(12000);
 //    page.parentLastName().clear();
 //     page.parentLastName().sendKeys('@FF$$55');
 //    page.tabKeyClick();
 //    page.parentLastNameError()
 //      .then(msg => expect(msg).toEqual('Please enter alpha characters only'))
 //      .then(done, done.fail);
 //  });



  //  it('9.Verify validation error message when address line 1 field left blank', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(15000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.parentProfileLink().click();
  //   browser.sleep(12000);
  //   page.parentAddress1().clear();
  //   page.tabKeyClick();
  //   page.parentAddressError()
  //     .then(msg => expect(msg).toEqual('Enter a valid Address'))
  //     .then(done, done.fail);
  // });


  //  it('10.Verify validation error message when city field left blank', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(15000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.parentProfileLink().click();
  //   browser.sleep(12000);
  //   page.parentCityName().clear();
  //   page.tabKeyClick();
  //   page.parentCityError()
  //     .then(msg => expect(msg).toEqual('Please enter valid City'))
  //     .then(done, done.fail);
  // });


  //  it('11.Verify validation error message when parent state dropdown value is not selected', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(15000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.parentProfileLink().click();
  //   browser.sleep(12000);
  //   page.parentSateValue().click();
  //   page.tabKeyClick();
  //   page.parentSateValueError()
  //     .then(msg => expect(msg).toEqual('Please Select State'))
  //     .then(done, done.fail);
  // });

    it('12.Verify validation error message when parent zipcode field left blank', done => {
    page.navigateTo();
    // browser.sleep(4000);
    // page.getEmailAddress().sendKeys('david@eworkforcetech.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    browser.sleep(15000);
    page.menuClick().click();
    browser.sleep(15000);
    page.parentProfileLink().click();
    browser.sleep(12000);
    page.parentZipcode().clear();
    browser.sleep(12000);
    page.tabKeyClick();
    browser.sleep(12000);
    page.parentZipcodeError()
      .then(msg => expect(msg).toEqual('Please enter 5 digit zip code'))
      .then(done, done.fail);
  });

  //   it('13.Verify validation error message when enter zipcode less than 5 digits', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('david@eworkforcetech.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(15000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.parentProfileLink().click();
  //   browser.sleep(12000);
  //   page.parentZipcode().clear();
  //   page.parentZipcode().sendKeys('1234');
  //   page.tabKeyClick();
  //   page.parentZipcodeError()
  //     .then(msg => expect(msg).toEqual('Please enter 5 digit zip code'))
  //     .then(done, done.fail);
  // });

  //    it('14.Verify save functionality for parent profile data ', () => {
  //   page.navigateTo();
  //   browser.sleep(4000);
  //   page.getEmailAddress().sendKeys('david@eworkforcetech.com');
  //   page.getPassword().sendKeys('kaustav@123');
  //   page.signIn().click();
  //   browser.sleep(15000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.parentProfileLink().click();
  //   browser.sleep(12000);
  //   page.parentFirstName().clear();
  //   page.parentFirstName().sendKeys('wasko');
  //   browser.sleep(1000);
  //  // page.parentMiddleName().sendKeys('di');
  //   browser.sleep(1000);
  //   page.parentLastName().clear();
  //   page.parentLastName().sendKeys('gama');
  //   browser.sleep(1000);
  //   page.parentAddress1().clear();
  //   page.parentAddress1().sendKeys('New church road washington DC');
  //   browser.sleep(1000);
  //   page.parentCityName().clear();
  //   page.parentCityName().sendKeys('Washington');
  //   browser.sleep(1000);
  //   page.parentSateValue2().click();
  //   browser.sleep(1000);
  //   page.parentZipcode().clear();
  //   page.parentZipcode().sendKeys('32015');
  //   browser.sleep(1000);
  //   page.parentMarriageStatus().click();
  //   //page.clickDoc().click();
  //   browser.sleep(1000);
  //   var fileToUpload = 'C:/Users/allcad/Downloads/user.jpg',
  //   absolutePath = path.resolve(__dirname, fileToUpload);
  //   page.inputFile().sendKeys(absolutePath);  
  //   //browser.sleep(2000);

  //   browser.executeScript('window.scrollTo(0,375);');
  //   browser.sleep(1000);
  //   page.annualIncomeValue().clear();
  //   page.annualIncomeValue().sendKeys('45000');
  //   browser.sleep(1000);
  //   page.familySize().clear();
  //   page.familySize().sendKeys('12');
  //   browser.sleep(1000);
  //   page.relationShip().click();
  //   browser.sleep(1000);
  //   page.contributionValue().clear();
  //   page.contributionValue().sendKeys('250');
  //   browser.sleep(1000);

  //   browser.executeScript('window.scrollTo(376,850);');
  //   browser.sleep(1000);
  //   page.parentEmailAddress().sendKeys('abc@gmail.com');
  //   page.mailGreenBtn().click();
  //   browser.sleep(1000);
  //   page.parentPhoneNo().sendKeys('1234567890');
  //   page.phoneNumType().click();
  //   browser.sleep(1000);
  //   page.phoneGreenBtn().click();
  //   browser.sleep(1000);
  //   page.otherInfo().clear();
  //   page.otherInfo().sendKeys('there is no other info for parent');
  //   browser.executeScript('window.scrollTo(851,950);');
  //   page.gotoParentHomepage().click();
  //   browser.sleep(5500);
  //   expect( page.successMsg()).toEqual('Parent Profile Saved Successfully');
  //   expect( page.currentUrl()).toEqual('http://envision-test/#/parent/home');
  //   // page.successMsg()
  //   //   .then(msg => expect(msg).toEqual('Profile data save successfully'))
  //   //   .then(done, done.fail);
  // });

});


