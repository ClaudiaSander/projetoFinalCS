const{ Builder, By } = require('selenium-webdriver')
require('chromedriver')
const assert = require('assert')
const { setMaxIdleHTTPParsers } = require('http')

describe('Comprar Passagem WD', () => {
    let driver
    
    // inicialização
    beforeEach(async () => {
        driver = await new Builder()
            .forBrowser('chrome')
            .build()
        driver.manage().setTimeouts({implicit: 6000})
        driver.manage().window().maximize()        
    })

    // finalização
    afterEach(async () => {
        await driver.quit()        
    })

    // testes
    it('Comprar Passagem SP-CA', async() => {
        await driver.get('https://blazedemo.com')
        {
            const dropdown = await driver.findElement(By.name('fromPort'))
            await dropdown.findElement(By.xpath("//option[. = 'São Paolo']")).click()
        }
        
        {
            const dropdown = await driver.findElement(By.name('toPort'))
            await dropdown.findElement(By.xpath("//option[. = 'Cairo']")).click()
        }
        await driver.findElement(By.css('input.btn.btn-primary')).click()
        assert(await driver.getTitle() == 'BlazeDemo - reserve')
        assert(await driver.findElement(By.css('h3')).getText() == 'Flights from São Paolo to Cairo:')
        assert(await driver.findElement(By.xpath('//tr[2]/td[3]')).getText() == 'United Airlines')
        await driver.findElement(By.xpath('//tr[2]/td[1]')).click()

        assert.equal(await driver.findElement(By.css('h2')).getText(),'Your flight from TLV to SFO has been reserved.')

        // preenche dados no form de entrada e clica botão 
        await driver.findElement(By.name('inputName')).sendKeys('Claudia Sander')    
        await driver.findElement(By.name('address')).sendKeys('Av Ipiranga 1200')
        await driver.findElement(By.name('city')).sendKeys('Porto Alegre')
        await driver.findElement(By.name('state')).sendKeys('RS')
        await driver.findElement(By.name('zipCode')).sendKeys('90160-091')
        await driver.findElement(By.name('state')).sendKeys('RS')
        {
            const dropdown = await driver.findElement(By.name('cardType'))
            await dropdown.findElement(By.xpath("option[. = 'Visa']")).click()
        } 
        
        await driver.findElement(By.css('input.btn.btn-primary')).click()

        assert(await driver.getTitle() == 'BlazeDemo Confirmation')
        assert(await driver.findElement(By.css('h1')).getText() == 'Thank you for your purchase today!')
        assert(await driver.findElement(By.xpath('//tr[3]/td[2]')).getText() == '555 USD')
    })
})