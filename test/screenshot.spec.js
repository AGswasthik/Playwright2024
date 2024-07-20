const {exports,test}=require("@playwright/test")

test("Taking screenshot",async({page})=>
    {
        await page.goto("https://www.amazon.in/")
        //Below code will take full page screnn shot
        await page.screenshot({path:"test/DownloadedScreenshot/"+Date.now()+"homepage.png",fullPage:true})
    })