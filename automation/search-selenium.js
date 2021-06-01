const {Builder, By, Key, until, webdriver} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
 // driver = webdriver.Chrome(executable_path="./chromedriver.exe")
  try {
    await driver.get('http://www.google.com');
    await driver.sleep(1000)
    let agreeButton =  await driver.findElement(By.xpath('//div[text()="Sunt de acord"]'));
    await agreeButton.click()
    await driver.sleep(1000)
    let searchInput = await driver.findElement(By.xpath('//input[@name="q"]'));
    await searchInput.sendKeys('webdriver', Key.RETURN);
    await driver.sleep(2000)
    await driver.wait(until.titleIs('webdriver - Google Search'), 3000);
  } finally {
    await driver.quit();
  }
})();