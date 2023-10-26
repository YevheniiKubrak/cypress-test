describe("Posts", ()=>{
    it('should update', () => {
        const body = {
            id: 1,
            title: 'I have updated a post',
            body: 'It is brand new',
            userId: 20,
          }

      cy.api({
        url: '/posts/1',
        method: 'PUT',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).as("updatePost")
  
      cy.get("@updatePost").its("status")
        .should("equal", 200)
  
      cy.get("@updatePost").its("body")
        .should("deep.include", body)
    })
  })