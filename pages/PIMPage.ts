import { CommonUtils } from "../util/CommonUtils";
import {test,expect,Page, FrameLocator,} from "@playwright/test"
import configData from"../config/configData.json"

export class PIMPage
 
{
private by_PIM_hover ="xpath=//*[@id='pim']";
private by_Employee_List="xpath=//*[@id='pim']/ul/li[1]/a";
private by_Add_Emplyoee= "xpath=//*[@id='pim']/ul/li[2]/a";
private by_frame="xpath=//*[@id='rightMenu']";

//private by_First_name=//"xpath=//*[@id='txtEmpFirstName']"////*[@id="txtEmpFirstName"]
private by_pim_addemp = "xpath=//h2text()='PIM : Add Employee']"
private by_firstName = "xpath=//input[@id='txtEmpFirstName']";

 private by_Last_name="xpath=//*[@id='txtEmpLastName']";
 private by_Middle_name="xpath=//input[@id='txtEmpMiddleName']";
 private by_Save_button="xpath=//input[@id='btnEdit']";
 private by_edit_button="xpath=//input[@id='btnEditPers']";
 private by_check_Smoker="xpath=//input[@id='chkSmokeFlag']"
 
 private by_dropdwon="xpath=//select[@id='cmbMarital']"
 private by_save_button2="xpath=//input[@id='btnEditPers']";

 private by_Contact_Details="xpath=//a[@id='contactsLink']";
 private by_edit_Button2="xpath=//input[@id='btnEditContact']";
 private by_dropdown_country="xpath//select[@name='cmbCountry']"
/*async pimp():Promise<any>
{
await CommonUtils.mouse_hover(this.getPIM_hover()); // to mouse over on the pimpage
//await CommonUtils.clickEelment(this.employee_List());//to view  employee list;
 await CommonUtils.clickEelment(this.add_Emplyoee());//to select add employee;
let pimFrame: FrameLocator = CommonUtils.click_on_frame(this.getFrame()); 
await CommonUtils.enterValueintoFrame(pimFrame,this.get_Last_name(),configData.lastname);
await CommonUtils.enterValueintoFrame(pimFrame,this.get_First_name(),configData.firstname)
await CommonUtils.getElemnetTextInframe(pimFrame,this.getpim_addemptext());
} */

 getPIM_hover():string
 {
    return this.by_PIM_hover;
 }

employee_List():string
{
   return this.by_Employee_List;
}

getpim_addemptext():string
{
  return this.by_pim_addemp;
}


 
 add_Emplyoee():string
 {
   return this.by_Add_Emplyoee;
 }

 getFrame():string{

   return this.by_frame;
 }

 


 get_Last_name():string
 {
   return this.by_Last_name;
 }

 get_First_name():string{
  return this.by_firstName;
 }

 get_save_button():string
 {
  return this.by_Save_button;
 }
 get_edit_button():string
 {
  return this.by_edit_button;
 }
 get_check_Smoker():string
 {
  return this.by_check_Smoker;
 }
 get_by_dropdwon():string{
  return this.by_dropdwon;
 }
 get_save_button2():string{

  return this.by_save_button2;
 }
 get_Contact_Details():string
 {
  return this.by_Contact_Details;

 }

 get_edit_button_In_contacts():string{
  return this.by_edit_Button2;
 }
 get_dropdown_country():string{
  return this.by_dropdown_country;
 }
}


