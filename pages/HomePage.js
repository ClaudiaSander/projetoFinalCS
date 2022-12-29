const BasePage = require('./BasePage')
const By = require('selenium-webdriver').By

class HomePage extends BasePage{
    constructor(driver){
        super(driver)
            this.byParteNomeProduto = By.id("search")
            this.byBtnBuscar = By.css(".custom-icon > img")
            // this.byProduto = By.css(".product-img")
    }

    async buscarProduto(produto){
        let parteNomeProduto = await this.driver.findElement(this.byParteNomeProduto)
        parteNomeProduto.value = produto

        let btnBuscar = await this.driver.findElement(this.byBtnBuscar).click()
    }

    async clicarNoProduto(){
        await this.driver.findElement(this.byProduto).click()
    }
    
    async getNomeProduto(produto){
        let produtoEncontrado = await this.driver.findElement(this.byProduto)
        return await this.driver.findElement(this.byProduto)
        
        nomeProduto.value = produto

        let btnBuscar = await this.driver.findElement(this.byBtnBuscar).click()
    }
}

module.exports = HomePage