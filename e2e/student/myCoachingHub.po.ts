
import { browser, by, element, protractor} from 'protractor';

export class EnvisionAppPage {
  navigateTo() {
    return browser.get('/');
  }

  userName(){
  var username = "sandeepc@techvedhas.com";
  return username;
}

passWord(){
  var password = "kaustav@123";
  return password;

}

  getParagraphText() {
    return element(by.css('.loginTitle')).getText();
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
  	return  element(by.xpath("/html/body/app-root/div/app-main-nav/nav/div/div[2]/div[2]/div[1]"));
  }

  currentUrl(){
  	return browser.getCurrentUrl();
  }

  menuClick(){
  	return  element(by.id('hamburger'));
  }

  clickAdminHome(){
  	return  element(by.css('#admin-nav > ul > li:nth-child(1) > span'));
  	//return  $('#admin-nav > ul > li:nth-child(1) > span');
  }

    clickRefList(){
  	return  element(by.css('#admin-nav > ul > li:nth-child(2) > span'));
  	//return  $('#admin-nav > ul > li:nth-child(1) > span');
  }

    clickSecurity(){
  	return  element(by.css('#admin-nav > ul > li:nth-child(3) > span'));
  	//return  $('#admin-nav > ul > li:nth-child(1) > span');
  }

    clickPartner(){
  	return  element(by.css('#admin-nav > ul > li:nth-child(4) > span'));
  	//return  $('#admin-nav > ul > li:nth-child(1) > span');
  }

  partnerName(){
  	return element(by.id('pName'));
  }

   partnerFirstName(){
  	return element(by.id('fName'));
  }

   partnerLastName(){
  	return element(by.id('lName'));
  }

   partnerEmail(){
  	return element(by.id('email'));
  }

  partnerPhone(){
  	return element(by.id('pphone'));
  }

  licenseDropdown(){
  	return element(by.cssContainingText('option', 'license A'));
  }

  dbServerDropdown(){
  	return element(by.cssContainingText('option', 'EnnovapartnerInstance'));
  }

  savePartnerData(){
  	return element(by.buttonText('Save'));
  }

  openPartnerForm(){
  	return element(by.css('[name="newpartner"]'));
  }

  chkStuHomeLink(){
    return  element(by.xpath('//*[@id="admin-nav"]/ul/li[6]/span'));
  }

   chkMyCoachHub(){
    return  element(by.xpath('//*[@id="admin-nav"]/ul/li[2]/div/span[1]'));
  }

  clickDoc(){
    return  element(by.xpath('//*[@id="student-documents-wrapper"]/div[1]/button'));
  }

  inputFile(){

    return element(by.css('input[type="file"]'));
  }

  selectDoctype(){

    return element(by.xpath('//*[@id="docufile"]/div/form/span/select/option[3]'));
  }

  uploadButton(){

      return element(by.xpath('//*[@id="docufile"]/div/form/button'));
  }

  deleteDocs(){
    return element(by.xpath('//*[@id="student-documents-wrapper"]/div[2]/div[1]/div[1]/table/tbody/tr[1]/td[5]/img'));
  }

  deleteConfirmation(){
  return element(by.xpath('//*[@id="student-documents"]/app-student-documents/app-add-event/div/div/div/div/div[3]/div/button[1]'));
  }

  libraryTabClick(){
    return element(by.xpath('//*[@id="md-tab-label-29-1"]'));
    //return element(by.id('md-tab-label-29-1'));

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

selectCalnderDate(){
  return element(by.xpath('//*[@id="myCalendar"]/div[2]/div/table/tbody/tr/td/div/div/div[1]/div[2]/table/thead/tr/td[4]'));
}
 
 eventPopupTitle(){
   return element(by.xpath('//*[@id="calendar"]/div/div[1]/div/app-main-calendar/app-add-event/div/div/div/div/div[1]/div/span[1]')).getText();
 }

 eventTitle(){
   return element(by.css('[name="event-title"]'));
 }

  eventDescription(){
   return element(by.css('[name="event-description"]'));
 }

eventSaveButtonClick(){
   return element(by.xpath('//*[@id="calendar"]/div/div[1]/div/app-main-calendar/app-add-event[1]/div/div/div/div/div[3]/div/button[1]'));
}

eventDeatilIconClick(){
   return element(by.xpath('//*[@id="calendar"]/div/div[2]/div/div/div/div[3]/img'));
}

eventDetailPopupTitle(){
  return element(by.xpath('//*[@id="student-calendar"]/app-student-calendar/app-add-event/div/div/div/div/div[1]/div/span')).getText();
}

selectedPageTitle(){
  return element(by.xpath('//*[@id="student"]/div/app-secondary-nav/nav/div/span[2]/span')).getText();
}

documentTabOption(){

  return element(by.id('md-tab-label-25-2'));
}
docTypeColumnText(){
  return element(by.xpath('//*[@id="student-documents-wrapper"]/div[2]/div[1]/div[1]/table/tbody/tr[1]/td[3]')).getText();
}
selectDocTypeForSearch(){
  return element(by.xpath('//*[@id="student-documents-wrapper"]/div[2]/div[1]/span/select/option[3]'));
}

getCalenderTextToVerify(){
  return element(by.xpath('//*[@id="calendar"]/div/div[2]/div/strong')).getText();
}

eventDetailOpenForUpdate(){
  return element(by.xpath('//*[@id="myCalendar"]/div[2]/div/table/tbody/tr/td/div/div/div[1]/div[2]/table/tbody/tr[1]/td[4]/a/div/span[1]'));
}

selectWeekOption(){
  return element(by.xpath('//*[@id="myCalendar"]/div[1]/div[2]/div[1]/button[2]'));
}

selectWeekCalenderDate(){
  return element(by.xpath('//*[@id="myCalendar"]/div[2]/div/table/tbody/tr/td/div[1]/div/div[1]/table/tbody/tr/td[5]'));
}

selectWeekDayEventForUpdate(){
  return element(by.xpath('//*[@id="myCalendar"]/div[2]/div/table/tbody/tr/td/div[2]/div/div[3]/table/tbody/tr/td[5]/div/div[2]/a/div[1]/div'));
}

selectDayOption(){
  return element(by.xpath('//*[@id="myCalendar"]/div[1]/div[2]/div[1]/button[3]'));
}

selectDayDateOption(){
  return element(by.xpath('//*[@id="myCalendar"]/div[2]/div/table/tbody/tr/td/div[1]/div/div[1]/table/tbody/tr/td[2]'));
}

selectDayEventForUpdate(){
  return element(by.xpath('//*[@id="myCalendar"]/div[2]/div/table/tbody/tr/td/div[2]/div/div[3]/table/tbody/tr/td[2]/div/div[2]/a/div[1]/div'));
}

chatArcheiveTextVefication(){
  return element(by.xpath('//*[@id="student-communications"]/app-student-communications/div/div/div[1]/h1')).getText();
}

expectedTextForCareerPage(){
  return element(by.className('.c-onboarding-title')).getText();
}

imgForPersonalityPage(){
  return element(by.css("img[src*='logo_1.gif']"));
}

imgForLearningPage(){
  return element(by.css("img[src*='logo_3.gif']"));
}
 learnPageText(){
   return element(by.xpath('//*[@id="container"]/div/p')).getText();
 }

  personalityPageText(){
   return element(by.xpath('//*[@id="container"]/div/p')).getText();
 }

 iframeId(){
   return element(by.xpath('//*[@id="md-tab-content-37-2"]/div/app-student-learning-assessment/div/iframe'));
 }

}
