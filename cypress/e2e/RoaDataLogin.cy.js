import 'cypress-xpath';
import { slowCypressDown } from 'cypress-slow-down';
import LoginPageObj from "../PageObjectClass/LoginPageObj.cy";

//slowCypressDown(1000);
describe('RodataLogin',function(){
    it('Valid Credentail and Invalid credential Login',function(){
    
      cy.fixture('RoaDataLoginCred').then((data)=>{

        cy.visit("http://44.208.84.87:2080/");
        cy.wait(3000);

        data.forEach((cred)=>{

        const Login=new LoginPageObj()
        Login.LoginMainPage().click()
        Login.LoginPageVisible().should('be.visible');
        Login.userName().type(cred.username)
        Login.Passwod().type(cred.password)
        Login.SignInLogin().click();
        cy.wait(3000)

        if(cred.username=='roadata' && cred.password=='kcube2019$')
                {
                  cy.screenshot("LoginSuccess")
                   Login.Logout().should('be.visible').click();
                   cy.log("Valid Credentials-User can able to login")
                   
                }
                else
                {   cy.screenshot("LoginFailed")
                    cy.on('window:alert',(t)=>{
                        expect(t).contains('invalid username/password')
                    })
                    
                    Login.LoginCloseButton().click()
                    cy.log("Invalid Credential-User get error message")
                }
                window.close()

        })

      })    
        
        
    })
})