import LoginPageTestData from "../Testdata/LoginPageTestData.json";
import LoginPageLocator from"../Locoater/LoginPageLocator.json";

class Loginpage
{
    constructor(page)
    {
        this.userName=page.locator(LoginPageLocator.userIDLocator)
        this.password=page.locator(LoginPageLocator.passwordLocator)
        this.loginBtn=page.locator(LoginPageLocator.loginBtnLocator)
         this.weburl= page.goto("https://www.saucedemo.com/")
         this.mainoption=page.locator("#react-burger-menu-btn")
         this.logout=page.locator("//a[text()='Logout']")
         this.waitfornetwok=page.waitForLoadState("networkidle")
         this.timeout=page.waitForTimeout(2000)
    
    }
    async login1()
    {
        await this.userName.fill(LoginPageTestData.userIDTestData)
        await this.password.fill(LoginPageTestData.passwordTestData)        
        await this.loginBtn.click()
    }
    async openURL()
    {
        await this.weburl
    }
    async login2(user,pass,totalnumberofuser)
    {
        const length=totalnumberofuser
        for(let i=0;i<length;i++)
        {
        await this.userName.fill(user[i])
        await this.password.fill(pass[i])   
        await this.timeout     
        await this.loginBtn.click()
        await this.waitfornetwok
        await this.mainoption.click({force:true})
        await this.timeout
        this.logouted()
        }
    }
    async logouted()
    {
       await this.logout.click()
    }
}
module.exports={Loginpage}


