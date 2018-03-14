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

messageLink(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[10]/span'));
}

addDocumentBtn(){
  return element(by.xpath('//*[@id="mymessages"]/div[2]/div[2]/div/div[1]/button'));
}
selectFileForUpload(){
  return element(by.xpath('//*[@id="docufile"]/div/form/div/input'));
}

selectDocType(){
  return element(by.xpath('//*[@id="docufile"]/div/form/span/select/option[3]'));
}

uploadBtn(){
  return element(by.xpath('//*[@id="docufile"]/div/form/button'));
}

messageSubject(){
  return element(by.xpath('//*[@id="mymessages"]/div[2]/div[2]/div/div[2]/form/div[1]/div/input'));
}

messageDetails(){
  return element(by.xpath('//*[@id="mymessages"]/div[2]/div[2]/div/div[2]/form/div[2]/div/textarea'));
}

sendBtn(){
  return element(by.xpath('//*[@id="mymessages"]/div[2]/div[2]/div/div[2]/form/button'));
}

selectPartner(){
  return element(by.xpath('//*[@id="partnerinst"]/select/option[2]'));
}

selectMessgaeForrply(){
  return element(by.xpath('//*[@id="mymessages"]/div[2]/div[1]/table/tbody/tr[1]/td[2]'));
}

}
