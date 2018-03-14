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

partnerManagerLink(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[4]/span'));
}

newPartnerBtn(){
  return element(by.xpath('//*[@id="partners"]/div[1]/button'));
}

partnerNameTextCheck(){
  return element(by.xpath('//*[@id="fName"]')).getText();
}

uploadClientLogo(){
  return element(by.xpath('//*[@id="newpartner"]/div[1]/form/div[1]/div[2]/button'));
}

uploadFile(){
  return element(by.xpath('//*[@id="clientlogo"]/div/form/div/input'));
}

uploadBtn(){
  return element(by.xpath('//*[@id="clientlogo"]/div/form/button'));
}

partnerNameAbbreviation(){
  return element(by.xpath('//*[@id="pName"]'));
}
partnerContactFirstName(){
  return element(by.xpath('//*[@id="fName"]'));
}
partnerContactLastName(){
  return element(by.xpath('//*[@id="lName"]'));
}
partnerContactEmail(){
  return element(by.xpath('//*[@id="email"]'));
}
partnerContactPhoneNum(){
  return element(by.xpath('//*[@id="pphone"]'));
}
partnerLicense(){
  return element(by.xpath('//*[@id="newpartner"]/div[1]/form/div[2]/div[2]/span[3]/select/option[2]'));
}
partnerDatbaseServer(){
  return element(by.xpath('//*[@id="newpartner"]/div[1]/form/div[2]/div[3]/span[1]/select/option[3]'));
}
partnerSaveBtn(){
  return element(by.xpath('//*[@id="newpartner"]/div[1]/form/div[2]/div[3]/span[2]/div/div[1]/button[1]'));
}
partnerAbberviationError(){
  return element(by.xpath('//*[@id="newpartner"]/div[1]/form/div[2]/div[1]/span[1]/span')).getText();
}
partnerFirstNameError(){
  return element(by.xpath('//*[@id="newpartner"]/div[1]/form/div[2]/div[1]/span[2]/span')).getText();
}
partnerLastNameError(){
  return element(by.xpath('//*[@id="newpartner"]/div[1]/form/div[2]/div[1]/span[3]/span')).getText();
}
partnerEmailError(){
   return element(by.xpath('//*[@id="newpartner"]/div[1]/form/div[2]/div[2]/span[1]/span')).getText();
}
partnerPhoneNumError(){
   return element(by.xpath('//*[@id="newpartner"]/div[1]/form/div[2]/div[2]/span[2]/span')).getText(); 
}
}
