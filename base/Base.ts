/*import "../base/Base"// this ia key
import configData  from"../config/configData.json"
import{test,expect,Page,Browser}from"@playwright/test";
import  { CommonUtils
}from  "../util/CommonUtils";
//import{After,Before}from  "@cucumber/cucumber";
 test.beforeAll (async({page})=>{
    await CommonUtils.startBrowser();

 });


 /*test.afterAll (async ({})=>{
 await CommonUtils.browser.close();

 });*/