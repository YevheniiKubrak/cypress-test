describe("Smart table", ()=> {
    it('Added user should have correct data',() => {
        cy.addUser("2","Guy", "Ordinary", "OGuy", "guy@gmail.com", "25")
    })
    
    it('Edited user should have correct data',() => {
        cy.editUser("4","Newguy", "Nonordinary", "O2Guy", "guy2@gmail.com", "26")
    })
})