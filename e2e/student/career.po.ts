import { browser, by, element } from 'protractor';

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

   currentUrl(){
  	return browser.getCurrentUrl();
  }

   menuClick(){
  	return  element(by.id('hamburger'));
  }

  careerLink(){
  	return element(by.xpath('//*[@id="admin-nav"]/ul/li[4]/div/span'));
  }

  careerToggleLink(){
    return element(by.xpath('//*[@id="student"]/div/app-student-explore/div/div/tree-root/tree-viewport/div/div/tree-node-collection/div/tree-node[1]/div/tree-node-wrapper/div/tree-node-expander/span/span'));
  }

  selectCareerOption1(){
    //return element(by.xpath('//*[@id="student"]/div/app-student-explore/div[1]/tree-root/tree-viewport/div/div/tree-node-collection/div/tree-node[2]/div/tree-node-children/div/tree-node-collection/div/tree-node[3]/div/tree-node-wrapper/div/div/tree-node-content/input'));
    return element(by.css("label[for='896']"));
  }
  selectCareerOption2(){
    //return element(by.xpath('//*[@id="student"]/div/app-student-explore/div[1]/tree-root/tree-viewport/div/div/tree-node-collection/div/tree-node[2]/div/tree-node-children/div/tree-node-collection/div/tree-node[3]/div/tree-node-wrapper/div/div/tree-node-content/input'));
    return element(by.css("label[for='926']"));
  }

  myCareerLink(){

    return element(by.xpath('//*[@id="admin-nav"]/ul/li[4]/ul/li[2]/span'));
  }

  editLinkMyCareerList(){
    return element(by.xpath('//*[@id="student-careers-wrapper"]/div/table/tbody/tr[1]/td[4]/span[2]/img'));
  }

  inputMycomment(){

    //return element(by.xpath('//*[@id="student-careers-wrapper"]/div/table/tbody/tr[1]/td[4]/input'));
    return element(by.xpath("//input[@name='myComment']"));
  }

  saveUpdatedMyComments(){
    return element(by.xpath('//*[@id="student-careers-wrapper"]/div/table/tbody/tr[1]/td[4]/span[2]'));
  }

    successMsg(){
    return element(by.className('sn-content')).getText();
  }

  deleteCareer(){
    return element(by.xpath('//*[@id="student-careers-wrapper"]/div/table/tbody/tr[1]/td[4]/span[1]'));
  }

  careerExploreLink(){
    return element(by.xpath('//*[@id="admin-nav"]/ul/li[4]/ul/li[1]/span'));
  }




}
