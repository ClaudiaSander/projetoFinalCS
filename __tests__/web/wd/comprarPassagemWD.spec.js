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
        assert(await driver.findElement(By.xpath('//tr[2]/td[3]')).getText() == 'United Airlines')
        assert(await driver.getTitle() == 'BlazeDemo - reserve')
        await driver.findElement(By.xpath('//tr[2]/td[1]')).click()

        assert.equal(await driver.findElement(By.css('h2')).getText(),'Your flight from TLV to SFO has been reserved.')

    })
})