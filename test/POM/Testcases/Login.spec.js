const {exports,test}=require("@playwright/test")
const {Loginpage}=require("../Class/Loginpage")

test("Login page",async({page})=>
{
    var login=new Loginpage(page)
    await login.openURL()    
    await page.waitForLoadState("networkidle")
    await login.login1()
    await page.pause(5000)
    
})