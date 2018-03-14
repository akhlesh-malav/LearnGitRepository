import { browser, by, element, protractor } from 'protractor';

export class EnvisionAppPage {
  navigateTo() {
  return browser.get('/');
  }

  userName(){
  var username = "kaustavm@techvedhas.com";
  return username;
  }

  passWord(){
  var password = "kaustav@123";
  return password;

  }

  getParagraphText() {
  return element(by.css('app-root h1')).getText();
  }

  getEmailAddress(){
  return element(by.css('[name="email"]'));
  }

  getPassword(){
  return  element(by.css('[name="password"]'));
  }

  signIn(){
  return   element(by.buttonText("Sign In"));
  }


  successMsg(){
  return element(by.className('sn-content')).getText();
  }

  errorMsg(){
  return element(by.className('error')).getText();
  }

  logOutApp(){
  return  element(by.xpath("/html/body/app-root/div/app-main-nav/nav/div/div[2]/div[2]/div[1]"));
  }

  currentUrl(){
  return browser.getCurrentUrl();
  }

  menuClick(){
  return  element(by.id('hamburger'));
  }

  PageTitle(){
  return element(by.xpath('//*[@id="coach-main"]/app-secondary-nav/nav/div/span[2]/span')).getText();
  }

  coachHomeLink(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[1]/div/span'));
  }

  coachHomeContents1(){
  return element(by.className('field-head')).getText();
  }

  coachHomeContents2(){
  return element(by.className('field-item')).getText();
  }


}
