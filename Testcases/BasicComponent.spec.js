import { test, expect } from '@playwright/test';
import exp from 'constants';
// @ts-check


test('has title', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.waitForLoadState("networkidle")
  // Expect a title "to contain" a substring.
  
    console.log(await page.title()+"url is "+page.url()); 
    await expect(page).toHaveTitle('Practice Page');
    //radio
    await page.locator("[value='radio1']").click()
    //text boxs
    await page.locator("#name").fill("swasthik")
    const locator =await page.locator("#name")
    await locator.isEditable()
    locator.isEnabled()
    locator.isVisible()
    await expect(locator).toBeVisible()
    //checkbox
    await page.locator("#checkBoxOption2").check()
    //static dropdown
    await page.locator("#dropdown-class-example").selectOption('Option2')
  await  page.waitForTimeout(3000)
  //Auto suggestion dropdown
        await page.locator("#autocomplete").fill("am")
        await page.waitForSelector("#ui-id-1")
        await page.waitForTimeout(5000)
        console.log(await page.locator("#ui-id-1 li").allTextContents())
        const suggestionList = (await page.$$("#ui-id-1>li")).length;
        for (let i = 0; i < suggestionList; i++) {
            let country = await page.locator("#ui-id-1 li").nth(i).textContent()
            if (country == "Namibia") {
                await page.locator("#ui-id-1 > li").nth(i).click()
                break;
            }
        }
  
//Confirm alert
page.on('dialog', async dialog => {
await expect(await dialog.type()).toContain('confirm')
await expect(await dialog.message()).toBe("Hello swasthik, Are you sure you want to confirm?")
await dialog.dismiss()
})
//await  page.waitForTimeout(3000)
await page.locator('#confirmbtn').click()
await  page.waitForTimeout(3000)

})

test("windows handling", async ({ browser }) => {
//Windows and tab handling bot are same code only
const context = await browser.newContext();
const main_window = await context.newPage();
await main_window.goto("https://rahulshettyacademy.com/AutomationPractice/")
const windowPageLink = await main_window.locator("[id='openwindow']")
const [child_Window] = await Promise.all([
    context.waitForEvent('page'),
    windowPageLink.click()
])
const childWindow = await child_Window.title()
console.log(childWindow)
})

 test.only("table handling",async({page})=>
{
  var course;
    var price;
    var i;
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    var coursesCount=await page.locator("[name='courses'] tr td:nth-child(2)").count()
    for(i=0;i<coursesCount;i++)
    {
        course=await page.locator("[name='courses'] tr td:nth-child(2)").nth(i).textContent()
        console.log(course)
        if(course=="Appium (Selenium) - Mobile Automation Testing from Scratch")
        {
            price=await page.locator("[name='courses'] tr:nth-child("+i+") td").nth(i).textContent()
            console.log(await price)
            break;
            
        }

    }
    //Frame handling
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

  })

  test("right click",async({page})=>
    {
        await page.goto("https://playwright.dev/docs/input")
        await page.locator("#keys-and-shortcuts").press('Control+a');
        //click({button:"right"})
        await page.waitForTimeout(5000)
        //double click
        await desktop.hover()
        
    })