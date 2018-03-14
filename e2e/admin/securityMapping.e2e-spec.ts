import { EnvisionAppPage } from './securityMapping.po';
import {  browser, element, by, By, $, $$, protractor, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Security - Mapping', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

    it('1.Verify that user should be reach at Reference List page when click at security link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.securityLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/Security'))
      .then(done, done.fail);
  });

    it('2.Verify page title when user click at security link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.securityLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Security'))
      .then(done, done.fail);
  });

     it('3.Verify that user should be reach at Reference List page when click at mapping link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.securityLink().click();
    page.securityMappingLink().click();
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/mapping'))
      .then(done, done.fail);
  });

      it('4.Verify page title when user click at security mapping  link', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.securityLink().click();
    page.securityMappingLink().click();
    page.pageTitleText()
      .then(msg => expect(msg).toEqual('Mapping'))
      .then(done, done.fail);
  });

   it('5.Verify that user is able to save security group view successfully', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.securityLink().click();
    page.securityMappingLink().click();
    page.selectSecurityGroupValue().click();
    page.selectViewValueForGroup().click();
    page.saveSecurityView().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Security Group View Data Saved Successfully'))
      .then(done, done.fail);
  });

     it('6.Verify that user in able to save role data successfully', done => {
    page.navigateTo();
    // page.getEmailAddress().sendKeys('vishnu@techvedhas.com');
    // page.getPassword().sendKeys('kaustav@123');
    // page.signIn().click();
    // browser.sleep(3000);
    page.menuClick().click();
    page.securityLink().click();
    page.securityMappingLink().click();
    page.tabKeyClick();
    page.tabKeyClick();
    page.rightArrowKey();
    page.enterArrowKey();
    page.selectRole().click();
    page.selectSecurityRole().click();
    page.saveSecurityRole().click();
    page.successMsg()
      .then(msg => expect(msg).toEqual('Role Data Saved Successfully'))
      .then(done, done.fail);
  });


          
});
