import deletingDb from "../support/commands"

describe("app",()=>{
    beforeEach(()=>{
        deletingDb()
        cy.userCreation("testingName","testingLast", "test@testing.com","cuentatesting21", "testing84", 20)
    })
    
    it("exists the new user created above", ()=>{
        
        // cy.get('[data-be="userCreationForm"] input:first').type("nombreTest")
        // cy.get('[data-be="userCreationForm"] input').eq(1).type("apellidoTest")
        // cy.get('[data-be="userCreationForm"] input').eq(2).type("test@testing.com")
        // cy.get('[data-be="userCreationForm"] input').eq(3).type("cuentatesting21")
        // cy.get('[data-be="userCreationForm"] input').eq(4).type("testing84")
        // cy.get('[data-be="userCreationForm"] input').eq(5).type("20")
        // cy.get('[data-set-id="submiting"]').click()
        cy.get("tbody>tr:last").should("contain", "testingLast")
        cy.get('[data-be="dexieTableRender"]>tr').should("have.length", 1)
    })
    
    
})