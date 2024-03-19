class MenuPageObj
{
  menu()
  {
    return cy.xpath("//span[contains(text(),'Menu')]")
  }
  MapLayer()
  {
    return cy.xpath("//label[contains(text(),'Map Layers')]")
  }

  LocationRefLayer()
  {
    return cy.xpath("//label[contains(text(),' Location Reference Layers')]")
  }
  
  AddressLoc()
  {
    return cy.xpath("//span[contains(text(),'Address Location')]")
  }

  AddressZoom()
  {
    return cy.xpath("//span[contains(text(),'Address Location')]//following::a[2]")
  }
  AddressCheckbox()
  {
    return cy.xpath("//input[@id='chk_AddressLocation']")
  }
  AddressLegend()
  {
    return cy.xpath("//input[@id='chk_AddressLocation']//following::i[1]")
  }
  AddressImg()
  {
    return cy.xpath("//input[@id='chk_AddressLocation']//following::img[1]")
  }
  POI()
  {
    return cy.xpath("//span[contains(text(),'Point of Interest')]")
  }
  POIZoom()
  {
    return cy.xpath("//span[contains(text(),'Point of Interest')]//following::a[2]")
  }

  POICheckbox()
  {
    return cy.xpath("//input[@id='chk_PointofInterest']")
  }
  POILegend()
  {
    return cy.xpath("//input[@id='chk_PointofInterest']//following::i[1]")
    
  }
  POIImg()
  {
   return cy.xpath("//input[@id='chk_PointofInterest']//following::img[1]")
  }
  LSD()
  {
    return cy.xpath("//span[contains(text(),'LSD')]")
  }
  LSDZoom()
  {
    return cy.get('.popover-content > div > a.ng-scope')
  }
  LSDCheckbox()
  {
    return cy.xpath("//input[@id='chk_LSD']")
  }
  LSDLegend()
  {
    return cy.xpath("//input[@id='chk_LSD']//following::i[1]")
  }
  LSDImg()
  {
    return cy.xpath("//input[@id='chk_LSD']//following::img[1]")
  }
  RestrictionLayer()
  {
    return cy.xpath("//label[contains(text(),' Restriction Layers')]")
  }
  Restritions()
  {
    return cy.xpath("//span[contains(text(),'Restrictions')]")
    
  }
  RestrictionZoom()
  {
    return cy.xpath("//span[contains(text(),'Restrictions')]//following::a[5]")
  }
  RestrictionCheckbox()
  {
    return cy.xpath("//input[@id='chk_Restrictions']")
  }
  RestrictionLegend()
  {
    return cy.xpath("//input[@id='chk_Restrictions']//following::i[1]")
  }
  RestritionImg()
  {
    return cy.xpath("//input[@id='chk_Restrictions']//following::img[1]")
  }
  RoadBan()
  {
    return cy.xpath("//span[contains(text(),'Road Ban')]")
  }
  RoadBanZoom()
  {
    return cy.xpath("//span[contains(text(),'Road Ban')]")
  }
  RoadBanCheck()
  {
    return cy.xpath("//input[@id='chk_RoadBan']")
  }
  RoadBanLegend()
  {
    return cy.xpath("//input[@id='chk_RoadBan']//following::i[1]")
  }
  RoadBanImg()
  {
    return cy.xpath("//input[@id='chk_RoadBan']//following::img[1]")
  }
  Weather()
  {
    return cy.xpath("//span[contains(text(),'Weather Advisories')]")
  }
  WeatherZoom()
  {
    return cy.get('.popover-content > div > a.ng-scope')
  }
  WeatherCheckbox()
  {
    return cy.xpath("//input[@id='chk_WeatherAdvisories']")
  }
  WeatherLegend()
  {
    return cy.xpath("//input[@id='chk_WeatherAdvisories']//following::i[1]")
  }
  WeatherImg()
  {
    return cy.xpath("//input[@id='chk_WeatherAdvisories']//following::img[1]")
  }
  BaseLayer()
  {
    return cy.xpath("//label[contains(text(),' Base Layers')]")
  }
  RST()
  {
    return cy.xpath("//span[contains(text(),'Road Surface Type')]")
  }
  RSTZoom()
  {
    return cy.get('.popover-content > div > a.ng-scope')
  }
  RSTcheckbox()
  {
    return cy.xpath("//input[@id='chk_RoadSurfaceType']")
  }
  RSTLegend()
  {
    return cy.xpath("//input[@id='chk_RoadSurfaceType']//following::i[1]")
  }
  RSTImg()
  {
    return cy.xpath("//input[@id='chk_RoadSurfaceType']//following::img[1]")
  }
  RUA()
  { 
    return cy.xpath("//span[contains(text(),'RUA')]")

  }
  RUAZoom()
  {
    return cy.xpath("//span[contains(text(),'RUA')]")
  }
  RUACheckbox()
  {
    return cy.xpath("//input[@id='chk_RUA']")
  }
  RUALegend()
  {
    return cy.xpath("//input[@id='chk_RUA']//following::i[1]")
  }
  RUAImg()
  {
    return cy.xpath("//input[@id='chk_RUA']//following::img[1]")
  }
  PreferredRoutes()
  {
    return cy.xpath("//span[contains(text(),'Preferred Routes')]")
  }
  PreferredRoutesZoom()
  {
    return cy.get('.popover-content > div > a.ng-scope')
  }
  PreferredRoutesCheckbox()
  {
    return cy.xpath("//input[@id='chk_PreferredRoute']")
  }
  PreferredRoutesLegend()
  {
    return cy.xpath("//input[@id='chk_PreferredRoute']//following::i[1]")
  }
  PreferredRoutesImg()
  {
    return cy.xpath("//input[@id='chk_PreferredRoute']//following::img[1]")
  }

  Section()
  {
    return cy.xpath("//span[contains(text(),'Section')]")
  }
  SectionZoom()
  {
    return cy.xpath("//span[contains(text(),'Section')]//following::a[2]")
  }
  SectionCheckbox()
  {
    return cy.xpath("//input[@id='chk_SectionPolygon']")
  }
  SectionLegend()
  {
    return cy.xpath("//input[@id='chk_SectionPolygon']//following::i[1]")
  }
  SectionImg()
  {
    return cy.xpath("//input[@id='chk_SectionPolygon']//following::img[1]")
  }
  Township()
  {
    return cy.xpath("//span[contains(text(),'Township')]")
  }
  TownshipZoom()
  {
    return cy.xpath("//span[contains(text(),'Township')]//following::a[2]")
  }
  TownshipCheckbox()
  {
    return cy.xpath("//input[@id='chk_Township']")
  }
  TownshipLegend()
  {
    return cy.xpath("//input[@id='chk_Township']//following::a[2]")
  }
  TownshipImg()
  {
    return cy.xpath("//input[@id='chk_Township']//following::img[1]")
  }
  Municipality()
  {
    return cy.xpath("//span[contains(text(),'Municipality')]")
  }
  MunicipalityZoom()
  {
    return cy.xpath("//span[contains(text(),'Municipality')]//following::a[2]")
  }
  MunicipalityCheckbox()
  {
    return cy.xpath("//input[@id='chk_Municipality']")
  }
  MunicipalityLegend()
  {
    return cy.xpath("//input[@id='chk_Municipality']//following::a[2]")
  }
  MunicipalityImg()
  {
    return cy.xpath("//input[@id='chk_Municipality']//following::img[1]")
  }
  BackgroundLayer()
  {
   return  cy.xpath("//label[contains(text(),'Background Layers')]")
  }
  NoBackground()
  {
    return cy.xpath("//label[contains(text(),' No Background')]")
  }
  Transit()
  {
    return cy.xpath("//label[contains(text(),' Here Transit')]")
  }
  satellite()
  {
    return cy.xpath("//label[contains(text(),' Satellite')]")
  }
  Hybrid()
  {
    return cy.xpath("//label[contains(text(),' Here Hybrid')]")
  }

}
export default MenuPageObj;