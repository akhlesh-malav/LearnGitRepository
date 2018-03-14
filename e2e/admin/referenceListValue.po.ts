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

  referenceListLink(){
    return element(by.xpath('//*[@id="admin-nav"]/ul/li[2]/span'));
  }

   referenceListTypeLink(){
    return element(by.xpath('//*[@id="admin-nav"]/ul/li[2]/ul/li[1]/span'));
  }

   referenceListValueLink(){
    return element(by.xpath('//*[@id="admin-nav"]/ul/li[2]/ul/li[2]/span'));
  }

  referenceTextBox(){
    return element(by.xpath('//*[@id="referenceTypeName"]'));
  }

  saveReferenceData(){
    return element(by.xpath('//*[@id="types"]/form/div/div[2]/button'));
  }

  selectTypeData(){
    return element(by.xpath('//*[@id="types"]/div/div/div/span[1]'));
  }

  deleteRefData(){
    return element(by.xpath('//*[@id="types"]/form/div/div[2]/button[3]'));
  }

  clearRefTypeData(){
    return element(by.xpath('//*[@id="types"]/form/div/div[2]/button[2]'));
  }

  checkRefTypeValue(){
    return element(by.xpath('//*[@id="referenceTypeName"]')).getText();
  }

  referenceValueLink(){
    return element(by.xpath('//*[@id="admin-nav"]/ul/li[2]/ul/li[2]/span'));
  }

  clickSelectRefTypeDropdown(){
    return element(by.xpath('//*[@id="values"]/form/div[1]/div/div/span/select'));
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

refDataValue(){
  return element(by.xpath('//*[@id="referenceValueName"]'));
}

  saveReferenceValue(){
    return element(by.xpath('//*[@id="values"]/form/div[2]/div[2]/button'));
  }

  selectRefValueClick(){
    return element(by.xpath('//*[@id="values"]/form/div[3]/div/div/span[2]'));
  }

  clearRefValue(){
    return element(by.xpath('//*[@id="values"]/form/div[2]/div[2]/button[2]'));
  }

  checkRefValuetextBox(){
    return element(by.xpath('//*[@id="referenceValueName"]')).getText();
  }

  deleteRefValue(){
    return element(by.xpath('//*[@id="values"]/form/div[2]/div[2]/button[3]'));
  }

}
