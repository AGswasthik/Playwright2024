import { test, expect } from '@playwright/test';

test("cal",async({page})=>
{
    
        await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        var year = "2026"
        var month = "August"
        var Dates = "10"
        await page.locator("[class*='react-date-picker__calendar-button react-date-picker__button']").click()
       await page.locator("[class='react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from']").click()
        for (let i = 0; i <= 100; i++) 
            {
            var yearmonth=await page.locator("[class='react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from']").textContent()
            var fullyear = yearmonth

            if (fullyear !== year) 
                 {
                    await page.locator("[class='react-calendar__navigation__arrow react-calendar__navigation__next-button']").click({ force: true })

                }
            }
            await page.locator("//*[text()='"+month+"']").click({force:true})
            await page.getByRole('button', { name: month+" "+Dates }).click()
            
        await page.waitForTimeout(5000)
    })