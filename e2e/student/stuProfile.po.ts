
import { browser, by, element,protractor } from 'protractor';

export class EnvisionAppPage {
  navigateTo() {
    return browser.get('/');
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
  	return  element(by.xpath('//*[@id="admin-nav"]/ul/li[8]/ul/li/span'));
  }

  currentUrl(){
  	return browser.getCurrentUrl();
  }

  menuClick(){
  	return  element(by.id('hamburger'));
  }


  tabKeyClick(){
  return browser.actions().sendKeys(protractor.Key.TAB).perform();
  }


  studentProfilePage(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[6]/div/span'));
  }

  studentLastName(){
  return element(by.xpath('//*[@id="formLastName"]'));
  }

  studentFormNextButton(){

    return element(by.buttonText('Next'));
  }

  residentialAdd1(){
    return element(by.xpath('//*[@id="formAddressLine1"]'));
  }

  residentialAdd2(){
    return element(by.xpath('//*[@id="formAddressLine2"]'));
  }

  residentialCity(){
    return element(by.xpath('//*[@id="formCityName"]'));
  }

  radioCitizenNo(){
    return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[1]/div[2]/div[2]/div[1]/div/input[2]'));
  }

  radioPermanantResident(){
    return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[1]/div[2]/div[2]/div[2]/div/input[2]'));
  }

 residentialState(){
   return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[1]/div[1]/div[2]/div/div[1]/div[4]/select/option[2]'));
 }

 residentialZipcode(){
   return element(by.xpath('//*[@id="formZipCode"]'));
 }

 residentialSameAsMailLabel(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[1]/div[1]/div[2]/div/div[1]/div[5]/div/div/div/div/label'));
 }


natoinalitySelection(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[1]/div[1]/div[2]/div/div[1]/div[5]/span[2]/select/option[3]'));
}

userMonthDate(){
  return element(by.css('[name="userMonthDate"]'));
}

userYearDate(){
  return element(by.css('[name="userYearDate"]'));
}

schoolGradeSelection(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[1]/div[1]/div[2]/div/div[1]/div[5]/span[3]/select/option[4]'));
}

selectStuBirth(){
    return element(by.xpath('//*[@id="studentBirthday"]'));
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


gpaWeightValue(){
  return element(by.css('[name="weightedValue"]'));
}

gpaUnWeightValue(){
  return element(by.css('[name="unweightedValue"]'));
}

studiesValue(){
  return element(by.css("label[for='dual']"));
}

courseSelection(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[1]/div[2]/div[4]/div[3]/div/div[2]/div/input'));
}

satEbrwValue(){
    return  element(by.css('[name="EBRWValue"]'));
}

satMathValue(){
      return  element(by.css('[name="mathValue"]'));
}

actCompositeValue(){
  return  element(by.css('[name="actCompositeValue"]'));
}

selectedPreferClassSize(){
  return element(by.css("label[for='check-3']"));
}

submitButtonProfile(){
  return element(by.buttonText('Next'));
}

studentGeographyselection(){
  //return element(by.xpath('//*[@id="student-basic-info-page-two-wrapper"]/form/div[1]/div[1]/div[2]/div[1]/ul[2]/div[2]/li[2]/label'));
  //return element(by.css('#student-basic-info-page-two-wrapper > form > div.row > div.info-wrapper.col-xs-12.col-md-7 > div.info-container > div:nth-child(1) > ul:nth-child(3) > div.rankRadioContainer > li:nth-child(9) > label'));
  return element(by.css("label[for='dataSoutList_3']"));
}

studentNearCitySelection(){
  return element(by.css("label[for='dataCity_2']"));
}

studentSpecialConsideration(){
  return element(by.css("label[for='disablity_1']"));
}

studentCareerSelection(){
 return  element(by.xpath('//*[@id="student-basic-info-page-two-wrapper"]/form/div[1]/div[2]/div[4]/div[1]/select/option[5]'));
}

studentMajorSelection(){
  return element(by.xpath('//*[@id="student-basic-info-page-two-wrapper"]/form/div[1]/div[2]/div[4]/div[2]/select/option[4]'));
}

submitProfieData2(){
  return  element(by.xpath('//*[@id="student-optional-info-page-three-wrapper"]/div[4]/button[1]'));
}

submiProfilData3(){
  return element(by.buttonText('Continue Your Journey'));
}

scrollTop(){
   return browser.executeScript('$("body").scrollTop(1000);');
}

selectHighSchoolValue(){
   return element(by.css('[name="highSchoolValue"]'));

}

selectClassRank(){
  return element(by.css('[name="classRank"]'));
  
}

currentHighSchoolPlan(){
  return element(by.css('[name="Science"]'));
} 
activitiesTab(){
    return element(by.xpath('//*[@id="md-tab-label-13-0"]'));
 }

 activityCludValue(){
    return element(by.css("label[for='719']"));
 }

 otherActivityValue(){
    return element(by.css("label[for='741']"));
 }

 rotcTabClick(){
   return  element(by.xpath('//*[@id="md-tab-label-1-1"]'));
 }

 selectRotcClick(){
   return element(by.css("label[for='514']"));
 }
 sportsClick(){
   return  element(by.xpath('//*[@id="md-tab-label-1-2"]'));
 }

 selectSprotr1(){
   return element(by.css("label[for='62_checkbox_0']"));
 }

  selectSprotr2(){
   return element(by.css("label[for='62_checkbox_1']"));
 }

 selectSprotr3(){
   return element(by.css("label[for='62_checkbox_2']"));
 }

 selectSprotr4(){
   return element(by.css("label[for='62_checkbox_3']"));
 }

 musicTabClick(){
   return  element(by.xpath('//*[@id="md-tab-label-1-3"]'));
 }

selectMusicLabel(){
  return element(by.css("label[for='688']"));
}

 lifeTabClick(){
   return  element(by.xpath('//*[@id="md-tab-label-1-4"]"]'));
 }

setLifeTextareaValue1(){
  return element(by.xpath('//*[@id="md-tab-content-0-4"]/div/app-student-optional-info-page-three-life/div/div[1]/textarea'));
}

setLifeTextareaValue2(){
  return element(by.xpath('//*[@id="md-tab-content-0-4"]/div/app-student-optional-info-page-three-life/div/div[2]/textarea'));
}

selectWorkType(){
  return element(by.css("label[for='694']"));
}
 workPlaceData(){
  return element(by.xpath('//*[@id="student-optional-info-page-four-wrapper"]/div[1]/div[2]/div/div[2]/textarea'));
}

volunteerHours(){
  return  element(by.xpath('//*[@id="student-optional-info-page-four-wrapper"]/div[1]/div[2]/div/div[3]/div[2]/input'));
}

scholaticInterest1(){
  return element(by.css("label[for='699']"));
}
 
scholaticInterest2(){
  return element(by.css("label[for='701']"));
}
 
mailAddressCompare(){
   return element(by.css('[name="mailingAddressLine1"]')).getText();
}

backButtonClick(){
  return element(by.buttonText("Back"));
}

prefferdCollege2(){
  return element(by.css("label[for='dataCity_1']"));
}

unsureOption(){
  return element(by.css("label[for='unsure']"));
}

usCitizenship(){
  return element(by.xpath(' //*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[2]/div[2]/div[1]/div/input[1]'));

}
permanentResidential(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[2]/div[2]/div[2]/div/input[2]'));
}
AdvanceClassOption(){
  return element(by.css("label[for='dual']"));
}
numAdvanceClassOption(){
  return element(by.css("[name='subjectCourses']"));
}
stuEmailAddress(){
  return element(by.css("[name='emailAddress']"));
}
greenEmailBtn(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[3]/div[1]/div[2]/div[2]/span/button'));
}
stuPhoneNum(){
   return element(by.css("[name='phoneNo']"));
}
greenPhoneBtn(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[3]/div[1]/div[2]/div[5]/div[1]/div/div[3]/button'))
}
homePhoneField(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[3]/div[1]/div[2]/div[5]/div[1]/div/span/select/option[2]'));
  
}

selectMajorCareer1(){
  return element(by.xpath('//*[@id="student-basic-info-page-two-wrapper"]/form/div[1]/div[2]/div[4]/div[1]/span/div[1]/ngui-auto-complete/div/ul/li[3]'));
}
selectMajorCareerDrp1(){
    return element(by.css("[name='careersName']"));
}
selectMajorCareerDrp2(){
    return element(by.css("[name='majorsName']"));
}
selectMajorCareer2(){
  return element(by.xpath('//*[@id="student-basic-info-page-two-wrapper"]/form/div[1]/div[2]/div[4]/div[2]/span/div/ngui-auto-complete/div/ul/li[10]'));
}
selectNoPreferene(){
  return element(by.css("label[for='check-7']"));
}

 activityClubSelection(){
   return  element(by.xpath('//*[@id="md-tab-label-4-0"]'));
 }
  rotcSelection(){
   return  element(by.xpath('//*[@id="md-tab-label-4-1"]'));
 }
 whereWork(){
    return element(by.css("[name='whereWork']"));
 }
  voluHours(){
    return element(by.css("[name='volHours']"));
 }
 finishBtn(){
   return element(by.buttonText('Finish'));
 }
 selectHighFav(){
  return element(by.css("label[for='714']"));
}

selectLowFav(){
  return element(by.css("label[for='711']"));
}

profileClick(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[6]/ul/li[1]/span'));
}

selectMidAtlanticState(){
  return element(by.css("label[for='dataMidAtlantic_7']"));
}

selectNewEnglandState(){
  return element(by.css("label[for='dataNewEngland_4']"));
}

selectMidWestState(){
  return element(by.css("label[for='dataMid_1']"));
}

studentSpecialConsideration2(){
  return element(by.css("label[for='disablity_4']"));
}

pageTitle(){
  return element(by.xpath('//*[@id="student"]/div/app-secondary-nav/nav/div/span[3]/span')).getText();
}

studentFirstName(){
  return element(by.id('formFirstName'));
}

studentFirstNameError(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[1]/span[1]/span')).getText();
}

studentLastNameError(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[1]/span[2]/span')).getText();
}

residentialAdd1Error(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[2]/span/span')).getText();
}
residentialCityError(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[4]/span[1]/span')).getText();
}

genderSelection2(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[5]/span[1]/select/option[1]'));
  }

genderSelection2Error()
  {
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[5]/span[1]/span')).getText();
  }
ethinicitySelection2(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[5]/span[2]/select/option[1]'));
}

ethinicitySelection2Error(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[5]/span[2]/span')).getText();
}

currentGradeSchool2(){
   return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[5]/span[3]/select/option[1]'));
}

currentGradeSchool2Error(){
   return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[5]/span[3]/span')).getText();
}

stateSelection2(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[4]/span[2]/select/option[1]'));
}

stateSelection2Error(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[4]/span[2]/span')).getText();
}

zipcode2(){
  return element(by.id('formZipCode'));
}

zipcode2Error(){
  return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[4]/span[3]/span')).getText();
}
 expectedGraduationType2(){
   return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[6]/div/span[1]/select/option[1]'));
 }

  expectedGraduationType2Error(){
   return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[6]/div/span[1]/span')).getText();
 }

 expectedGraduationYear2(){
   return element(by.id('formUserYearDate'));
 }

 expectedGraduation2YearError(){
   return element(by.xpath('//*[@id="student-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div/div[1]/div[6]/div/span[2]/span')).getText();
 }


}

