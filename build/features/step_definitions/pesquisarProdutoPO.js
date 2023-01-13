"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const selenium_webdriver_1 = require("selenium-webdriver"); //selenium
require("chromedriver"); //conversa com o browser
const chai_1 = require("chai");
const HomePage = require("../../pages/HomePage");
const chrome = require('selenium-webdriver/chrome');
var { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);
// const windowSize = {height: 1920, width: 1080};
(0, cucumber_1.Before)(async function () {
    // const options = new chrome.Options().headless().windowSize(windowSize)
    this.driver = new selenium_webdriver_1.Builder()
        .forBrowser('chrome')
        // .setChromeOptions(options)
        .build();
    this.driver.manage().setTimeouts({ implicit: 60000 });
    this.driver.manage().window().maximize();
    this.homePage = new HomePage(this.driver);
});
(0, cucumber_1.After)(async function () {
    await this.driver.quit();
});
(0, cucumber_1.Given)('acesso o site Petz', async function () {
    await this.driver.get('https://www.petz.com.br');
});
(0, cucumber_1.When)('preencho nome do produto como {string} e clico Pesquisar e clico no produto', async function (produto) {
    await this.homePage.buscarProduto(produto);
    await this.homePage.clicarNoProduto();
});
(0, cucumber_1.Then)('exibe página com título {string} e produto com nome {string}', async function (tituloEsperado, produtoEsperado) {
    chai_1.assert.equal(await this.homePage.getNomeProduto(), produtoEsperado);
    chai_1.assert.equal(await this.homePage.getTitle(), tituloEsperado);
});
