import { browser, by, element, Button } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('title')).getText() as Promise<string>;
  }
  getTextUsername(){
    return element(by.id('username')).sendKeys("Tom");
  }
  getPassword(){
    return element(by.id('password')).sendKeys("VRZy1#7*");
  }
  OnClickLogin(){
    return element(by.className('btn btn-secondary btn-block'))
  }
  onClickCreateSG(){
    return element(by.id('createSG'))
  }
  createStudyGuide(){
    element(by.xpath('//*[@id="myModal"]/div/div/div/form/div/div[1]/input')).sendKeys("SG3");
    element(by.xpath('//*[@id="myModal"]/div/div/div/form/div/div[2]/select')).sendKeys("Secondary");
    element(by.xpath('//*[@id="myModal"]/div/div/div/form/div/div[3]/select')).sendKeys("year-6");
    element(by.xpath('//*[@id="myModal"]/div/div/div/form/div/div[4]/select')).sendKeys("Social Studies");
    element(by.xpath('//*[@id="myModal"]/div/div/div/form/div/div[5]/input')).sendKeys("06-01-2020");
    element(by.css('app-studyguide [formControlName="validUpto"]')).sendKeys("07-02-2020");
    browser.sleep(2000);
    return element(by.buttonText('Submit')).click();
  }
}