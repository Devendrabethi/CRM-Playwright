import { expect } from '@playwright/test'
import { TestData } from '../TestData/testdata.js';
import { NewConsignmentVehicle_WebElement } from '../WebElements/NewConsignmentVehicle_WebElements.js';
import { LotNumberChange_WebElements } from '../WebElements/LotNumberChange_WebElements' 
import { BidderOpportunity_WebElements } from '../WebElements/BidderOpportunity_WebElements'  
import { PersonalAccountPage } from '../Pages/PersonalAccountPage.js'  
exports.NewConsignmentVehiclePage =
class NewConsignmentVehiclePage
{
    constructor(page)
    {
        this.page = page
        this.testdata = new TestData()
        this.newconsignmentvehicle_webelement = new NewConsignmentVehicle_WebElement()
        this.lotnumberchange_webElements = new LotNumberChange_WebElements(); // Initialize Locators class
        this.bidderopportunity_webelements = new BidderOpportunity_WebElements()
    }
    async newcon()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.NewOpportunity_Button).click({ timeout: 60000 })   
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.New_Consignment_opportunity_btn).click({ timeout: 60000 })
        //await this.page.waitForTimeout(4000)
    }
    async vehicledeatails()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Vehicle_field).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.New_Vehicle_link).click()
        //await this.page.locator(this.newconsignmentvehicle_webelement.New_Vehicle_link).press('Enter');

            function generateRandomString(length) {
                const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
                let result = '';
                for (let i = 0; i < length; i++) {
                    result += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return result;
            }
            const randomVin = generateRandomString(Math.floor(Math.random() * (36-34)) + 15);
            

            const VinNumber =randomVin;
        await this.page.locator(this.newconsignmentvehicle_webelement.Vin).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Vin).fill(VinNumber)

        const randomYear = this.testdata.vehicleYears[ Math.floor(Math.random() * this.testdata.vehicleYears.length)]
        await this.page.fill(this.newconsignmentvehicle_webelement.Year, randomYear);

        //await this.page.locator(this.newconsignmentvehicle_webelement.Year).fill(this.testdata.Vehicle_Year)
        await this.page.locator(this.newconsignmentvehicle_webelement.Make_field).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Make_field).fill(this.testdata.Vehicle_Make)
        await this.page.locator(this.newconsignmentvehicle_webelement.Select_Make).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Model_field).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Model_field).fill(this.testdata.Vehicle_Model)
        await this.page.locator(this.newconsignmentvehicle_webelement.Select_Model).click()
        await this.page.selectOption(this.newconsignmentvehicle_webelement.Transmission_Type_dropdown,this.testdata.Vehicle_TransmissionType)
        await this.page.selectOption(this.newconsignmentvehicle_webelement.Transmission_Speed_dropdown,this.testdata.Vehicle_TransmissionSpeed)
        await this.page.screenshot({ path: './ScreenShot/31 QuickCreateVehicle.png', fullPage: true})
        try
        {
            await this.page.locator(this.newconsignmentvehicle_webelement.Save_and_Close_btn).click();
        }
       catch(error)
       {
        await this.page.locator(this.newconsignmentvehicle_webelement.CloseQuiclCreateVehicle).click();
        await this.page.locator(this.newconsignmentvehicle_webelement.SaveandContinuePopUp).click();
        await this.page.locator(this.newconsignmentvehicle_webelement.OkPopup).click();
       }
        await this.page.waitForTimeout(2000)
    }

    async Mileage()
    {
        await this.page.selectOption(this.newconsignmentvehicle_webelement.Odometer_Type_dropdown,this.testdata.Odometer_Type)
        await this.page.locator(this.newconsignmentvehicle_webelement.Description_Mileage).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Description_Mileage).fill(this.testdata.Odometeer_mileage)
    }
    async SaleDetails()
    {
        await this.page.selectOption(this.newconsignmentvehicle_webelement.Sale_Type_dropdown,this.testdata.Sale_Type)
        await this.page.locator(this.newconsignmentvehicle_webelement.Owner_Estimate_value).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Owner_Estimate_value).fill(this.testdata.Owner_Est_Value)
        await this.page.locator(this.newconsignmentvehicle_webelement.Bjack_value).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Bjack_value).fill(this.testdata.Bjack_value)
        await this.page.screenshot({ path: './ScreenShot/32 SaleDetails.png', fullPage: true})
    }
    async Account()
    {

    }
    async Account_Address()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Account_Address).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Account_Address).fill(this.testdata.Account_Address)
        await this.page.locator(this.newconsignmentvehicle_webelement.Account_Address_dropdown).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Title_To).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Title_To).fill(this.testdata.personal_TitleTo)
        await this.page.waitForTimeout(1000)
        await this.page.screenshot({ path: './ScreenShot/33 AccountAddress.png', fullPage: true})
        await this.page.locator(this.newconsignmentvehicle_webelement.Status_Text).click() 
        await this.page.waitForTimeout(2000)
    }
    async Appilication_Info()
    {
       // await this.page.locator(this.newconsignmentvehicle_webelement.Event_name).scrollIntoViewIfNeeded({ force: true }) 
        await this.page.locator(this.newconsignmentvehicle_webelement.Event_name).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Event_name).fill(this.testdata.Event_name)
        await this.page.locator(this.newconsignmentvehicle_webelement.Event_Name_dropdown).click()
    }
    async Consignment_Representative()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Representative_Consignment_name).click()
        //await this.page.keyboard.press('Enter');
        await this.page.locator(this.newconsignmentvehicle_webelement.Representative_Consignment_name).fill(this.testdata.Consignment_representative)
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Representative_consignment_dropdown).click()
        await this.page.screenshot({ path: './ScreenShot/33.1 Consignment representative.png', fullPage: true})
    }

    async Assign()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To_Inputfield).click()
        await this.page.keyboard.press('Enter');
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To_Specialist_dropdown).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.save_consignment).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click({ timeout: 60000 }) 
        await this.page.screenshot({ path: './ScreenShot/33.2 Assigned to specliast .png', fullPage: true})

    }
    async MarketingTab()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Marketing_Tab).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.ShortDescription).fill(this.testdata.ShortDescriptionText)
        await this.page.locator(this.newconsignmentvehicle_webelement.LongDescription).fill(this.testdata.LongDescriptionText)
        await this.page.screenshot({ path: './ScreenShot/34 ShortLongDesc.png', fullPage: true})
        await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Marketing_Tab).click()
    }
    async ConsVehicleDoc()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Documentation_Tab).click()

        const fileToUpload = 
        {
            "Title Front" :      "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Front title.jpg",
            "Title Back" :    "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Back Titile.jpg",
            "Registration" :   "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Registration.png",
            "NMVITS Report" :          "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\NVIT.png",
            "CarFax" :           "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\CarFax.jpg",
            "Consignment Agreement" :      "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\consignment agreement.jpg",
            "VIN Decode" :    "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\vinpicture.jpg",
            "LIEN Release" :   "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\LIEN Release.jpg",
            "Power of Attorney" :          "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Power of Attorney.jpg",
            "Title Reassignment" :           "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Title Reassignment.jpg",
            "VIN History" :      "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\VIN History.jpg",
            "DYNO Sheet" :    "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Dyno.jpg",
            "Vehicle Contract":  "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\CarFax.jpg"
        }
        for (const [documentType, documentPath] of Object.entries(fileToUpload))
             {
                   // await this.page.waitForTimeout(2000)
                    await this.page.locator(this.newconsignmentvehicle_webelement.Vehicle_Add_Document_btn).click()
                    const frame = await this.page.frameLocator(this.newconsignmentvehicle_webelement.frame)
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
                    await this.page.locator(this.newconsignmentvehicle_webelement.Vehicledoc_Refresh).click({timeout:60000})
                    await this.page.screenshot({ path: './ScreenShot/35 VehicleDocuments.png', fullPage: true})
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
                    const frame = await this.page.frameLocator(this.newconsignmentvehicle_webelement.Photo_frame)
                    if(!frame) throw new Error('Iframe not found')
                    await this.page.waitForTimeout(6000)
                    await frame.locator(this.newconsignmentvehicle_webelement.plus_Add_Photo_btn).click()
                    await this.page.waitForTimeout(2000)
                    await frame.locator(this.newconsignmentvehicle_webelement.Upload_photo_input).setInputFiles(fileToUpload)
                    await frame.locator(this.newconsignmentvehicle_webelement.Upload_photo_btn).click()
                    //await this.page.waitForTimeout(12000)
                    await this.page.screenshot({ path: './ScreenShot/36 UploadPhotos.png', fullPage: true})
                    await frame.locator(this.newconsignmentvehicle_webelement.Cross_mark).click({timeout:90000})
                    await frame.locator(this.newconsignmentvehicle_webelement.Refresh_btn).click()
                    await this.page.waitForTimeout(4000)  
                    await frame.locator(this.newconsignmentvehicle_webelement.scroll_allphoto).click()
                    await this.page.waitForTimeout(8000)   
                      //Photos Download file
                    const path1 = require('path');  
                    const fs1 = require('fs');
                    const downloadDir1 = path1.join(__dirname, 'Download');
                    if (!fs1.existsSync(downloadDir1)) 
                        {
                           fs1.mkdirSync(downloadDir1);
                        }
                    const downloadPromise1 = this.page.waitForEvent('download')
                    await frame.locator(this.newconsignmentvehicle_webelement.SelectAll_AllPhotos_Interior).click({timeout:60000})
                    await frame.locator(this.newconsignmentvehicle_webelement.Download_Photos).click()
                    const download1 = await downloadPromise1
                    const downloadPath1 = path1.join(downloadDir1, download1.suggestedFilename());
                    await download1.saveAs(downloadPath1)
                    await this.page.locator(this.newconsignmentvehicle_webelement.Okbutton).click({timeout:60000})
                    await this.page.waitForTimeout(3000)
                    await frame.locator(this.newconsignmentvehicle_webelement.Delect_Photo).click()
                    await this.page.locator(this.newconsignmentvehicle_webelement.Okbutton).click({timeout:60000})
                    await this.page.waitForTimeout(20000)
                    await frame.locator(this.newconsignmentvehicle_webelement.SelectAll_AllPhotos_Exterior).click({timeout:60000})
                    await frame.locator(this.newconsignmentvehicle_webelement.AccepttoMisc_Exterior).click({timeout:60000})
                    await this.page.waitForTimeout(25000)
                    await frame.locator(this.newconsignmentvehicle_webelement.SelectAll_Misc).click({timeout:60000})
                    await this.page.waitForTimeout(3000)
                    await frame.locator(this.newconsignmentvehicle_webelement.Remove_AllMiscPhotos).click({timeout:60000})
                    await this.page.waitForTimeout(25000)
                    await frame.locator(this.newconsignmentvehicle_webelement.Scroll_Exterior).click()
                    await this.page.waitForTimeout(3000)
    }
    async ComparisionTab()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.ComparisionTab).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Additoinal_Source_button).click()
        await this.page.waitForTimeout(2000)
        await this.page.selectOption(this.newconsignmentvehicle_webelement.Select_Source,this.testdata.Source_Barrett_Jackson)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Event).fill(this.testdata.Event_name)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Lot).press('Tab')
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Lot).fill(this.testdata.lotabsentee)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Hammer).press('Tab')
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Hammer).type(this.testdata.Source_Hammer)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.AdditionalSource_text).press('Tab')
        await this.page.locator(this.newconsignmentvehicle_webelement.AdditionalSource_text).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Save).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_SaveClose).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Additoinal_Source_button).click()
        await this.page.selectOption(this.newconsignmentvehicle_webelement.Select_Source,this.testdata.Source_BaT)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Date).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.source_CurrentDate).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Lot).press('Tab')
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Lot).fill(this.testdata.lotabsentee)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_SalePrice).press('Tab')
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_SalePrice).fill(this.testdata.Source_SalePrice)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.AdditionalSource_text).press('Tab')
        await this.page.locator(this.newconsignmentvehicle_webelement.AdditionalSource_text).click()
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Save).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_SaveClose).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Additoinal_Source_button).click()
        await this.page.selectOption(this.newconsignmentvehicle_webelement.Select_Source,this.testdata.Source_Hagerty)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Good).fill(this.testdata.Source_Good)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Fair).fill(this.testdata.Source_Fair)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Excellect).fill(this.testdata.Source_Excellent)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Concours).fill(this.testdata.Source_Concours)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Save).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_SaveClose).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Additoinal_Source_button).click()
        await this.page.selectOption(this.newconsignmentvehicle_webelement.Select_Source,this.testdata.Source_NADA)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Low).fill(this.testdata.Source_Low)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Avg).fill(this.testdata.Source_Avg)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_High).fill(this.testdata.Source_High)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Save).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_SaveClose).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Additoinal_Source_button).click()
        await this.page.selectOption(this.newconsignmentvehicle_webelement.Select_Source,this.testdata.Source_CPI)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Fair).fill(this.testdata.Source_Fair)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Good).fill(this.testdata.Source_Good)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Excellect).fill(this.testdata.Source_Excellent)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Save).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_SaveClose).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Additoinal_Source_button).click()
        await this.page.selectOption(this.newconsignmentvehicle_webelement.Select_Source,this.testdata.Source_HIBID)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Auction).fill(this.testdata.Source_Auction)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Date).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.source_CurrentDate).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.SOurce_Price).press('Tab')
        await this.page.locator(this.newconsignmentvehicle_webelement.SOurce_Price).fill(this.testdata.Source_Price)
        await this.page.locator(this.newconsignmentvehicle_webelement.AdditionalSource_text).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Save).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_SaveClose).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Additoinal_Source_button).click()
        await this.page.selectOption(this.newconsignmentvehicle_webelement.Select_Source,this.testdata.Source_Other)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_SourceType).fill(this.testdata.Event_name)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Year).fill(this.testdata.Source_Year)
        await this.page.locator(this.newconsignmentvehicle_webelement.Sorce_Value).press('Tab')
        await this.page.locator(this.newconsignmentvehicle_webelement.Sorce_Value).fill(this.testdata.Source_Value)
        await this.page.waitForTimeout(500)
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_Save).click()
        await this.page.screenshot({ path: './ScreenShot/37 ComparisionTab.png', fullPage: true})
        await this.page.locator(this.newconsignmentvehicle_webelement.Source_SaveClose).click()

    }
    async TaskTab()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.TaskTab).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.TaskRefresh).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.SelectAllTaskRadiobtn).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.MarkComplete).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.TaskRefresh).click({timeout:60000})
        await this.page.screenshot({ path: './ScreenShot/38 TaskTab.png', fullPage: true})
        await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click()
    }
    async ApplicationStatus()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Sale_details_Text).click() 
        await this.page.locator(this.newconsignmentvehicle_webelement.Comp_Value).type(this.testdata.Bjack_value)
        await this.page.locator(this.newconsignmentvehicle_webelement.Account_Text).press('Tab') 
        await this.page.locator(this.newconsignmentvehicle_webelement.Appilication_Text).click() 
        await this.page.locator(this.newconsignmentvehicle_webelement.Consignment_Review_Toggle).click() 
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Photo_Approval_Toggle).click() 
        await this.page.screenshot({ path: './ScreenShot/39 ApplicationStatus.png', fullPage: true})
        await this.page.locator(this.newconsignmentvehicle_webelement.OkButton_PhotoApproval).click() 
        await this.page.waitForTimeout(3000)
    }

    async ActivitiesTab()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.ActivitiesTab).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.PlusbtnActivity).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.newconsignmentvehicle_webelement.EmailActivity).click()
        await this.page.waitForTimeout(8000)
        //Nested Frames inside 2nd frame we have text field
        const frame2 = await this.page.frameLocator(this.newconsignmentvehicle_webelement.FrameActivity)
        const frame3 = await frame2.frameLocator(this.newconsignmentvehicle_webelement.FrameActivity1)
        await frame3.locator(this.newconsignmentvehicle_webelement.EnterTextActivity).click();
          
        await frame3.locator(this.newconsignmentvehicle_webelement.EnterTextActivity).fill(this.testdata.SendActivityText)
        await this.page.locator(this.newconsignmentvehicle_webelement.SendActivity).click()
        await this.page.waitForTimeout(6000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click()
    }
    async RibbonLevel()
    {
//Lot Assign
        await this.page.locator(this.newconsignmentvehicle_webelement.LotAssign).click()
        await this.page.waitForTimeout(5000)
        const Lotframe = await this.page.frameLocator(this.lotnumberchange_webElements.Frame_LotAssign)
        if(!Lotframe) throw new Error('Iframe not found')
        await Lotframe.locator(this.lotnumberchange_webElements.New_LotNumber).fill(this.testdata.NewLotNumber)
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
            await this.page.screenshot({ path: './ScreenShot/102 LotOvverrideConfirmation.png', fullPage: true})
            await Lotframe.locator(this.lotnumberchange_webElements.Save_Button).click();
            await this.page.waitForTimeout(25000);

//Request Information

        await this.page.locator(this.newconsignmentvehicle_webelement.reqinforbtn).click()
        const frame = await this.page.frameLocator(this.newconsignmentvehicle_webelement.reqinforframe)
        if(!frame) throw new Error('Iframe not found')
            await frame.locator(this.newconsignmentvehicle_webelement.selectvehiclephotoreq).selectOption([
                { label: 'Front 3/4 Photo' },
                { label: 'Rear 3/4 Photo' },
                { label: 'Side Profile Photo' },
                { label: 'Interior Photo' },
                { label: 'Engine Photo' },
                { label: 'VIN Photo' },
                { label: 'Odometer Photo' }
              ]);
              await frame.locator(this.newconsignmentvehicle_webelement.selectconsigndoc).selectOption([
                { label: 'Title Front' },
                { label: 'Title Back' },
                { label: 'Registration' }
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
              await frame.locator(this.bidderopportunity_webelements.selectNote).fill(this.testdata.CustomerName);
              await this.page.screenshot({ path: './ScreenShot/103 ReqInformation.png', fullPage: true})
                const dialogPromise = this.page.waitForEvent('dialog',{ timeout: 75000 });
                await frame.locator(this.newconsignmentvehicle_webelement.submitbtn).click();
                const dialog = await dialogPromise;
                await dialog.accept();

//Consignment Print Contract
                await this.page.locator(this.bidderopportunity_webelements.Print_Contract).click()
               // await this.page.waitForTimeout(2000)
                await this.page.locator(this.bidderopportunity_webelements.Print).click()
                await this.page.waitForTimeout(2000)
                try
                {
                            this.page.on('dialog', async (dialog) => {
                            console.log(`Dialog message: ${dialog.message()}`);
                            await dialog.accept(); // Accept the alert
                            });
                             await this.page.waitForTimeout(1000)
                             await this.page.locator(this.bidderopportunity_webelements.Save_btn).click();
                             await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click({timeout:60000})
                }
                catch(error)
                {
                        await this.page.locator(this.bidderopportunity_webelements.Save_btn).click({timeout:60000})
                        await this.page.waitForTimeout(1000)
                        await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click({timeout:60000})
                }
//Consignment Send Contract
                await this.page.locator(this.bidderopportunity_webelements.Send_Contract).click({timeout:60000})
                await this.page.locator(this.bidderopportunity_webelements.Send).click();
                try 
                {
                    this.page.on('dialog', async (dialog) => {
                            console.log(`Dialog message: ${dialog.message()}`);
                            //await dialog.accept(); // Accept the alert
                            });
                             await this.page.waitForTimeout(1000)
                  // Check if the Send_Agreement_Close button is present
                      await this.page.locator(this.bidderopportunity_webelements.Send_Agreement_Close).click({timeout:60000});
                    //  await this.page.waitForTimeout(2000);
                } 
              catch (error) 
              {
                     // await this.page.waitForTimeout(2000);
                     await this.page.screenshot({ path: './ScreenShot/104 SendContract.png', fullPage: true})
                      await this.page.locator(this.bidderopportunity_webelements.Okbtn).click({timeout:1000000});
                      await this.page.locator(this.bidderopportunity_webelements.Save_btn).click();
                     // await this.page.waitForTimeout(1000);
                      await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click();
                     // await this.page.waitForTimeout(1000);
              }      
//SalesFee                
        await this.page.locator(this.lotnumberchange_webElements.Opportunity_SalesFees_Tab).click({ timeout: 60000 });
        await this.page.waitForTimeout(5000)
        // await this.page.locator(this.lotnumberchange_webElements.Invoice_Tab).click()
        // await this.page.locator(this.lotnumberchange_webElements.Refresh_Invoice).click()
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
        await this.page.locator(this.lotnumberchange_webElements.Opportunity_SalesFees_Tab).click({timeout:60000})
        await this.page.screenshot({ path: './ScreenShot/105 LotProductTab.png', fullPage: true})
        await this.page.waitForTimeout(5000)
        // await this.page.locator(this.lotnumberchange_webElements.Invoice_Tab).click()
        // await this.page.waitForTimeout(5000)
        await this.page.locator(this.lotnumberchange_webElements.SelectInvoice).dblclick()
        await this.page.waitForTimeout(3000)
        await this.page.screenshot({ path: './ScreenShot/106 LotSaleFeesTab.png', fullPage: true})
        await this.page.locator(this.bidderopportunity_webelements.Payment_AdjustmentTab).click()
        await this.page.waitForTimeout(4000) 
        await this.page.locator(this.bidderopportunity_webelements.PaymentTable).dblclick()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.bidderopportunity_webelements.DetailsTab).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/63 PaymentTableWithPaymentCreated.png', fullPage: true})
        await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderopportunity_webelements.GoBack_btn).click()
        await this.page.waitForTimeout(3000)
        // await this.page.locator(this.lotnumberchange_webElements.SaveandClose).click()
        // await this.page.waitForTimeout(3000)
        await this.page.locator(this.lotnumberchange_webElements.Refresh_Button).click()

//Grevience
        await this.page.locator(this.bidderopportunity_webelements.New_Grievance).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.bidderopportunity_webelements.Note).fill(this.testdata.CustomerName);
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderopportunity_webelements.Save_btn).click()
        const fileToUpload1 =   "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\colorphoto.jpg"
        await this.page.setInputFiles(this.bidderopportunity_webelements.Upload_Photo, fileToUpload1);
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.bidderopportunity_webelements.SaveandClose_Grevience).click()
        await this.page.waitForTimeout(2000)

///Lot Cancel
        await this.page.locator(this.lotnumberchange_webElements.LotAssign).click()
        await Lotframe.locator(this.lotnumberchange_webElements.Select_StatusDropdown).selectOption(this.testdata.LotStatus_Cancel)
        await Lotframe.locator(this.lotnumberchange_webElements.Save_Button).click()
        this.page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        //await dialog.accept(); // Accept the alert
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
                            await this.page.locator(this.newconsignmentvehicle_webelement.PrintAll).click()           // addd ones confirm
                            await this.page.waitForTimeout(6000)
                // const download1 = await downloadPromise1
                // const downloadPath1 = path1.join(downloadDir1, download1.suggestedFilename());
                // await download1.saveAs(downloadPath1)

                // await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click()
                await this.page.locator(this.newconsignmentvehicle_webelement.WordTemplate).click({timeout:60000})
                
                 //print consignment form Download file
                const path2 = require('path');  
                const fs2 = require('fs');
                const downloadDir2 = path2.join(__dirname, 'Download');
                if (!fs2.existsSync(downloadDir2)) {
                    fs2.mkdirSync(downloadDir2);
                  }
                const downloadPromise2 = this.page.waitForEvent('download',{ timeout: 75000 })
                await this.page.locator(this.newconsignmentvehicle_webelement.PrintConsignmentForm).click()
                                await this.page.waitForTimeout(6000)
                const download2 = await downloadPromise2
                const downloadPath2 = path2.join(downloadDir2, download2.suggestedFilename());
                await download2.saveAs(downloadPath2)

                await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click()
   }
   async IntegrationTab()
   {
    await this.page.locator(this.newconsignmentvehicle_webelement.Integration_Tab).click()
    await this.page.waitForTimeout(4000)
    await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click()
   }

   async Ribbon_Consignment()
   {
        await this.page.locator(this.newconsignmentvehicle_webelement.Opportunity_button).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Consignments_Button).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.newconsignmentvehicle_webelement.ConsignmentType_Dropdown).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.FilterBy).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.FilterBy_Value).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Select_Vehicle).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Select_FilterBy_Text).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.newconsignmentvehicle_webelement.Apply_Button).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.newconsignmentvehicle_webelement.First_Consignment).dblclick()
        await this.page.waitForTimeout(10000)
   }

}