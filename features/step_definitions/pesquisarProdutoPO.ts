import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { Builder } from "selenium-webdriver"  //selenium
require ("chromedriver")    //conversa com o browser
import { assert } from "chai"
import HomePage = require('../../pages/HomePage')
const chrome = require('selenium-webdriver/chrome')

var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

// const windowSize = {height: 1920, width: 1080};

Before(async function (){
    // const options = new chrome.Options().headless().windowSize(windowSize)

    this.driver = new Builder()
        .forBrowser('chrome')
        // .setChromeOptions(options)
        .build()
    this.driver.manage().setTimeouts({ implicit: 60000 })
    this.driver.manage().window().maximize()
    
    this.homePage = new HomePage(this.driver)
})

After(async function(){
    await this.driver.quit()
})

Given('acesso o site Petz', async function () {
    await this.driver.get('https://www.petz.com.br')    
});

When('preencho nome do produto como {string} e clico Pesquisar e clico no produto', async function (produto) {
    await this.homePage.buscarProduto(produto)
    await this.homePage.clicarNoProduto()
});

Then('exibe página com título {string} e produto com nome {string}', async function (tituloEsperado, produtoEsperado) {
    assert.equal(await this.homePage.getNomeProduto(), produtoEsperado)
    assert.equal(await this.homePage.getTitle(), tituloEsperado)
});