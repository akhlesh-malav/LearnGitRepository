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
heatMapLink(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[7]/ul/li[4]/span'));
}

brickManagerLink(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[7]/ul/li[1]/span'));
}

brickDataTextbox(){
  return element(by.xpath('//*[@id="brickName"]'));
}

brickRankTextbox(){
  return element(by.xpath('//*[@id="rank"]'));
}
selectBrickCategory(){
  return element(by.xpath('//*[@id="newbrick"]/form/span[1]/span[1]/select/option[2]'));
}

saveBtnBrickData(){
  return element(by.xpath('//*[@id="newbrick"]/form/span[2]/span/span/div/button[1]'))
}

selectTempThirdQuater(){
 return element(by.xpath('//*[@id="bricktemp"]/div[4]/div[6]/div/span/select/option[3]')) 
}

selectTempFouthQuater(){
 return element(by.xpath('//*[@id="bricktemp"]/div[5]/div[7]/div/span/select/option[6]')) ;
}
 
clicktTransfer(){
  return element(by.xpath('//*[@id="validation"]/div/ul/li[6]'));
}

clickFourthQuater(){
  return element(by.xpath('//*[@id="quarters"]/ul/li[4]'));
}

verifyBrickText(){
  return element(by.xpath('//*[@id="success"]/ul[5]/div/li')).getText();
  ////*[@id="success"]/ul[25]/div/li
}

selectActiveChkbox(){
  return element(by.css("label[for='check1']"));
}


}
