import { slowCypressDown } from "cypress-slow-down";
import MenuPageObj from "../PageObjectClass/MenuPageObj.cy";
//slowCypressDown(1000);


describe('Menu',function(){
    it('Menu Validation',function(){
        
        
        cy.LoginAPP("roadata","kcube2019$");
  
        cy.wait(7000)

        const Menu=new MenuPageObj()
        Menu.menu().click({force:true});
        Menu.MapLayer().should('be.visible')
        Menu.LocationRefLayer().should('be.visible')      
        
        Menu.AddressLoc().should('be.visible').click()
        Menu.AddressZoom().should('be.visible')
        Menu.AddressLoc().should('be.visible').click()
        Menu.AddressCheckbox().check().should('be.checked')
        Menu.AddressCheckbox().uncheck().should('not.be.checked')
        Menu.AddressLegend().should('be.visible').click()
        Menu.AddressImg().should('be.visible')
        cy.log("Address Location Layer displayed Properly")
        cy.screenshot("Address")
        

        Menu.POI().should('be.visible').click()
        Menu.POIZoom().should('be.visible')
        Menu.POI().should('be.visible').click()
        Menu.POICheckbox().check().should('be.checked')
        Menu.POICheckbox().uncheck().should('not.be.checked')
        Menu.POILegend().should('be.visible').click()
        Menu.POIImg().should('be.visible')
        cy.log("POI Layer displayed Properly")
        cy.screenshot("POI")
        

        Menu.LSD().should('be.visible').click({force:true})
        Menu.LSDZoom().should('be.visible')
        Menu.LSD().should('be.visible').click({force:true})
        Menu.LSDCheckbox().check({force:true}).should('be.checked')
        Menu.LSDCheckbox().uncheck().should('not.be.checked')
        Menu.LSDLegend().should('be.visible').click()
        Menu.LSDImg().should('be.visible')
        cy.log("LSD Layer displayed Properly")
        cy.screenshot("LSD")

        Menu.RestrictionLayer().should('be.visible')
        Menu.Restritions().should('be.visible').click({force:true})
        Menu.RestrictionZoom().should('be.visible')
        Menu.Restritions().should('be.visible').click({force:true})
        Menu.RestrictionCheckbox().check().should('be.checked')
        Menu.RestrictionCheckbox().uncheck({force:true}).should('not.be.checked')
        Menu.RestrictionLegend().should('be.visible').click({force:true})
        Menu.RestritionImg().should('be.visible')
        cy.log("Restriction Layer displayed Properly")
        cy.screenshot("Restriction")

        Menu.RoadBan().should('be.visible').click({force:true})
        Menu.RoadBanZoom().should('be.visible')
        Menu.RoadBan().should('be.visible').click({force:true})
        Menu.RoadBanCheck().check().should('be.checked')
        Menu.RoadBanCheck().uncheck({force:true}).should('not.be.checked')
        Menu.RoadBanLegend().should('be.visible').click({force:true})
        Menu.RoadBanImg().should('be.visible')
        Menu.BackgroundLayer().scrollIntoView()
        cy.log("RoadBan Layer displayed Properly")
        cy.screenshot("RoadBan")
      

        Menu.Weather().should('be.visible').click({force:true})
        Menu.WeatherZoom().should('be.visible')
        Menu.Weather().should('be.visible').click({force:true})
        Menu.WeatherCheckbox().check().should('be.checked')
        Menu.WeatherCheckbox().uncheck({force:true}).should('not.be.checked')
        Menu.WeatherLegend().should('be.visible').click({force:true})
        Menu.WeatherImg().should('be.visible')
        cy.log("Weather Layer displayed Properly")
        cy.screenshot("Weather")
        Menu.BackgroundLayer().scrollIntoView()

        Menu.BaseLayer().should('be.visible')
        Menu.RST().should('be.visible').click()
        Menu.RSTZoom().should('be.visible')
        Menu.RST().should('be.visible').click()
        Menu.RSTcheckbox().check().should('be.checked')
        Menu.RSTcheckbox().uncheck().should('not.be.checked')
        Menu.RSTLegend().should('be.visible').click({force:true})
        Menu.RSTImg().should('be.visible')
        cy.log("RST Layer displayed Properly")
        cy.screenshot("RST")


        /*Menu.RUA().should('be.visible').click({force:true})
        Menu.RUAZoom().should('be.visible')
        Menu.RUA().should('be.visible').click()
        Menu.RUACheckbox().check().should('be.checked')
        Menu.RUACheckbox().uncheck().should('not.be.checked')
        Menu.RUALegend().should('be.visible').click()
        Menu.RUAImg().should('be.visible')
        cy.log("RUA Layer displayed Properly")
        cy.screenshot("RUA")*/

        Menu.PreferredRoutes().should('be.visible').click({force:true})
        Menu.PreferredRoutesZoom().should('be.visible')
        Menu.PreferredRoutes().should('be.visible').click()
        Menu.PreferredRoutesCheckbox().check().should('be.checked')
        Menu.PreferredRoutesCheckbox().uncheck().should('not.be.checked')
        Menu.PreferredRoutesLegend().should('be.visible').click()
        Menu.PreferredRoutesImg().should('be.visible')
        cy.log("PreferredRoutes Layer displayed Properly")
        cy.screenshot("PreferredRoutes")


        Menu.Section().should('be.visible').click()
        Menu.SectionZoom().should('be.visible')
        Menu.Section().should('be.visible').click()
        Menu.SectionCheckbox().check().should('be.checked')
        Menu.SectionCheckbox().uncheck({force:true}).should('not.be.checked')
        Menu.SectionLegend().should('be.visible').click()
        Menu.SectionImg().should('be.visible')
        cy.log("Section Layer displayed Properly")
        cy.screenshot("Section")

        Menu.Township().should('be.visible').click()
        Menu.TownshipZoom().should('be.visible')
        Menu.Township().should('be.visible').click()
        Menu.TownshipCheckbox().check().should('be.checked')
        Menu.TownshipCheckbox().uncheck().should('not.be.checked')
        Menu.TownshipLegend().should('be.visible').click()
        Menu.TownshipImg().should('be.visible')
        cy.log("Township Layer displayed Properly")
        cy.screenshot("Township")
        
        Menu.Municipality().should('be.visible').click({force:true})
        Menu.MunicipalityZoom().should('be.visible')
        Menu.Municipality().should('be.visible').click()
        Menu.MunicipalityCheckbox().check().should('be.checked')
        Menu.MunicipalityCheckbox().uncheck().should('not.be.checked')
        Menu.MunicipalityLegend().should('be.visible').click()
        Menu.MunicipalityImg().should('be.visible')
       // Menu.NoBackground().should('be.visible')
       Menu.BackgroundLayer().scrollIntoView()
        cy.log("Municipality Layer displayed Properly")
        cy.screenshot("Municipality")
      
        Menu.BackgroundLayer().scrollIntoView()
        Menu.BackgroundLayer().should('be.visible').click({force:true})
        Menu.Hybrid().scrollIntoView()
        
        Menu.Transit().should('be.visible')
        Menu.satellite().should('be.visible')
        Menu.Hybrid().should('be.visible')
        cy.log("Background Layer displayed Properly")
        cy.screenshot("Background")



    })
})