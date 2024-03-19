import { slowCypressDown } from "cypress-slow-down";
import ToolsPageObj from "../PageObjectClass/ToolsPageObj.cy";
import PreferredPageObj from "../PageObjectClass/PreferredPageObj.cy";



describe('Preferred Tols',function(){

    beforeEach(()=>{
        cy.fixture('Preferred').as('userData')
        
    })
    it('Preferred Tools',function(){
        cy.LoginAPP("roadata","kcube2019$");
        cy.wait(7000)

        const Tools=new ToolsPageObj();
        const Preferred=new PreferredPageObj();
        Tools.Tool().should('be.visible')
        Tools.PreferredTool().click()
        Preferred.ExistingPreferred().should('be.visible')
        Preferred.AddNew().click()
        Preferred.StartLink().should('be.visible')
        Preferred.EndLink().should('be.visible')

        cy.get('@userData').then((UserData)=>{
            Preferred.Name().type(UserData.Name.Alphabets)
           if(Preferred.Name().should('have.value',UserData.Name.Alphabets))
            {
            cy.log("Name field accepts Alphabets")
            cy.screenshot("Namefield -accepts alphabets")
            }
            Preferred.Name().clear()
            Preferred.Name().type(UserData.Name.Numbers)
            if(Preferred.Name().should('have.value',UserData.Name.Numbers))
            {
            cy.log("Name field accepts Numbers")
            cy.screenshot("Namefield -accepts Numbers")
            }
            Preferred.Name().clear()
            Preferred.Name().type(UserData.Name.SplChar)
            if(Preferred.Name().should('have.value',UserData.Name.SplChar))
            {
            cy.log("Name field accepts Special Characters")
            cy.screenshot("Namefield -accepts Special Characters")
            }
            Preferred.Name().clear()
            Preferred.Name().type(UserData.Name.Space)
            if(Preferred.Name().should('have.value',UserData.Name.Space))
            {
            cy.log("Name field accepts Space")
            cy.screenshot("Namefield -accepts Space")
            }

            Preferred.Notes().type(UserData.Notes.Alphabets)
            if(Preferred.Notes().should('have.value',UserData.Notes.Alphabets))
            {
            cy.log("Notes field accepts Alphabets")
            cy.screenshot("Notes field accepts Alphabets")
            }
            Preferred.Notes().clear()
            Preferred.Notes().type(UserData.Notes.Numbers)
            if(Preferred.Notes().should('have.value',UserData.Notes.Numbers))
            {
            cy.log("Notes field accepts Numbers")
            cy.screenshot("Notes field accepts Numbers")
            }
            Preferred.Notes().clear()
            Preferred.Notes().type(UserData.Notes.SplChar)
            if(Preferred.Notes().should('have.value',UserData.Notes.SplChar))
            {
            cy.log("Notes field accepts Special Characters")
            cy.screenshot("Notes field accepts Special Characters")
            }
            Preferred.Notes().clear()
            Preferred.Notes().type(UserData.Notes.Space)
            if(Preferred.Notes().should('have.value',UserData.Notes.Space))
            {
            cy.log("Notes field accepts Space")
            cy.screenshot("Notes field accepts Space")
            }

            Preferred.RouteType().select('Truck Routes')
            if(Preferred.RouteType().should('have.value','1'))
            {
            cy.log("Route Type field accepts Truck Routes")
            cy.screenshot("Route Type field accepts Truck Routes")
            }

            Preferred.RouteType().select('Industrial Park Roads')
            if(Preferred.RouteType().should('have.value','2'))
            {
            cy.log("Route Type field accepts Industrial Park Roads")
            cy.screenshot("Route Type field accepts Industrial Park Roads")
            }

            Preferred.RouteType().select('Other Roads')
            if(Preferred.RouteType().should('have.value','3'))
            {
            cy.log("Route Type field accepts Other Roads")
            cy.screenshot("Route Type field accepts Other Roads")
            }

            Preferred.RouteType().select('RUA')
            if(Preferred.RouteType().should('have.value','4'))
            {
            cy.log("Route Type field accepts RUA")
            cy.screenshot("Route Type field accepts RUA")
            }

            Preferred.status().select('Active')
            if(Preferred.status().should('have.value','Active'))
            {
            cy.log("status field accepts Active")
            cy.screenshot("status field accepts Active")
            }
            Preferred.status().select('Disabled')
            if(Preferred.status().should('have.value','Disabled'))
            {
            cy.log("status field accepts Disabled")
            cy.screenshot("status field accepts Disabled")
            }
            Preferred.status().select('Inactive')
            if(Preferred.status().should('have.value','Inactive'))
            {
            cy.log("status field accepts Inactive")
            cy.screenshot("status field accepts Inactive")
            }
            Preferred.Description().type(UserData.Description.Alphabets)
            if(Preferred.Description().should('have.value',UserData.Description.Alphabets))
            {
            cy.log("Description field accepts Alphabets")
            cy.screenshot("Description field accepts Alphabets")
            }
            Preferred.Description().clear()
            Preferred.Description().type(UserData.Description.Numbers)
            if(Preferred.Description().should('have.value',UserData.Description.Numbers))
            {
            cy.log("Description field accepts Numbers")
            cy.screenshot("Description field accepts Numbers")
            }
            Preferred.Description().clear()
            Preferred.Description().type(UserData.Description.SplChar)
            if(Preferred.Description().should('have.value',UserData.Description.SplChar))
            {
            cy.log("Description field accepts Special Characters")
            cy.screenshot("Description field accepts Special Characters")
            }
            Preferred.Description().clear()
            Preferred.Description().type(UserData.Description.Space)
            if(Preferred.Description().should('have.value',UserData.Description.Space))
            {
            cy.log("Description field accepts Space")
            cy.screenshot("Description field accepts Space")
            }

            Preferred.startDate().click()
            Preferred.StartMonth().select('Feb')
            Preferred.StartYear().select('2024')
            Preferred.SDate().click()
            Preferred.startDate().should('have.value','2024-02-07')
            cy.log("Start Date field accepts date")
            cy.screenshot("Start Date field accepts date")
            Preferred.EndDate().click()
            Preferred.EndMonth().select('Mar')
            Preferred.EndYear().select('2024')
            Preferred.EDate().click()
            Preferred.EndDate().should('have.value','2024-03-07')     

            
        })
       

    })

})