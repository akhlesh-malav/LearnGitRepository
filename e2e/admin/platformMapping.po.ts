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

platformMappingLink(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[11]/span'));
}

selectLicenseItem(){
  return element(by.xpath('//*[@id="licenses"]/form/div[2]/div[1]/div/span[3]'));
}

selectFirstChkboxValue(){
  return element(by.css("label[for='checkboxes_0']"));
}

selectSecondChkboxValue(){
  return element(by.css("label[for='checkboxes_1']"));
}
savePlatformMapping(){
  return element(by.xpath('//*[@id="licenses"]/form/div[1]/button'));
}

selectProductItem(){
  return element(by.xpath('//*[@id="products"]/form/div[2]/div[1]/div/span[1]'));
}
selectFirstModule(){ 
  return element(by.css("label[for='checkboxes_0']"));
}

selectSecondModule(){ 
  return element(by.css("label[for='checkboxes_1']"));
}

savePlatformMappingProducts(){
  return element(by.xpath('//*[@id="products"]/form/div[1]/button'));
}

selectModuleItems(){
  return element(by.xpath('//*[@id="modules"]/form/div[2]/div[1]/div/span[1]'));
}

selectServices1(){
 return element(by.css("label[for='checkboxes_0']"));
}

selectServices2(){
   return element(by.css("label[for='checkboxes_1']"));
}

saveSevicesPlatformMapping(){
  return element(by.xpath('//*[@id="modules"]/form/div[1]/button'));

}

selectPartnerValue(){
  return element(by.xpath('//*[@id="partnerinst"]/select/option[4]'));
}

}
