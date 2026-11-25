import { AdminPage } from "../pages/AdminPage";
import configData from "../config/configData.json";
import {test,Browser,Page,Locator, FrameLocator} from "@playwright/test";
import "../base/Base.ts";
import { LoginPage } from "../pages/LoginPage.ts";
import { CommonUtils } from "../util/CommonUtils.ts";
import { AssertUtil } from "../util/AssertUtil.ts";


test("open the brower", async({page})=>{

    await CommonUtils.startBrowser();
    //await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
});
let loginpage:LoginPage=new LoginPage();

let adminpage:AdminPage=new AdminPage();





 
  test ("verify login page",async({page})=>{
    
loginpage.login();
await CommonUtils.mouse_hover(adminpage.mouse_Hover());
await CommonUtils.mouse_hover(adminpage.company_Info());
await CommonUtils.clickEelment(adminpage.get_General());
let pimFrame: FrameLocator = CommonUtils.click_on_frame(adminpage.get_by_frame()); 
await CommonUtils.clickEelment_Inframe(pimFrame,adminpage.get_by_editbtn());
await CommonUtils.drop_Down_In_Frame(pimFrame,adminpage.get_by_country(),configData.Country);

//await CommonUtils.mouse_hover(adminpage.get_by_location());
await page.waitForTimeout(10000);
  });
 