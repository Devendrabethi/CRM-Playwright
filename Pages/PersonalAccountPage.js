import { expect } from '@playwright/test'
import { PersonalAccount_WebElements } from '../WebElements/PersonalAccount_WebElements'    
//import { GlobalUserData } from './GlobalUserData.js';  // Import it when needed
import { TestData } from '../TestData/testdata.js';


exports.PersonalAccountPage =
class PersonalAccountPage
{
    constructor(page)
    {
        this.page = page
        this.PersonalAccount_WebElements =  new PersonalAccount_WebElements()
        this.testdata = new TestData()
    }

    async accounttype_dropdown()
    {
        const CustomerText = this.page.locator(this.PersonalAccount_WebElements.CustomerText)
       // await expect(CustomerText).toHaveText('Customer',{ timeout: 60000 })
        await this.page.selectOption(this.PersonalAccount_WebElements.AccountType_Dropdown,this.testdata.Account_Type_Personal);
        
    }

   
    async  names()
                {
                function generateRandomString(length) {
                    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    let result = '';
                    for (let i = 0; i < length; i++) {
                        result += chars.charAt(Math.floor(Math.random() * chars.length));
                    }0
                    return result;
                }

                // Generate random first and last names (e.g., 5-10 characters each)
                const randomFirstName = generateRandomString(Math.floor(Math.random() * (26-19)) + 1);
                const randomLastName = generateRandomString(Math.floor(Math.random() * (26-19)) + 1);

                const firstName = "Dev" + randomFirstName;
                const lastName = "Individual" + randomLastName;

                // Fill the form fields with the generated names
                await this.page.locator(this.PersonalAccount_WebElements.Firstname).fill(firstName);
                await this.page.locator(this.PersonalAccount_WebElements.Lastname).fill(lastName);

                // await this.page.locator(this.PersonalAccount_WebElements.Firstname).click();
                // await this.page.locator(this.PersonalAccount_WebElements.Firstname).fill(this.testdata.FirstName);
                // await this.page.locator(this.PersonalAccount_WebElements.Lastname).click();
                // await this.page.locator(this.PersonalAccount_WebElements.Lastname).fill(this.testdata.LastName);

                await this.page.waitForTimeout(1000); 
                //return GlobalUserData; // Return the object containing names
    }

    async save()
    {
        await this.page.locator(this.PersonalAccount_WebElements.Savebtn).click({ timeout: 30000 });
    }
    async Event_Auct_Comp()
    {
        await this.page.locator(this.PersonalAccount_WebElements.Event_Auct_Comp).click()
        await this.page.locator(this.PersonalAccount_WebElements.New_Account_Event).click()
        await this.page.locator(this.PersonalAccount_WebElements.Event_Field).click()
        await this.page.locator(this.PersonalAccount_WebElements.Event_Field).fill(this.testdata.Event_name)
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.PersonalAccount_WebElements.Select_Event).click()
        await this.page.selectOption(this.PersonalAccount_WebElements.Select_Next_Auct_Comp_Type,this.testdata.Account_Auct_EventType);
        await this.page.screenshot({ path: './ScreenShot/EventAuctComp.png', fullPage: true})
        await this.page.locator(this.PersonalAccount_WebElements.SaveandClose_AccountEvent).click()

        await this.page.locator(this.PersonalAccount_WebElements.Event_Auct_Comp).click()
        await this.page.locator(this.PersonalAccount_WebElements.New_Account_Event).click()
        await this.page.locator(this.PersonalAccount_WebElements.Event_Field).click()
        await this.page.locator(this.PersonalAccount_WebElements.Event_Field).fill(this.testdata.Event_nameSD2025)
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.PersonalAccount_WebElements.Select_Event).click()
        //await this.page.selectOption(this.PersonalAccount_WebElements.Select_Next_Auct_Comp_Type,this.testdata.Account_Auct_EventType);
        await this.page.screenshot({ path: './ScreenShot/EventAuctComp.png', fullPage: true})
        await this.page.locator(this.PersonalAccount_WebElements.SaveandClose_AccountEvent).click()

         await this.page.locator(this.PersonalAccount_WebElements.Event_Auct_Comp).click()
        await this.page.locator(this.PersonalAccount_WebElements.New_Account_Event).click()
        await this.page.locator(this.PersonalAccount_WebElements.Event_Field).click()
        await this.page.locator(this.PersonalAccount_WebElements.Event_Field).fill(this.testdata.Event_namePB2025)
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.PersonalAccount_WebElements.Select_Event).click()
        await this.page.selectOption(this.PersonalAccount_WebElements.Select_Next_Auct_Comp_Type,this.testdata.Account_Auct_EventType);
        await this.page.screenshot({ path: './ScreenShot/EventAuctComp.png', fullPage: true})
        await this.page.locator(this.PersonalAccount_WebElements.SaveandClose_AccountEvent).click()

    }
    async personalAccountDocuments()
    {
        await expect(this.page.locator(this.PersonalAccount_WebElements.Documents_Tab)).toBeVisible({ timeout: 30000 })
        await this.page.locator(this.PersonalAccount_WebElements.Documents_Tab).click()
        const fileToUpload = 
        {
            "Driver's License" :    "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\license_09242024.jpg",
            "Trust Documents" :   "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\trust Doc.jpg",
            "Passport" :          "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\passport2.jpg",
            "Insurance" :           "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\insurance.jpg",
        }
        for (const [documentType, documentPath] of Object.entries(fileToUpload))
             {
                    await expect(this.page.locator(this.PersonalAccount_WebElements.Personal_Document_Text)).toBeVisible({ timeout: 10000 })
                    await this.page.locator(this.PersonalAccount_WebElements.Add_Document_btn).click()
                    const frame = await this.page.frameLocator(this.PersonalAccount_WebElements.frame)
                    if(!frame) throw new Error('Iframe not found')
                    await frame.locator(this.PersonalAccount_WebElements.Select_DocumentType_dropdown).selectOption(documentType)
                    await frame.locator(this.PersonalAccount_WebElements.Expiration_Date_field).click()
                    await frame.locator(this.PersonalAccount_WebElements.Next_Month).click()
                    await frame.locator(this.PersonalAccount_WebElements.Select_NextMonthDate).click()
                    await frame.locator(this.PersonalAccount_WebElements.Upload_Document).setInputFiles(documentPath)
                    await this.page.once('dialog', async(dialog) =>
                        { //enabling alert handling
                        await dialog.accept()
                        })
                    await frame.locator(this.PersonalAccount_WebElements.Upload_btn).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Persondoc_Refresh).click()
             }
                   // await this.page.waitForTimeout(4000)
                    await this.page.screenshot({ path: './ScreenShot/AccountDocumentsPage.png', fullPage: true})
                    await this.page.locator(this.PersonalAccount_WebElements.Select_FirstDocumentUnarchived).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Archive_Button).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Ok_Button).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Account).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Documents_Tab).click()
                    await this.page.waitForTimeout(2000)
                    await this.page.screenshot({ path: './ScreenShot/AccountDocumentWithArchived.png', fullPage: true})
                    await this.page.locator(this.PersonalAccount_WebElements.SelectFirstDocument_Archived).click()
                    await this.page.locator(this.PersonalAccount_WebElements.UnArchived_Button).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Ok_Button).click()
                     const frame = await this.page.frameLocator(this.PersonalAccount_WebElements.frame_AccountExp)
                    if(!frame) throw new Error('Iframe not found')
                    await frame.locator(this.PersonalAccount_WebElements.Expiration_Date_field).click()
                    await frame.locator(this.PersonalAccount_WebElements.Next_Month).click()
                    await frame.locator(this.PersonalAccount_WebElements.Select_NextMonthDate).click()
                    await frame.locator(this.PersonalAccount_WebElements.Ok_ExpiryDate).click()
                    await this.page.waitForTimeout(4000)
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Account).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Documents_Tab).click()
                    await this.page.waitForTimeout(2000)
                    await this.page.screenshot({ path: './ScreenShot/AccountDocumentWithArchivedtoUnArchived.png', fullPage: true})

                    const fileToUpload1 = 
                    {
                        "Customer Photo" :      "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\colorphoto.jpg",
                    }
                    for (const [documentType, documentPath] of Object.entries(fileToUpload1))
                        {
                              // await this.page.waitForTimeout(2000)
                               await this.page.locator(this.PersonalAccount_WebElements.Add_Document_btn).click()
                               const frame = await this.page.frameLocator(this.PersonalAccount_WebElements.frame)
                               if(!frame) throw new Error('Iframe not found')
                                await frame.locator(this.PersonalAccount_WebElements.Select_DocumentType_dropdown).selectOption(documentType)
                                await frame.locator(this.PersonalAccount_WebElements.ExistCropPhoto).click()
                                await frame.locator(this.PersonalAccount_WebElements.Upload_Document_CropImage).setInputFiles(documentPath)
                                await frame.locator(this.PersonalAccount_WebElements.CropImage).click()
                                await this.page.screenshot({ path: './ScreenShot/CustomerPhoto.png', fullPage: true})
                                await frame.locator(this.PersonalAccount_WebElements.Upload_btn).click()
                                await this.page.locator(this.PersonalAccount_WebElements.Persondoc_Refresh).click()
                        }
    }
    async Tracking_Tab()
    {
         await this.page.locator(this.PersonalAccount_WebElements.Tracking_Tab).click()


         
     //ZPLII
                    await this.page.locator(this.PersonalAccount_WebElements.Create_Package).click();
                    await this.page.waitForTimeout(1000);

                    await this.page.locator(this.PersonalAccount_WebElements.Event).click();
                    await this.page.locator(this.PersonalAccount_WebElements.Event).fill(this.testdata.Event_name);
                    await this.page.waitForTimeout(6000);
                    await this.page.locator(this.PersonalAccount_WebElements.Select_Tracking_Event).click();
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_PackageType_Dropdown,this.testdata.packageType_Bidder_Credential_Package)
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_Carrier, this.testdata.Carrier_FedEx);
                    await this.page.waitForTimeout(4000);

                    await this.page.locator(this.PersonalAccount_WebElements.Recipient_Company_text).click()
                    await this.page.locator(this.PersonalAccount_WebElements.ImageType_Text).click()
                    await this.page.waitForTimeout(15000)
                    await this.page.locator(this.PersonalAccount_WebElements.OneRate).click()
                    await this.page.waitForTimeout(15000)
                    await this.page.screenshot({ path: './ScreenShot/OneRateToggleOn.png', fullPage: true})
                    await this.page.locator(this.PersonalAccount_WebElements.OneRate).click()
                    await this.page.waitForTimeout(15000)
                    await this.page.screenshot({ path: './ScreenShot/OneRateToggleOff.png', fullPage: true})
                    //await this.page.selectOption(this.PersonalAccount_WebElements.Select_ImageType_Dropdown,this.testdata.ImageType_ZPLII);
                    // await this.page.locator(this.PersonalAccount_WebElements.Shipper_City).click();
                    // await this.page.locator(this.PersonalAccount_WebElements.Weight).click();
                    // await this.page.locator(this.PersonalAccount_WebElements.Weight).fill(this.testdata.Weight_Value);
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_Packaging,this.testdata.FEDEX_EXTRA_LARGE_BOX)
                    await this.page.waitForTimeout(7000);
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_Packaging,this.testdata.FEDEX_ENVELOPE)
                    await this.page.waitForTimeout(7000);
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_Packaging,this.testdata.FEDEX_PAK)
                    await this.page.waitForTimeout(7000);
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_Packaging,this.testdata.FEDEX_TUBE)
                    await this.page.waitForTimeout(7000);
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_Packaging,this.testdata.FEDEX_SMALL_BOX)
                    await this.page.waitForTimeout(7000);
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_Packaging,this.testdata.FEDEX_MEDIUM_BOX)
                    await this.page.waitForTimeout(7000);
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_Packaging,this.testdata.FEDEX_LARGE_BOX)
                    await this.page.waitForTimeout(7000);

                    await this.page.locator(this.PersonalAccount_WebElements.Save_Tracking).click();
                    await this.page.waitForTimeout(5000);
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Tracking).click();
                    await this.page.waitForTimeout(5000);
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Tracking).click();
                    await this.page.waitForTimeout(5000);
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Tracking).click();
                    await this.page.waitForTimeout(1000);
                    await this.page.screenshot({ path: './ScreenShot/ZPLIIScreen.png', fullPage: true})
                    // page.on('dialog', async (dialog) => {
                    // console.log(`Dialog message: ${dialog.message()}`);
                    // await dialog.accept(); // Accepts the alert
                    // });

                    await this.page.locator(this.PersonalAccount_WebElements.Close_Tracking).click();
                    await this.page.waitForTimeout(2000)

         const packageTypes = [
                                     'Bidder Credential Package',
                                     'Bidder Collateral Return',
                                     'Gift(s)',
                                     'Proceeds',
                                     'Title(s)',
                                     'Other',
                              ];

for (let i = 0; i < packageTypes.length; i++) 
    {
                    await this.page.locator(this.PersonalAccount_WebElements.Create_Package).click();
                    await this.page.waitForTimeout(1000);

                    await this.page.locator(this.PersonalAccount_WebElements.Event).click();
                    await this.page.locator(this.PersonalAccount_WebElements.Event).fill(this.testdata.Event_name);
                    await this.page.waitForTimeout(3000);

                    await this.page.locator(this.PersonalAccount_WebElements.Select_Tracking_Event).click();

                    // 🔄 Select different package type each iteration
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_PackageType_Dropdown,packageTypes[i])

                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_Carrier, this.testdata.Carrier_FedEx);
                    await this.page.waitForTimeout(2000);

                    await this.page.locator(this.PersonalAccount_WebElements.Recipient_Company_text).click();
                    await this.page.locator(this.PersonalAccount_WebElements.ImageType_Text).click()
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_ImageType_Dropdown,this.testdata.Image_Type_PDF);
                    // await this.page.locator(this.PersonalAccount_WebElements.Shipper_City).click();
                    // await this.page.locator(this.PersonalAccount_WebElements.Weight).click();
                    // await this.page.locator(this.PersonalAccount_WebElements.Weight).fill(this.testdata.Weight_Value);

                    await this.page.locator(this.PersonalAccount_WebElements.Save_Tracking).click();
                    await this.page.waitForTimeout(5000);
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Tracking).click();
                    await this.page.waitForTimeout(5000);
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Tracking).click();
                    await this.page.waitForTimeout(5000);
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Tracking).click();
                    await this.page.waitForTimeout(1000);
                    await this.page.screenshot({ path: './ScreenShot/PDF.png', fullPage: true})
                    const [newPage] = await Promise.all([
                        this.page.context().waitForEvent('page'),
                        this.page.locator(this.PersonalAccount_WebElements.Print_Label).click()
                    ]);

                    await newPage.waitForLoadState('load');
                    await this.page.waitForTimeout(10000);
                    await newPage.close();
                    await this.page.bringToFront();

                    await this.page.locator(this.PersonalAccount_WebElements.Close_Tracking).click();
                    await this.page.waitForTimeout(2000)
    }
                    //USPS
                    await this.page.locator(this.PersonalAccount_WebElements.Create_Package).click()
                    await this.page.waitForTimeout(1000)
                    await this.page.locator(this.PersonalAccount_WebElements.Event).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Event).fill(this.testdata.Event_name)
                    await this.page.waitForTimeout(6000)
                    await this.page.locator(this.PersonalAccount_WebElements.Select_Tracking_Event).click()
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_PackageType_Dropdown,this.testdata.packageType_Bidder_Credential_Package)
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_Carrier,this.testdata.Carrier_USPS)
                    await this.page.waitForTimeout(4000)
                    await this.page.locator(this.PersonalAccount_WebElements.Tracking_Number).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Tracking_Number).fill(this.testdata.Tracking_Number_Value)
                    await this.page.locator(this.PersonalAccount_WebElements.Save_Tracking).click();
                    await this.page.waitForTimeout(5000);
                    await this.page.screenshot({ path: './ScreenShot/USPS.png', fullPage: true})
                    await this.page.locator(this.PersonalAccount_WebElements.Close_Tracking).click()
                    await this.page.waitForTimeout(2000)

                    //UPS
                    await this.page.locator(this.PersonalAccount_WebElements.Create_Package).click()
                    await this.page.waitForTimeout(1000)
                    await this.page.locator(this.PersonalAccount_WebElements.Event).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Event).fill(this.testdata.Event_name)
                    await this.page.waitForTimeout(6000)
                    await this.page.locator(this.PersonalAccount_WebElements.Select_Tracking_Event).click()
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_PackageType_Dropdown,this.testdata.packageType_Bidder_Credential_Package)
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_Carrier,this.testdata.Carrier_UPS)
                    await this.page.waitForTimeout(4000)
                    await this.page.locator(this.PersonalAccount_WebElements.Tracking_Number).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Tracking_Number).fill(this.testdata.Tracking_Number_Value)
                    await this.page.locator(this.PersonalAccount_WebElements.Save_Tracking).click();
                    await this.page.waitForTimeout(5000);
                    await this.page.screenshot({ path: './ScreenShot/UPS.png', fullPage: true})
                    await this.page.locator(this.PersonalAccount_WebElements.Close_Tracking).click()
                    await this.page.waitForTimeout(2000)

    //New Address
                    await this.page.locator(this.PersonalAccount_WebElements.Create_Package).click();
                    await this.page.waitForTimeout(1000);

                    await this.page.locator(this.PersonalAccount_WebElements.Event).click();
                    await this.page.locator(this.PersonalAccount_WebElements.Event).fill(this.testdata.Event_name);
                    await this.page.waitForTimeout(6000);
                    await this.page.locator(this.PersonalAccount_WebElements.Select_Tracking_Event).click();
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_PackageType_Dropdown,this.testdata.packageType_Bidder_Credential_Package)
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_Carrier, this.testdata.Carrier_FedEx);
                    await this.page.waitForTimeout(4000);

                    await this.page.locator(this.PersonalAccount_WebElements.Recipient_Company_text).click();
                    await this.page.locator(this.PersonalAccount_WebElements.ImageType_Text).click()
                    await this.page.selectOption(this.PersonalAccount_WebElements.Select_ImageType_Dropdown,this.testdata.Image_Type_PDF);
                    
                    await this.page.locator(this.PersonalAccount_WebElements.Enter_New_Address).click();
                    await this.page.waitForTimeout(1000)
                    await this.page.locator(this.PersonalAccount_WebElements.Country_Name).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Country_Name).fill(this.testdata.Country_name)
                    await this.page.waitForTimeout(1000)
                    await this.page.locator(this.PersonalAccount_WebElements.Select_CountryName).click()

                    await this.page.locator(this.PersonalAccount_WebElements.AddressLine1).click()
                    await this.page.locator(this.PersonalAccount_WebElements.AddressLine1).fill(this.testdata.Street_Address)

                    await this.page.locator(this.PersonalAccount_WebElements.State_Name).click()
                    await this.page.locator(this.PersonalAccount_WebElements.State_Name).fill(this.testdata.State_name)
                    await this.page.waitForTimeout(1000)
                    await this.page.locator(this.PersonalAccount_WebElements.Select_StateName).click()

                    await this.page.locator(this.PersonalAccount_WebElements.Postal_Code).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Postal_Code).fill(this.testdata.Postal_code)

                    await this.page.locator(this.PersonalAccount_WebElements.City).click()
                    await this.page.locator(this.PersonalAccount_WebElements.City).fill(this.testdata.City_name)
                    await this.page.waitForTimeout(1000)
                    await this.page.screenshot({ path: './ScreenShot/NewAddressOnTracking.png', fullPage: true})
                    // await this.page.locator(this.PersonalAccount_WebElements.Weight).click();
                    // await this.page.locator(this.PersonalAccount_WebElements.Weight).fill(this.testdata.Weight_Value);

                    await this.page.locator(this.PersonalAccount_WebElements.Save_Tracking).click();
                    await this.page.waitForTimeout(5000);
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Tracking).click();
                    await this.page.waitForTimeout(5000);
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Tracking).click();
                    await this.page.waitForTimeout(5000);
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Tracking).click();
                    await this.page.waitForTimeout(1000);

                    // page.on('dialog', async (dialog) => {
                    // console.log(`Dialog message: ${dialog.message()}`);
                    // await dialog.accept(); // Accepts the alert
                    // });

                    // await this.page.locator(this.PersonalAccount_WebElements.Close_Tracking).click();
                    // await this.page.waitForTimeout(2000)
                    const [newPage] = await Promise.all([
                        this.page.context().waitForEvent('page'),
                        this.page.locator(this.PersonalAccount_WebElements.Print_Label).click()
                    ]);

                    await newPage.waitForLoadState('load');
                    await this.page.waitForTimeout(10000);
                    await newPage.close();
                    await this.page.bringToFront();

                    await this.page.locator(this.PersonalAccount_WebElements.Close_Tracking).click();
                    await this.page.waitForTimeout(2000)
    }
    async VIP_Print_Bidder_Aggreement()
    {
        await this.page.locator(this.PersonalAccount_WebElements.Details_Tab).click()
        await this.page.locator(this.PersonalAccount_WebElements.CustomerType_Field).click()
        await this.page.locator(this.PersonalAccount_WebElements.Toggle_DropDown).click()
        await this.page.locator(this.PersonalAccount_WebElements.VIP_Bidder).click()
        await this.page.locator(this.PersonalAccount_WebElements.VIP_Customer).click()
        await this.page.locator(this.PersonalAccount_WebElements.Toggle_DropDown).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.PersonalAccount_WebElements.Print_Bidder_Agreement).click()
        const frame1 = await this.page.frameLocator(this.PersonalAccount_WebElements.Iframe_Print_Bidder_Agreement)
        if(!frame1) throw new Error('Iframe not found')
        await this.page.waitForTimeout(2000)
        await frame1.locator(this.PersonalAccount_WebElements.Select_Event_Dropdown).click()
        await frame1.locator(this.PersonalAccount_WebElements.Select_Event_Dropdown).selectOption(this.testdata.Event_name)
        await frame1.locator(this.PersonalAccount_WebElements.Print_Button).click()
        await this.page.screenshot({ path: './ScreenShot/VIPCustomerPersonal.png', fullPage: true})
        await this.page.waitForTimeout(6000)

        await this.page.locator(this.PersonalAccount_WebElements.Print_Bidder_Agreement).click()
        const frame = await this.page.frameLocator(this.PersonalAccount_WebElements.Iframe_Print_Bidder_Agreement)
        if(!frame) throw new Error('Iframe not found')
        await this.page.waitForTimeout(2000)
        await frame.locator(this.PersonalAccount_WebElements.Select_Event_Dropdown).click()
        await frame.locator(this.PersonalAccount_WebElements.Select_Event_Dropdown).selectOption(this.testdata.Event_name)
        const Dealer_or_Business = frame.locator(this.PersonalAccount_WebElements.Select_Dealer_Business_Dropdown)
        //const Dealer_or_Business_Option2 = frame.locator(this.PersonalAccount_WebElements.Select_Option2)

        // Check if it's visible
        if (await Dealer_or_Business.isVisible()) 
            {
                console.log('Option 2 is present. Clicking it...');
                await Dealer_or_Business.click();
                await Dealer_or_Business.selectOption({ index: 1 });
            } 
        else 
            {
                console.log('Option 2 is NOT present. Skipping...');
            }

        //print Bidder Aggreement Download file
                // const path1 = require('path');  
                // const fs1 = require('fs');
                // const downloadDir1 = path1.join(__dirname, 'Download');
                // if (!fs1.existsSync(downloadDir1)) {
                //     fs1.mkdirSync(downloadDir1);
                //   }
               // const downloadPromise1 = this.page.waitForEvent('download',{ timeout: 60000 })
                await frame.locator(this.PersonalAccount_WebElements.Print_Button).click()
                await this.page.screenshot({ path: './ScreenShot/VIPCUstomerCompany.png', fullPage: true})
                await this.page.waitForTimeout(6000)
                // const download1 = await downloadPromise1
                // const downloadPath1 = path1.join(downloadDir1, download1.suggestedFilename());
                // await download1.saveAs(downloadPath1)
        
    }
        async Automobilia_Print_Bidder_Aggreement()
    {
        await this.page.locator(this.PersonalAccount_WebElements.Details_Tab).click()
        await this.page.locator(this.PersonalAccount_WebElements.CustomerType_Field).click()
        await this.page.locator(this.PersonalAccount_WebElements.Toggle_DropDown).click()
        await this.page.locator(this.PersonalAccount_WebElements.Automobilia_Bidder).click()
        await this.page.locator(this.PersonalAccount_WebElements.Toggle_DropDown).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.PersonalAccount_WebElements.Print_Bidder_Agreement).click()
        const frame1 = await this.page.frameLocator(this.PersonalAccount_WebElements.Iframe_Print_Bidder_Agreement)
        if(!frame1) throw new Error('Iframe not found')
        await this.page.waitForTimeout(2000)
        await frame1.locator(this.PersonalAccount_WebElements.Select_Event_Dropdown).click()
        await frame1.locator(this.PersonalAccount_WebElements.Select_Event_Dropdown).selectOption(this.testdata.Event_name)
        await frame1.locator(this.PersonalAccount_WebElements.Print_Button).click()
        await this.page.screenshot({ path: './ScreenShot/AutomobiliaCustomerPersonal.png', fullPage: true})
        await this.page.waitForTimeout(6000)

        await this.page.locator(this.PersonalAccount_WebElements.Print_Bidder_Agreement).click()
        const frame = await this.page.frameLocator(this.PersonalAccount_WebElements.Iframe_Print_Bidder_Agreement)
        if(!frame) throw new Error('Iframe not found')
        await this.page.waitForTimeout(2000)
        await frame.locator(this.PersonalAccount_WebElements.Select_Event_Dropdown).click()
        await frame.locator(this.PersonalAccount_WebElements.Select_Event_Dropdown).selectOption(this.testdata.Event_name)
        const Dealer_or_Business = frame.locator(this.PersonalAccount_WebElements.Select_Dealer_Business_Dropdown)
        //const Dealer_or_Business_Option2 = frame.locator(this.PersonalAccount_WebElements.Select_Option2)

        // Check if it's visible
        if (await Dealer_or_Business.isVisible()) 
            {
                console.log('Option 2 is present. Clicking it...');
                await Dealer_or_Business.click();
                await Dealer_or_Business.selectOption({ index: 1 });
            } 
        else 
            {
                console.log('Option 2 is NOT present. Skipping...');
            }


        //print Bidder Aggreement Download file
                // const path1 = require('path');  
                // const fs1 = require('fs');
                // const downloadDir1 = path1.join(__dirname, 'Download');
                // if (!fs1.existsSync(downloadDir1)) {
                //     fs1.mkdirSync(downloadDir1);
                //   }
               // const downloadPromise1 = this.page.waitForEvent('download',{ timeout: 60000 })
                await frame.locator(this.PersonalAccount_WebElements.Print_Button).click()
                await this.page.screenshot({ path: './ScreenShot/AutomobiliaCustomerCompany.png', fullPage: true})
                await this.page.waitForTimeout(6000)
                // const download1 = await downloadPromise1
                // const downloadPath1 = path1.join(downloadDir1, download1.suggestedFilename());
                // await download1.saveAs(downloadPath1)
        
    }
    async RegularAccount_Print_Bidder_Aggreement()
    {
        await this.page.locator(this.PersonalAccount_WebElements.Details_Tab).click()
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.PersonalAccount_WebElements.Print_Bidder_Agreement).click()
        const frame1 = await this.page.frameLocator(this.PersonalAccount_WebElements.Iframe_Print_Bidder_Agreement)
        if(!frame1) throw new Error('Iframe not found')
        await this.page.waitForTimeout(2000)
        await frame1.locator(this.PersonalAccount_WebElements.Select_Event_Dropdown).click()
        await frame1.locator(this.PersonalAccount_WebElements.Select_Event_Dropdown).selectOption(this.testdata.Event_name)
        await frame1.locator(this.PersonalAccount_WebElements.Print_Button).click()
        await this.page.screenshot({ path: './ScreenShot/ReglarAccountwithPersonal.png', fullPage: true})
        await this.page.waitForTimeout(6000)

        await this.page.locator(this.PersonalAccount_WebElements.Print_Bidder_Agreement).click()
        const frame = await this.page.frameLocator(this.PersonalAccount_WebElements.Iframe_Print_Bidder_Agreement)
        if(!frame) throw new Error('Iframe not found')
        await this.page.waitForTimeout(2000)
        await frame.locator(this.PersonalAccount_WebElements.Select_Event_Dropdown).click()
        await frame.locator(this.PersonalAccount_WebElements.Select_Event_Dropdown).selectOption(this.testdata.Event_name)
        const Dealer_or_Business = frame.locator(this.PersonalAccount_WebElements.Select_Dealer_Business_Dropdown)
        //const Dealer_or_Business_Option2 = frame.locator(this.PersonalAccount_WebElements.Select_Option2)

        // Check if it's visible
        if (await Dealer_or_Business.isVisible()) 
            {
                console.log('Option 2 is present. Clicking it...');
                await Dealer_or_Business.click();
                await Dealer_or_Business.selectOption({ index: 1 });
            } 
        else 
            {
                console.log('Option 2 is NOT present. Skipping...');
            }

        //print Bidder Aggreement Download file
                // const path1 = require('path');  
                // const fs1 = require('fs');
                // const downloadDir1 = path1.join(__dirname, 'Download');
                // if (!fs1.existsSync(downloadDir1)) {
                //     fs1.mkdirSync(downloadDir1);
                //   }
               // const downloadPromise1 = this.page.waitForEvent('download',{ timeout: 60000 })
                await frame.locator(this.PersonalAccount_WebElements.Print_Button).click()
                await this.page.screenshot({ path: './ScreenShot/ReglarAccountwithDealer/Business.png', fullPage: true})
                await this.page.waitForTimeout(6000)
                // const download1 = await downloadPromise1
                // const downloadPath1 = path1.join(downloadDir1, download1.suggestedFilename());
                // await download1.saveAs(downloadPath1)
        
    }
 };
