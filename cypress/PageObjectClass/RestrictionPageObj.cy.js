class RestrictionPageObj{
    constructor(){
    this.ExistingRestriction =()=>cy.xpath("//div[@id='restriction-data-table_wrapper']")
    this.AddNew =()=> cy.xpath("//a[@id='new_restriction']")
    this.RestrictionType= () => cy.xpath("//label[contains(text(),'Restriction Type:')]//following::select[1]")
    this.BanPercentage=()=> cy.xpath("//label[contains(text(),'Ban Percentage(%)')]//following::select[1]")
    this.description=()=> cy.xpath("//input[@id='description']")
    this.Notes=()=> cy.xpath("//input[@id='notes']")
    this.HeightRes=()=> cy.xpath("//input[@id='heightRes']")
    this.HeightError=()=> cy.xpath("//label[contains(text(),'Column Height Restriction should numeric value')]")
    this.HeightErrorClose=()=> cy.xpath("//label[contains(text(),'Column Height Restriction should numeric value')]//preceding::i[1]")
    this.WidthRes=()=> cy.xpath("//input[@id='widthRes']")
    this.WidthError=()=> cy.xpath("//label[contains(text(),'Column Width Restriction should numeric value')]")
    this.WidthErrorClose=()=> cy.xpath("//label[contains(text(),'Column Width Restriction should numeric value')]//preceding::i[1]")
    this.streeAxle=()=> cy.xpath("//input[@id='steerAxel']")  
    this.StreeError=()=> cy.xpath("//label[contains(text(),'Column Steer Axle should numeric value')]")  
    this.streeErrorClose=()=> cy.xpath("//label[contains(text(),'Column Steer Axle should numeric value')]//preceding::i[1]")
    this.DriveAxle=()=> cy.xpath("//input[@id='driveAxle']")
    this.DriveError=()=> cy.xpath("//label[contains(text(),'Column Drive Axle should numeric value')]")
    this.DriveErrorClose=()=> cy.xpath("//label[contains(text(),'Column Drive Axle should numeric value')]//preceding::i[1]")
    this.TrailrAxle=()=> cy.xpath("//input[@id='trailrAxle']")
    this.TrailerError=()=> cy.xpath("//label[contains(text(),'Column Trailer Axle should numeric value')]")
    this.TrailerErrorClose=()=> cy.xpath("//label[contains(text(),'Column Trailer Axle should numeric value')]//preceding::i[1]")
    this.GrossWeight=()=> cy.xpath("//input[@id='grossWeight']")
    this.GrossError=()=> cy.xpath("//label[contains(text(),'Column Gross Weight should numeric value')]")
    this.GrossErrorClose=()=> cy.xpath("//label[contains(text(),'Column Gross Weight should numeric value')]//preceding::i[1]")
    this.StartDate=()=> cy.xpath("//input[@id='sDate']")
    this.StartMonth=()=>cy.xpath("//select[@class='ui-datepicker-month']")
    this.StartYear=()=> cy.xpath("//select[@class='ui-datepicker-year']")
    this.SDate=()=> cy.xpath("//select[@class='ui-datepicker-year']//following::a[6]")
    this.EndDate=()=> cy.xpath("//input[@id='eDate']")
    this.EDate=()=> cy.xpath("//select[@class='ui-datepicker-year']//following::a[7]")
    this.StartTime=()=> cy.xpath("//input[@id='sTime']")
    this.Hour=()=> cy.xpath("//div[contains(text(),'Hour')]")
    this.Minute=()=> cy.xpath("//div[contains(text(),'Minute')]")
    this.SelectHour=()=> cy.xpath("//div[contains(text(),'Hour')]//following::a[3]")
    this.SelectMinute=()=> cy.xpath("//div[contains(text(),'Minute')]//following::a[3]")
    this.EndTime=()=> cy.xpath("//input[@id='eTime']")
    this.EndHour=()=> cy.xpath("//div[contains(text(),'Hour')]//following::a[8]")
    this.EndMinute=()=> cy.xpath("//div[contains(text(),'Minute')]//following::a[3]")
    this.Back=()=> cy.xpath("//button[contains(text(),'Back')]")
}
}
export default RestrictionPageObj;