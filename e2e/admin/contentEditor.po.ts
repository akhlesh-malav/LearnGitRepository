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
contentEditorLink(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[6]/span'));
}
newContentButton(){
  return element(by.xpath('//*[@id="editor"]/div[1]/div[1]/div/button'));
}

valueContentUsage(){
  return element(by.xpath('//*[@id="new-content"]/form/div/div[1]/span[1]/select/option[1]')).getText();
}

selectPartnerValue(){
  return element(by.xpath('//*[@id="partnerinst"]/select/option[4]'));
}

selectContentUsageValue(){
  return element(by.xpath('//*[@id="new-content"]/form/div/div[1]/span[1]/select/option[5]'));
}

selectContentCategory(){
  return element(by.xpath('//*[@id="new-content"]/form/div/div[1]/span[2]/select/option[6]'));
}

selectGradeValue(){
  return element(by.xpath('//*[@id="new-content"]/form/div/div[1]/span[3]/select/option[4]'));
}

contentTopicTitle(){
  return element(by.xpath('//*[@id="new-content"]/form/div/div[1]/span[4]/input'));
}

contentEditorText(){
  return element(by.xpath('//*[@id="new-content"]/form/div/div[2]/div/div[3]/div/p'));
}

contentSaveTempBtn(){
  return element(by.xpath('//*[@id="new-content"]/form/div/div[1]/span[5]/div[1]/button'));
}

contentUsageValidtnError(){
  return element(by.xpath('//*[@id="new-content"]/form/div/div[1]/span[1]/span')).getText();
}

contentCategoryValidtnError(){
  return element(by.xpath('//*[@id="new-content"]/form/div/div[1]/span[2]/span')).getText();
}

contentTopicTitleValidtnError(){
  return element(by.xpath('//*[@id="new-content"]/form/div/div[1]/span[4]/span')).getText();
}

contentEditorValidtnError(){
  return element(by.xpath('//*[@id="new-content"]/form/div/div[2]/span')).getText();
}

selectPublishCheck(){
  return element(by.css("label[for='active_0']"));
}
filterByContentValue(){
   return element(by.xpath('//*[@id="editor"]/div[1]/div[2]/div[1]/div/select/option[5]')); 

}
filterByCategoryValue(){
  return element(by.xpath('//*[@id="editor"]/div[1]/div[2]/div[2]/div/select/option[6]'));
}

// snTitleMessage(){
//   return element(by.xpath('//*[@id="content-editor"]/div/simple-notifications/div/simple-notification/div/div[1]/div[2]')).getText();

// }

deleteBtnClick(){
  return element(by.xpath('//*[@id="editor"]/div[3]/table/tbody/tr[1]/td[9]/span'));
}
deleteConfirmationYes(){
  return element(by.xpath('//*[@id="admin"]/app-admin/div/app-content-editor/app-add-event/div/div/div/div/div[3]/div/button[1]'));
}
}
