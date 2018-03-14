import { EnvisionAppPage } from './myCoachingHub.po';
import {  browser, element, by}from 'protractor';  
describe('Student Epic - My Coaching Hub Page', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

  var path = require('path');



  it('1.Verify selected my coaching hub title on page ', done => {
    page.navigateTo();
    page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
    page.getPassword().sendKeys('kaustav@123');
    page.signIn().click();
    browser.sleep(1500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.selectedPageTitle()
      .then(msg => expect(msg).toEqual('My Coaching Hub'))
      .then(done, done.fail);
  });


    it('2.Verify user is able reach at my coacching hub page ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('kaustav.mishra@gmail.com');
    // page.getPassword().sendKeys('kaustav');
    // page.signIn().click();
    // browser.sleep(1500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/student/myCoachingHub'))
      .then(done, done.fail);
  });

      it('3.Verify user is able upload file or doc successfully from mu coaching hub document page ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    browser.sleep(1500);
    page.menuClick().click();
    browser.sleep(3500);
    page.chkMyCoachHub().click();
    browser.sleep(2500);
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    page.clickDoc().click();
    browser.sleep(1000);
    var fileToUpload = 'C:/Users/allcad/Downloads/user.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    page.inputFile().sendKeys(absolutePath);  
    browser.sleep(2000);
    page.selectDoctype().click(); 
    browser.sleep(2000);
    page.uploadButton().click();
    browser.sleep(1000);
    page.successMsg()
      .then(msg => expect(msg).toEqual('Document Uploaded Successfully !'))
      .then(done, done.fail);
  });

     it('4.Verify user is able delete document form uploaded document ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('kaustav.mishra@gmail.com');
    // page.getPassword().sendKeys('kaustav');
    // page.signIn().click();
    // browser.sleep(1500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.sleep(2000);
    page.deleteDocs().click();
    page.deleteConfirmation().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Document Deleted SuccessFully'))
      .then(done, done.fail);
  });

        it('5.Verify that document list rendering as per selected document type ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('sandeepc@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(2500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.sleep(2000);
    page.selectDocTypeForSearch().click(); 
    browser.sleep(3500);
    page.docTypeColumnText()
      .then(msg => expect(msg).toEqual('FAFSA'))
      .then(done, done.fail);
  });

it('6.Verify user is able reach at library tab at my coacching hub page ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('kaustav.mishra@gmail.com');
    // page.getPassword().sendKeys('kaustav');
    // page.signIn().click();
    // browser.sleep(1500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.enterArrowKey();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://oasis-test:9992/#/student/myCoachingHub'))
      .then(done, done.fail);
  });

it('7.Verify user is able reach at chat archieves tab at my coacching hub page ', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('kaustav.mishra@gmail.com');
    // page.getPassword().sendKeys('kaustav');
    // page.signIn().click();
    // browser.sleep(1500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://oasis-test:9992/#/student/myCoachingHub'))
      .then(done, done.fail);
  });


it('8.Verify user is able reach at calender tab at my coacching hub page ', done => {

    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(2500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.sleep(2500);
    page.getCalenderTextToVerify()
      .then(msg => expect(msg).toMatch('Upcoming Events'))
      .then(done, done.fail);
  });

it('9.Verify user is able reach at tasks tab at my coacching hub page ', done => {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(2500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.tabKeyClick();
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://oasis-test:9992/#/student/myCoachingHub'))
      .then(done, done.fail);
  });

it('10.Verify add event popup at screen after click any date  ', done => {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(2500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.sleep(2000);
    page.selectCalnderDate().click();
    browser.sleep(2500);
    page.eventPopupTitle()
      .then(msg => expect(msg).toEqual('Add Event'))
      .then(done, done.fail);
  });


it('12.Verify event detail popup at screen when user click at event detail icon ', done => {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    // browser.sleep(2500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.sleep(2000);
    page.eventDeatilIconClick().click();
    browser.sleep(2000);
    page.eventDetailPopupTitle()
      .then(msg => expect(msg).toEqual('Event Detail'))
      .then(done, done.fail);
  });

it('13.Verify save event functionality at calender when monthly calender selected ', done => {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(2500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.sleep(2000);
    page.selectCalnderDate().click();
    page.eventTitle().clear();
    page.eventTitle().sendKeys('Test Event');
    page.eventDescription().clear();
    page.eventDescription().sendKeys('This is test event description');
    page.eventSaveButtonClick().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Event Save Successfully'))
      .then(done, done.fail);
  });

it('14.Verify update event functionality at calender when monthly calender selected', done => {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(2500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.sleep(2000);
    page.eventDetailOpenForUpdate().click();
    page.eventTitle().clear();
    page.eventTitle().sendKeys('Test Event updated');
    page.eventDescription().clear();
    page.eventDescription().sendKeys('This is test event description updated');
    page.eventSaveButtonClick().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Event Save Successfully'))
      .then(done, done.fail);
  });

it('15.Verify save event functionality at calender when weekly calender selected ', done => {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(2500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.sleep(2000);
    page.selectWeekOption().click();
    page.selectWeekCalenderDate().click();
    page.eventTitle().clear();
    page.eventTitle().sendKeys('Test Event');
    page.eventDescription().clear();
    page.eventDescription().sendKeys('This is test event description');
    page.eventSaveButtonClick().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Event Save Successfully'))
      .then(done, done.fail);
  });

it('16.Verify update event functionality at calender when weekly calender selected', done => {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    // browser.sleep(2500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.sleep(2000);
    page.selectWeekOption().click();
    page.selectWeekDayEventForUpdate().click();
    page.eventTitle().clear();
    page.eventTitle().sendKeys('Test Event updated');
    page.eventDescription().clear();
    page.eventDescription().sendKeys('This is test event description updated');
    page.eventSaveButtonClick().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Event Save Successfully'))
      .then(done, done.fail);
  });

it('17.Verify save event functionality at calender when day wise calender selected ', done => {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(2500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.sleep(2000);
    page.selectDayOption().click();
    page.selectDayDateOption().click();
    page.eventTitle().clear();
    page.eventTitle().sendKeys('Test Event');
    page.eventDescription().clear();
    page.eventDescription().sendKeys('This is test event description');
    page.eventSaveButtonClick().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Event Save Successfully'))
      .then(done, done.fail);
  });

it('18.Verify update event functionality at calender when day wise calender selected', done => {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    // browser.sleep(2500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.sleep(2000);
    page.selectDayOption().click();
    page.selectDayEventForUpdate().click();
    page.eventTitle().clear();
    page.eventTitle().sendKeys('Test Event updated');
    page.eventDescription().clear();
    page.eventDescription().sendKeys('This is test event description updated');
    page.eventSaveButtonClick().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Event Save Successfully'))
      .then(done, done.fail);
  });

it('19.Verify that student should be reached at chat archive page when click at chat archive tab', done => {
    page.navigateTo();
    // let username = page.userName();
    // let password = page.passWord();
    // page.getEmailAddress().sendKeys(username);
    // page.getPassword().sendKeys(password);
    // page.signIn().click();
    browser.sleep(2500);
    page.menuClick().click();
    page.chkMyCoachHub().click();
    browser.sleep(1000);
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.rightArrowKey();
    page.enterArrowKey();
    browser.sleep(2000);
    page.chatArcheiveTextVefication()
      .then(msg => expect(msg).toMatch('Chat Archive'))
      .then(done, done.fail);
  });


// it('20.Verify that student should be reached at career page when click at assesssment tab', done => {
//     page.navigateTo();
//     // let username = page.userName();
//     // let password = page.passWord();
//     // page.getEmailAddress().sendKeys(username);
//     // page.getPassword().sendKeys(password);
//     // page.signIn().click();
//     browser.sleep(2500);
//     page.menuClick().click();
//     page.chkMyCoachHub().click();
//     browser.sleep(1000);
//     page.tabKeyClick();
//     page.tabKeyClick();
//     page.rightArrowKey();
//     page.enterArrowKey();
//     browser.sleep(10500);
//     //browser.switchTo().frame(page.iframeId());
//     page.expectedTextForCareerPage()
//       .then(msg => expect(msg).toMatch('Welcome to YouScience! '))
//       .then(done, done.fail);
//   });

// it('21.Verify that student should be reached at career page when click at assesssment tab', done => {
//     page.navigateTo();
//     // let username = page.userName();
//     // let password = page.passWord();
//     // page.getEmailAddress().sendKeys(username);
//     // page.getPassword().sendKeys(password);
//     // page.signIn().click();
//     // browser.sleep(2500);
//     page.menuClick().click();
//     page.chkMyCoachHub().click();
//     browser.sleep(1000);
//     page.tabKeyClick();
//     page.tabKeyClick();
//     page.rightArrowKey();
//     page.enterArrowKey();
//     page.rightArrowKey();
//     page.rightArrowKey();
//     page.rightArrowKey();
//     page.tabKeyClick();
//     page.rightArrowKey();
//     page.enterArrowKey();
//     browser.sleep(10500);
//     //browser.switchTo().frame(page.iframeId());
//     // let data = page.imgForPersonalityPage();
//     // expect(data.isPresent()).toBe(true);
//     page.personalityPageText()
//       .then(msg => expect(msg).toMatch('This tool will reveal your true personality and provide tip'))
//       .then(done, done.fail);
//   });

// it('22.Verify that student should be reached at career page when click at assesssment tab', done => {
//   page.navigateTo();
//     // let username = page.userName();
//     // let password = page.passWord();
//     // page.getEmailAddress().sendKeys(username);
//     // page.getPassword().sendKeys(password);
//     // page.signIn().click();
//     // browser.sleep(2500);
//     page.menuClick().click();
//     page.chkMyCoachHub().click();
//     browser.sleep(1000);
//     page.tabKeyClick();
//     page.tabKeyClick();
//     page.rightArrowKey();
//     page.enterArrowKey();
//     page.rightArrowKey();
//     page.rightArrowKey();
//     page.rightArrowKey();
//     page.tabKeyClick();
//     page.rightArrowKey();
//     page.rightArrowKey();
//     page.enterArrowKey();
//     browser.sleep(10500);
//     //browser.switchTo().frame(page.iframeId());
//     // let data = page.imgForLearningPage();
//     // expect(data.isPresent()).toBe(true);
//     page.learnPageText()
//       .then(msg => expect(msg).toMatch('This tool will reveal the ways you learn best'))
//       .then(done, done.fail);
//   });

});
