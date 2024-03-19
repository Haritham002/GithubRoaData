import 'cypress-xpath';
import LoginPageObj from '../../PageObjectClass/LoginPageObj.cy';

describe('RodataLogin', function () {
  before(() => {
    // Perform any setup steps here (e.g., open the website)
    cy.visit('http://3.86.27.177:2080/');
    cy.wait(3000);
  });

  it('Login', function () {
    cy.fixture('RoaDataLoginCred').then((data) => {
      data.forEach((cred) => {
        const Login = new LoginPageObj();
        Login.LoginMainPage().click();
        Login.LoginPageVisible().should('be.visible');
        Login.userName().type(cred.username);
        Login.Passwod().type(cred.password);
        Login.SignInLogin().click();
        cy.wait(3000);

        if (cred.username === 'roadata' && cred.password === 'kcube2019$') {
          Login.Logout().should('be.visible').click();
        } else {
          cy.on('window:alert', (t) => {
            expect(t).contains('invalid username/password');
          });
          Login.LoginCloseButton().click();
        }
        // Ensure that you do not close the window or tab here.
        window.close()
      });
    });
  });
});
