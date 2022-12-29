const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('petzRacao', function() {
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })

  afterEach(async function() {
    await driver.quit();
  })

  it('petzRacao', async function() {
    await driver.get("https://www.petz.com.br/")
    await driver.manage().window().maximize()
    
    await driver.findElement(By.id("search")).sendKeys("racao premier gatos filhotes pelos longos")

    await driver.findElement(By.css(".custom-icon > img")).click()
    await driver.findElement(By.css(".product-img")).click()
    assert(await driver.findElement(By.css("h1")).getText() == "Ração Premier Ambientes Internos Pelos Longos para Gatos Filhotes Sabor Salmão")
    await driver.findElement(By.css(".col-xs-12")).click() 
    assert(await driver.findElement(By.css(".current-price-left > strong")).getText() == "R$ 28,90")
  })
})