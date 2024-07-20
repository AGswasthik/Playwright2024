import {test, expect} from "@playwright/test"
test("Datehandling", async ({ page }) => {
    await page.goto("https://www.redbus.in/")
    await page.locator(".labelCalendarContainer").click()
    const month = await page.locator("[class='DayNavigator__IconBlock-qj8jdz-2 iZpveD']:nth-child(3)")
    while (true) {
        const pmonth = await page.locator("[class='DayNavigator__IconBlock-qj8jdz-2 iZpveD']:nth-child(2)").textContent()
        const totalDays = await page.locator("[class='DayTilesWrapper__SpanContainer-sc-19pz9i8-0 hQhlTG'] div span")
        if (await pmonth.includes("Feb 2025")) {
            for (let i = 0; i < await totalDays.count(); i++) {
                console.log(await page.locator("[class='DayTilesWrapper__SpanContainer-sc-19pz9i8-0 hQhlTG'] div span").nth(i).textContent())
                if (await totalDays.nth(i).textContent() == 29) {
                    await totalDays.nth(i).click()
                }
            }
           break
       }
        await month.click({ force: true })
   }
   await page.pause()
})