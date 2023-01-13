const BasePage = require('./BasePage');
const By = require('selenium-webdriver').By;
class HomePage extends BasePage {
    constructor(driver) {
        super(driver);
        this.byParteNomeProduto = By.id("search");
        this.byBtnBuscar = By.css(".custom-icon > img");
        this.byProduto = By.css("img.product-img.img-responsive");
        this.byNomeProduto = By.css("h1");
    }
    async buscarProduto(produto) {
        let parteNomeProduto = await this.driver.findElement(this.byParteNomeProduto);
        parteNomeProduto.sendKeys(produto);
        let btnBuscar = await this.driver.findElement(this.byBtnBuscar).click();
    }
    async clicarNoProduto() {
        await this.driver.findElement(this.byProduto).click();
    }
    async getNomeProduto() {
        return await this.driver.findElement(this.byNomeProduto).getText();
    }
}
module.exports = HomePage;
