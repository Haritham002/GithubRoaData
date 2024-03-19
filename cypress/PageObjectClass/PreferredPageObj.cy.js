class PreferredPageObj
{
    constructor()
    {
        this.ExistingPreferred=()=> cy.xpath("//div[@id='pr-data-table_wrapper']")
        this.AddNew=()=> cy.xpath("//a[@id='delete_pr_data']//following::a[1]")
        this.StartLink=()=> cy.xpath("//input[@id='sPRLink']")
        this.EndLink=()=> cy.xpath("//input[@id='ePRLink']")
        this.Name=()=> cy.xpath("//input[@placeholder='Preferred Route']")
        this.Notes=()=> cy.xpath("//input[@placeholder='Notes']")
        this.RouteType=()=> cy.xpath("//label[contains(text(),'Route Type: ')]//following::select[1]")
        this.status=()=> cy.xpath("//label[contains(text(),'Route Type: ')]//following::select[2]")
        this.Description=()=> cy.xpath("//input[@id='prDescription']")
        this.startDate=()=> cy.xpath("//input[@id='sPRDate']")
        this.StartMonth=()=> cy.xpath("//select[@data-handler='selectMonth']")
        this.StartYear=()=> cy.xpath("//select[@data-handler='selectYear']")
        this.SDate=()=> cy.xpath("//select[@data-handler='selectYear']//following::a[7]")
        this.EndDate=()=> cy.xpath("//input[@id='ePRDate']")
        this.EndMonth=()=> cy.xpath("//select[@data-handler='selectMonth']")
        this.EndYear=()=> cy.xpath("//select[@data-handler='selectYear']")
        this.EDate=()=> cy.xpath("//select[@data-handler='selectYear']//following::a[7]")


    }
}
export default PreferredPageObj;