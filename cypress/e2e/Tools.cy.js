import { slowCypressDown } from "cypress-slow-down";
import ToolsPageObj from "../PageObjectClass/ToolsPageObj.cy";
slowCypressDown(1000);


describe('Tools', function()
{
    it('Tools Validation', function()
    {
        cy.LoginAPP("roadata","kcube2019$");
       
        cy.wait(7000)

        const Tools=new ToolsPageObj()
        Tools.Tool().should('be.visible')
        Tools.ZoomIn().should('be.visible')
        Tools.ZoomOut().should('be.visible')
        Tools.ZoomToDefaultExtent().should('be.visible')
        Tools.PanMap().should('be.visible')
        Tools.ViewDetailedInfo().should('be.visible')
        Tools.Hover().should('be.visible')
        Tools.OpenRouting().should('be.visible')
        Tools.Restriction().should('be.visible')
        Tools.PreferredTool().should('be.visible')
        cy.screenshot("ToolsDisplayedProperly")

    })
})