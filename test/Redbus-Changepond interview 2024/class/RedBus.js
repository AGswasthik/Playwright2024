import HomepagLocator from "../../Redbus-Changepond interview 2024/Locators/HomePage.json";
import HonmePageTestData from "../../Redbus-Changepond interview 2024/Testdata/Place.json";


class RedBus
{
    constructor(page)
        {
            this.FromPlace=page.locator(HomepagLocator.From)
        this.ToPlace=page.locator(HomepagLocator.To)        
         this.weburl= page.goto("https://www.redbus.in/")
         this.link1=page.locator(HomepagLocator.link1)
         this.link2=page.locator(HomepagLocator.link2)
         this.link3=page.locator(HomepagLocator.link3)
         this.link4=page.locator(HomepagLocator.link4)
         this.link5=page.locator(HomepagLocator.link5)
         this.Date=page.locator(HomepagLocator.Date)
         this.dateSelect=page.locator(HomepagLocator.DateSelect)
         this.SearchBus=page.locator(HomepagLocator.SearchBus)
         this.FirstBus=page.locator(HomepagLocator.FirstBus)
         
        }
        async openURL()
    {
        await this.weburl
        
    }

        async bookBus()
        {
        
       await this.FromPlace.fill(HonmePageTestData.fromPlace)
        await this.ToPlace.fill(HonmePageTestData.ToPlace)    
        await this.Date.click()    
        
       
        }

        async userdateselect()
        {
            await this.dateSelect.click()
        await this.SearchBus.click()
        await this.FirstBus.click()
        }

        async alllinks()
        {
            await this.link1.click()
            await this.link2.click()
            await this.link3.click()
            await this.link4.click()
            await this.link5.click()
        }
    

}
module.exports={RedBus}