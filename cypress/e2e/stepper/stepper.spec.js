
describe("Stepper page", ()=> {
    it('Stepper should display correct title on each step', () => {
        cy.visit("/pages/layout/stepper")
        
        cy.get('nb-stepper[orientation="horizontal"] h3').as("sterpperTitle")
        cy.get('nb-stepper[orientation="horizontal"] button').last().as("nextButton")

        cy.get("@sterpperTitle").should('have.text', "Step content #1")
        cy.get("@nextButton").click()

        cy.get("@sterpperTitle").should('have.text', "Step content #2")
        cy.get("@nextButton").click()

        cy.get("@sterpperTitle").should('have.text', "Step content #3")
        cy.get("@nextButton").click()

        cy.get("@sterpperTitle").should('have.text', "Step content #4")
    });
})
