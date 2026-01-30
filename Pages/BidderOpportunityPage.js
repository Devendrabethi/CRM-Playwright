import { BidderOpportunity_WebElements } from '../WebElements/BidderOpportunity_WebElements'  
import { TestData } from '../TestData/testdata.js';
import { NewConsignmentVehicle_WebElement } from '../WebElements/NewConsignmentVehicle_WebElements.js';
import { Address_WebElements } from '../WebElements/Address_WebElements' 
import { PersonalAccount_WebElements } from '../WebElements/PersonalAccount_WebElements'  
import { expect } from 'allure-playwright';

exports.BidderOpportunityPage =
class BidderOpportunityPage
{
    constructor(page)
    {
        this.page = page
        this.testdata = new TestData()
        this.bidderopportunity_webelements = new BidderOpportunity_WebElements()
        this.newconsignmentvehicle_webelement = new NewConsignmentVehicle_WebElement()
        this.PersonalAccount_WebElements =  new PersonalAccount_WebElements()
        this.address_webelements =  new Address_WebElements()
    }

    async New_Bidder_Opportunity()
    {
      await this.page.waitForTimeout(5000)
        await this.page.locator(this.bidderopportunity_webelements.NewOpportunity_Button).click({ timeout: 60000 })
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Registration).click()
        await expect(this.page.locator(this.bidderopportunity_webelements.Verify_NewOpportunity_Text)).toBeVisible({timeout:60000})

    }
        async Bidder_details_CompType()
    {
        await this.page.waitForTimeout(2000)
        await this.page.selectOption(this.bidderopportunity_webelements.Select_Bid_LimitType_dropdown,this.testdata.Bidder_BidLImit_Type); 
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Value).click()
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Value).fill(this.testdata.Bidder_Limit_Value)  
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Estimation).click()
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Estimation).fill(this.testdata.Bidder_Estimate_Value)  
       //await this.page.locator(this.bidderopportunity_webelements.Event_Text).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Package_Hover).hover()
        await this.page.locator(this.bidderopportunity_webelements.Delete_BidderPackage).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Pakage_Type).fill(process.env.Bidder_Package_Type)
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.bidderopportunity_webelements.Select_Bidder_Package_Type).click();
        
        await this.page.selectOption(this.bidderopportunity_webelements.Select_Interner_Bidder,this.testdata.Bidder_Internet_yesandpush); 
        await this.page.screenshot({ path: './ScreenShot/51 BidderDetailsSessionwithoutComp.png', fullPage: true})
        await this.page.waitForTimeout(2000)
    }

    async Bidder_details()
    {
        await this.page.waitForTimeout(2000)
        await this.page.selectOption(this.bidderopportunity_webelements.Select_Bid_LimitType_dropdown,this.testdata.Bidder_BidLImit_Type); 
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Value).click()
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Value).fill(this.testdata.Bidder_Limit_Value)  
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Estimation).click()
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Estimation).fill(this.testdata.Bidder_Estimate_Value)  
       //await this.page.locator(this.bidderopportunity_webelements.Event_Text).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Pakage_Type).click()
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Pakage_Type).fill(this.testdata.Bidder_Package_Type)
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.bidderopportunity_webelements.Select_Bidder_Package_Type).click();
        
        await this.page.selectOption(this.bidderopportunity_webelements.Select_Interner_Bidder,this.testdata.Bidder_Internet_yesandpush); 
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/52 BidderDetails.png', fullPage: true})
        await this.page.locator(this.bidderopportunity_webelements.ConsignmentValue_Button).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.bidderopportunity_webelements.Close_PhoneObserver).click()
    }
    async bidder_Address()
    {
        await this.page.locator(this.bidderopportunity_webelements.Mailing_Address).click()
         await this.page.locator(this.bidderopportunity_webelements.Mailing_Address).press('Enter')
        //await this.page.locator(this.bidderopportunity_webelements.Mailing_Address).fill(this.testdata.Account_Address)
        await this.page.locator(this.bidderopportunity_webelements.Mailing_Address_select).click();
        await this.page.screenshot({ path: './ScreenShot/53 BidderAddress.png', fullPage: true})
        // await this.page.locator(this.bidderopportunity_webelements.Vehicle_Titling).click()
        // await this.page.locator(this.bidderopportunity_webelements.Vehicle_Titling).fill(this.testdata.Account_Address)
        // await this.page.locator(this.bidderopportunity_webelements.Vehicle_Titling_address_select).click();
    }
    async BidderAssign()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To_Inputfield).click()
        await this.page.keyboard.press('Enter');
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To_Specialist_dropdown).click()
        await this.page.locator(this.bidderopportunity_webelements.Save_Bidder_Opportunity).click()
        //await this.page.locator(this.bidderopportunity_webelements.Refresh_Bidder_Opportunity).click() 

    }
    async Add_Envelop()
    {
        //await expect(this.page.locator(this.bidderopportunity_webelements.Verify_BidLimitDeposits_Text)).toBeVisible({timeout:30000})
        await this.page.locator(this.bidderopportunity_webelements.Add_Envelop_btn).click({timeout:60000})
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
        await this.page.screenshot({ path: './ScreenShot/54 AddEnvelopSession.png', fullPage: true})
    }

    async Add_Absentee_Bid()
    {
        await expect(this.page.locator(this.bidderopportunity_webelements.Verify_Absentees_Bids_Text)).toBeVisible({timeout:30000})
        await this.page.locator(this.bidderopportunity_webelements.Add_New_Absentee_Bid_btn).click()
        await this.page.selectOption(this.bidderopportunity_webelements.Select_Absentee_Bid,this.testdata.selectAdsenteeBidInternet)
        await this.page.locator(this.bidderopportunity_webelements.Save_Absentee_Bid).click()

        await this.page.locator(this.bidderopportunity_webelements.Add_New_Absentee_Bid_btn).click()
        await this.page.selectOption(this.bidderopportunity_webelements.Select_Absentee_Bid,this.testdata.selectAdsenteeBidPhone)
        await this.page.waitForTimeout(1500)
        await this.page.locator(this.bidderopportunity_webelements.Lot_Number).click()
        await this.page.locator(this.bidderopportunity_webelements.Lot_Number).fill(this.testdata.Lotphone)
        await this.page.locator(this.bidderopportunity_webelements.Contact_Phone).click()
        await this.page.locator(this.bidderopportunity_webelements.Contact_Phone).fill(this.testdata.Contact_number)
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderopportunity_webelements.Save_Absentee_Bid).click()
        

        await this.page.locator(this.bidderopportunity_webelements.Add_New_Absentee_Bid_btn).click()
        await this.page.selectOption(this.bidderopportunity_webelements.Select_Absentee_Bid,this.testdata.delectAbsenteeBidAbsenteeRepresentative)
        await this.page.waitForTimeout(1500)
        await this.page.locator(this.bidderopportunity_webelements.Lot_Number).click()
        await this.page.locator(this.bidderopportunity_webelements.Lot_Number).fill(this.testdata.lotabsentee)
        await this.page.locator(this.bidderopportunity_webelements.MaximumBid).click()
        await this.page.locator(this.bidderopportunity_webelements.MaximumBid).fill(this.testdata.MaxBid)
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderopportunity_webelements.Save_Absentee_Bid).click()
        
        await this.page.locator(this.bidderopportunity_webelements.PhoneObserver).click()
        const frame = await this.page.frameLocator(this.bidderopportunity_webelements.FrameSendAbsenteebid)
                    if(!frame) throw new Error('Iframe not found')
        await this.page.screenshot({ path: './ScreenShot/55 AddAbsenteeSession.png', fullPage: true})
        await frame.locator(this.bidderopportunity_webelements.SendAbsenteeBid).click()
        await this.page.locator(this.bidderopportunity_webelements.OkPopUp).click()
        await this.page.waitForTimeout(1000)
       // await this.page.locator(this.bidderopportunity_webelements.managementbtn).click()
    }
      async PhoneObserver()
       {
        await this.page.locator(this.bidderopportunity_webelements.HamBerger_PhoneObserver).click()
        const frame1 = await this.page.frameLocator(this.bidderopportunity_webelements.Frame_PhoneObserver)
        await frame1.locator(this.bidderopportunity_webelements.SelectEvent).selectOption({ label: this.testdata.Event_name })
        await this.page.waitForTimeout(5000)
        //await frame1.locator(this.bidderopportunity_webelements.Select_PhoneObserver_Date).selectOption({ label: this.testdata.Monday })
        await frame1.locator(this.bidderopportunity_webelements.Launch).click()
        await this.page.waitForTimeout(30000)
        await this.page.screenshot({ path: './ScreenShot/56 PhoneObserver.png', fullPage: true})
        await this.page.locator(this.bidderopportunity_webelements.Close_PhoneObserver).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderopportunity_webelements.HamBerger_LivePhoneObserver).click()
         const frame2 = await this.page.frameLocator(this.bidderopportunity_webelements.Frame_LivePhoneObserver)
        await frame2.locator(this.bidderopportunity_webelements.SelectEvent).selectOption({ label: this.testdata.Event_name })
        await this.page.waitForTimeout(5000)
        //await frame1.locator(this.bidderopportunity_webelements.Select_PhoneObserver_Date).selectOption({ label: this.testdata.Monday })
        await frame2.locator(this.bidderopportunity_webelements.Launch).click()
        await this.page.waitForTimeout(30000)
        await this.page.screenshot({ path: './ScreenShot/56 PhoneObserver.png', fullPage: true})
        await this.page.locator(this.bidderopportunity_webelements.Close_PhoneObserver).click()
        await this.page.waitForTimeout(2000)
        await this.page.goBack()
        await this.page.waitForTimeout(2000)
        await this.page.goBack()
        await this.page.waitForTimeout(2000)
       }
//Create Package    
       async CreatePackage()
       {

        //FEDEX
                    await this.page.locator(this.bidderopportunity_webelements.Create_Package).click()
                    await this.page.waitForTimeout(1000)
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_PackageType_Dropdown,this.testdata.packageType_Bidder_Credential_Package)
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_Carrier,this.testdata.Carrier_FedEx)
                    await this.page.waitForTimeout(4000)
                    await this.page.locator(this.PersonalAccount_WebElements.Recipient_Company_text).click();
                    await this.page.locator(this.PersonalAccount_WebElements.ImageType_Text).click()
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_ImageType_Dropdown,this.testdata.Image_Type_PDF)
                    await this.page.waitForTimeout(2000)
                    await this.page.locator(this.PersonalAccount_WebElements.Save_Tracking).click();
                    await this.page.waitForTimeout(5000)
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Tracking).click();
                    await this.page.waitForTimeout(5000);
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Tracking).click();
                    await this.page.waitForTimeout(5000);
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Tracking).click();
                    await this.page.waitForTimeout(1000);
                    await this.page.screenshot({ path: './ScreenShot/57 TraclingInBidder.png', fullPage: true})
                    const [newPage] = await Promise.all([
                        this.page.context().waitForEvent('page'),
                        this.page.locator(this.PersonalAccount_WebElements.Print_Label).click()
                    ]);

                    await newPage.waitForLoadState('load');
                    await this.page.waitForTimeout(10000);
                    await newPage.close();
                    await this.page.bringToFront();
                    await this.page.waitForTimeout(2000)
                    await this.page.locator(this.PersonalAccount_WebElements.SaveandClose).click();
                    await this.page.waitForTimeout(3000)

       }
    async RegisterDocuments()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Documentation_Tab).click()
        await expect(this.page.locator(this.newconsignmentvehicle_webelement.Verify_RegistrationDocuments_Text)).toBeVisible({timeout:30000})
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
             await this.page.screenshot({ path: './ScreenShot/58 RegisterDocuments.png', fullPage: true})
    }

    async Opportunity_product_tab()
    {
        await this.page.locator(this.bidderopportunity_webelements.Opportunity_SalesFees_Tab).click()
        await expect(this.page.locator(this.bidderopportunity_webelements.AddFees_button)).toBeVisible({timeout:60000})
        await this.page.locator(this.bidderopportunity_webelements.AddFees_button).click()
        await this.page.waitForTimeout(5000)
        await this.page.locator(this.bidderopportunity_webelements.Close_AddFees).click()
        await this.page.waitForTimeout(2000)
        const frame = await this.page.frameLocator(this.bidderopportunity_webelements.frame_Available_Products)
        if(!frame) throw new Error('Iframe not found')
        await frame.locator(this.bidderopportunity_webelements.FirstProduct).click()
        await this.page.waitForTimeout(7000)
        await frame.locator(this.bidderopportunity_webelements.SecondProduct).click()
        await this.page.waitForTimeout(5000)
        await frame.locator(this.bidderopportunity_webelements.ThirdProduct).click()
        await this.page.waitForTimeout(5000)

        // await this.page.locator(this.bidderopportunity_webelements.Existing_Product).fill(this.testdata.Existing_Product)
        // await this.page.waitForTimeout(2000)
        // await this.page.locator(this.bidderopportunity_webelements.Selecting_product).click()
        // //await this.page.locator(this.bidderopportunity_webelements.Quantity).click()
        // await this.page.locator(this.bidderopportunity_webelements.Quantity).fill(this.testdata.Quantity)
        // await this.page.waitForTimeout(1000)
        // await this.page.screenshot({ path: './ScreenShot/59 ProductTab.png', fullPage: true})
        // await this.page.locator(this.bidderopportunity_webelements.Save_Close).click()
    }

    async Invoice_Tab()
    {
        //await this.page.locator(this.bidderopportunity_webelements.Invoice_Tab).click()
        await this.page.locator(this.bidderopportunity_webelements.Generate_Invoive).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.bidderopportunity_webelements.Payment_AdjustmentTab).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderopportunity_webelements.SelectAllInvoice).click()  
        await this.page.locator(this.bidderopportunity_webelements.EnterPaymentButton).click()  
        const frame = await this.page.frameLocator(this.bidderopportunity_webelements.FrameInvoice)
        if(!frame) throw new Error('Iframe not found')
        await frame.locator(this.bidderopportunity_webelements.SelectPaymentMethod).selectOption(this.testdata.SelectInvoiceVisa)
        await this.page.waitForTimeout(4000);
        //const frame1 = await this.page.frameLocator(this.bidderopportunity_webelements.FrameCard)
        const frameCard = await frame.frameLocator(this.bidderopportunity_webelements.FrameCard);
        if(!frameCard) throw new Error('Nested iframe not found')
       // await frame1.locator(this.bidderopportunity_webelements.CardNum).waitFor({ state: 'visible' })
        await frameCard.locator(this.bidderopportunity_webelements.CardNum).click()
        await frameCard.locator(this.bidderopportunity_webelements.CardNum).fill(this.testdata.CardCC)
        await frameCard.locator(this.bidderopportunity_webelements.CardExpDate).fill(this.testdata.CardExp)
        await frameCard.locator(this.bidderopportunity_webelements.Cvv).fill(this.testdata.CVVNum)
        await frameCard.locator(this.bidderopportunity_webelements.ZipCode).fill(this.testdata.ZipCOde)
        await this.page.screenshot({ path: './ScreenShot/60 WithCardInvoive.png', fullPage: true})
        await frame.locator(this.bidderopportunity_webelements.SubmitButton).click()
        await this.page.locator(this.bidderopportunity_webelements.PaymentOk).click({timeout:60000})
        await this.page.waitForTimeout(6000);
        await this.page.locator(this.bidderopportunity_webelements.Opportunity_SalesFees_Tab).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderopportunity_webelements.First_Invoice).dblclick()  
        await this.page.locator(this.bidderopportunity_webelements.Payment_AdjustmentTab).click()
        await this.page.waitForTimeout(6000)
        await this.page.locator(this.bidderopportunity_webelements.PaymentTable).dblclick({timeout:60000})
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.bidderopportunity_webelements.DetailsTab).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/61 PaymentTableWithPaymentCreated.png', fullPage: true})
        await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click()
        await this.page.waitForTimeout(2000)
    }
    async AnotherProduct()
    {
        await this.page.locator(this.bidderopportunity_webelements.Opportunity_SalesFees_Tab).click()
        const frame1 = await this.page.frameLocator(this.bidderopportunity_webelements.frame_Available_Products)
        if(!frame1) throw new Error('Iframe not found')
        await frame1.locator(this.bidderopportunity_webelements.FirstProduct).click()
        await this.page.waitForTimeout(7000)
        await frame1.locator(this.bidderopportunity_webelements.SecondProduct).click()
        await this.page.waitForTimeout(5000)
        // await this.page.locator(this.bidderopportunity_webelements.Add_Product_button).click()
        // await this.page.locator(this.bidderopportunity_webelements.Existing_Product).click()
        // await this.page.waitForTimeout(2000)
        // await this.page.locator(this.bidderopportunity_webelements.Existing_Product).fill(this.testdata.Existing_Product)
        // await this.page.waitForTimeout(2000)
        // await this.page.locator(this.bidderopportunity_webelements.Selecting_product).click()
        // await this.page.locator(this.bidderopportunity_webelements.Quantity).click()
        // await this.page.locator(this.bidderopportunity_webelements.Quantity).fill(this.testdata.Quantity)
        // await this.page.waitForTimeout(2000)
        // await this.page.locator(this.bidderopportunity_webelements.Save_btn).click()
        // await this.page.locator(this.bidderopportunity_webelements.Save_Close).click()
        // await this.page.locator(this.bidderopportunity_webelements.Invoice_Tab).click()
        await this.page.locator(this.bidderopportunity_webelements.Generate_Invoive).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.bidderopportunity_webelements.Payment_AdjustmentTab).click()
        await this.page.waitForTimeout(4000) 
        await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderopportunity_webelements.Opportunity_SalesFees_Tab).click()
        await frame1.locator(this.bidderopportunity_webelements.FirstProduct).click()
        await this.page.waitForTimeout(7000)

        // await this.page.locator(this.bidderopportunity_webelements.Add_Product_button).click()
        // await this.page.locator(this.bidderopportunity_webelements.Existing_Product).click()
        // await this.page.waitForTimeout(2000)
        // await this.page.locator(this.bidderopportunity_webelements.Existing_Product).fill(this.testdata.Existing_Product)
        // await this.page.waitForTimeout(2000)
        // await this.page.locator(this.bidderopportunity_webelements.Selecting_product).click()
        // await this.page.locator(this.bidderopportunity_webelements.Quantity).click()
        // await this.page.locator(this.bidderopportunity_webelements.Quantity).fill(this.testdata.Quantity)
        // await this.page.waitForTimeout(2000)
        // await this.page.locator(this.bidderopportunity_webelements.Save_btn).click()
        // await this.page.locator(this.bidderopportunity_webelements.Save_Close).click()
        //await this.page.locator(this.bidderopportunity_webelements.Invoice_Tab).click()
        await this.page.locator(this.bidderopportunity_webelements.Generate_Invoive).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.bidderopportunity_webelements.Payment_AdjustmentTab).click()
        await this.page.waitForTimeout(4000) 
        await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderopportunity_webelements.SelectAllInvoice).click()  
        await this.page.locator(this.bidderopportunity_webelements.EnterPaymentButton).click() 
        const frame = await this.page.frameLocator(this.bidderopportunity_webelements.FrameInvoice)
        if(!frame) throw new Error('Iframe not found')

        await frame.locator(this.bidderopportunity_webelements.SelectPaymentMethod).selectOption(this.testdata.SelectInvoiceVisa)
        await this.page.waitForTimeout(4000);
        //const frame1 = await this.page.frameLocator(this.bidderopportunity_webelements.FrameCard)
        const frameCard = await frame.frameLocator(this.bidderopportunity_webelements.FrameCard);
        if(!frameCard) throw new Error('Nested iframe not found')
       // await frame1.locator(this.bidderopportunity_webelements.CardNum).waitFor({ state: 'visible' })
        await frame.locator(this.bidderopportunity_webelements.CreditCard_PaymentProcess).check()
        await frame.locator(this.bidderopportunity_webelements.Last4cc).fill(this.testdata.PaymentNumberValue)
        await this.page.screenshot({ path: './ScreenShot/62 WithCardInvoive.png', fullPage: true})
        await frame.locator(this.bidderopportunity_webelements.CardlessSubmitbutton).click()
        await this.page.locator(this.bidderopportunity_webelements.PaymentOk).click({timeout:60000})
        await this.page.waitForTimeout(6000);
        await this.page.locator(this.bidderopportunity_webelements.Opportunity_SalesFees_Tab).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderopportunity_webelements.Third_Invoice).dblclick()  
        await this.page.locator(this.bidderopportunity_webelements.Payment_AdjustmentTab).click()
        await this.page.waitForTimeout(4000) 
        await this.page.locator(this.bidderopportunity_webelements.PaymentTab_ThirdInvoice).dblclick()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.bidderopportunity_webelements.DetailsTab).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/63 PaymentTableWithPaymentCreated.png', fullPage: true})
        await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click()
        await this.page.waitForTimeout(3000)

        //await this.page.locator(this.bidderopportunity_webelements.Opportunity_Product_Tab).click()
        // await frame.locator(this.bidderopportunity_webelements.SelectPaymentMethod).selectOption(this.testdata.SelectInvoiceCash)
        // await this.page.waitForTimeout(4000);
        // await frame.locator(this.bidderopportunity_webelements.PaymentNumber).fill(this.testdata.PaymentNumberValue)
        // await this.page.screenshot({ path: './ScreenShot/WithoutCardInvoive.png', fullPage: true})
        // await frame.locator(this.bidderopportunity_webelements.CardlessSubmitbutton).click()
        // await this.page.locator(this.bidderopportunity_webelements.PaymentOk).click({timeout:60000})
        // await this.page.locator(this.bidderopportunity_webelements.Invoice_Tab).click()
        // await this.page.waitForTimeout(4000)

        // await this.page.locator(this.bidderopportunity_webelements.EnterPaymentButton).click()  
        // await frame.locator(this.bidderopportunity_webelements.SelectPaymentMethod).selectOption(this.testdata.SelectInvoiceCheck)
        // await this.page.waitForTimeout(4000);
        // await frame.locator(this.bidderopportunity_webelements.PaymentNumber).fill(this.testdata.PaymentNumberValue)
        // await this.page.screenshot({ path: './ScreenShot/WithoutCardInvoive.png', fullPage: true})
        // await frame.locator(this.bidderopportunity_webelements.CardlessSubmitbutton).click()
        // await this.page.locator(this.bidderopportunity_webelements.PaymentOk).click({timeout:60000})
        // await this.page.waitForTimeout(6000);
    }
    async SendTerminal()
    {

    }
    async TaskTab()
    {
        await this.page.locator(this.bidderopportunity_webelements.TaskTab).click()
        await this.page.locator(this.bidderopportunity_webelements.TaskRefresh).click({timeout:60000})
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/64 TaskTab.png', fullPage: true})
        await this.page.locator(this.bidderopportunity_webelements.Refresh_Bidder).click()
    }
    async RibbonLevel()
    {
  //Request Information
         await this.page.locator(this.bidderopportunity_webelements.reqinforbtn).click()
                  const frame = await this.page.frameLocator(this.bidderopportunity_webelements.reqinforframe)
                  if(!frame) throw new Error('Iframe not found')
                  await frame.locator(this.bidderopportunity_webelements.selectvehiclephotoreq).selectOption([
                      { label: 'Bidder Badge Photo' }
                    ]);
                    await frame.locator(this.bidderopportunity_webelements.selectconsigndoc).selectOption([
                      { label: 'Funds Letter' },
                      { label: 'Authorization to Bid' },
                      { label: 'Absentee Bidder Addendum' }
                    ]);
                    await frame.locator(this.bidderopportunity_webelements.selectcustomerDocumentsDrpreq).selectOption([
                      { label: 'Drivers License' },
                      { label: 'Passport' },
                      { label: 'Insurance' },
                      { label: 'Dealer License' },
                      { label: 'Resale License' },
                      { label: 'Business License' },
                      { label: 'Wholesale License' }
                    ]);
                    await frame.locator(this.bidderopportunity_webelements.selectPayment).selectOption([
                      { label: 'Credit Card Deposit' }
                    ]);
                await frame.locator(this.bidderopportunity_webelements.selectNote).fill(this.testdata.CustomerName);
                await this.page.screenshot({ path: './ScreenShot/65 RequestInformationBidder.png', fullPage: true})
                const dialogPromise = this.page.waitForEvent('dialog', { timeout: 60000 });
                await frame.locator(this.bidderopportunity_webelements.submitbtn).click();
                const dialog = await dialogPromise;
               // await dialog.accept();
                await this.page.locator(this.bidderopportunity_webelements.Refresh_Bidder).click()
                await this.page.waitForTimeout(5000)
                await this.page.locator(this.bidderopportunity_webelements.reqinforbtn).click()
                await frame.locator(this.bidderopportunity_webelements.selectconsigndoc).selectOption([
                      { label: 'Absentee Bidder Addendum' }
                    ]);
                await frame.locator(this.bidderopportunity_webelements.selectNote).fill(this.testdata.CustomerName);
                await frame.locator(this.bidderopportunity_webelements.submitbtn).click();
                await this.page.locator(this.bidderopportunity_webelements.Okbtn).click({timeout:60000});
                await frame.locator(this.bidderopportunity_webelements.CancelButton).click();
                await this.page.waitForTimeout(2000)

//Download file PrintAll
                      // const path1 = require('path');  
                      // const fs1 = require('fs');
                      // const downloadDir1 = path1.join(__dirname, 'Download');
                      // if (!fs1.existsSync(downloadDir1)) {
                      //     fs1.mkdirSync(downloadDir1);
                      //   }
                      // const downloadPromise1 = this.page.waitForEvent('download', { timeout: 60000 })
                      await this.page.locator(this.bidderopportunity_webelements.PrintAll).click()      //add ones confirm
                      await this.page.waitForTimeout(5000)
                      // const download1 = await downloadPromise1
                      // const downloadPath1 = path1.join(downloadDir1, download1.suggestedFilename());
                      // await download1.saveAs(downloadPath1)
//Print Agreement
                await this.page.locator(this.bidderopportunity_webelements.Print_Agreement).click()
               // await this.page.waitForTimeout(2000)
                await this.page.locator(this.bidderopportunity_webelements.Print).click()
                await this.page.waitForTimeout(2000)
                await this.page.locator(this.bidderopportunity_webelements.Save_btn).click({timeout:60000})
                await this.page.waitForTimeout(1000)
                await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click({timeout:60000})
//Send Agreement
                await this.page.locator(this.bidderopportunity_webelements.Send_Agreement).click({timeout:60000})
                try 
                {
                  // Check if the Send_Agreement_Close button is present
                      await this.page.locator(this.bidderopportunity_webelements.Send_Agreement_Close).click({timeout:5000});
                    //  await this.page.waitForTimeout(2000);
                } 
              catch (error) 
              {
                      await this.page.locator(this.bidderopportunity_webelements.Send).click();
                     // await this.page.waitForTimeout(2000);
                      await this.page.locator(this.bidderopportunity_webelements.Okbtn).click({timeout:60000});
                      await this.page.locator(this.bidderopportunity_webelements.Save_btn).click();
                     // await this.page.waitForTimeout(1000);
                      await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click();
                     // await this.page.waitForTimeout(1000);
              }
//Download file Print Bidder Badge
                 const path2 = require('path');  
                 const fs2 = require('fs');
                 const downloadDir2 = path2.join(__dirname, 'Download');
                 if (!fs2.existsSync(downloadDir2)) {
                   fs2.mkdirSync(downloadDir2);
                   }
                 const downloadPromise2 = this.page.waitForEvent('download', { timeout: 60000 })
                 await this.page.locator(this.bidderopportunity_webelements.PrintBidderBadge).click({timeout:60000});
                 const download2 = await downloadPromise2
                 const downloadPath2 = path2.join(downloadDir2, download2.suggestedFilename());
                 await download2.saveAs(downloadPath2)
//Administration Auto Assign
                await this.page.locator(this.bidderopportunity_webelements.Administration).click({timeout:60000})
                //await this.page.locator(this.bidderopportunity_webelements.ChangeBidderNumber).click({timeout:60000})
                const frame1 = await this.page.frameLocator(this.bidderopportunity_webelements.FrameChangeBidderNumber)
                    if(!frame1) throw new Error('Iframe not found')
                    await frame1.locator(this.bidderopportunity_webelements.AutoAssign).click()
                    await this.page.waitForTimeout(1000);
                    await frame1.locator(this.bidderopportunity_webelements.SelectBidderManager).selectOption(this.testdata.ManagerName)
                    await frame1.locator(this.bidderopportunity_webelements.PasswordManager).fill(this.testdata.ManagerPassword)
                    await frame1.locator(this.bidderopportunity_webelements.BidderNumberCheckbox).click()
                    await this.page.waitForTimeout(1000);
                    await this.page.screenshot({ path: './ScreenShot/66 AdministrationAucto.png', fullPage: true})
                    await frame1.locator(this.bidderopportunity_webelements.Approvebutton).click()
                    await this.page.waitForTimeout(20000);
           //Administration Manual entry
                await this.page.locator(this.bidderopportunity_webelements.Administration).click({timeout:60000})
                //await this.page.locator(this.bidderopportunity_webelements.ChangeBidderNumber).click({timeout:60000})
                const frame2 = await this.page.frameLocator(this.bidderopportunity_webelements.FrameChangeBidderNumber)
                    if(!frame2) throw new Error('Iframe not found')

                    const currentValue = await frame2.locator(this.bidderopportunity_webelements.Current_BidderNumber).inputValue();
                    const currentNumber = parseInt(currentValue, 10);
                    const newBidderNumber = currentNumber + 1;
                    await frame2.locator(this.bidderopportunity_webelements.Enter_New_BidderNumber).click()
                    await frame2.locator(this.bidderopportunity_webelements.Enter_New_BidderNumber).fill(newBidderNumber.toString());

                    await this.page.waitForTimeout(1000);
                    await frame2.locator(this.bidderopportunity_webelements.SelectBidderManager).selectOption(this.testdata.ManagerName)
                    await frame2.locator(this.bidderopportunity_webelements.PasswordManager).fill(this.testdata.ManagerPassword)
                    await frame2.locator(this.bidderopportunity_webelements.BidderNumberCheckbox).click()
                    await this.page.waitForTimeout(1000);
                    await frame2.locator(this.bidderopportunity_webelements.Approvebutton).click()

//Sync
                await expect(await this.page.locator(this.bidderopportunity_webelements.Sync)).toBeVisible({timeout:60000})
                await this.page.waitForTimeout(3000);
//Aggreement Tab
                await this.page.locator(this.newconsignmentvehicle_webelement.Documentation_Tab).click()
                await this.page.locator(this.bidderopportunity_webelements.CheckStatus).click()
                await this.page.screenshot({ path: './ScreenShot/67 CheckStatusAgreementInBidder.png', fullPage: true})
                await this.page.waitForTimeout(8000)
                try 
                {
                  // Check if the Send_Agreement_Close button is present
                  const sendAgreementCloseButton = await this.page.locator(this.bidderopportunity_webelements.Send_Agreement_Close).isVisible();
                  if (sendAgreementCloseButton)
                   {
                  // If the Send_Agreement_Close button is visible, click it
                  await this.page.locator(this.bidderopportunity_webelements.Send_Agreement_Close).click();
                  await this.page.waitForTimeout(2000);
                  } 
                  
              else 
              {
                console.log('DocuSign Available, if not we able to see pop up ');
              }
            }
            catch (error) 
              {
                  console.error("Error occurred:", error);
              }
                await this.page.locator(this.bidderopportunity_webelements.Integration_Tab).click()
                await this.page.waitForTimeout(5000)
                await this.page.locator(this.bidderopportunity_webelements.Refresh_Bidder).click()
                await this.page.waitForTimeout(2000)

   }
    async Ribbon_Bidder()
   {
        await this.page.locator(this.bidderopportunity_webelements.Bidder_Button).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.bidderopportunity_webelements.SubmitOn).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderopportunity_webelements.NewtoOld).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.bidderopportunity_webelements.First_Bidder).dblclick()
        await this.page.waitForTimeout(10000)
   }
   async BidderHamburgerMenu ()
  {
                await this.page.locator(this.bidderopportunity_webelements.managementbtn).click()
  }
   async ConsignmentHamburgerMenu()
   {
                await this.page.waitForTimeout(3000)
                await this.page.locator(this.bidderopportunity_webelements.MenuCusomer).click()

                //Download file
                const path1 = require('path');  
                const fs1 = require('fs');
                const downloadDir1 = path1.join(__dirname, 'Download');
                if (!fs1.existsSync(downloadDir1)) {
                    fs1.mkdirSync(downloadDir1);
                  }
                const downloadPromise1 = this.page.waitForEvent('download',{ timeout: 50000 })
                await this.page.locator(this.bidderopportunity_webelements.ExportToExcel).click()
                const download1 = await downloadPromise1
                const downloadPath1 = path1.join(downloadDir1, download1.suggestedFilename());
                await download1.saveAs(downloadPath1)
                await this.page.screenshot({ path: './ScreenShot/68 HamburgerCustomer.png', fullPage: true})
                await this.page.locator(this.bidderopportunity_webelements.AllAccountDropdown).click()
                await this.page.locator(this.bidderopportunity_webelements.AllBusinessAccount).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.AllBusinessAccountDropdown).click()
                await this.page.locator(this.bidderopportunity_webelements.AllDealerAccount).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.AllDealerAccountDropdown).click()
                await this.page.locator(this.bidderopportunity_webelements.AllPersonalAccount).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.AllPersonalAccountDropdown).click()
                await this.page.locator(this.bidderopportunity_webelements.AllVipAccount).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.AllVipAccountDropdown).click()
                await this.page.locator(this.bidderopportunity_webelements.AllAccount).click()
                await this.page.waitForTimeout(8000)

                await this.page.locator(this.bidderopportunity_webelements.CustomerFilter).fill(this.testdata.CustomerName)
                await this.page.locator(this.bidderopportunity_webelements.CustomerFilter).press('Enter')
                await this.page.waitForTimeout(8000)

                await this.page.locator(this.bidderopportunity_webelements.MenuVehicle).click()

                  //Download file
                const path2 = require('path');  
                const fs2 = require('fs');
                const downloadDir2 = path2.join(__dirname, 'Download');
                if (!fs2.existsSync(downloadDir2)) {
                    fs2.mkdirSync(downloadDir2);
                  }
                const downloadPromise2 = this.page.waitForEvent('download',{ timeout: 50000 })
                await this.page.locator(this.bidderopportunity_webelements.ExportToExcel).click()
                const download2 = await downloadPromise2
                const downloadPath2 = path2.join(downloadDir2, download2.suggestedFilename());
                await download2.saveAs(downloadPath2)
                await this.page.screenshot({ path: './ScreenShot/69 HamburgerVehicle.png', fullPage: true})
                await this.page.locator(this.bidderopportunity_webelements.VehicleFilter).fill(this.testdata.VehicleName)
                await this.page.locator(this.bidderopportunity_webelements.VehicleFilter).press('Enter')
                await this.page.waitForTimeout(5000)

                await this.page.locator(this.bidderopportunity_webelements.MenuOpportunityDropdown).click()
                await this.page.locator(this.bidderopportunity_webelements.MenuConsignment).click()

                 //Download file
                const path3 = require('path');  
                const fs3 = require('fs');
                const downloadDir3 = path3.join(__dirname, 'Download');
                if (!fs3.existsSync(downloadDir3)) {
                    fs3.mkdirSync(downloadDir3);
                  }
                const downloadPromise3 = this.page.waitForEvent('download',{ timeout: 50000 })
                await this.page.locator(this.bidderopportunity_webelements.ExportToExcel).click()
                const download3 = await downloadPromise3
                const downloadPath3 = path3.join(downloadDir3, download3.suggestedFilename());
                await download3.saveAs(downloadPath3)
                await this.page.screenshot({ path: './ScreenShot/70 HamburgerConsignment.png', fullPage: true})
                await this.page.locator(this.bidderopportunity_webelements.ConsignmentandBidderFilter).fill(this.testdata.CustomerName)
                await this.page.locator(this.bidderopportunity_webelements.ConsignmentandBidderFilter).press('Enter')
                await this.page.waitForTimeout(4000)
                await this.page.locator(this.bidderopportunity_webelements.MenuBidder).click()

                 //Download file
                 const path4 = require('path');  
                 const fs4 = require('fs');
                 const downloadDir4 = path4.join(__dirname, 'Download');
                 if (!fs4.existsSync(downloadDir4)) {
                 fs4.mkdirSync(downloadDir4);
                 }
                 const downloadPromise4 = this.page.waitForEvent('download',{ timeout: 50000 })
                 await this.page.locator(this.bidderopportunity_webelements.ExportToExcel).click()
                 const download4 = await downloadPromise4
                 const downloadPath4 = path4.join(downloadDir4, download4.suggestedFilename());
                 await download4.saveAs(downloadPath4)
                 await this.page.screenshot({ path: './ScreenShot/71 HamburgerBidder.png', fullPage: true})
                await this.page.locator(this.bidderopportunity_webelements.ConsignmentandBidderFilter).fill(this.testdata.CustomerName)
                await this.page.locator(this.bidderopportunity_webelements.ConsignmentandBidderFilter).press('Enter')
                await this.page.waitForTimeout(4000)
                await this.page.locator(this.bidderopportunity_webelements.MenuAbsenteeBids).click()

                //Download file
                const path5 = require('path');  
                const fs5 = require('fs');
                const downloadDir5 = path5.join(__dirname, 'Download');
                if (!fs5.existsSync(downloadDir5)) {
                    fs5.mkdirSync(downloadDir5);
                  }
                const downloadPromise5 = this.page.waitForEvent('download',{ timeout: 50000 })
                await this.page.locator(this.bidderopportunity_webelements.ExportToExcel).click()
                const download5 = await downloadPromise5
                const downloadPath5 = path5.join(downloadDir5, download5.suggestedFilename());
                await download5.saveAs(downloadPath5)
                await this.page.screenshot({ path: './ScreenShot/72 HamburgerAbsenteeBids.png', fullPage: true})
                await this.page.waitForTimeout(4000)

                await this.page.locator(this.bidderopportunity_webelements.BidderScottsdale2026Dropdown).click()
                await this.page.locator(this.bidderopportunity_webelements.MenuSubmit).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuInReview).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuComplete).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuAllOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuCredentialMailing).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuAbsentee).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuMethodOfPayment).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuMyAssigned).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.VIPOpportunities).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.BidderScottsdale2026Dropdown).click()
                await this.page.waitForTimeout(1000)
                await this.page.locator(this.bidderopportunity_webelements.ConsignmentScottsdale2026Dropdown).click()
                await this.page.locator(this.bidderopportunity_webelements.MenuAllOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuOpportunityWithOpenTask).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuNewOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuInCompleteOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuEvaluateOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuCompleteOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuAssignedOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.ConsignmentScottsdale2026Dropdown).click()
                await this.page.waitForTimeout(1000)
                await this.page.locator(this.bidderopportunity_webelements.BidderPalmBeach2026Dropdown).click()
                await this.page.locator(this.bidderopportunity_webelements.MenuSubmit).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuInReview).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuComplete).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuAllOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuCredentialMailing).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuAbsentee).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuMethodOfPayment).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuMyAssigned).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.VIPOpportunities).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.BidderPalmBeach2026Dropdown).click()
                await this.page.waitForTimeout(1000)
                await this.page.locator(this.bidderopportunity_webelements.ConsignmentPalmBeach2026Dropdown).click()
                await this.page.locator(this.bidderopportunity_webelements.MenuAllOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuOpportunityWithOpenTask).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuNewOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuInCompleteOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuEvaluateOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuCompleteOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuAssignedOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.ConsignmentPalmBeach2026Dropdown).click()
                await this.page.waitForTimeout(1000)
                await this.page.locator(this.bidderopportunity_webelements.BidderColumbus2026Dropdown).click()
                await this.page.locator(this.bidderopportunity_webelements.MenuSubmit).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuInReview).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuComplete).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuAllOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuCredentialMailing).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuAbsentee).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuMethodOfPayment).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuMyAssigned).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.VIPOpportunities).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.BidderColumbus2026Dropdown).click()
                await this.page.waitForTimeout(1000)
                await this.page.locator(this.bidderopportunity_webelements.ConsignmentColumbus2026Dropdown).click()
                await this.page.locator(this.bidderopportunity_webelements.MenuAllOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuOpportunityWithOpenTask).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuNewOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuInCompleteOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuEvaluateOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuCompleteOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.MenuAssignedOpportunity).click()
                await this.page.waitForTimeout(8000)
                await this.page.locator(this.bidderopportunity_webelements.ConsignmentColumbus2026Dropdown).click()
                await this.page.waitForTimeout(1000)
                await this.page.locator(this.bidderopportunity_webelements.MenuHome).click()

   }
}