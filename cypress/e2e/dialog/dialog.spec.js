
describe("Dialog window", ()=> {
    it('Dialog window should have correct headers, buttons and description',() => {
        cy.visit("/pages/modal-overlays/dialog")

        cy.get('nb-card-body.result-from-dialog button').click()
        cy.get('ngx-dialog-name-prompt').as("dialogWindow")

        cy.get("@dialogWindow").should('exist')
        cy.get("@dialogWindow").find("nb-card-header").should('exist').and('contain', "Enter your name")
        cy.get("@dialogWindow").find("nb-card-body").should('exist').find('input[placeholder="Name"]').should('exist')
        cy.get("@dialogWindow").find("nb-card-footer").should('exist').find('button[status="danger"]', 'button[status="success"]').should('exist')
    })
})