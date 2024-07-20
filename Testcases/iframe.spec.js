import{test, expect} from '@playwright/test'
test("frames handling",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.waitForLoadState('networkidle')
    console.log(await page.frames()+"length is"+await page.frames().length)
    const frames = await page.frame('iframe-name')
    await frames.locator("//div[@class='nav-outer clearfix']//nav[@class='main-menu']//div[@class='navbar-collapse collapse clearfix']//ul[@class='navigation clearfix']//li//a[@href='practice-project'][normalize-space()='Practice']").click({force:true})
    //console.log(allframes)
    await page.waitForTimeout(5000)
})