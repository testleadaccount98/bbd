import configData from "../config/configData.json";
import {test,Browser,Page,Locator, FrameLocator} from "@playwright/test";
import "../base/Base.ts";
import { LoginPage } from "../pages/LoginPage.ts";
import { PIMPage } from "../pages/PIMPage.ts";
import { CommonUtils } from "../util/CommonUtils.ts";
import { AssertUtil } from "../util/AssertUtil.ts";

test("open the brower", async({page})=>{

    await CommonUtils.startBrowser();
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
});
let loginpage2:LoginPage=new LoginPage();

let pimpage:PIMPage=new PIMPage();



test("Addemp and verify", async({page})=>
{
    
loginpage2.login();
 page.setDefaultTimeout(10000);

await CommonUtils.mouse_hover(pimpage.getPIM_hover()); // to mouse over on the pimpage
//await CommonUtils.clickEelment(pimpagw.employee_List());//to view  employee list;
 await CommonUtils.clickEelment(pimpage.add_Emplyoee());//to select add employee;
let pimFrame: FrameLocator = CommonUtils.click_on_frame(pimpage.getFrame()); 
await CommonUtils.getElemnetTextInframe(pimFrame,pimpage.getpim_addemptext());

await CommonUtils.enterValueintoFrame(pimFrame,pimpage.get_First_name(),configData.firstname);
await CommonUtils.enterValueintoFrame(pimFrame,pimpage.get_Last_name(),configData.lastname);
await CommonUtils.clickEelment_Inframe(pimFrame,pimpage.get_save_button());
await CommonUtils.clickEelment_Inframe(pimFrame,pimpage.get_edit_button());
let check:any=await CommonUtils.checkbox_inframe(pimFrame,pimpage.get_check_Smoker())
//await AssertUtil.assertcheckbox(check);
await CommonUtils.drop_Down_In_Frame(pimFrame,pimpage.get_by_dropdwon(),configData.Maritaldropdown);
await CommonUtils.clickEelment_Inframe(pimFrame,pimpage.get_save_button2());
await CommonUtils.clickEelment_Inframe(pimFrame,pimpage.get_Contact_Details());
await CommonUtils.clickEelment_Inframe(pimFrame,pimpage.get_edit_button_In_contacts());
await CommonUtils.drop_Down_In_Frame(pimFrame,pimpage.get_dropdown_country(),configData.country);
await page.waitForTimeout(3000);


   

});



