import { browser, by, element } from 'protractor';

export class EnvisionAppPage {
  navigateTo() {
    return browser.get('/');
  }

   userName(){
  var username = "sandeepc@techvedhas.com";
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

   currentUrl(){
  	return browser.getCurrentUrl();
  }

   menuClick(){
  	return  element(by.id('hamburger'));
  }

    successMsg(){
    return element(by.className('sn-content')).getText();
  }

    logOutApp(){
  	return  element(by.buttonText("Logout"));
  }

  testPreparationLink(){
  	return element(by.xpath('//*[@id="admin-nav"]/ul/li[5]/div/span'));
  }

  testPrpaTitle(){
    return element(by.xpath('//*[@id="student"]/div/app-secondary-nav/nav/div/span[2]/span')).getText();
  }

  iframeContent(){
    return  element(by.xpath('/html/body/div[2]/div/ul/li[2]'));
  }


}
