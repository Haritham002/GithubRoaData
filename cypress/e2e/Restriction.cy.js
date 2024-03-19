import { slowCypressDown } from "cypress-slow-down";
import ToolsPageObj from "../PageObjectClass/ToolsPageObj.cy";
import RestrictionPageObj from "../PageObjectClass/RestrictionPageObj.cy";

//slowCypressDown(1000);
describe('Restriction Tools',function(){

    beforeEach(() => {
        cy.fixture('Restriction').as('userData');
    })
    it('Restriction validation',function(){
        cy.LoginAPP("roadata","kcube2019$");
        cy.wait(7000)
        
        const Restriction=new RestrictionPageObj()
        const Tools=new ToolsPageObj()
        Tools.Tool().should('be.visible')
        Tools.Restriction().should('be.visible').click()
        Restriction.ExistingRestriction().should('be.visible')
        Restriction.AddNew().click()
        Restriction.RestrictionType().select('Bridge')
        Restriction.RestrictionType().should('have.value','Bridge')
        cy.screenshot("RestrictionType-Bridge")
        Restriction.RestrictionType().select('Construction')
        Restriction.RestrictionType().should('have.value','Construction')
        cy.screenshot("RestrictionType-Construction")
        Restriction.RestrictionType().select('Road_Ban')
        Restriction.RestrictionType().should('have.value','Road_Ban')
        cy.screenshot("RestrictionType-Road_Ban")
        Restriction.RestrictionType().select('Seasonal_Restriction')
        Restriction.RestrictionType().should('have.value','Seasonal_Restriction')
        cy.screenshot("RestrictionType-Seasonal_Restriction")
        Restriction.RestrictionType().select('Turn_Restriction')
        Restriction.RestrictionType().should('have.value','Turn_Restriction')
        cy.screenshot("RestrictionType-Turn_Restriction")
        Restriction.RestrictionType().select('Vehicle_Restriction')
        Restriction.RestrictionType().should('have.value','Vehicle_Restriction')
        cy.screenshot("RestrictionType-Vehicle_Restriction")
        Restriction.RestrictionType().select('Weather_Restriction')
        Restriction.RestrictionType().should('have.value','Weather_Restriction')
        cy.screenshot("RestrictionType-Weather_Restriction")

        Restriction.BanPercentage().select('0%')
        Restriction.BanPercentage().should('have.value','0')
        cy.screenshot("BanPercentage-0")
        Restriction.BanPercentage().select('50%')
        Restriction.BanPercentage().should('have.value','50')
        cy.screenshot("BanPercentage-50")
        Restriction.BanPercentage().select('75%')
        Restriction.BanPercentage().should('have.value','75')
        cy.screenshot("BanPercentage-75")
        Restriction.BanPercentage().select('100%')
        Restriction.BanPercentage().should('have.value','100')
        cy.screenshot("BanPercentage-100")

        cy.get('@userData').then((userData) => {
        Restriction.description().type(userData.description.Alphabets)
        Restriction.description().should('have.value',userData.description.Alphabets)
        cy.log("description-accepts alphabets")
        cy.screenshot("description-accepts alphabets")
        Restriction.description().clear()
        Restriction.description().type(userData.description.Numbers)
        Restriction.description().should('have.value',userData.description.Numbers)
        cy.log("description-accepts numbers")
        cy.screenshot("description-accepts numbers")
        Restriction.description().clear()
        Restriction.description().type(userData.description.SplChar)
        Restriction.description().should('have.value',userData.description.SplChar)
        cy.log("description-accepts special characters")
        cy.screenshot("description-accepts special characters")
        Restriction.description().clear()
        Restriction.description().type(userData.description.space)
        Restriction.description().should('have.value',userData.description.space)
        cy.log("description-accepts space")
        cy.screenshot("description-accepts space")


        Restriction.Notes().type(userData.Notes.Alphabets)
        Restriction.Notes().should('have.value',userData.Notes.Alphabets)
        cy.log("Notes-accepts alphabets")
        cy.screenshot("Notes-accepts alphabets")
        Restriction.Notes().clear()
        Restriction.Notes().type(userData.Notes.Numbers)
        Restriction.Notes().should('have.value',userData.Notes.Numbers)
        cy.log("Notes-accepts numbers")
        cy.screenshot("Notes-accepts numbers")
        Restriction.Notes().clear()
        Restriction.Notes().type(userData.Notes.SplChar)
        Restriction.Notes().should('have.value',userData.Notes.SplChar)
        cy.log("Notes-accepts special characters")
        cy.screenshot("Notes-accepts special characters")
        Restriction.Notes().clear()
        Restriction.Notes().type(userData.Notes.space)
        Restriction.Notes().should('have.value',userData.Notes.space)
        cy.log("Notes-accepts space")
        cy.screenshot("Notes-accepts space")

        Restriction.HeightRes().type(userData.HeightRes.Alphabets)
        Restriction.HeightRes().should('have.value','Heigh').tab()
       if(Restriction.HeightError().should('be.visible')){
        cy.screenshot("HeightRes-Does not accepts alphabets")
        Restriction.HeightErrorClose().click()
        cy.log("HeightRes-Does not accepts alphabets,it displays Error Alert")
       }
        //cy.screenshot("HeightRes-Does not accepts alphabets")
        Restriction.HeightRes().clear()
        Restriction.HeightRes().type(userData.HeightRes.SplChar).tab()
       if(Restriction.HeightError().should('be.visible')) {
        cy.screenshot("HeightRes-Does not accepts special characters")
        Restriction.HeightErrorClose().click()
        cy.log("HeightRes-Does not accepts special characters,it displays Error Alert")
      }
        //cy.screenshot("HeightRes-Does not accepts special characters")
        Restriction.HeightRes().clear()
        Restriction.HeightRes().type(userData.HeightRes.space).tab()
       if(Restriction.HeightError().should('be.visible')) {
        cy.screenshot("HeightRes-Does not accepts space")
        Restriction.HeightErrorClose().click()
        cy.log("HeightRes-Does not accepts space,it displays Error Alert")
       }
       // cy.screenshot("HeightRes-Does not accepts space")
        Restriction.HeightRes().clear()
        Restriction.HeightRes().type(userData.HeightRes.Numbers)
        Restriction.HeightRes().should('have.value','12345')
        cy.log("HeightRes-accepts numbers")
        cy.screenshot("HeightRes-accepts numbers")


        Restriction.WidthRes().type(userData.Width.Alphabets)
        Restriction.WidthRes().should('have.value','Width').tab()
        cy.wait(1000)
       if(Restriction.WidthError().should('be.visible')) {
        cy.screenshot("WidthRes-Does not accepts alphabets")
        Restriction.WidthErrorClose().click()
        cy.log("WidthRes-Does not accepts alphabets,it displays Error Alert")
       }
        //cy.screenshot("WidthRes-Does not accepts alphabets")
        Restriction.WidthRes().clear()
        Restriction.WidthRes().type(userData.Width.SplChar).tab()
       if(Restriction.WidthError().should('be.visible')) {
        cy.screenshot("WidthRes-Does not accepts special characters")
        Restriction.WidthErrorClose().click()
        cy.log("WidthRes-Does not accepts special characters,it displays Error Alert")
       }
        //cy.screenshot("WidthRes-Does not accepts special characters")
        Restriction.WidthRes().clear()
        Restriction.WidthRes().type(userData.Width.space).tab()
       if(Restriction.WidthError().should('be.visible')) {
        cy.screenshot("WidthRes-Does not accepts space")
        Restriction.WidthErrorClose().click()
        cy.log("WidthRes-Does not accepts space,it displays Error Alert")
       }
       // cy.screenshot("WidthRes-Does not accepts space")
        Restriction.WidthRes().clear()
        Restriction.WidthRes().type(userData.Width.Numbers)
        Restriction.WidthRes().should('have.value','12345')
        cy.log("WidthRes-accepts numbers")
        cy.screenshot("WidthRes-accepts numbers")

        Restriction.streeAxle().type(userData.steer.Alphabets)
        Restriction.streeAxle().should('have.value',userData.steer.Alphabets).tab()
       if( Restriction.StreeError().should('be.visible')) {
        cy.screenshot("streeAxle-Does not accepts alphabets")
        Restriction.streeErrorClose().click()
        cy.log("streeAxle-Does not accepts alphabets,it displays Error Alert")
       }
        //cy.screenshot("streeAxle-Does not accepts alphabets")
        Restriction.streeAxle().clear()
        Restriction.streeAxle().type(userData.steer.SplChar).tab()
       if(Restriction.StreeError().should('be.visible')) {
        cy.screenshot("streeAxle-Does not accepts special characters")
        Restriction.streeErrorClose().click()
        cy.log("streeAxle-Does not accepts special characters,it displays Error Alert")
       }
        //cy.screenshot("streeAxle-Does not accepts special characters")
        Restriction.streeAxle().clear()
        Restriction.streeAxle().type(userData.steer.space).tab()
      if( Restriction.StreeError().should('be.visible')) {
        cy.screenshot("streeAxle-Does not accepts space")
        Restriction.streeErrorClose().click()
        cy.log("streeAxle-Does not accepts space,it displays Error Alert")
      }
        //cy.screenshot("streeAxle-Does not accepts space")
        Restriction.streeAxle().clear()
        Restriction.streeAxle().type(userData.steer.Numbers)
        Restriction.streeAxle().should('have.value',userData.steer.Numbers)
        cy.log("streeAxle-accepts numbers")
        cy.screenshot("streeAxle-accepts numbers")


        Restriction.DriveAxle().type(userData.Drive.Alphabets)
        Restriction.DriveAxle().should('have.value',userData.Drive.Alphabets).tab()
       if( Restriction.DriveError().should('be.visible')) {
        cy.screenshot("DriveAxle-Does not accepts alphabets")
        Restriction.DriveErrorClose().click()
        cy.log("DriveAxle-Does not accepts alphabets,it displays Error Alert")
       }
        //cy.screenshot("DriveAxle-Does not accepts alphabets")
        Restriction.DriveAxle().clear()
        Restriction.DriveAxle().type(userData.Drive.SplChar).tab()
       if(Restriction.DriveError().should('be.visible')) {
        cy.screenshot("DriveAxle-Does not accepts special characters")
        Restriction.DriveErrorClose().click()
        cy.log("DriveAxle-Does not accepts special characters,it displays Error Alert")
       }
        //cy.screenshot("DriveAxle-Does not accepts special characters")
        Restriction.DriveAxle().clear()
        Restriction.DriveAxle().type(userData.Drive.space).tab()
        if(Restriction.DriveError().should('be.visible')){
        cy.screenshot("DriveAxle-Does not accepts space")
        Restriction.DriveErrorClose().click()
        cy.log("DriveAxle-Does not accepts space,it displays Error Alert")
        }
        //cy.screenshot("DriveAxle-Does not accepts space")
        Restriction.DriveAxle().clear()
        Restriction.DriveAxle().type(userData.Drive.Numbers)
        Restriction.DriveAxle().should('have.value',userData.Drive.Numbers)
        cy.log("DriveAxle-accepts numbers")
        cy.screenshot("DriveAxle-accepts numbers")

        Restriction.TrailrAxle().type(userData.Trailer.Alphabets)
        Restriction.TrailrAxle().should('have.value',userData.Trailer.Alphabets).tab()
       if( Restriction.TrailerError().should('be.visible')) {
        cy.screenshot("TrailrAxle-Does not accepts alphabets")
        Restriction.TrailerErrorClose().click()
        cy.log("TrailrAxle-Does not accepts alphabets,it displays Error Alert")
       }
        //cy.screenshot("TrailrAxle-Does not accepts alphabets")
        Restriction.TrailrAxle().clear()
        Restriction.TrailrAxle().type(userData.Trailer.SplChar).tab()
       if( Restriction.TrailerError().should('be.visible')){
        cy.screenshot("TrailrAxle-Does not accepts special characters")
        Restriction.TrailerErrorClose().click()
        cy.log("TrailrAxle-Does not accepts special characters,it displays Error Alert")
       }
        //cy.screenshot("TrailrAxle-Does not accepts special characters")
        Restriction.TrailrAxle().clear()
        Restriction.TrailrAxle().type(userData.Trailer.space).tab()
       if( Restriction.TrailerError().should('be.visible')){
        cy.screenshot("TrailrAxle-Does not accepts space")
        Restriction.TrailerErrorClose().click()
        cy.log("TrailrAxle-Does not accepts space,it displays Error Alert")
       }
       // cy.screenshot("TrailrAxle-Does not accepts space")
        Restriction.TrailrAxle().clear()
        Restriction.TrailrAxle().type(userData.Trailer.Numbers)
        Restriction.TrailrAxle().should('have.value',userData.Trailer.Numbers)
        cy.log("TrailrAxle-accepts numbers")
        cy.screenshot("TrailrAxle-accepts numbers")

        Restriction.GrossWeight().type(userData.Gross.Alphabets)
        Restriction.GrossWeight().should('have.value',userData.Gross.Alphabets).tab()
       if( Restriction.GrossError().should('be.visible')){
        cy.screenshot("GrossWeight-Does not accepts alphabets")
        Restriction.GrossErrorClose().click()
        cy.log("GrossWeight-Does not accepts alphabets,it displays Error Alert")
       }
        //cy.screenshot("GrossWeight-Does not accepts alphabets")
        Restriction.GrossWeight().clear()
        Restriction.GrossWeight().type(userData.Gross.SplChar).tab()
       if( Restriction.GrossError().should('be.visible')) {
        cy.screenshot("GrossWeight-Does not accepts special characters")
        Restriction.GrossErrorClose().click()
        cy.log("GrossWeight-Does not accepts special characters,it displays Error Alert")
       }
        //cy.screenshot("GrossWeight-Does not accepts special characters")
        Restriction.GrossWeight().clear()
        Restriction.GrossWeight().type(userData.Gross.space).tab()
       if( Restriction.GrossError().should('be.visible')){
        cy.screenshot("GrossWeight-Does not accepts space")
        Restriction.GrossErrorClose().click()
        cy.log("GrossWeight-Does not accepts space,it displays Error Alert")
       }
        //cy.screenshot("GrossWeight-Does not accepts space")
        Restriction.GrossWeight().clear()
        Restriction.GrossWeight().type(userData.Gross.Numbers)
        if(Restriction.GrossWeight().should('have.value',userData.Gross.Numbers))
        {
        cy.log("GrossWeight-accepts numbers")
        cy.screenshot("GrossWeight-accepts numbers")
        }

        Restriction.StartDate().click()
        Restriction.StartMonth().select('Feb')
        Restriction.StartYear().select('2024')
        Restriction.SDate().click()
        cy.log("Start Date is selected")
        cy.screenshot("Start Date is selected")


        Restriction.EndDate().click()
        Restriction.StartMonth().select('May')
        Restriction.StartYear().select('2025')
        Restriction.EDate().click()
        cy.log("End Date is selected")
        cy.screenshot("End Date is selected")

        Restriction.StartTime().click()
        Restriction.Hour().should('be.visible')
        Restriction.Minute().should('be.visible')
        Restriction.SelectHour().click()
        Restriction.SelectMinute().click()
        cy.log("Start Time is selected")
        cy.screenshot("Start Time is selected")

        Restriction.EndTime().click()
        Restriction.Hour().should('be.visible')
        Restriction.Minute().should('be.visible')
        Restriction.EndHour().click()
        Restriction.EndMinute().click()
        cy.log("End Time is selected")
        cy.screenshot("End Time is selected")

       











      


     


      


        

        








        
       
    })
})
    

})
