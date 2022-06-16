describe("app",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })
    it("frontpage can be opened", ()=>{
        cy.contains("Users creation Form")
    })
    it("exists a creation form and submit the new user and confirm that new user is created by evaluating the new table row has the new user by matching the lastName sent", ()=>{
        cy.get("input:first").type("nombreTest")
        cy.get("input").eq(1).type("apellidoTest")
        cy.get("input:last").type("20")
        cy.get('[data-set-id="submiting"]').click()
        cy.get("tbody>tr").eq(2).should("contain", "apellidoTest")
    })
    
    
})