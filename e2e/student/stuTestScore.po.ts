import { browser, by, element, protractor } from 'protractor';

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

testScoreUrlData(){
  var testScoreUrl = "http://envision-test/#/student/testScores";
  return testScoreUrl;
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

   currentUrl(){
  	return browser.getCurrentUrl();
  }

   menuClick(){
  	return  element(by.id('hamburger'));
  }

    successMsg(){
    return element(by.className('sn-content')).getText();
  }

  stuTestScoreLink(){
     return element(by.xpath('//*[@id="admin-nav"]/ul/li[6]/ul/li[2]/span'));
     
  }

  studentProfilePage(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[6]/div/span'));
  }

  unweightedValue(){

    return element(by.css('[name="unweighted"]'));
  }

  checkHonorLabel(){
    return  element(by.css("label[for='honors']"));
  }

  saveButtonclick(){

    return element(by.buttonText('Save'));
  }

  clickPsatLink(){
    return element(by.id('md-tab-label-1-1'));
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

psatReadWriteValue(){
  return element(by.xpath('//*[@id="md-tab-content-0-1"]/div/app-my-test-scores-psat/div/div/form/table/tbody/tr/td[1]/input'));
}

psatMathsValue(){
  return element(by.xpath('//*[@id="md-tab-content-0-1"]/div/app-my-test-scores-psat/div/div/form/table/tbody/tr/td[2]/input'));
}
 psatTotalValue(){
  return element(by.xpath('//*[@id="md-tab-content-0-1"]/div/app-my-test-scores-psat/div/div/form/table/tbody/tr/td[3]/input'));
 }

 psatGradeLevel(){
  return element(by.xpath('//*[@id="md-tab-content-0-1"]/div/app-my-test-scores-psat/div/div/form/table/tbody/tr/td[4]/select/option[6]'));
 }

 psatDateValue(){
  return element(by.xpath('//*[@id="md-tab-content-0-1"]/div/app-my-test-scores-psat/div/div/form/table/tbody/tr/td[4]/input'));
 }

 psatSaveClick(){
  return element(by.xpath('//*[@id="md-tab-content-0-1"]/div/app-my-test-scores-psat/div/div/form/table/tbody/tr/td[5]/span'));
 }

 preActEnglishValue(){
  return element(by.xpath('//*[@id="md-tab-content-0-2"]/div/app-my-test-scores-pre-act/div/div/form/table/tbody/tr/td[1]/input'));
 }

 preActMathsValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-2"]/div/app-my-test-scores-pre-act/div/div/form/table/tbody/tr/td[2]/input'));
 }

 preActReadValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-2"]/div/app-my-test-scores-pre-act/div/div/form/table/tbody/tr/td[3]/input'));
 }

 preActScienceValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-2"]/div/app-my-test-scores-pre-act/div/div/form/table/tbody/tr/td[4]/input'));
 }

 preActCompositeValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-2"]/div/app-my-test-scores-pre-act/div/div/form/table/tbody/tr/td[5]/input'));
 }

 preActGradeValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-2"]/div/app-my-test-scores-pre-act/div/div/form/table/tbody/tr/td[6]/select/option[4]'));

 }

 preActDateValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-2"]/div/app-my-test-scores-pre-act/div/div/form/table/tbody/tr/td[7]/input'));

 }

 preActSave(){
   return element(by.xpath('//*[@id="md-tab-content-0-2"]/div/app-my-test-scores-pre-act/div/div/form/table/tbody/tr/td[8]/span'));
 }

 actEnglishValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-3"]/div/app-my-test-scores-act/div/div/form/table/tbody/tr/td[1]/input'));
 }

 actMathsValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-3"]/div/app-my-test-scores-act/div/div/form/table/tbody/tr/td[2]/input'));
 }

 actReadValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-3"]/div/app-my-test-scores-act/div/div/form/table/tbody/tr/td[3]/input'));
 }

 actSciencevalue(){
   return element(by.xpath('//*[@id="md-tab-content-0-3"]/div/app-my-test-scores-act/div/div/form/table/tbody/tr/td[4]/input'));
 }

 actCompositeValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-3"]/div/app-my-test-scores-act/div/div/form/table/tbody/tr/td[5]/input'));
 }

 actwritingValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-3"]/div/app-my-test-scores-act/div/div/form/table/tbody/tr/td[6]/input'));
 }

 actGradeValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-3"]/div/app-my-test-scores-act/div/div/form/table/tbody/tr/td[7]/select/option[7]'));
 }

 actDateValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-3"]/div/app-my-test-scores-act/div/div/form/table/tbody/tr/td[8]/input'));
 }

 actSave(){
   return element(by.xpath('//*[@id="md-tab-content-0-3"]/div/app-my-test-scores-act/div/div/form/table/tbody/tr/td[9]/span'));
 }

 satReadWriteValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-4"]/div/app-my-test-scores-sat/div/div/form/table/tbody/tr/td[1]/input'));
 }

 satMathsValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-4"]/div/app-my-test-scores-sat/div/div/form/table/tbody/tr/td[2]/input'));
 }

 satTotalValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-4"]/div/app-my-test-scores-sat/div/div/form/table/tbody/tr/td[4]/input'));
 }

 satEassyValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-4"]/div/app-my-test-scores-sat/div/div/form/table/tbody/tr/td[3]/input'));
 }

 satGradeLevel(){
   return element(by.xpath('//*[@id="md-tab-content-0-4"]/div/app-my-test-scores-sat/div/div/form/table/tbody/tr/td[5]/select/option[3]'));
 }

 satTestDate(){
   return element(by.xpath('//*[@id="md-tab-content-0-4"]/div/app-my-test-scores-sat/div/div/form/table/tbody/tr/td[6]/input'));
 }

 satSaveData(){
   return element(by.xpath('//*[@id="md-tab-content-0-4"]/div/app-my-test-scores-sat/div/div/form/table/tbody/tr/td[7]/span'));
 }

 satSubjectValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-5"]/div/app-my-test-scores-sat-subjects/div/div/form/table/tbody/tr/td[2]/select/option[5]'));
 }

 satSubjectsScoreValue(){
    return element(by.xpath('//*[@id="md-tab-content-0-5"]/div/app-my-test-scores-sat-subjects/div/div/form/table/tbody/tr/td[1]/input'));
 }

 satSubjectsDateValue(){
    return element(by.xpath('//*[@id="md-tab-content-0-5"]/div/app-my-test-scores-sat-subjects/div/div/form/table/tbody/tr/td[3]/input'));
 }

 satSubjectSave(){
   return element(by.xpath('//*[@id="md-tab-content-0-5"]/div/app-my-test-scores-sat-subjects/div/div/form/table/tbody/tr/td[4]/span'));
 }

 apSubjectValue(){
   return element(by.xpath('//*[@id="md-tab-content-0-6"]/div/app-my-test-scores-ap/div/div/form/table/tbody/tr/td[2]/select/option[3]'));
 }

 apScoreValue(){
    return element(by.xpath('//*[@id="md-tab-content-0-6"]/div/app-my-test-scores-ap/div/div/form/table/tbody/tr/td[1]/input'));
 }

 apDateValue(){
    return element(by.xpath('//*[@id="md-tab-content-0-6"]/div/app-my-test-scores-ap/div/div/form/table/tbody/tr/td[3]/input'));
 }

 apSave(){
   return element(by.xpath('//*[@id="md-tab-content-0-6"]/div/app-my-test-scores-ap/div/div/form/table/tbody/tr/td[4]/span'));

 }

 pageTitle(){
   return element(by.xpath('//*[@id="student"]/div/app-secondary-nav/nav/div/span[3]/span')).getText();
 }

}
