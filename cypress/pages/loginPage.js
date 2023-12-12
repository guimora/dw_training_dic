class loginPage {
    constructor() {
        this.userNameInput = 'input[data-test="username"]',
            this.passwordInput = 'input[data-test="password"]',
            this.loginButton = '#login-button',
            this.mensajeError = 'h3[data-test="error"]'
    }

    iniciarSesion(usuario, password) {
        if(usuario != null){
        cy.get(this.userNameInput).type(usuario)
    }
    if(password != null) {
            cy.get(this.passwordInput).type(password)
    }
            cy.get(this.loginButton).click()
    }
}

export default new loginPage