class OPenRoutingPageObj
{
    ExistingRoute()
    {
        return cy.xpath("//div[@id='existing-routes-table_wrapper']")
    }
    AddNew()
    {
        return cy.xpath("//a[@id='new_input']")
    }
    origin()
    {
        return cy.get('form.ng-pristine > :nth-child(1) > :nth-child(1) > .form-group > .form-control')
    }
    coordinateImg1()
    {
        return cy.xpath("//label[contains(text(),'Destination:')]//preceding::img[2]")
    }
    CoordinateAlert()
    {
        return cy.xpath("//label[contains(text(),'Select Location on Map')]")
    }
    coordinateAlertClose()
    {
        return cy.xpath("//b[contains(text(),'Alert')]//following::i[1]")
    }
    destination()
    {
        return cy.get('.ng-valid-maxlength.ng-dirty > :nth-child(1) > :nth-child(3) > .form-group > .form-control')
    }
    CoordinateImg2()
    {
        return cy.xpath("//label[contains(text(),'Destination:')]//following::img[1]")
    }
    RouteName()
    {
        return cy.xpath("//input[@id='name']")
    }
    streeAxle()
    {
        return cy.xpath("//input[@id='steerDetail']")
    }
    TrailorAxle()
    {
        return cy.xpath("//input[@id='trailerDetail']")
    }
    DriverAxle()
    {
        return cy.xpath("//input[@id='driveDetail']")
    }
    VehicleHeight()
    {
        return cy.xpath("//input[@id='heightDetail']")
    }
    StartJourneyDate()
    {
        return cy.xpath("//label[contains(text(),'Start Journey Date:')]//following::input[1]")
    }
    calender()
    {
        return cy.xpath("//div[@id='ui-datepicker-div']")
    
    }
    Month()
    {
        return cy.xpath("//select[@class='ui-datepicker-month']")
    }
    year()
    {
        return cy.xpath("//select[@class='ui-datepicker-year']")
    }
    Date()
    {
        return cy.xpath("//select[@class='ui-datepicker-month']//following::a[25]")
    }
    StartJourneyTime()
    {
        return cy.xpath("//label[contains(text(),'Start Journey Time:')]//following::input[1]")
    }
    Hour()
    {
        return cy.xpath("//div[contains(text(),'Hour')]")

    }
    SelectHour()
    {
        return cy.xpath("//div[contains(text(),'Hour')]//following::a[8]")
    }
    Minute()
    {
        return cy.xpath("//div[contains(text(),'Minute')]")
    }
    SelectMinute()
    {
        return cy.xpath("//div[contains(text(),'Minute')]//following::a[5]")
    }
    AM()
    {
        return cy.xpath("//th[contains(text(),'AM')]")
    }
    PM()
    {
        return cy.xpath("//th[contains(text(),'PM')]")
    }
    DontUse(){
        return cy.xpath("//label[contains(text(),'Dont Use ')]")
    }
    Use()
    {
        return cy.xpath("//label[contains(text(),'Dont Use ')]//preceding::label[1]")
    }
    clear()
    {
        return cy.xpath("//button[contains(text(),'Clear')]")
    }
}
export default OPenRoutingPageObj;