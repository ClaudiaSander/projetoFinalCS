import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { Builder } from "selenium-webdriver"  //selenium
require ("chromedriver")    //conversa com o browser
import { assert } from "chai"
import HomePage = require('../../pages/HomePage')

Before(async function (){

    this.driver = new Builder()
        .forBrowser('chrome')
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

Then('exibe o produto {string}', async function (produtoEsperado) {
    assert.equal(await this.homePage.getNomeProduto(), produtoEsperado)
});