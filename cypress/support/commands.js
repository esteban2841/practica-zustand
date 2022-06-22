import {db} from "../../src/DbDexie/dataBase"
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
export default async function deletingDb(){
    await db.users.delete()
}
Cypress.Commands.add("userCreation", (firstName, lastName, email, nickname, password, age )=>{
    cy.visit("http://localhost:3000/")
    cy.get('[data-be="userCreationForm"] input:first').type(firstName)
    cy.get('[data-be="userCreationForm"] input').eq(1).type(lastName)
    cy.get('[data-be="userCreationForm"] input').eq(2).type(email)
    cy.get('[data-be="userCreationForm"] input').eq(3).type(nickname)
    cy.get('[data-be="userCreationForm"] input').eq(4).type(password)
    cy.get('[data-be="userCreationForm"] input').eq(5).type(age)
    cy.get('[data-set-id="submiting"]').click()
    
})