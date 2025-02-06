import { BidderOpportunity_WebElements } from '../WebElements/BidderOpportunity_WebElements'  
import { TestData } from '../TestData/testdata.js';
import { NewConsignmentVehicle_WebElement } from '../WebElements/NewConsignmentVehicle_WebElements.js';
import { Address_WebElements } from '../WebElements/Address_WebElements' 

exports.BidderOpportunityPage =
class BidderOpportunityPage
{
    constructor(page)
    {
        this.page = page
        this.testdata = new TestData()
        this.bidderopportunity_webelements = new BidderOpportunity_WebElements()
        this.newconsignmentvehicle_webelement = new NewConsignmentVehicle_WebElement()
        this.address_webelements =  new Address_WebElements()
    }

    async New_Bidder_Opportunity()
    {
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Registration).click();   
    }

    async Bidder_details()
    {
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Pakage_Type).click()
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Pakage_Type).fill(this.testdata.Bidder_Package_Type)
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Package_Type_Absentee_Bidder).click();
        await this.page.selectOption(this.bidderopportunity_webelements.Select_Bid_LimitType_dropdown,this.testdata.Bidder_BidLImit_Type); 
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Value).click()
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Value).fill(this.testdata.Bidder_Limit_Value)  
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Estimation).click()
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Estimation).fill(this.testdata.Bidder_Estimate_Value)  
        await this.page.selectOption(this.bidderopportunity_webelements.Select_Interner_Bidder,this.testdata.Bidder_Internet_yesandpush); 
        await this.page.waitForTimeout(2000)
    }
    async bidder_Address()
    {
        await this.page.locator(this.bidderopportunity_webelements.Mailing_Address).click()
        await this.page.locator(this.bidderopportunity_webelements.Mailing_Address).fill(this.testdata.Account_Address)
        await this.page.locator(this.bidderopportunity_webelements.Mailing_Address_select).click();
        await this.page.locator(this.bidderopportunity_webelements.Vehicle_Titling).click()
        await this.page.locator(this.bidderopportunity_webelements.Vehicle_Titling).fill(this.testdata.Account_Address)
        await this.page.locator(this.bidderopportunity_webelements.Vehicle_Titling_address_select).click();
    }
    async BidderAssign()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To_Inputfield).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To_Inputfield).press('Enter');
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To_Specialist_dropdown).click()
        await this.page.locator(this.bidderopportunity_webelements.Save_Bidder_Opportunity).click()
        await this.page.locator(this.bidderopportunity_webelements.Refresh_Bidder_Opportunity).click() 
        await this.page.waitForTimeout(1000)

    }
    async Add_Envelop()
    {
        await this.page.locator(this.bidderopportunity_webelements.Add_Envelop_btn).click()
        await this.page.locator(this.bidderopportunity_webelements.Envelop_Number).click()
        await this.page.locator(this.bidderopportunity_webelements.Envelop_Number).fill(this.testdata.Envelop_Number)
        await this.page.selectOption(this.bidderopportunity_webelements.Select_Deposite_Type,this.testdata.Deposite_Type)
        await this.page.locator(this.bidderopportunity_webelements.Deposite_Amount).click()
        await this.page.locator(this.bidderopportunity_webelements.Deposite_Amount).fill(this.testdata.Deposite_Amount)
        await this.page.locator(this.bidderopportunity_webelements.Deposite_Date).click()
        await this.page.locator(this.bidderopportunity_webelements.Payment_Number).click()
        await this.page.locator(this.bidderopportunity_webelements.Payment_Number).fill(this.testdata.Payment_Number)
        await this.page.locator(this.address_webelements.Save_btn).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.address_webelements.Save_Close).click()
        await this.page.waitForTimeout(5000)

        await this.page.locator(this.bidderopportunity_webelements.Select_second_field).click()
        await this.page.locator(this.bidderopportunity_webelements.Return_Type).click()
        await this.page.locator(this.bidderopportunity_webelements.Toggle_button_dropdown).click()
        await this.page.locator(this.bidderopportunity_webelements.Cashiering).click()
        await this.page.locator(this.bidderopportunity_webelements.Cashiering_Save).click()
        await this.page.waitForTimeout(1000)
    }

    async Add_Absentee_Bid()
    {
        await this.page.locator(this.bidderopportunity_webelements.Add_New_Absentee_Bid_btn).click()
        await this.page.selectOption(this.bidderopportunity_webelements.Select_Absentee_Bid,this.testdata.selectAdsenteeBid)
        // await this.page.locator(this.bidderopportunity_webelements.Lot_Number).click()
        // await this.page.locator(this.bidderopportunity_webelements.Lot_Number).fill(this.testdata.Lot)
        // await this.page.locator(this.bidderopportunity_webelements.Contact_Phone).click()
        // await this.page.locator(this.bidderopportunity_webelements.Contact_Phone).fill(this.testdata.Contact_number)

        await this.page.locator(this.bidderopportunity_webelements.Save_Absentee_Bid).click()
        await this.page.waitForTimeout(1000)
    }
    async RegisterDocuments()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Documentation_Tab).click()

        const fileToUpload = 
        {
            "Bidder Agreement" :      "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Bidder Agreement.jpg",
            "Square Payment Receipt" :    "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Square Payment Receipt.jpg",
            "Authorization to Bid" :   "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Authorization to Bid.jpg",
            "Funds Letter" :          "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Funds Letter.png",
            "Additional Funds Letter" :           "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Additional Funds Letter.png",
            "Bidding Collateral" :      "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Bidding Collateral.jpg",
            "OFAC" :    "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\OFAC.jpg"
        }
        for (const [documentType, documentPath] of Object.entries(fileToUpload))
             {
                   // await this.page.waitForTimeout(2000)
                    await this.page.locator(this.bidderopportunity_webelements.AddDocument_Register).click()
                    const frame = await this.page.frameLocator(this.bidderopportunity_webelements.frame)
                    if(!frame) throw new Error('Iframe not found')
                    await frame.locator(this.bidderopportunity_webelements.Select_DocumentType_dropdown).selectOption(documentType)
                    await frame.locator(this.newconsignmentvehicle_webelement.Expiration_Date_field).click()
                    await frame.locator(this.newconsignmentvehicle_webelement.Next_Month).click()
                    await frame.locator(this.newconsignmentvehicle_webelement.Select_NextMonthDate).click()
                    await frame.locator(this.newconsignmentvehicle_webelement.Upload_Document).setInputFiles(documentPath)
                    await this.page.once('dialog', async(dialog) =>
                        { //enabling alert handling
                        await dialog.accept()
                        })
                    await frame.locator(this.newconsignmentvehicle_webelement.Upload_btn).click()
                    await this.page.locator(this.bidderopportunity_webelements.Bidder_Registerdoc_Refresh).click()
             }
    }

    async Opportunity_product_tab()
    {
        await this.page.locator(this.bidderopportunity_webelements.Opportunity_Product_Tab).click()
        await this.page.locator(this.bidderopportunity_webelements.Add_Product_button).click()
        await this.page.locator(this.bidderopportunity_webelements.Existing_Product).click()
        await this.page.locator(this.bidderopportunity_webelements.Existing_Product).fill(this.testdata.Existing_Product)
        await this.page.locator(this.bidderopportunity_webelements.Selecting_product).click()
        await this.page.locator(this.bidderopportunity_webelements.Quantity).click()
        await this.page.locator(this.bidderopportunity_webelements.Quantity).fill(this.testdata.Quantity)
        await this.page.waitForTimeout(1000)
    }

    async Invoice_Tab()
    {
        await this.page.locator(this.bidderopportunity_webelements.Invoice_Tab).click()
        await this.page.locator(this.bidderopportunity_webelements.Generate_Invoive).click()
        await this.page.selectOption(this.bidderopportunity_webelements.select_Payment_Method,this.testdata.Payment_method)
        await this.page.locator(this.bidderopportunity_webelements.Payment_Date).click()
        await this.page.locator(this.bidderopportunity_webelements.Payment_current_Date).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Assign_To).click()
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Status).click()
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Status_Paid).click()
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Assign_To).click()
        await this.page.locator(this.bidderopportunity_webelements.Save_btn).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderopportunity_webelements.Save_Close).click()
        await this.page.waitForTimeout(5000)

        await this.page.locator(this.bidderopportunity_webelements.First_Invoice).dblclick()  
        await this.page.selectOption(this.bidderopportunity_webelements.select_Payment_Method,this.testdata.Payment_method)
        await this.page.locator(this.bidderopportunity_webelements.Payment_Date).click()
        await this.page.locator(this.bidderopportunity_webelements.Payment_current_Date).click()  
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Assign_To).click()
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Status).click()
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Status_Paid).click()
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Assign_To).click()
        await this.page.locator(this.bidderopportunity_webelements.Save_btn).click()
        await this.page.locator(this.bidderopportunity_webelements.Save_Close).click()
        await this.page.locator(this.bidderopportunity_webelements.Refresh_Bidder).click()

    }
}