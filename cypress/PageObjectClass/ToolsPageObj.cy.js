
import 'cypress-xpath';
class ToolsPageObj
{
    Tool()
    {
        return cy.xpath("//span[contains(text(),'Tools')]")
    }
    ZoomIn()
    {
        return cy.xpath("//span[contains(text(),'Tools')]//following::button[3]")
    }
    ZoomOut()
    {
        return cy.xpath("//span[contains(text(),'Tools')]//following::button[4]")
    }
    ZoomToDefaultExtent()
    {
        return cy.xpath("//span[contains(text(),'Tools')]//following::button[5]")
    }
    PanMap()
    {
        return cy.xpath("//span[contains(text(),'Tools')]//following::button[6]")
    }
    ViewDetailedInfo()
    {
        return cy.xpath("//span[contains(text(),'Tools')]//following::button[7]")
    }
    Hover()
    {
        return cy.xpath("//span[contains(text(),'Tools')]//following::button[8]")
    }
    OpenRouting()
    {
        return cy.xpath("//span[contains(text(),'Tools')]//following::button[9]")
    }
    Restriction()
    {
        return cy.xpath("//span[contains(text(),'Tools')]//following::button[10]")
    }
    PreferredTool()
    {
        return cy.xpath("//span[contains(text(),'Tools')]//following::button[11]")
    }

}
export default ToolsPageObj;