
class  PageObject
{
    getUN()
    {
        return cy.xpath("//input[@name='username']");
    }
    getPWD()
    {
        return cy.xpath("//input[@name='password']");
    }
}
export default PageObject;