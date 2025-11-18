import { expect } from '@playwright/test'
import { TestData } from '../TestData/testdata.js';
import { NewConsignmentVehicle_WebElement } from '../WebElements/NewConsignmentVehicle_WebElements.js';
import { PersonalAccountPage } from './PersonalAccountPage.js'  
exports.NewBusinessConsignmentVehiclePage =
class NewBusinessConsignmentVehiclePage
{
    constructor(page)
    {
        this.page = page
        this.testdata = new TestData()
        this.newconsignmentvehicle_webelement = new NewConsignmentVehicle_WebElement()
    }
    async Account()
    {
            await this.page.locator(this.newconsignmentvehicle_webelement.hover_Account).hover()
            await this.page.locator(this.newconsignmentvehicle_webelement.Delete_Personal_Account).click()
            await this.page.locator(this.newconsignmentvehicle_webelement.Account_field).click()
            await this.page.locator(this.newconsignmentvehicle_webelement.Account_field).press('Enter')
            await this.page.locator(this.newconsignmentvehicle_webelement.Select_Business_Account).click()
            await this.page.waitForTimeout(1000)
            await this.page.screenshot({ path: './ScreenShot/42 BusinessAccount.png', fullPage: true})
            await this.page.locator(this.newconsignmentvehicle_webelement.Status_Text).click() 
            await this.page.waitForTimeout(2000)
    }
    async Account_Address()
    {
        //await this.page.locator(this.newconsignmentvehicle_webelement.Account_Address).scrollIntoViewIfNeeded({ timeout: 5000 });
        await this.page.locator(this.newconsignmentvehicle_webelement.Account_Address).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Account_Address).fill(this.testdata.Account_Address)
        await this.page.locator(this.newconsignmentvehicle_webelement.Account_Address_dropdown).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Title_To).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Title_To).fill(this.testdata.Business_TitleTo)
        await this.page.screenshot({ path: './ScreenShot/43 AccountAddress.png', fullPage: true})
        await this.page.locator(this.newconsignmentvehicle_webelement.Status_Text).click() 
        await this.page.waitForTimeout(2000)
    }
}