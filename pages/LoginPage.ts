import configData from"../config/configData.json"
import { AssertUtil } from "../util/AssertUtil";
import   {CommonUtils } from "../util/CommonUtils"

export class LoginPage
{

 private by_username = "input[name='txtUserName']";//
 private by_password="input[name='txtPassword']";
 private by_loginbutton="input[name='Submit']";
 private by_welcomepage="xpath=//li[text()='Welcome bhargav']";


 
 async login():Promise<void>{
 await CommonUtils.enterValue(this.getUsername(),configData.username);
 await CommonUtils.enterValue(this.getPaswword(),configData.password);
 
 

 await CommonUtils.clickEelment(this.getLogin());
 
    let text:string =await CommonUtils.getElemnetText(this.getWelcomepage());
 console.log(text);
AssertUtil.assertEquals(text,"Welcome bhargav")

 }
getUsername(): string {
        return this.by_username;//"input[name='txtUserName']"
    }
 getPaswword():string{
    return this.by_password;//""input[name='txtPassword']";"
 }
getLogin(): string
{
    return this.by_loginbutton;//
}

getWelcomepage():string
{
    return this.by_welcomepage;
}
}

//let login1:LoginPage=new LoginPage();
//login1.login();