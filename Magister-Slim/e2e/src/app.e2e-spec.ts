import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should open browser',()=>{
    page.navigateTo()
    browser.get("http://localhost:4200")
    page.getTextUsername();
    page.getPassword();
    browser.driver.sleep(2000);
    page.OnClickLogin().click();
  })

  it('should click on create studyguide',()=>{
    page.onClickCreateSG().click();
    browser.driver.sleep(2000)
  })

  it('should enter studyGuide values',()=>{
    page.createStudyGuide();
    expect(element(by.id('SG3')).isPresent())
    browser.driver.sleep(2000)
  })

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});