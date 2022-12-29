const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
require('chromedriver')

describe('iterasys', function() {
  let driver
  let vars

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    driver.manage().setTimeouts({implicit: 60000})
    vars = {}
  })

  afterEach(async function() {
    await driver.quit();
  })

  it('siteIterasys', async function() {
    await driver.get("https://iterasys.memberkit.com.br/")
    await driver.manage().window().maximize()
    await driver.findElement(By.id("user_email")).sendKeys("claudia.sander@procempa.com.br")
    await driver.findElement(By.id("user_password")).sendKeys("xxxxxx")
    await driver.findElement(By.name("commit")).click()
    await driver.findElement(By.css(".nav-item-certificate > .navbar__text")).click()
    assert(await driver.findElement(By.linkText("Certificado Técnicas de Teste")).getText() == "Certificado Técnicas de Teste")
    assert(await driver.findElement(By.linkText("Início Rápido em Teste de Software")).getText() == "Início Rápido em Teste de Software")
    
    await driver.findElement(By.linkText("Perfil")).click()
    assert(await driver.findElement(By.css("p.text-2xl.font-medium.tracking-tight")).getText() == "Claudia Sander")
  })
})