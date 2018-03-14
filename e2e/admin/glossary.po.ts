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

glossaryLink(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[9]/span'));
}

glossaryClickA(){
  return element(by.xpath('//*[@id="glossary"]/div/div/div[1]/ul/div[1]/li[3]/a'));
}

gridGlossaryTexts(){
  return element(by.xpath('//*[@id="glossary"]/div/div/table/tbody/tr[1]/td[1]')).getText();
}

glossaryClickAll(){
  return element(by.xpath('//*[@id="glossary"]/div/div/div[1]/ul/div[1]/li[1]/a'));
}

deleteGlossaryTerm(){
  return element(by.xpath('//*[@id="glossary"]/div/div/table/tbody/tr[1]/td[3]/span'));
}

searchTextBox(){
  return element(by.xpath('//*[@id="search"]/form/div[1]/input'));
}

searchBtnClick(){
  return element(by.xpath('//*[@id="search"]/form/div[2]/button'));
}

}
