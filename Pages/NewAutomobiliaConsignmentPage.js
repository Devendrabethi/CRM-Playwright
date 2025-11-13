import { expect } from '@playwright/test'
import { TestData } from '../TestData/testdata.js';
import { NewAutomobiliaConsignment_WebElements } from '../WebElements/NewAutomobiliaConsignment_WebElements.js';
import { NewConsignmentVehicle_WebElement } from '../WebElements/NewConsignmentVehicle_WebElements.js';
import { LotNumberChange_WebElements } from '../WebElements/LotNumberChange_WebElements.js' 
import { BidderOpportunity_WebElements } from '../WebElements/BidderOpportunity_WebElements.js'  
exports.NewAutomobiliaConsignmentPage =
class NewAutomobiliaConsignmentPage
{
    constructor(page)
    {
        this.page = page
        this.testdata = new TestData()
        this.newautomobiliaconsignment_webelements = new NewAutomobiliaConsignment_WebElements()
        this.newconsignmentvehicle_webelement = new NewConsignmentVehicle_WebElement()
        this.lotnumberchange_webElements = new LotNumberChange_WebElements(); // Initialize Locators class
        this.bidderopportunity_webelements = new BidderOpportunity_WebElements()
    }
    async newcon()
    {
        await this.page.locator(this.newautomobiliaconsignment_webelements.NewOpportunity_Button).click({ timeout: 60000 })   
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newautomobiliaconsignment_webelements.New_Automobilia_opportunity_btn).click({ timeout: 60000 })
        //await this.page.waitForTimeout(4000)
    }
    async SaleDetails()
    {
        //await this.page.selectOption(this.newconsignmentvehicle_webelement.Sale_Type_dropdown,this.testdata.Sale_Type)
        await this.page.locator(this.newconsignmentvehicle_webelement.Owner_Estimate_value).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Owner_Estimate_value).fill(this.testdata.Owner_Est_Value)
        await this.page.locator(this.newconsignmentvehicle_webelement.Bjack_value).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Bjack_value).fill(this.testdata.Bjack_value)
        await this.page.screenshot({ path: './ScreenShot/SaleDetails.png', fullPage: true})
    }
    async Account_Address()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Account_Address).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Account_Address).fill(this.testdata.Account_Address)
        await this.page.locator(this.newconsignmentvehicle_webelement.Account_Address_dropdown).click()
        await this.page.locator(this.newautomobiliaconsignment_webelements.Poa_Odo).click()
        await this.page.locator(this.newautomobiliaconsignment_webelements.Poa_Odo).fill(this.testdata.personal_TitleTo)
        await this.page.waitForTimeout(1000)
        await this.page.screenshot({ path: './ScreenShot/AccountAddress.png', fullPage: true})
        //await this.page.locator(this.newconsignmentvehicle_webelement.Status_Text).click() 
        await this.page.waitForTimeout(2000)
    }
    async Appilication_Info()
    {
       // await this.page.locator(this.newconsignmentvehicle_webelement.Event_name).scrollIntoViewIfNeeded({ force: true }) 
        await this.page.locator(this.newconsignmentvehicle_webelement.Event_name).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Event_name).fill(this.testdata.Event_name)
        await this.page.locator(this.newconsignmentvehicle_webelement.Event_Name_dropdown).click()
    }

    async Assign()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To_Inputfield).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To_Inputfield).press('Enter');
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To_Specialist_dropdown).click()
    }
    async MarketingTab()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Marketing_Tab).click()
        await this.page.locator(this.newautomobiliaconsignment_webelements.Marketing_Description).click()
        await this.page.locator(this.newautomobiliaconsignment_webelements.Marketing_Description).fill(this.testdata.Marketing_Description)
        await this.page.locator(this.newconsignmentvehicle_webelement.ShortDescription).fill(this.testdata.ShortDescriptionText)
        await this.page.locator(this.newconsignmentvehicle_webelement.LongDescription).fill(this.testdata.LongDescriptionText)
        await this.page.screenshot({ path: './ScreenShot/ShortLongDesc.png', fullPage: true})
        await this.page.locator(this.newautomobiliaconsignment_webelements.save_consignment).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click({ timeout: 60000 }) 
        await this.page.locator(this.newconsignmentvehicle_webelement.Marketing_Tab).click()
        await this.page.waitForTimeout(6000)
    }
    async ConsOpportunityDoc()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Documentation_Tab).click()

        const fileToUpload = 
        {
            "Regular" :      "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Front title.jpg"
        }
        for (const [documentType, documentPath] of Object.entries(fileToUpload))
             {
                   // await this.page.waitForTimeout(2000)
                    await this.page.locator(this.newautomobiliaconsignment_webelements.Opportunity_Add_Document_btn).click()
                    const frame = await this.page.frameLocator(this.newautomobiliaconsignment_webelements.frame)
                    if(!frame) throw new Error('Iframe not found')
                    await frame.locator(this.newconsignmentvehicle_webelement.Select_DocumentType_dropdown).selectOption(documentType)
                    await frame.locator(this.newconsignmentvehicle_webelement.Expiration_Date_field).click()
                    await frame.locator(this.newconsignmentvehicle_webelement.Next_Month).click()
                    await frame.locator(this.newconsignmentvehicle_webelement.Select_NextMonthDate).click()
                    await frame.locator(this.newconsignmentvehicle_webelement.Upload_Document).setInputFiles(documentPath)
                    await this.page.once('dialog', async(dialog) =>
                        { //enabling alert handling
                        await dialog.accept()
                        })
                    await frame.locator(this.newconsignmentvehicle_webelement.Upload_btn).click()
                    await this.page.locator(this.newautomobiliaconsignment_webelements.Opportunitydoc_Refresh).click({timeout:60000})
                    await this.page.screenshot({ path: './ScreenShot/OpportunityDocuments.png', fullPage: true})
             }
    }
    async UploadPhoto()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Photo_Tab).click()

        const fileToUpload = 
        [
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\front344.jpeg",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\1Rear34.jpeg",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\side344.jpeg",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\1Interiorr.jpeg",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\1Engine.jpeg",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\vin.heif",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\underside.jpg",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\odometer.jpg",
        ]
                   // await this.page.waitForTimeout(2000)                   
                    const frame = await this.page.frameLocator(this.newautomobiliaconsignment_webelements.Photo_frame)
                    if(!frame) throw new Error('Iframe not found')
                    await this.page.waitForTimeout(6000)
                    await frame.locator(this.newconsignmentvehicle_webelement.plus_Add_Photo_btn).click()
                    await this.page.waitForTimeout(2000)
                    await frame.locator(this.newconsignmentvehicle_webelement.Upload_photo_input).setInputFiles(fileToUpload)
                    await frame.locator(this.newconsignmentvehicle_webelement.Upload_photo_btn).click()
                    //await this.page.waitForTimeout(12000)
                    await this.page.screenshot({ path: './ScreenShot/UploadPhotos.png', fullPage: true})
                    await frame.locator(this.newautomobiliaconsignment_webelements.Cross_mark).click({timeout:90000})
                    await frame.locator(this.newconsignmentvehicle_webelement.Refresh_btn).click()
                    await this.page.waitForTimeout(8000)   
                    await frame.locator(this.newautomobiliaconsignment_webelements.SelectAll_Misc).click({timeout:60000})
                    await this.page.waitForTimeout(3000)
                      //Photos Download file
                    const path1 = require('path');  
                    const fs1 = require('fs');
                    const downloadDir1 = path1.join(__dirname, 'Download');
                    if (!fs1.existsSync(downloadDir1)) 
                        {
                           fs1.mkdirSync(downloadDir1);
                        }
                    const downloadPromise1 = this.page.waitForEvent('download')
                    await frame.locator(this.newautomobiliaconsignment_webelements.Download_MiscPhotos).click()
                    const download1 = await downloadPromise1
                    const downloadPath1 = path1.join(downloadDir1, download1.suggestedFilename());
                    await download1.saveAs(downloadPath1)
                    await this.page.locator(this.newconsignmentvehicle_webelement.Okbutton).click({timeout:60000})
                    await this.page.waitForTimeout(3000)
                    await frame.locator(this.newautomobiliaconsignment_webelements.Delete_MiscPhotos).click()
                    await this.page.locator(this.newconsignmentvehicle_webelement.Okbutton).click({timeout:60000})
                    await this.page.waitForTimeout(20000)
                    await frame.locator(this.newconsignmentvehicle_webelement.Refresh_btn).click()

                    if(!frame) throw new Error('Iframe not found')
                    //await this.page.waitForTimeout(6000)
                    await frame.locator(this.newconsignmentvehicle_webelement.plus_Add_Photo_btn).click()
                    await this.page.waitForTimeout(3000)
                    await frame.locator(this.newconsignmentvehicle_webelement.Upload_photo_input).setInputFiles(fileToUpload)
                    await frame.locator(this.newconsignmentvehicle_webelement.Upload_photo_btn).click()
                    //await this.page.waitForTimeout(12000)
                    await this.page.screenshot({ path: './ScreenShot/UploadPhotos.png', fullPage: true})
                    await frame.locator(this.newautomobiliaconsignment_webelements.Cross_mark).click({timeout:90000})
                    await frame.locator(this.newconsignmentvehicle_webelement.Refresh_btn).click()
                    await this.page.waitForTimeout(8000)          
    }

    async RibbonLevel()
    {
        
//Lot Assign
        await this.page.locator(this.newconsignmentvehicle_webelement.LotAssign).click()
        await this.page.waitForTimeout(5000)
        const Lotframe = await this.page.frameLocator(this.lotnumberchange_webElements.Frame_LotAssign)
        if(!Lotframe) throw new Error('Iframe not found')
        await Lotframe.locator(this.lotnumberchange_webElements.New_LotNumber).fill(this.testdata.AutomobiliaNewLotNumber)
        await Lotframe.locator(this.lotnumberchange_webElements.Select_StatusDropdown).selectOption(this.testdata.LotStatus_Tentative)
        await Lotframe.locator(this.lotnumberchange_webElements.Save_Button).click()
        await this.page.waitForTimeout(40000)

        const lotStatuses1 = [
                                    this.testdata.LotStatus_PendingRevisit,
                                    this.testdata.LotStstaus_PendingAccepted,
                                    //this.testdata.LotStatus_Confirmed,
                                    //this.testdata.LotStatus_Cancel
                                ];

            for (const status of lotStatuses1) 
            {

                await this.page.locator(this.lotnumberchange_webElements.LotAssign).click()
                const Lotframe = await this.page.frameLocator(this.lotnumberchange_webElements.Frame_LotAssign)
                    if(!Lotframe) throw new Error('Iframe not found')
                await Lotframe.locator(this.lotnumberchange_webElements.Selec_LotStatus).selectOption(status);
                await Lotframe.locator(this.lotnumberchange_webElements.Save_Button).click();
                await this.page.waitForTimeout(15000);
            }
             await this.page.locator(this.lotnumberchange_webElements.LotAssign).click()
           // const Lotframe = await this.page.frameLocator(this.lotnumberchange_webElements.Frame_LotAssign)
            if(!Lotframe) throw new Error('Iframe not found')
            await Lotframe.locator(this.lotnumberchange_webElements.Selec_LotStatus).selectOption(this.testdata.LotStatus_Confirmed);
            await Lotframe.locator(this.lotnumberchange_webElements.Checkbox_CompLotFee).check();
            await this.page.waitForTimeout(2000);
            await Lotframe.locator(this.lotnumberchange_webElements.Checkbox_CompLotFee).uncheck();
            await this.page.waitForTimeout(2000);
            await Lotframe.locator(this.lotnumberchange_webElements.LotOverrideAmount).fill(this.testdata.LotOverrideamount);
            await this.page.waitForTimeout(2000);
            await this.page.screenshot({ path: './ScreenShot/LotOvverrideConfirmation.png', fullPage: true})
            await Lotframe.locator(this.lotnumberchange_webElements.Save_Button).click();
            await this.page.waitForTimeout(25000);

             //Request Information

        await this.page.locator(this.newconsignmentvehicle_webelement.reqinforbtn).click()
        const frame = await this.page.frameLocator(this.newconsignmentvehicle_webelement.reqinforframe)
        if(!frame) throw new Error('Iframe not found')
            await frame.locator(this.newconsignmentvehicle_webelement.selectvehiclephotoreq).selectOption([
                { label: 'Front 3/4 Photo' },
                { label: 'Rear 3/4 Photo' }
              ]);
              await frame.locator(this.newconsignmentvehicle_webelement.selectconsigndoc).selectOption([
                { label: 'Regular' }
              ]);
              await frame.locator(this.newconsignmentvehicle_webelement.selectcustomerDocumentsDrpreq).selectOption([
                { label: 'Drivers License' },
                { label: 'Passport' },
                { label: 'Insurance' },
                { label: 'Dealer License' },
                { label: 'Resale License' },
                { label: 'Operating Agreement' },
                { label: 'Wholesale License' }
              ]);
                await frame.locator(this.newconsignmentvehicle_webelement.Payments).selectOption([
                { label: 'Consignment Lot Fee' }
              ]);
              await this.page.screenshot({ path: './ScreenShot/ReqInformation.png', fullPage: true})
                const dialogPromise = this.page.waitForEvent('dialog',{ timeout: 75000 });
                await frame.locator(this.newconsignmentvehicle_webelement.submitbtn).click();
                const dialog = await dialogPromise;
                await dialog.accept();

        // //Consignment Print Contract
        //         await this.page.locator(this.bidderopportunity_webelements.Print_Contract).click()
        //        // await this.page.waitForTimeout(2000)
        //         await this.page.locator(this.bidderopportunity_webelements.Print).click()
        //         await this.page.waitForTimeout(2000)
        //         try
        //         {
        //                     this.page.on('dialog', async (dialog) => {
        //                     console.log(`Dialog message: ${dialog.message()}`);
        //                     await dialog.accept(); // Accept the alert
        //                     });
        //                      await this.page.waitForTimeout(1000)
        //                      await this.page.locator(this.bidderopportunity_webelements.Save_btn).click();
        //                      await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click({timeout:60000})
        //         }
        //         catch(error)
        //         {
        //                 await this.page.locator(this.bidderopportunity_webelements.Save_btn).click({timeout:60000})
        //                 await this.page.waitForTimeout(1000)
        //                 await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click({timeout:60000})
        //         }
        // //Consignment Send Contract
        //         await this.page.locator(this.bidderopportunity_webelements.Send_Contract).click({timeout:60000})
        //         await this.page.locator(this.bidderopportunity_webelements.Send).click();
        //         try 
        //         {
        //             this.page.on('dialog', async (dialog) => {
        //                     console.log(`Dialog message: ${dialog.message()}`);
        //                     await dialog.accept(); // Accept the alert
        //                     });
        //                      await this.page.waitForTimeout(1000)
        //           // Check if the Send_Agreement_Close button is present
        //               await this.page.locator(this.bidderopportunity_webelements.Send_Agreement_Close).click({timeout:5000});
        //             //  await this.page.waitForTimeout(2000);
        //         } 
        //       catch (error) 
        //       {
        //              // await this.page.waitForTimeout(2000);
        //              await this.page.screenshot({ path: './ScreenShot/SendContract.png', fullPage: true})
        //               await this.page.locator(this.bidderopportunity_webelements.Okbtn).click({timeout:1000000});
        //               await this.page.locator(this.bidderopportunity_webelements.Save_btn).click();
        //              // await this.page.waitForTimeout(1000);
        //               await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click();
        //              // await this.page.waitForTimeout(1000);
        //       }        

        await this.page.locator(this.lotnumberchange_webElements.Sales_Fees_Tab).click({ timeout: 60000 });
        await this.page.waitForTimeout(5000)
        // await this.page.locator(this.lotnumberchange_webElements.Invoice_Tab).click()
        await this.page.locator(this.lotnumberchange_webElements.Refresh_Invoice).click()
        await this.page.locator(this.lotnumberchange_webElements.SelectInvoice).click()
        await this.page.locator(this.bidderopportunity_webelements.EnterPaymentButton).click()  
        const frame1 = await this.page.frameLocator(this.bidderopportunity_webelements.FrameInvoice)
        if(!frame1) throw new Error('Iframe not found')
        await frame1.locator(this.bidderopportunity_webelements.SelectPaymentMethod).selectOption(this.testdata.SelectInvoiceVisa)
        await this.page.waitForTimeout(4000);
        //const frame1 = await this.page.frameLocator(this.bidderopportunity_webelements.FrameCard)
        const frameCard = await frame1.frameLocator(this.bidderopportunity_webelements.FrameCard);
        if(!frameCard) throw new Error('Nested iframe not found')
       // await frame1.locator(this.bidderopportunity_webelements.CardNum).waitFor({ state: 'visible' })
       // await frameCard.locator(this.bidderopportunity_webelements.CardNum).click()
        await frameCard.locator(this.bidderopportunity_webelements.CardNum).fill(this.testdata.CardCC)
        await frameCard.locator(this.bidderopportunity_webelements.CardExpDate).fill(this.testdata.CardExp)
        await frameCard.locator(this.bidderopportunity_webelements.Cvv).fill(this.testdata.CVVNum)
        await frameCard.locator(this.bidderopportunity_webelements.ZipCode).fill(this.testdata.ZipCOde)
        await frame1.locator(this.bidderopportunity_webelements.SubmitButton).click()
        await this.page.locator(this.bidderopportunity_webelements.PaymentOk).click({timeout:60000})
        await this.page.locator(this.lotnumberchange_webElements.Sales_Fees_Tab).click({timeout:60000})
        await this.page.screenshot({ path: './ScreenShot/LotProductTab.png', fullPage: true})
        await this.page.waitForTimeout(5000)
        //await this.page.locator(this.lotnumberchange_webElements.Invoice_Tab).click()
        await this.page.waitForTimeout(5000)
        await this.page.locator(this.lotnumberchange_webElements.Selectsingleinvoive).dblclick()
        await this.page.screenshot({ path: './ScreenShot/LotInvoiceTab.png', fullPage: true})
        await this.page.locator(this.lotnumberchange_webElements.SaveandClose).click()
        await this.page.waitForTimeout(3000)

///Lot Cancel
        await this.page.locator(this.lotnumberchange_webElements.LotAssign).click()
        await Lotframe.locator(this.lotnumberchange_webElements.Select_StatusDropdown).selectOption(this.testdata.LotStatus_Cancel)
        await Lotframe.locator(this.lotnumberchange_webElements.Save_Button).click()
        this.page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept(); // Accept the alert
        });
        await this.page.waitForTimeout(15000)
        await this.page.locator(this.lotnumberchange_webElements.SaleDay_Tab).click()
        await this.page.waitForTimeout(5000)   
        await this.page.locator(this.lotnumberchange_webElements.Refresh_Button).click()
        await this.page.waitForTimeout(10000) 
                // await this.page.locator(this.newconsignmentvehicle_webelement.Cancel_LotAssign).click()
                // await this.page.waitForTimeout(3000)

  //print all Download file
                // const path1 = require('path');  
                // const fs1 = require('fs');
                // const downloadDir1 = path1.join(__dirname, 'Download');
                // if (!fs1.existsSync(downloadDir1)) {
                //     fs1.mkdirSync(downloadDir1);
                //   }
                // const downloadPromise1 = this.page.waitForEvent('download',{ timeout: 75000 })
                            // await this.page.locator(this.newconsignmentvehicle_webelement.PrintAll).click()           // uncomment 2 lines 345 and 346 when print all available
                            // await this.page.waitForTimeout(6000)
                // const download1 = await downloadPromise1
                // const downloadPath1 = path1.join(downloadDir1, download1.suggestedFilename());
                // await download1.saveAs(downloadPath1)

                // await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click()
    //Word Template            
                // await this.page.locator(this.newconsignmentvehicle_webelement.WordTemplate).click({timeout:60000})
                
                //  //print consignment form Download file
                // const path2 = require('path');  
                // const fs2 = require('fs');
                // const downloadDir2 = path2.join(__dirname, 'Download');
                // if (!fs2.existsSync(downloadDir2)) {
                //     fs2.mkdirSync(downloadDir2);
                //   }
                // const downloadPromise2 = this.page.waitForEvent('download',{ timeout: 75000 })
                // await this.page.locator(this.newconsignmentvehicle_webelement.PrintConsignmentForm).click()
                //                 await this.page.waitForTimeout(6000)
                // const download2 = await downloadPromise2
                // const downloadPath2 = path2.join(downloadDir2, download2.suggestedFilename());
                // await download2.saveAs(downloadPath2)

                //await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click()
   }
   async IntegrationTab()
   {
    await this.page.locator(this.newconsignmentvehicle_webelement.Integration_Tab).click()
    await this.page.waitForTimeout(4000)
    await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click()
   }

   async Ribbon_AutomobiliaConsignment()
   {
        //await this.page.locator(this.newconsignmentvehicle_webelement.Opportunity_button).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Consignments_Button).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.newconsignmentvehicle_webelement.ConsignmentType_Dropdown).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.FilterBy).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.FilterBy_Value).click()
        await this.page.locator(this.newautomobiliaconsignment_webelements.Select_Automobilia).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Apply_Button).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.newconsignmentvehicle_webelement.First_Consignment).dblclick()
        await this.page.waitForTimeout(10000)
   }
      async NewBatchAutomobiliaConsignment()
    {
        await this.page.locator(this.newautomobiliaconsignment_webelements.NewOpportunity_Button).click({ timeout: 60000 })   
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newautomobiliaconsignment_webelements.New_Batch_Automobilia_Opportunity_btn).click({ timeout: 60000 })
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Event_name).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Event_name).fill(this.testdata.Event_name)
        await this.page.locator(this.newconsignmentvehicle_webelement.Event_Name_dropdown).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.newautomobiliaconsignment_webelements.save_consignment).click({ timeout: 60000 })
        await this.page.waitForTimeout(4000) 
        await this.page.locator(this.newautomobiliaconsignment_webelements.NewAutomobilia_Batch).click()
        await this.page.waitForTimeout(4000) 
        await this.page.locator(this.newconsignmentvehicle_webelement.Owner_Estimate_value).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Owner_Estimate_value).fill(this.testdata.Owner_Est_Value)
        await this.page.locator(this.newconsignmentvehicle_webelement.Bjack_value).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Bjack_value).fill(this.testdata.Bjack_value)
        await this.page.screenshot({ path: './ScreenShot/SaleDetails.png', fullPage: true})
        await this.page.locator(this.newautomobiliaconsignment_webelements.Marketing_Description).click()
        await this.page.locator(this.newautomobiliaconsignment_webelements.Marketing_Description).fill(this.testdata.Marketing_Description)
        await this.page.locator(this.newautomobiliaconsignment_webelements.BatchItem_Short_description).fill(this.testdata.ShortDescriptionText)
        await this.page.locator(this.newautomobiliaconsignment_webelements.BatchItem_Long_Description).fill(this.testdata.LongDescriptionText)
        await this.page.screenshot({ path: './ScreenShot/ShortLongDesc.png', fullPage: true})
        await this.page.locator(this.newautomobiliaconsignment_webelements.save_consignment).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newautomobiliaconsignment_webelements.saveandclose_ItemAutomobilia).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newautomobiliaconsignment_webelements.Submit_BatchAutomobilia).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Okbutton).click({timeout:60000})
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Opportunity_button).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Consignments_Button).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.newconsignmentvehicle_webelement.First_Consignment).dblclick()

    }

}