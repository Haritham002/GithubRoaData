import 'cypress-xpath';


describe('LoginValidation', function(){
    it('Login Testcase', function() {
       

        cy.fixture("RoaDataLoginCred").then((data)=>{
        cy.visit('http://3.86.27.177:2080/')
        cy.wait(5000)
       

            data.forEach((userdata)=>{
                cy.xpath("//span[contains(text(),'Login')]").click({force: true});
                cy.xpath("//h3[contains(text(),'Login')]").should('be.visible');
                cy.xpath("//input[@name='user']").type(userdata.username)
                cy.xpath("//input[@type='password']").type(userdata.password)
                cy.xpath("//button[contains(text(),'Login')]").click({force: true})
                cy.wait(2000)


                if(userdata.username=='roadata' && userdata.password=='kcube2019$')
                {
                    cy.xpath("//span[contains(text(),'Logout')]").should('be.visible')
                    .click()
                }
                else
                {
                    cy.on('window:alert',(t)=>{
                        expect(t).contains('invalid username/password')
                    })
                    cy.xpath("//h3[contains(text(),'Login')]//preceding::button[1]").click()

                   
                }
            })
         
            
        })

    })
})