var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

    driver.get('http://localhost:5005/index.html');
    driver.findElement(By.className('praise')).click();
    driver.wait( until.elementTextIs(driver.findElement(By.className('praise-count')), '+ 1') ,1000);
    driver.sleep(1000);
    driver.findElement(By.className('praise')).click();
    driver.wait( until.elementTextIs(driver.findElement(By.className('praise-count')), '+ 2') ,1000);
    driver.sleep(1000);
    driver.findElement(By.className('praise')).click();
    driver.wait( until.elementTextIs(driver.findElement(By.className('praise-count')), '+ 3') ,1000);
    driver.sleep(1000);
    driver.findElement(By.className('praise')).click();
    driver.wait( until.elementTextIs(driver.findElement(By.className('praise-count')), '+ 4') ,1000);
    driver.sleep(1000);
    driver.findElement(By.className('praise')).click();
    driver.wait( until.elementTextIs(driver.findElement(By.className('praise-count')), '+ 5') ,1000);
    driver.sleep(1000);
    driver.findElement(By.className('praise')).click();
    driver.wait( until.elementTextIs(driver.findElement(By.className('praise-count')), '+ 6') ,1000);
    driver.sleep(1000);
    driver.findElement(By.className('praise')).click();
    driver.wait( until.elementTextIs(driver.findElement(By.className('praise-count')), '+ 7') ,1000);
    driver.sleep(1000);
    driver.findElement(By.className('praise')).click();
    driver.wait( until.elementTextIs(driver.findElement(By.className('praise-count')), '+ 8') ,1000);
    driver.sleep(1000);
    driver.findElement(By.className('praise')).click();
    driver.wait( until.elementTextIs(driver.findElement(By.className('praise-count')), '+ 9') ,1000);
    driver.sleep(1000);
    driver.findElement(By.className('praise')).click();
    driver.wait( until.elementTextIs(driver.findElement(By.className('praise-count')), '+ 10') ,1000);
    driver.quit();