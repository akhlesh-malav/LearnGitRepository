import { EnvisionAppPage } from './adminHome.po';
import {  browser, element, by, By, $, $$, ExpectedConditions}from 'protractor'; 

describe('Admin Epic - Admin Home (Rest test cases should be same as message page)', () => {
  let page: EnvisionAppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new EnvisionAppPage();
  });

    it('1.Verify that user should be reach at admin home page when login successfully as admin', done => {
    page.navigateTo();
    page.getEmailAddress().sendKeys('hemanthm@techvedhas.com');
    page.getPassword().sendKeys('kaustav@123');
    page.signIn().click();
    browser.sleep(3000);
    page.currentUrl()
      .then(msg => expect(msg).toEqual('http://envision-test/#/admin/home'))
      .then(done, done.fail);
  });

   });
