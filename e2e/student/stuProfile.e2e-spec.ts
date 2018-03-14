import { EnvisionAppPage } from './stuProfile.po';
import {  browser, element, by, By, $, $$, ExpectedConditions}from 'protractor';  
describe('student Profile Envision App', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
    page = new EnvisionAppPage();
  });

  var path = require('path');



  // it('1.Verify user student profile page title', done => {
  //   page.navigateTo();
  //   browser.sleep(4000);
  //   page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   page.getPassword().sendKeys('kaustav@123');
  //   page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   //expect(page.currentUrl()).toEqual('http://envision-test/#/student/studentProfilehome');
  //   page.pageTitle()
  //     .then(msg => expect(msg).toEqual('Student Profile'))
  //     .then(done, done.fail);
  // });

  // it('2.Verify user is able to reach at student profile page', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   //expect(page.currentUrl()).toEqual('http://envision-test/#/student/studentProfilehome');
  //   page.currentUrl()
  //     .then(msg => expect(msg).toEqual('http://envision-test/#/student/studentProfile'))
  //     .then(done, done.fail);
  // });

  //  it('3.Verify validation error message when student name left blank', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   page.studentFirstName().clear();
  //   page.tabKeyClick();
  //   page.studentFirstNameError()
  //     .then(msg => expect(msg).toEqual('Enter Valid First Name'))
  //     .then(done, done.fail);
  // });

  //  it('4.Verify validation error message when student name left blank', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   page.studentLastName().clear();
  //   page.tabKeyClick();
  //   page.studentLastNameError()
  //     .then(msg => expect(msg).toEqual('Enter Valid Last Name'))
  //     .then(done, done.fail);
  // });


  //  it('5.Verify validation error message when address line 1 field left blank', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   page.residentialAdd1().clear();
  //   page.tabKeyClick();
  //   page.residentialAdd1Error()
  //     .then(msg => expect(msg).toEqual('Enter Address Line1'))
  //     .then(done, done.fail);
  // });


  //  it('6.Verify validation error message when city field left blank', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   page.residentialCity().clear();
  //   page.tabKeyClick();
  //   page.residentialCityError()
  //     .then(msg => expect(msg).toEqual('Enter City Name'))
  //     .then(done, done.fail);
  // });


  //  it('7.Verify validation error message when student gender dropdown value is not selected', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   page.genderSelection2().click();
  //   page.tabKeyClick();
  //   page.genderSelection2Error()
  //     .then(msg => expect(msg).toEqual('Select Gender'))
  //     .then(done, done.fail);
  // });



  //  it('8.Verify validation error message when student ethinicity dropdown value is not selected', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   page.ethinicitySelection2().click();
  //   page.tabKeyClick();
  //   page.ethinicitySelection2Error()
  //     .then(msg => expect(msg).toEqual('Select Ethnicity'))
  //     .then(done, done.fail);
  // });

  //     it('9.Verify validation error message when student current grade dropdown value is not selected', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   page.currentGradeSchool2().click();
  //   page.tabKeyClick();
  //   page.currentGradeSchool2Error()
  //     .then(msg => expect(msg).toEqual('Select Grade in School'))
  //     .then(done, done.fail);
  // });

  //       it('10.Verify validation error message when student state value is not selected', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   page.stateSelection2().click();
  //   page.tabKeyClick();
  //   page.stateSelection2Error()
  //     .then(msg => expect(msg).toEqual('Select State'))
  //     .then(done, done.fail);
  // });

  //     it('11.Verify validation error message when student zipcode value is left blank', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   page.zipcode2().clear();
  //   //page.zipcode2().sendKeys('302019');
  //   page.tabKeyClick();
  //   page.zipcode2Error()
  //     .then(msg => expect(msg).toEqual('Enter Zip Code'))
  //     .then(done, done.fail);
  // });


  //     it('12.Verify validation error message when student graduation time is not selected', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   page.expectedGraduationType2().click();
  //   page.tabKeyClick();
  //   page.expectedGraduationType2Error()
  //     .then(msg => expect(msg).toEqual('Please Select Time of Year'))
  //     .then(done, done.fail);
  // });


  //     it('13.Verify validation error message when student graduation year is left blank', done => {
  //   page.navigateTo();
  //   // browser.sleep(4000);
  //   // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   // page.getPassword().sendKeys('kaustav@123');
  //   // page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   page.expectedGraduationYear2().clear();
  //   //page.expectedGraduationYear2().sendKeys('2016');
  //   page.tabKeyClick();
  //   page.expectedGraduation2YearError()
  //     .then(msg => expect(msg).toEqual('Enter Year (year should be of 4 digit and should be numeric only)'))
  //     .then(done, done.fail);
  // });



  //  it('14.Verify user is able to update profile (first Screen) data ', done => {
  //   page.navigateTo();
  //   browser.sleep(4000);
  //   page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   page.getPassword().sendKeys('kaustav@123');
  //   page.signIn().click();
  //   browser.sleep(45000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   browser.sleep(12000);
  //   page.studentLastName().clear();
  //   page.studentLastName().sendKeys('akki');
  //   page.residentialAdd1().clear();
  //   page.residentialAdd1().sendKeys('Amrapali marg jaipur');
  //   page.residentialAdd2().clear();
  //   page.residentialAdd2().sendKeys('Vaishali Nagar');
  //   page.residentialCity().clear();
  //   page.residentialCity().sendKeys('Jaipur');
  //   //page.usCitizenship().click();
  //   //page.permanentResidential().click();
  //   page.gpaWeightValue().clear();
  //   page.gpaWeightValue().sendKeys('35');
  //   page.gpaUnWeightValue().clear();
  //   page.gpaUnWeightValue().sendKeys('35');
  //   browser.executeScript('window.scrollTo(0,300);');
  //   page.AdvanceClassOption().click();
  //   page.numAdvanceClassOption().clear();
  //   page.numAdvanceClassOption().sendKeys('5');
  //   browser.executeScript('window.scrollTo(0,900);');
  //   page.stuEmailAddress().sendKeys('akki@techvedhas.com');
  //   browser.sleep(1500);
  //   page.greenEmailBtn().click();
  //   page.stuPhoneNum().sendKeys('444 422-2523');
  //   browser.sleep(1500);
  //   page.homePhoneField().click();
  //   page.greenPhoneBtn().click();
  //   //browser.executeScript('window.scrollTo(0,500);');
  //   browser.sleep(1500);
  //   page.selectedPreferClassSize().click();
  //   browser.sleep(12000);
  //   page.selectNoPreferene().click();
  //   browser.sleep(12000);
  //   browser.executeScript('window.scrollTo(0,3500);');
  //   browser.sleep(5000);
  //   page.studentFormNextButton().click();
  //   browser.sleep(10500);
  //     page.successMsg()
  //     .then(msg => expect(msg).toEqual('Student Profile Saved Successfully'))
  //     .then(done, done.fail);
  // });


  //     it('15.Verify user is able to update user profile details (second) data ', done => {
  //   page.navigateTo();
  //   browser.sleep(4000);
  //   page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   page.getPassword().sendKeys('kaustav@123');
  //   page.signIn().click();
  //   browser.sleep(60000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   browser.sleep(12000);
  //   browser.executeScript('window.scrollTo(0,1200);');
  //   page.studentFormNextButton().click();
  //   browser.executeScript('window.scrollTo(0,-1200);');
  //   browser.sleep(15000);
  //   page.studentGeographyselection().click();
  //   page.selectMidWestState().click();
  //   browser.sleep(15000);
  //   page.studentSpecialConsideration().click();
  //   page.studentSpecialConsideration2().click();
  //   browser.executeScript('window.scrollTo(0,1200);');
  //   page.selectMidAtlanticState().click();
  //   page.selectNewEnglandState().click();
  //   page.prefferdCollege2().click();
  //   page.unsureOption().click();
  //   page.studentFormNextButton().click()
  //   browser.sleep(4500);
  //     page.successMsg()
  //     .then(msg => expect(msg).toEqual('Data Saved Successfully'))
  //     .then(done, done.fail);

  // });


  //     it('16.Verify user is able to update user profile details (third page) data ', done => {
  //   page.navigateTo();
  //   browser.sleep(4000);
  //   page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   page.getPassword().sendKeys('kaustav@123');
  //   page.signIn().click();
  //   browser.sleep(15000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   browser.sleep(12000);
  //   browser.executeScript('window.scrollTo(0,1200);');
  //   page.studentFormNextButton().click();
  //   browser.sleep(20000);
  //   page.studentFormNextButton().click()
  //   browser.actions().mouseMove({x: 400, y: 0}).perform();
  //   browser.executeScript('window.scrollTo(0,-1200);');
  //   browser.sleep(45000);
  //   page.selectHighSchoolValue().click();
  //   page.selectClassRank().click();
  //   page.currentHighSchoolPlan().click();
  //   browser.executeScript('window.scrollTo(0,1200);');
  //   browser.sleep(10000);
  //   page.studentFormNextButton().click();
  //   browser.sleep(25000);
  //   page.successMsg()
  //     .then(msg => expect(msg).toEqual('Profile Saved Successfully'))
  //     .then(done, done.fail);

  // });

  //     it('17.Verify user is able to update user profile details (fourth page) data ', done => {
  //   page.navigateTo();
  //   browser.sleep(4000);
  //   page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
  //   page.getPassword().sendKeys('kaustav@123');
  //   page.signIn().click();
  //   browser.sleep(15000);
  //   page.menuClick().click();
  //   browser.sleep(15000);
  //   page.studentProfilePage().click();
  //   browser.sleep(12000);
  //   page.profileClick().click();
  //   browser.sleep(12000);
  //   browser.executeScript('window.scrollTo(0,1200);');
  //   page.studentFormNextButton().click();
  //   browser.sleep(20000);
  //   page.studentFormNextButton().click()
  //   browser.actions().mouseMove({x: 400, y: 0}).perform();
  //   browser.executeScript('window.scrollTo(0,1200);');
  //   browser.sleep(45000);
  //   page.studentFormNextButton().click();
  //   browser.actions().mouseMove({x: 400, y: 0}).perform();
  //   browser.executeScript('window.scrollTo(0,-1200);');
  //   browser.sleep(12000);
  //   page.whereWork().clear();
  //   page.whereWork().sendKeys('this is test data');
  //   page.voluHours().clear();
  //   page.voluHours().sendKeys('12');
  //   browser.executeScript('window.scrollTo(0,1200);');
  //   browser.sleep(12000);
  //   page.selectHighFav().click();
  //   page.selectLowFav().click();
  //   browser.sleep(10000);
  //   page.finishBtn().click();
  //   page.successMsg()
  //   .then(msg => expect(msg).toEqual('Profile Saved Successfully'))
  //   .then(done, done.fail);
  //   //browser.close();
  // });


});


