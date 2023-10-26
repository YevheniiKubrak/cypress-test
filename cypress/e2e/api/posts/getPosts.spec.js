
describe("Posts", ()=>{
    it('should return post by id', ()=> {
        const postId = 1
        cy.api({
            url: `/posts/${postId}`,
            method: 'GET',
          }).its("body").should("deep.include", {id: postId})
    })
    it('should return list of all posts', ()=> {
        cy.api({
            url: `/posts`,
            method: 'GET',
        })
        .its("body").should("be.an", "array")
        .each(value =>
            expect(value).to.have.all
            .keys('userId', 'id', 'title', 'body')
          )
    })
})