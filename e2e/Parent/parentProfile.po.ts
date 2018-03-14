
    import { browser, by, element,protractor } from 'protractor';

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

    parentProfileLink(){
    return element(by.xpath('//*[@id="admin-nav"]/ul/li[2]/span'));
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

    parentFirstName(){
       return  element(by.id('FirstName'));
    }

    parentMiddleName(){
       return  element(by.id('middleName'));
    }

    parentLastName(){
       return  element(by.id('lastName'));
    }

    parentAddress1(){
       return  element(by.id('addressLine1'));
    }

    parentAddress2(){
       return  element(by.id('addressLine2'));
    }

    parentCityName(){
       return  element(by.id('cityName'));
    }

    parentZipcode(){
       return  element(by.id('zipCode'));
    }

    pageTitle(){
        return  element(by.xpath('//*[@id="parent"]/app-secondary-nav/nav/div/span[2]/span')).getText();
    }

    parentFirstNameError1(){
        return  element(by.xpath('//*[@id="parent-basic-info-page-one-wrapper"]/form/div[1]/div[1]/div[2]/div/div[1]/div[1]/span[1]/span')).getText();
    }

    parentLastNameError(){
        return  element(by.xpath('//*[@id="parent-basic-info-page-one-wrapper"]/form/div[1]/div[1]/div[2]/div/div[1]/div[1]/span[2]/span')).getText();
    }

    parentAddressError(){
         return  element(by.xpath('//*[@id="parent-basic-info-page-one-wrapper"]/form/div[1]/div[1]/div[2]/div/div[1]/div[2]/span/span')).getText();
    }

     parentCityError(){
         return  element(by.xpath('//*[@id="parent-basic-info-page-one-wrapper"]/form/div[1]/div[1]/div[2]/div/div[1]/div[4]/span[1]/span')).getText();
    }

    parentSateValue(){
        return  element(by.xpath('//*[@id="parent-basic-info-page-one-wrapper"]/form/div[1]/div[1]/div[2]/div/div[1]/div[4]/span[2]/select/option[1]'));
    }

    parentSateValueError(){
       return  element(by.xpath('//*[@id="parent-basic-info-page-one-wrapper"]/form/div[1]/div[1]/div[2]/div/div[1]/div[4]/span[2]/span')).getText();
    }
    parentZipcodeError(){
       return  element(by.xpath('//*[@id="parent-basic-info-page-one-wrapper"]/form/div[1]/div[1]/div[2]/div/div[1]/div[4]/span[3]/span')).getText();
    }

    parentSateValue2(){
        return  element(by.xpath('//*[@id="parent-basic-info-page-one-wrapper"]/form/div[1]/div[1]/div[2]/div/div[1]/div[4]/span[2]/select/option[3]'));
    }

    parentMarriageStatus(){
        return element(by.xpath('//*[@id="parent-basic-info-page-one-wrapper"]/form/div[1]/div[1]/div[2]/div/div[1]/div[5]/select/option[6]'));
    }

    inputFile(){
        return element(by.className('upload'));
    }

    annualIncomeValue(){
        return element(by.css('[name="annualIncomeValue"]'));
    }

    familySize(){
        return element(by.css('[name="familySize"]'));
    }

    relationShip(){
        return element(by.xpath('//*[@id="parent-basic-info-page-one-wrapper"]/form/div[1]/div[2]/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[2]/select/option[4]'));
    }

    contributionValue(){
        return element(by.css('[name="contributionValue"]'));
    }

    parentEmailAddress(){
        return element(by.id('parentEmailAddress'));
    }

    mailGreenBtn(){
        return element(by.xpath('//*[@id="parent-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div[2]/button'));
    }

    parentPhoneNo(){
        return element(by.css('[name="parentPhoneNo"]'));
    }

    phoneNumType(){
        return element(by.xpath('//*[@id="parent-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div[5]/div[1]/div/div[2]/span/select/option[2]'));
    }

    phoneGreenBtn(){
        return element(by.xpath('//*[@id="parent-basic-info-page-one-wrapper"]/form/div[2]/div[1]/div[2]/div[5]/div[1]/div/div[4]/button'));
    }

     otherInfo(){
        return element(by.css('[name="otherInfo"]'));
    }

    gotoParentHomepage(){
        return element(by.buttonText('Go to Parent Homepage'));
    }

  }