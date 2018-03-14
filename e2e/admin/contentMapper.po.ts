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

planManagerLink(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[7]/span'));
}
contentMapperLink(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[7]/ul/li[3]/span'));
}

selectPartnerValue(){
  return element(by.xpath('//*[@id="partnerinst"]/select/option[2]'));
}

selectBrickCategoryValue(){
  return element(by.xpath('//*[@id="newmapping"]/div/div[1]/form/span[1]/select/option[2]'));
}

selectBrickValue(){
  return element(by.xpath('//*[@id="newmapping"]/div/div[1]/form/span[2]/select/option[2]'));
}

selectContentTemplateValue(){
  return element(by.xpath('//*[@id="newmapping"]/div/div[1]/form/span[3]/select/option[2]'));
}

saveBtnContentMapper(){
  return element(by.xpath('//*[@id="newmapping"]/div/div[1]/form/span[4]/button'));
}


}
