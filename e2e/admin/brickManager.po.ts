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
brickManagerLink(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[7]/ul/li[1]/span'));
}

brickDataTextbox(){
  return element(by.xpath('//*[@id="brickName"]'));
}

brickRankTextbox(){
  return element(by.xpath('//*[@id="rank"]'));
}

newBtnBrickManger()
{
  return element(by.xpath('//*[@id="newbrick"]/form/span[2]/span/button'));
}

brickDataTextboxData(){
  return element(by.xpath('//*[@id="brickName"]')).getText();
}

selectBrickCategory(){
  return element(by.xpath('//*[@id="newbrick"]/form/span[1]/span[1]/select/option[2]'));
}

selectActiveChkbox(){
 element(by.css("label[for='check1']"));
}

selectEightGradeQuater(){
  return element(by.xpath('//*[@id="bricktemp"]/div[2]/div[2]/div/span/select/option[2]'));
}

selectFreshmanFourthQuater(){
  return element(by.xpath('//*[@id="bricktemp"]/div[3]/div[3]/div/span/select/option[3]'));
}

saveBtnBrickData(){
  return element(by.xpath('//*[@id="newbrick"]/form/span[2]/span/span/div/button[1]'))
}

selectBrickRowData(){
  return element(by.xpath('//*[@id="brickmanager"]/div[2]/table/tbody/tr[1]/td[1]'));
}

deleteBtnClick(){
  return element(by.xpath('//*[@id="brickmanager"]/div[2]/table/tbody/tr[1]/td[12]/span'));
}

deleteConfirmationYes(){
  return element(by.xpath('//*[@id="admin"]/app-admin/div/app-brick-manager/app-add-event/div/div/div/div/div[3]/div/button[1]'));
}

brickCategoryValidatnError(){
   return element(by.xpath('//*[@id="newbrick"]/form/span[1]/span[1]/span')).getText();
}

brickNameValidatnError(){
  return element(by.xpath('//*[@id="newbrick"]/form/span[1]/span[2]/span')).getText();
}

brickRankValidatnError(){
  return element(by.xpath('//*[@id="newbrick"]/form/span[1]/span[3]/span')).getText();
}


}
