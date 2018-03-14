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

  securityLink(){
    return element(by.xpath('//*[@id="admin-nav"]/ul/li[3]/span'));
  }
  userLinkClick(){
    return element(by.xpath('//*[@id="admin-nav"]/ul/li[3]/ul/li[2]/span'));
  }

  firstNameSearch(){
    return element(by.xpath('//*[@id="users"]/div[4]/div[1]/input[2]'));
  }

  selectPartnerValue(){
    return element(by.xpath('//*[@id="partnerinst"]/select/option[4]'));
  }

  searchUserBtnClick(){
    return element(by.xpath('//*[@id="users"]/div[4]/div[1]/button[1]'));

  }

  firstNameValue(){
    return element(by.xpath('//*[@id="users"]/div[5]/table/tbody/tr[1]/td[3]')).getText();

  }

  clearSearchButton(){
    return element(by.xpath('//*[@id="users"]/div[4]/div[1]/button[2]'));
    //*[@id="users"]/div[4]/div[1]/button[2]
  }

   firstNameTextBoxValue(){
    return element(by.xpath('//*[@id="users"]/div[4]/input[2]')).getText();

  }

 newUserBtnClick(){
   return element(by.xpath('//*[@id="users"]/div[1]/button[1]'));
 }

 userFromFirstNameFieldValue(){
   return element(by.xpath('//*[@id="firstName"]')).getText();
 }

 userClientId(){
   return element(by.xpath('//*[@id="clientID"]'));
 }
 userFirstName(){
   return element(by.xpath('//*[@id="firstName"]'));
 }
 userLastName(){
   return element(by.xpath('//*[@id="lastName"]'));
 }
 userPhone(){
   return element(by.xpath('//*[@id="phoneNumber"]'));
 }
 userMailId(){
   return element(by.xpath('//*[@id="email"]'));
 }
 userRole(){
   return element(by.xpath('//*[@id="newuser"]/form/div[2]/div[2]/span[3]/select/option[9]'));
 }
  userStatus(){
   return element(by.xpath('//*[@id="newuser"]/form/div[2]/div[3]/span[1]/select/option[3]'));
 }
 userSaveBtn(){
   return element(by.xpath('//*[@id="newuser"]/form/div[2]/div[3]/span[2]/button'));
 }
 lastLinkPagination(){
   return element(by.xpath('//*[@id="pagination-wrapper"]/div[1]/ul/ng-pagination/li[8]/a'));
 }
 deleteBtn(){
   return element(by.xpath('//*[@id="users"]/div[5]/table/tbody/tr[1]/td[8]/span[3]'));
 }
 deleteYesBtn(){
   return element(by.xpath('//*[@id="admin"]/app-admin/div/app-security-users/app-add-event/div/div/div/div/div[3]/div/button[1]'));
 }
 inputFile(){
   return element(by.xpath('//*[@id="docufile"]/div/form/div/input'));
 }
 uploadBtnClick(){
   return element(by.xpath('//*[@id="docufile"]/div/form/button'));

 }
 bulkImportBtn(){
   return element(by.xpath('//*[@id="users"]/div[1]/button[2]'));
 }

 clientIdError(){
   return element(by.xpath('//*[@id="newuser"]/form/div[2]/div[1]/span[1]/span')).getText();
 }

  firstNameError(){
   return element(by.xpath('//*[@id="newuser"]/form/div[2]/div[1]/span[2]/span')).getText();

 }

  lastNameError(){
   return element(by.xpath('//*[@id="newuser"]/form/div[2]/div[1]/span[3]/span')).getText();
 }

  phoneNoError(){
   return element(by.xpath('//*[@id="newuser"]/form/div[2]/div[2]/span[1]/span')).getText();
 }

 emailIdError(){
   return element(by.xpath('//*[@id="newuser"]/form/div[2]/div[2]/span[2]/span')).getText();
 }

 firstNameTextValueForClear(){
   return element(by.xpath('//*[@id="users"]/div[4]/div[1]/input[2]')).getText();
 }

 firstNameTextForClear(){
   return element(by.xpath('//*[@id="users"]/div[4]/div[1]/input[2]'));
 }

 uploadBtnAvtar(){
   return element(by.xpath('//*[@id="newuser"]/form/div[1]/div[2]/button'));
 }

 uploadAvtarInputData(){
   return element(by.xpath('//*[@id="avatar"]/div/form/div[2]/input'));
   //*[@id="avatar"]/div/form/div[2]/input
 }

 uplodaAvtarFinalBtn(){
   return element(by.xpath('//*[@id="avatar"]/div/form/button'));
 }





}
