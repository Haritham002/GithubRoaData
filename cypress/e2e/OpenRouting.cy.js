
import { slowCypressDown } from "cypress-slow-down";
import ToolsPageObj from "../PageObjectClass/ToolsPageObj.cy";
import OPenRoutingPageObj from "../PageObjectClass/OPenRoutingPageObj.cy";
slowCypressDown(1000);
describe('openRouting',function()
{ 
    beforeEach(() => {
        cy.fixture('OpenRoute').as('userData');
    })
    it('OpenRouting validation',function()
    {
        cy.LoginAPP("roadata","kcube2019$");
        cy.wait(7000)
        
        const Tools=new ToolsPageObj()
        Tools.Tool().should('be.visible')
        Tools.OpenRouting().should('be.visible').click()

        const OpenRoute=new OPenRoutingPageObj()
        // Existing Route will displays
        OpenRoute.ExistingRoute().should('be.visible')
        cy.log("Existing Route displays")
        cy.screenshot("ExistingRoutes")
        
        //Add New Route
        OpenRoute.AddNew().click({force:true})
        cy.log("AddNewRoute displayed")
        cy.screenshot("AddNewRoute displayed")

        //Select Origin
        OpenRoute.origin().select('Select By Location')
        cy.log("Select By Location displayed in origin")
        //Select Coordinate
        OpenRoute.coordinateImg1().click()
        OpenRoute.CoordinateAlert().should('be.visible')
        OpenRoute.coordinateAlertClose().click()
        cy.log("CoordinateAlert displayed")
        //Select Destination
        OpenRoute.destination().select('Select By Location')
        cy.log("Select By Location displayed in destination")
        //Select Coordinate
        OpenRoute.CoordinateImg2().click()
        OpenRoute.CoordinateAlert().should('be.visible')
        OpenRoute.coordinateAlertClose().click()
        cy.log("CoordinateAlert displayed")
       
        cy.get('@userData').then((userData) => {
            //RouteName
            OpenRoute.RouteName().type(userData.textfield.Alphabets)
           if(OpenRoute.RouteName().should('have.value',userData.textfield.Alphabets))
           {
            cy.log("RouteName-accepts alphabets")
            cy.screenshot("RouteName-accepts alphabets")
            OpenRoute.RouteName().clear()
           }
            
            OpenRoute.RouteName().type(userData.textfield.Numbers)
            if(OpenRoute.RouteName().should('have.value',userData.textfield.Numbers))
            {
            cy.log("RouteName-accepts numbers")
            cy.screenshot("RouteName-accepts numbers")
            OpenRoute.RouteName().clear()
            }
            OpenRoute.RouteName().type(userData.textfield.SplChar)
            if(OpenRoute.RouteName().should('have.value',userData.textfield.SplChar))
            {
            cy.log("RouteName-accepts special characters")
            cy.screenshot("RouteName-accepts special characters")
            OpenRoute.RouteName().clear()
            }
            OpenRoute.RouteName().type(userData.textfield.space)
            if(OpenRoute.RouteName().should('have.value',userData.textfield.space))
            {
            cy.log("RouteName-accepts space")
            cy.screenshot("RouteName-accepts space")
            }

            //steer Axle
            OpenRoute.streeAxle().type(userData.steer.Alphabets)
            if(OpenRoute.streeAxle().should('not.have.value'))
            {
            cy.log("StreetAxle-does not accepts alphabets")
            cy.screenshot("StreetAxle-does not accepts alphabets")
            }
            OpenRoute.streeAxle().type(userData.steer.Numbers)
            if(OpenRoute.streeAxle().should('have.value',userData.steer.Numbers))
            {
            cy.log("StreetAxle-accepts numbers")
            cy.screenshot("StreetAxle-accepts numbers")
            }
            OpenRoute.streeAxle().clear()
            OpenRoute.streeAxle().type(userData.steer.SplChar)
            if(OpenRoute.streeAxle().should('not.have.value'))
            {
            cy.log("StreetAxle-does not accepts special characters")
            cy.screenshot("StreetAxle-does not accepts special characters")
            }
            OpenRoute.streeAxle().clear()
            OpenRoute.streeAxle().type(userData.steer.space)
            if(OpenRoute.streeAxle().should('have.value','123'))
            {
            cy.log("StreetAxle-does not accepts space")
            cy.screenshot("SteerAxle-does not accept space")
            cy.log("Stree Axle textfield validation completed")
            }
            
            //Trailor Axle
            OpenRoute.TrailorAxle().type(userData.Trailor.Alphabets)
            if(OpenRoute.TrailorAxle().should('not.have.value'))
            {
            cy.screenshot("TrailorAxle-does not accept alphabets")
            cy.log("TrailorAxle-does not accept alphabets")
            }
            OpenRoute.TrailorAxle().type(userData.Trailor.Numbers)
            if(OpenRoute.TrailorAxle().should('have.value',userData.Trailor.Numbers))
            {
            cy.log("TrailorAxle-accepts Numbers")
            cy.screenshot("TrailorAxle-accepts Numbers")
            OpenRoute.TrailorAxle().clear()
            } 
            OpenRoute.TrailorAxle().type(userData.Trailor.SplChar)
           if(OpenRoute.TrailorAxle().should('not.have.value'))
           {
            cy.log("TrailorAxle-does not accept special characters")
            cy.screenshot("TrailorAxle-does not accept special characters")
           }
            OpenRoute.TrailorAxle().type(userData.Trailor.space)
            if(OpenRoute.TrailorAxle().should('have.value','456'))
            {
            cy.log("TrailorAxle-does not accept space")
            cy.screenshot("TrailorAxle-does not accept space")
            cy.log("Trailor Axle textfield validation completed")
            }

            //Driver Axle
            OpenRoute.DriverAxle().type(userData.Driver.Alphabets)
            if(OpenRoute.DriverAxle().should('not.have.value'))
            {
            cy.log("DriverAxle-does not accept alphabets")
            cy.screenshot("DriverAxle-does not accept alphabets")
            }
            OpenRoute.DriverAxle().type(userData.Driver.Numbers)
            if(OpenRoute.DriverAxle().should('have.value',userData.Driver.Numbers))
            {
            cy.log("DriverAxle-accepts Numbers")
            cy.screenshot("DriverAxle-accepts Numbers")
            }
            OpenRoute.DriverAxle().clear()
            OpenRoute.DriverAxle().type(userData.Driver.SplChar)
            if(OpenRoute.DriverAxle().should('not.have.value'))
            {
            cy.log("DriverAxle-does not accept special characters")
            cy.screenshot("DriverAxle-does not accept special characters")
            }
            OpenRoute.DriverAxle().type(userData.Driver.space)
            if(OpenRoute.DriverAxle().should('have.value','456'))
            {
            cy.log("DriverAxle-does not accept space")
            cy.screenshot("DriverAxle-does not accept space")
            cy.log("Driver Axle textfield validation completed")
            }

            //Vehicle Width
            OpenRoute.VehicleHeight().type(userData.Vehicle.Alphabets)
            if(OpenRoute.VehicleHeight().should('not.have.value'))
            {
            cy.log("VehicleHeight-does not accept alphabets")
            cy.screenshot("VehicleHeight-does not accept alphabets")
            }
            OpenRoute.VehicleHeight().type(userData.Vehicle.Numbers)
            if(OpenRoute.VehicleHeight().should('have.value',userData.Vehicle.Numbers))
            {
            cy.log("VehicleHeight-accepts Numbers")
            cy.screenshot("VehicleHeight-accepts Numbers")
            }
            OpenRoute.VehicleHeight().clear()
            OpenRoute.VehicleHeight().type(userData.Vehicle.SplChar)
            if(OpenRoute.VehicleHeight().should('not.have.value'))
            {
            cy.log("VehicleHeight-does not accept special characters")
            cy.screenshot("VehicleHeight-does not accept special characters")
            }
            OpenRoute.VehicleHeight().type(userData.Vehicle.space)
            if(OpenRoute.VehicleHeight().should('have.value','456'))
            {
            cy.log("VehicleHeight-does not accept space")
            cy.screenshot("VehicleHeight-does not accept space")
            cy.log("Vehicle Height textfield validation completed")
            }


            OpenRoute.StartJourneyDate().click()
            OpenRoute.calender().should('be.visible')
            OpenRoute.Month().select('Dec')
            OpenRoute.year().select('2023')
            OpenRoute.Date().click()
            cy.screenshot("Date selected")
            cy.log("Date validation completed")

            OpenRoute.StartJourneyTime().click()
            OpenRoute.AM().should('be.visible')
            OpenRoute.PM().should('be.visible')
            OpenRoute.Hour().should('be.visible')
            OpenRoute.SelectHour().click()
            OpenRoute.Minute().should('be.visible')
            OpenRoute.SelectMinute().click()
            cy.screenshot("Time selected")

            OpenRoute.DontUse().click()
            cy.log("DontUse selected")
            cy.screenshot("DontUse selected")
            OpenRoute.Use().click()
            cy.log("Use selected")
            cy.screenshot("Use selected")
            
            OpenRoute.clear().click()
            cy.log("cleared all the textfields")
            cy.screenshot("After clear")   

            
        })
      

    })
})