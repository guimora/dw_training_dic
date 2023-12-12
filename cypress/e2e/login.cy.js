import loginPage from "../pages/loginPage"
import inventoryPage from "../pages/inventoryPage"
import { CREDENCIALES_INVALIDAS, MENSAJES_DE_ERROR } from "../data/constantes"

describe('Saucedemo Test Suite', () => {
  beforeEach(()=>{
    cy.visit(Cypress.env('URL'))
  })
    it('Validar inicio de sesión', () => {  
      loginPage.iniciarSesion(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
      inventoryPage.validarTitulo()
  })

  it('Credenciales inválidas', () => {
      loginPage.iniciarSesion(CREDENCIALES_INVALIDAS.USERNAME,CREDENCIALES_INVALIDAS.PASSWORD)
      cy.get(loginPage.mensajeError).contains(MENSAJES_DE_ERROR.USUARIO_Y_PASSWORD_INVALIDOS)
  })

  it('El usuario es requerido', () => {
      loginPage.iniciarSesion(null,Cypress.env('PASSWORD'))
      cy.get(loginPage.mensajeError).contains(MENSAJES_DE_ERROR.FALTA_USUARIO)
  })

  it('El password es requerido', () => {
      loginPage.iniciarSesion(Cypress.env('USERNAME'),null)
      cy.get(loginPage.mensajeError).contains(MENSAJES_DE_ERROR.FALTA_PASSWORD)
  })

})

