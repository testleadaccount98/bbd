

export class AdminPage
{
 private by_Mouse_Hover="xpath=//li[@id='admin']";
 private by_company_Info="xpath=//span[text()='Company Info']";
 private by_frame="xpath=//*[@id='rightMenu']";
 private by_General="xpath=//span[text()='General']";
 private by_edit_button="xpath=//input[@id='editBtn']"
 private by_location="xpath=//span[text()='Locations']";
private by_country_drop="xpath=//select[@id='cmbCountry']"
 mouse_Hover():string{
    return this.by_Mouse_Hover;
 }

 company_Info():string{
    return this.by_company_Info;
 }
 get_General():string{
   return this.by_General;
 }

 get_by_frame():string{
  return this.by_frame;
 }

 get_by_editbtn():string
 {
  return this.by_edit_button;
 }
 get_by_location():string{

   return this.by_location;
 }
get_by_country():string
{
  return this.by_country_drop;
}
}
