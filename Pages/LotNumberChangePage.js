import { expect } from '@playwright/test'
import { Customer_WebElements } from '../WebElements/Customer_WebElements' 
import { LotNumberChange_WebElements } from '../WebElements/LotNumberChange_WebElements' 
import { TestData  } from '../TestData/testdata';


exports.LotNumberChangePage =
class LotNumberChangePage 
{
    constructor(page)
    {
        this.page = page
        this.customer_webElements = new Customer_WebElements(); 
        this.lotnumberchange_webElements = new LotNumberChange_WebElements(); // Initialize Locators class
        this.testdata = new TestData();
    }

    async url()
    {
        //await this.page.setViewportSize({ width: 1920, height: 950 });
        await this.page.goto(this.testdata.URL)
        await this.page.locator(this.customer_webElements.emailid).fill(this.testdata.Emailid)
        await this.page.locator(this.customer_webElements.nextbtn).click()
        await this.page.locator(this.customer_webElements.password).fill(this.testdata.Password)
        await this.page.locator(this.customer_webElements.signinbtn).click()
        await this.page.locator(this.customer_webElements.yesbtn).click()

        const frame = await this.page.frameLocator(this.customer_webElements.frame_AuctionManager)
                    if(!frame) throw new Error('Iframe not found')
        await frame.locator(this.customer_webElements.Auction_management).click({ timeout: 60000 })
    }

    async Opportunity()
    {
        await this.page.locator(this.lotnumberchange_webElements.Opportunity_button).click()
        await this.page.locator(this.lotnumberchange_webElements.Consignments_Button).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.lotnumberchange_webElements.First_Consignment).dblclick()
        await this.page.waitForTimeout(10000)
        await this.page.locator(this.lotnumberchange_webElements.Lot_OverRide).click()

        const frame = await this.page.frameLocator(this.lotnumberchange_webElements.frame_ChangeLotNumber)
                    if(!frame) throw new Error('Iframe not found')

        await frame.locator(this.lotnumberchange_webElements.Select_NewDocket).selectOption(this.testdata.NewDocket_Select)

        //await frame.selectOption(this.lotnumberchange_webElements.Select_NewDocket,this.testdata.NewDocket_Select)
        await frame.locator(this.lotnumberchange_webElements.Select_NewDocketSpot).selectOption(this.testdata.NewDocketSpot_Select)
        await frame.locator(this.lotnumberchange_webElements.NewLotNumber_Field).fill(this.testdata.NewLotNumber)
        await frame.locator(this.lotnumberchange_webElements.Selec_LotStatus).selectOption(this.testdata.LotStatus_Tentative)
        await frame.locator(this.lotnumberchange_webElements.Select_Manager).selectOption(this.testdata.ManagerName)
        await frame.locator(this.lotnumberchange_webElements.ManagerPassword_Field).fill(this.testdata.ManagerPassword)
        await frame.locator(this.lotnumberchange_webElements.ManagerPassword_Field).press('Tab')
        await frame.locator(this.lotnumberchange_webElements.ApproveSave_Button).click()
        await this.page.waitForTimeout(30000)

        await this.page.locator(this.lotnumberchange_webElements.Lot_OverRide).click()
        await frame.locator(this.lotnumberchange_webElements.NewLotNumber_Field).fill(this.testdata.NewLotNumber)
        await frame.locator(this.lotnumberchange_webElements.Selec_LotStatus).selectOption(this.testdata.LotStatus_PendingRevisit)
        await frame.locator(this.lotnumberchange_webElements.Select_Manager).selectOption(this.testdata.ManagerName)
        await frame.locator(this.lotnumberchange_webElements.ManagerPassword_Field).fill(this.testdata.ManagerPassword)
        await frame.locator(this.lotnumberchange_webElements.ManagerPassword_Field).press('Tab')
        await frame.locator(this.lotnumberchange_webElements.ApproveSave_Button).click()

        await this.page.waitForTimeout(30000)
        await this.page.locator(this.lotnumberchange_webElements.Lot_OverRide).click()
        await frame.locator(this.lotnumberchange_webElements.NewLotNumber_Field).fill(this.testdata.NewLotNumber)
        await frame.locator(this.lotnumberchange_webElements.Selec_LotStatus).selectOption(this.testdata.LotStstaus_PendingAccepted)
        await frame.locator(this.lotnumberchange_webElements.Select_Manager).selectOption(this.testdata.ManagerName)
        await frame.locator(this.lotnumberchange_webElements.ManagerPassword_Field).fill(this.testdata.ManagerPassword)
        await frame.locator(this.lotnumberchange_webElements.ManagerPassword_Field).press('Tab')
        await frame.locator(this.lotnumberchange_webElements.ApproveSave_Button).click()

        await this.page.waitForTimeout(30000)
        await this.page.locator(this.lotnumberchange_webElements.Lot_OverRide).click()
        await frame.locator(this.lotnumberchange_webElements.NewLotNumber_Field).fill(this.testdata.NewLotNumber)
        await frame.locator(this.lotnumberchange_webElements.Selec_LotStatus).selectOption(this.testdata.LotStatus_Confirmed)
        await frame.locator(this.lotnumberchange_webElements.Select_Manager).selectOption(this.testdata.ManagerName)
        await frame.locator(this.lotnumberchange_webElements.ManagerPassword_Field).fill(this.testdata.ManagerPassword)
        await frame.locator(this.lotnumberchange_webElements.ManagerPassword_Field).press('Tab')
        await frame.locator(this.lotnumberchange_webElements.ApproveSave_Button).click()

        await this.page.waitForTimeout(30000)
        await this.page.locator(this.lotnumberchange_webElements.Lot_OverRide).click()
        await frame.locator(this.lotnumberchange_webElements.NewLotNumber_Field).fill(this.testdata.NewLotNumber)
        await frame.locator(this.lotnumberchange_webElements.Selec_LotStatus).selectOption(this.testdata.LotStatus_Cancel)
        await frame.locator(this.lotnumberchange_webElements.Select_Manager).selectOption(this.testdata.ManagerName)
        await frame.locator(this.lotnumberchange_webElements.ManagerPassword_Field).fill(this.testdata.ManagerPassword)
        await frame.locator(this.lotnumberchange_webElements.ManagerPassword_Field).press('Tab')
        await frame.locator(this.lotnumberchange_webElements.ApproveSave_Button).click()
        // Listen for alert and accept it
        await this.page.waitForEvent('dialog', { timeout: 30000 }).then(async (dialog) => 
            {
                    console.log('Alert message:', dialog.message());
                    // Wait for 30 seconds
                    await dialog.accept(); // Clicks "OK"
            });

    }

}

//module.exports=CustomerPage