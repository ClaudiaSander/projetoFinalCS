"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const selenium_webdriver_1 = require("selenium-webdriver"); //selenium
require("chromedriver"); //conversa com o browser
const chai_1 = require("chai");
const HomePage = require("../../pages/HomePage");
(0, cucumber_1.Before)(async function () {
    this.driver = new selenium_webdriver_1.Builder()
        .forBrowser('chrome')
        .build();
    this.driver.manage().setTimeouts({ implicit: 60000 });
    this.driver.manage().window().maximize();
    this.homePage = new HomePage(this.driver);
});
(0, cucumber_1.After)(async function () {
    await this.driver.quit();
});
(0, cucumber_1.Given)('acesso o site Petz', async function () {
    await this.driver.get('https://www.petz.com.br/');
});
(0, cucumber_1.When)('preencho nome do produto como {string} e clico Pesquisar e clico no produto', async function (produto) {
    await this.homePage.buscarProduto(produto);
    await this.homePage.clicarNoProduto();
});
(0, cucumber_1.Then)('exibe o produto {string}', async function (produtoEsperado) {
    chai_1.assert.equal(await this.homePage.getNomeProduto(), produtoEsperado);
});
