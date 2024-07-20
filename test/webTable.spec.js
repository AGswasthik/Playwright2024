import { test, expect } from '@playwright/test';

test("webtable",async({page})=>
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
})