import deletingDb from "../support/commands"

describe("open the app and create an user",()=>{
    beforeEach(()=>{
        deletingDb()
        cy.userCreation("testingName","testingLast", "test@testing.com","cuentatesting21", "testing84", 20)
    })
    
    it("exists the new user created above", ()=>{
        cy.get("tbody>tr:last").should("contain", "testingLast")
        cy.get('[data-be="dexieTableRender"]>tr').should("have.length", 1)
    })
    
    
})