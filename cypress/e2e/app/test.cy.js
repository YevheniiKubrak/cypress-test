
describe("Stepper page", ()=> {
    it('Should find text on the page', () => {
        cy.visit("localhost:4200/pages/layout/stepper")
        
        cy.get("h3").first().should("have.text", "Step content #1")

    });
})
