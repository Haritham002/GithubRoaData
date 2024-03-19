

import PageObject from "../PageObject.cy";

describe('Demo',function(){
    before(function(){
        cy.fixture("orangeHRM").then((data)=>{
            this.data=data;

        })

    })
    it('Testcase',function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
       
        const homePage=new PageObject()
        homePage.getUN().type(this.data.user)
        homePage.getPWD().type(this.data.Password)
    })
})