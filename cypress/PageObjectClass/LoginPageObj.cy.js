class LoginPageObj
{
 LoginMainPage()
 {
   return cy.xpath("//span[contains(text(),'Login')]")
 }

 LoginPageVisible()
 {
   return cy.xpath("//h3[contains(text(),'Login')]")
 }
 userName()
 {
    return cy.xpath("//input[@name='user']")
 }

 Passwod()
 {
   return cy.xpath("//input[@type='password']")
 }
 SignInLogin()
 {
   return cy.xpath("//button[contains(text(),'Login')]")
 }

 Logout()
 {
   return  cy.xpath("//span[contains(text(),'Logout')]")
 }

 LoginCloseButton()
 {
   return cy.xpath("//h3[contains(text(),'Login')]//preceding::button[1]")
 }
    
}
export default LoginPageObj;