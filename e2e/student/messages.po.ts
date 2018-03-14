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

  messagePageTitle(){
  	return  element(by.xpath('//*[@id="student"]/div/app-secondary-nav/nav/div/span[2]/span')).getText();
  }

  MessagePageLink(){
  	return  element(by.xpath('//*[@id="admin-nav"]/ul/li[7]/div/span[1]'));
  }
  clickDocUpload(){
  	return  element(by.css('[name="docufile"]'));
  }

  selectFileForUpload(){
  	return element(by.xpath('//*[@id="docufile"]/div/form/div/input'));
  }

  selectDoctype(){
  	return element(by.xpath('//*[@id="docufile"]/div/form/span/select/option[2]'));
  }

  uploadButton(){
  	return element(by.xpath('//*[@id="docufile"]/div/form/button'));
  }

  messageTopic(){
  		return  element(by.css('[name="messageTopic"]'));
  }

  messageContent(){
  		return  element(by.css('[name="messageContent"]'));
  }

  sendBtnText(){
  	return element(by.buttonText('Send'));
  }
}
