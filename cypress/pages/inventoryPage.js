class inventoryPage{
    constructor(){
        this.titleLabel = '.product_label'
    }

    validarTitulo(){
        cy.get('.product_label').contains('Products')
    }
}

export default new inventoryPage