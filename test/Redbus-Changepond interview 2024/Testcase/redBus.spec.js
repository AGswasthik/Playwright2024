const {exports,test}=require("@playwright/test")
const {RedBus}=require("../../Redbus-Changepond interview 2024/class/RedBus.js") 

test("Booka a bus in REDBUS",async({page})=>
{
    var homePage=new RedBus(page)
    await homePage.openURL() 
    await page.waitForLoadState('networkidle')
    await page.waitForLoadState("networkidle")
    await homePage.bookBus()
    await page.waitForTimeout(5000)
    await homePage.userdateselect()
    await homePage.alllinks()    
    
})