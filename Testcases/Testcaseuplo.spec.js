const {exports,test}=require("@playwright/test")
test("jbjb", async ({ page }) => {

    //Single file
    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")
    await page.waitForSelector("[name='upfile']")
    
    await page.locator("[name='upfile']").setInputFiles("tests/uploadfileexampletests/uploadfileexample/c.png")

    //Multiple file upload put it in array line number 16
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.waitForSelector("[name='filesToUpload']")
   
    await page.locator("[name='filesToUpload']").setInputFiles(["tests/uploadfileexampletests/uploadfileexample/c.png", "tests/uploadfileexampletests/uploadfileexample/Global.pdf"])
    const expected=["c.png", "Global.pdf"];
    var a = await page.locator("#fileList li").allTextContents()
    console.log(a)
   
    await expect(a).toEqual(expect.arrayContaining(expected));
    await page.waitForTimeout(3000)
})