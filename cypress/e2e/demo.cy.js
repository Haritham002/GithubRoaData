describe('test',()=>{
    it('test',()=>{
        /*cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//div[@class="orangehrm-login-branding"]').should('have.css','width','80%')
        //cy.get('.orangehrm-login-branding > img').should('have.max-width','275px')
        //cy.xpath('//div[@class="orangehrm-login-branding"]').should('have.css','max-width','275px')
        cy.xpath('//div[@class="orangehrm-login-branding"]').should('have.css', 'width').and('eq','100px');*/

        cy.visit("https://devsite.kcubeconsulting.com/")
        cy.xpath("//div[@class='navbar-header navbar-header-custom']").should('have.css','width','196px')

    })

})