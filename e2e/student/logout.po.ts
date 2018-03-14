import { browser, by, element } from 'protractor';

export class EnvisionAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  userName(){
  var username = "sandeepc@techvedhas.com";
  return username;
}

  passWord(){
  var password = "kaustav@123";
  return password;

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

   currentUrl(){
  	return browser.getCurrentUrl();
  }

   menuClick(){
  	return  element(by.id('hamburger'));
  }

    successMsg(){
    return element(by.className('sn-content')).getText();
  }

    logoutLink(){
  	return  element(by.buttonText("/html/body/app-root/div/app-main-nav/nav/div/div[2]/div[2]/div[1]/div/button[3]"));
  }

  logoutLinkMenu(){
  	return element(by.xpath('//*[@id="admin-nav"]/ul/li[8]/ul/li/span'));
  }

  userSettingBtn(){
    return element(by.className('indicator')).click;
  }
}
