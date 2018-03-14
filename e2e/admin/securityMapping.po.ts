import { browser, by, element, protractor} from 'protractor';

export class EnvisionAppPage {
  navigateTo() {
    return browser.get('/');
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
    return element(by.xpath('//*[@id="admin"]/app-admin/div/app-secondary-nav/nav/div[1]/span[2]/span')).getText();
  }

  securityLink(){
    return element(by.xpath('//*[@id="admin-nav"]/ul/li[3]/span'));
  }

  securityMappingLink(){
    return element(by.xpath('//*[@id="admin-nav"]/ul/li[3]/ul/li[1]/span'));
  }
 
 securityUserLink(){
    return element(by.xpath('//*[@id="admin-nav"]/ul/li[3]/ul/li[2]/span'));
  }

  selectSecurityGroupValue(){
    return element(by.xpath('//*[@id="groups"]/div[2]/div[1]/div[2]/span[8]'));
  }

  selectViewValueForGroup(){
    return element(by.css("label[for='check-5']"));
  }

  saveSecurityView(){
    return element(by.xpath('//*[@id="groups"]/div[1]/button'));
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

selectRole(){
  return element(by.xpath('//*[@id="roles"]/div[2]/div[1]/div/span[8]'));
}

selectSecurityRole(){
   return element(by.css("label[for='checkboxes_7']"));
}

 saveSecurityRole(){
    return element(by.xpath('//*[@id="roles"]/div[1]/form/button'));
  }


}
