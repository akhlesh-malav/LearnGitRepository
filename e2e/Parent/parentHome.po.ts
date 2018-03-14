import { browser, by, element, protractor } from 'protractor';

export class EnvisionAppPage {
  navigateTo() {
    return browser.get('/');
  }

 userName(){
  var username = "david@eworkforcetech.com";
  return username;
}

passWord(){
  var password = "kaustav@123";
  return password;

}

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
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
  
  upArrowKey(){
    return browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
    }

 tabKeyClick(){
    return browser.actions().sendKeys(protractor.Key.TAB).perform();
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

  homePageTitle(){
    return element(by.xpath('//*[@id="parent"]/app-secondary-nav/nav/div/span[2]/span')).getText();
  }

parentHomeLink(){
  return element(by.xpath('//*[@id="admin-nav"]/ul/li[1]/span'));
}
myAccountLink(){
    return element(by.xpath('//*[@id="admin-nav"]/ul/li[3]/span'));

  }

planProgressLink(){
  return  element(by.className('heading'));
}

backButtonText(){
  return element(by.buttonText('Back'));
}
backButtonText2(){
  return element(by.buttonText('Back')).getText();
}

summaryContainerText(){
  return element(by.className('summaryContainer')).getText();
}
heatMapText(){
  return element(by.id('parent-message-tabs-wrapper')).getText();
}

messageTabText(){
  return element(by.id('parent-message-tabs-wrapper')).getText();
}

calenderText(){
  return element(by.id('parent-calendar-wrapper')).getText();
}

careerText(){
  return element(by.id('parent-careers-wrapper')).getText();
}

collgeText(){
  return element(by.id('my-colleges-wrapper')).getText();
}

}
