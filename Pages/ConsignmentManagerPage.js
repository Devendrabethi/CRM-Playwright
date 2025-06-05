import { expect } from '@playwright/test'
import { ConsignmentManager_WebElements } from '../WebElements/ConsignmentManager_WebElements'    
import { TestData } from '../TestData/testdata.js';

exports.ConsignmentManagerPage =
class ConsignmentManagerPage
{
    constructor(page)
    {
        this.page = page
        this.consignmentManager_webElements =  new ConsignmentManager_WebElements()
        this.testdata = new TestData()
    }
    async ChangeArea()
    {
       await this.page.locator(this.consignmentManager_webElements.Change_Area).click()
       await this.page.locator(this.consignmentManager_webElements.Consignment_Manger_Button).click()
       await this.page.locator(this.consignmentManager_webElements.Select_Consignment).click()
       
    }
    async Collections()
    {
       await this.page.locator(this.consignmentManager_webElements.Select_Collection_Option).click()
       await this.page.locator(this.consignmentManager_webElements.New_Collection_Button).click()
       await this.page.locator(this.consignmentManager_webElements.Name_Field).fill(this.testdata.Collection_Name)
       await this.page.waitForTimeout(500)
       await this.page.locator(this.consignmentManager_webElements.Description_Field).fill(this.testdata.Colection_Description)
       await this.page.waitForTimeout(2000)
       await this.page.locator(this.consignmentManager_webElements.SaveandClose).click()
       await this.page.locator(this.consignmentManager_webElements.CreatedOn_Filter).click()
       await this.page.locator(this.consignmentManager_webElements.NewtoOld).click()
       await this.page.waitForTimeout(2000)
    }
    async Charities()
    {
       await this.page.locator(this.consignmentManager_webElements.Select_Charities).click()
       await this.page.locator(this.consignmentManager_webElements.New_Charities_Button).click()
       await this.page.locator(this.consignmentManager_webElements.Name_Field).fill(this.testdata.Charities_Name)
        await this.page.waitForTimeout(500)
       await this.page.locator(this.consignmentManager_webElements.Description_Field).fill(this.testdata.Charities_Description)
       await this.page.waitForTimeout(500)
       await this.page.locator(this.consignmentManager_webElements.URL_Field).click()
       await this.page.locator(this.consignmentManager_webElements.URL_Field).fill(this.testdata.Charities_URL)
       await this.page.waitForTimeout(2000)
       await this.page.locator(this.consignmentManager_webElements.SaveandClose).click()
       await this.page.locator(this.consignmentManager_webElements.CreatedOn_Filter).click()
       await this.page.locator(this.consignmentManager_webElements.NewtoOld).click()
       await this.page.waitForTimeout(2000)
    }
    async Events()
    {
       await this.page.locator(this.consignmentManager_webElements.Select_Events).click()
       await this.page.locator(this.consignmentManager_webElements.Search_EventName).fill(this.testdata.Event_Name)
       await this.page.waitForTimeout(1000)
       await this.page.keyboard.press('Enter')
       await this.page.waitForTimeout(2000)
       await this.page.locator(this.consignmentManager_webElements.Select_Particular_Event).dblclick()
       await this.page.locator(this.consignmentManager_webElements.Select_Consignment_Event).click()
       await this.page.locator(this.consignmentManager_webElements.Collection_Add_Existing_Button).click()
       await this.page.locator(this.consignmentManager_webElements.CreatedOn_Filter_Event).click()
       await this.page.locator(this.consignmentManager_webElements.NewtoOld).click()
       await this.page.waitForTimeout(2000)
       await this.page.locator(this.consignmentManager_webElements.Select_Created_Collection).click()
       await this.page.locator(this.consignmentManager_webElements.SaveandClose_PopUp).click()
       await this.page.waitForTimeout(4000)
       await this.page.locator(this.consignmentManager_webElements.Charity_Add_Existing_Button).click()
       await this.page.locator(this.consignmentManager_webElements.CreatedOn_Filter_Event).click()
       await this.page.waitForTimeout(1000)
       await this.page.locator(this.consignmentManager_webElements.NewtoOld).click()
       await this.page.waitForTimeout(2000)
       await this.page.locator(this.consignmentManager_webElements.Select_Created_Charity).click()
       await this.page.locator(this.consignmentManager_webElements.SaveandClose_PopUp).click()
       await this.page.waitForTimeout(4000)
    }
    async Consignment()
    {
       await this.page.locator(this.consignmentManager_webElements.Select_Consignments_Option).click()
       await this.page.waitForTimeout(2000)
       await this.page.locator(this.consignmentManager_webElements.Open_Consignment).dblclick()
       await this.page.waitForTimeout(2000)
       await this.page.locator(this.consignmentManager_webElements.On_Charity_Toggle).click()
       await this.page.locator(this.consignmentManager_webElements.Save_Button).click()
       await this.page.waitForTimeout(2000)
       await this.page.locator(this.consignmentManager_webElements.Add_Buyer).click()
       await this.page.locator(this.consignmentManager_webElements.Customer_Field).fill(this.testdata.Account_Name)
       await this.page.waitForTimeout(2000)
       await this.page.locator(this.consignmentManager_webElements.Select_Account).click()
       await this.page.locator(this.consignmentManager_webElements.HammerAmount_Field).click()
       await this.page.locator(this.consignmentManager_webElements.HammerAmount_Field).fill(this.testdata.Hammer_Amount)
       await this.page.locator(this.consignmentManager_webElements.SaveandClose_ConsignmentContact).click()
       await this.page.waitForTimeout(3000)

       await this.page.locator(this.consignmentManager_webElements.Add_Donor).click()
       await this.page.locator(this.consignmentManager_webElements.Customer_Field).fill(this.testdata.Account_Name)
       await this.page.waitForTimeout(2000)
       await this.page.locator(this.consignmentManager_webElements.Select_Account).click()
       await this.page.waitForTimeout(500)
       await this.page.locator(this.consignmentManager_webElements.DonationAmount_Field).click()
       await this.page.locator(this.consignmentManager_webElements.DonationAmount_Field).fill(this.testdata.Donation_Amount)
       await this.page.locator(this.consignmentManager_webElements.SaveandClose_ConsignmentContact).click()
       await this.page.waitForTimeout(3000)
    }
    async MarkettingTab()
    {
        await this.page.locator(this.consignmentManager_webElements.Marketting_Tab).click()
        await this.page.locator(this.consignmentManager_webElements.Add_Collection).click()
        await this.page.getByLabel('Event Collection', { exact: true }).locator('div').filter({ hasText: /^Toggle selection of all rows$/ }).nth(1).click()
        await this.page.waitForTimeout(1000)
      //  await this.page.locator(this.consignmentManager_webElements.Select_Collection).click()
        await this.page.locator(this.consignmentManager_webElements.SaveandClose_Collection).click()
        await this.page.waitForTimeout(2000)
        // await this.page.locator(this.consignmentManager_webElements.DoubleClick_Collection).dblclick()
        // await this.page.locator(this.consignmentManager_webElements.GoBack_Button).click()
       //await this.page.waitForTimeout(2000)

        await this.page.locator(this.consignmentManager_webElements.Add_Charities).click()
        await this.page.getByLabel('EventCharityAssociationSubgrid').locator('div').filter({ hasText: /^Toggle selection of all rows$/ }).nth(1).click()
        await this.page.waitForTimeout(1000)
        //await this.page.locator(this.consignmentManager_webElements.Select_Charity_Association).click()
        await this.page.locator(this.consignmentManager_webElements.SaveandClose_Collection).click()
        await this.page.waitForTimeout(2000)
        // await this.page.locator(this.consignmentManager_webElements.DoubleClick_Charities).dblclick()
        // await this.page.locator(this.consignmentManager_webElements.GoBack_Button).click()
        // await this.page.waitForTimeout(2000)

    }
}