import { browser, by, element, protractor} from 'protractor';

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
  return element(by.xpath('//*[@id="admin"]/app-login/div[2]/div[1]')).getText();
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
  return  element(by.buttonText("Logout"));
  }

  currentUrl(){
  return browser.getCurrentUrl();
  }

  menuClick(){
  return  element(by.id('hamburger'));
  }

  pageTitleText(){
  return element(by.xpath('//*[@id="coach-main"]/app-secondary-nav/nav/div/span[2]/span')).getText();
  }

  upArrowKey(){
  return browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
  }

  downArrowKey(){
  return browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
  }

  leftArrowKey(){
  return browser.actions().sendKeys(protractor.Key.ARROW_LEFT).perform();
  }

  rightArrowKey(){
  return browser.actions().sendKeys(protractor.Key.ARROW_RIGHT).perform();
  }

  enterArrowKey(){
  return browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  tabKeyClick(){
  return browser.actions().sendKeys(protractor.Key.TAB).perform();
  }

  accountSearchLink(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[2]/div/span'));
  }

  nameAccountSearch(){
    return element(by.css('[name="name"]'));
  }

  emailAccountSearch(){
    return element(by.css('[name="email"]'));
  }

  phoneAccountSearch(){
    return element(by.css('[name="phoneNumber"]'));
  }

  clientIdAccountSearch(){
    return element(by.css('[name="clientNumber"]'));
  }

  parentChkboxAccountSearch(){
    return element(by.css("label[for='check1']"));
  }

  searchBtn(){
    return element(by.buttonText('Search'));
  }

  verifyEmailId(){
    return element(by.xpath('//*[@id="details"]/tbody/tr[1]/td[3]')).getText();
  }

  verifyPhoneNum(){
    return element(by.xpath('//*[@id="details"]/tbody/tr/td[2]')).getText();
  }

  verifyClientId(){
    return element(by.xpath('//*[@id="details"]/tbody/tr/td[7]')).getText();
  }

   verifyParentChkbox(){
    return element(by.xpath('//*[@id="details"]/tbody/tr[1]/td[5]')).getText();
  }

 clickEmailId(){
    return element(by.xpath('//*[@id="details"]/tbody/tr[1]/td[3]'));
  }

  studentNameVerification(){
    return element(by.className('ft-spaced-title')).getText();
  }

}
