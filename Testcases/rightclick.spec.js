import {test, expect} from "@playwright/test"
test("right click",async({page})=>
{
    await page.goto("https://www.google.com/search?q=playwright+how+to+click+right+click&rlz=1C1CHBD_enIN985IN985&oq=playwright+how+to+click+right+click&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEINzA5MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:9426ca70,vid:d0hu_13dyEo,st:58")
    await page.locator("[class='UH8bI z1asCe']").click({button:"right"})
    await page.waitForTimeout(5000)
    
})
test.only("press button",async({page})=>
    {
        await page.goto("https://playwright.dev/docs/input")
        await page.locator("#keys-and-shortcuts").press('Control+a');
        //click({button:"right"})
        await page.waitForTimeout(5000)
    })