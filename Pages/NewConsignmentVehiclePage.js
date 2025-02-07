import { expect } from '@playwright/test'
import { TestData } from '../TestData/testdata.js';
import { NewConsignmentVehicle_WebElement } from '../WebElements/NewConsignmentVehicle_WebElements.js';
import { PersonalAccountPage } from '../Pages/PersonalAccountPage.js'  
exports.NewConsignmentVehiclePage =
class NewConsignmentVehiclePage
{
    constructor(page)
    {
        this.page = page
        this.testdata = new TestData()
        this.newconsignmentvehicle_webelement = new NewConsignmentVehicle_WebElement()
    }
    async newcon()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.New_Consignment_opportunity_btn).click({ timeout: 60000 })
        //await this.page.waitForTimeout(4000)
    }
    async vehicledeatails()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Vehicle_field).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.New_Vehicle_link).click()
        //await this.page.locator(this.newconsignmentvehicle_webelement.New_Vehicle_link).press('Enter');

       // let GlobalUserData = {}; // Declare the global object first
        // Create a random object (JavaScript has a built-in Random function)
   function generateRandomString(length) {
       const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
       let result = '';
       for (let i = 0; i < length; i++) {
           result += chars.charAt(Math.floor(Math.random() * chars.length));
       }
       return result;
   }

   // Generate random first and last names (e.g., 5-10 characters each)
   const randomVin = generateRandomString(Math.floor(Math.random() * (36-34)) + 15);
   

   const VinNumber =randomVin;

   // Store the values (example, assuming GlobalUserData is a global object)
  //GlobalUserData = { vin: VinNumber};

   // Locate the input fields for first and last names (using selectors)
   //const VinField = await this.page.locator(this.newconsignmentvehicle_webelement.Vin);  
   

   // Fill the form fields with the generated names
   //await this.page.locator(this.email_webelement.Email).fill(this.emailid)
   await this.page.locator(this.newconsignmentvehicle_webelement.Vin).click()
   await this.page.locator(this.newconsignmentvehicle_webelement.Vin).fill(VinNumber)
        await this.page.locator(this.newconsignmentvehicle_webelement.Year).fill(this.testdata.Vehicle_Year)
        await this.page.locator(this.newconsignmentvehicle_webelement.Make_field).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Make_field).fill(this.testdata.Vehicle_Make)
        await this.page.locator(this.newconsignmentvehicle_webelement.Select_Make).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Model_field).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Model_field).fill(this.testdata.Vehicle_Model)
        await this.page.locator(this.newconsignmentvehicle_webelement.Select_Model).click()
        await this.page.selectOption(this.newconsignmentvehicle_webelement.Transmission_Type_dropdown,this.testdata.Vehicle_TransmissionType)
        await this.page.selectOption(this.newconsignmentvehicle_webelement.Transmission_Speed_dropdown,this.testdata.Vehicle_TransmissionSpeed)
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
    }
    async Account()
    {
        // const personalAccountPage = new PersonalAccountPage();  // Create an instance of PersonalAccountPage
        // const userData = await personalAccountPage.names(); // Get the user data

        // const firstName = userData.FirstName;
        // const lastName = userData.LastName;
        // await this.page.locator(this.newconsignmentvehicle_webelement.Responsible_Account).fill(firstName+" "+ lastName)

        //For personal no need to enter firstname and last name
            // await this.page.locator(this.newconsignmentvehicle_webelement.Responsible_Account).fill(this.testdata.FirstName+" "+ this.testdata.LastName)
            // await this.page.locator(this.newconsignmentvehicle_webelement.Responsible_Account_dropdown).click({ timeout: 60000 })
    }
    async Account_Address()
    {
        //await this.page.locator(this.newconsignmentvehicle_webelement.Event_name).scrollIntoView()
        //await this.page.locator(this.newconsignmentvehicle_webelement.Event_text).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Account_Address).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Account_Address).fill(this.testdata.Account_Address)
        await this.page.locator(this.newconsignmentvehicle_webelement.Account_Address_dropdown).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Title_To).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Title_To).fill(this.testdata.personal_TitleTo)
    }
    async Appilication_Info()
    {
       // await this.page.locator(this.newconsignmentvehicle_webelement.Event_name).scrollIntoViewIfNeeded({ force: true }) 
        await this.page.locator(this.newconsignmentvehicle_webelement.Event_name).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Event_name).fill(this.testdata.Event_name)
        await this.page.locator(this.newconsignmentvehicle_webelement.Event_Name_dropdown).click()
    }
    async SaleDay()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Sale_Day_Tab).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Time_on_Block).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Time_on_Block_minutes).click()
    }
    async Assign()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To_Inputfield).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To_Inputfield).press('Enter');
        await this.page.locator(this.newconsignmentvehicle_webelement.Assign_To_Specialist_dropdown).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.save_consignment).click()
        await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click({ timeout: 60000 }) 

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
            "DYNO Sheet" :    "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Dyno.jpg"
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
                    await this.page.locator(this.newconsignmentvehicle_webelement.Vehicledoc_Refresh).click()
             }
    }
    async UploadPhoto()
    {
        await this.page.locator(this.newconsignmentvehicle_webelement.Photo_Tab).click()

        const fileToUpload = 
        [
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\front.jpg",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\rare.jpg",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\side.jpg",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\interior.jpg",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\engine.jpg",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\vin.jpeg",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\odometer.jpg",
            "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\LIEN Release.jpg"
        ]
                   // await this.page.waitForTimeout(2000)                   
                    const frame = await this.page.frameLocator(this.newconsignmentvehicle_webelement.Photo_frame)
                    if(!frame) throw new Error('Iframe not found')
                    await frame.locator(this.newconsignmentvehicle_webelement.plus_Add_Photo_btn).click()
                    await frame.locator(this.newconsignmentvehicle_webelement.Upload_photo_input).setInputFiles(fileToUpload)
                    await frame.locator(this.newconsignmentvehicle_webelement.Upload_photo_btn).click()
                    await this.page.waitForTimeout(12000)
                    await frame.locator(this.newconsignmentvehicle_webelement.Cross_mark).click()
                    await frame.locator(this.newconsignmentvehicle_webelement.Refresh_btn).click()
                    await this.page.waitForTimeout(2000)
                    //await frame.locator(this.newconsignmentvehicle_webelement.scroll_allphoto).scrollIntoViewIfNeeded()
                    await this.page.locator(this.newconsignmentvehicle_webelement.Marketing_Tab).click()
                    await this.page.locator(this.newconsignmentvehicle_webelement.ShortDescription).fill(this.testdata.ShortDescriptionText)
                    await this.page.locator(this.newconsignmentvehicle_webelement.LongDescription).fill(this.testdata.LongDescriptionText)
                    await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click()
                    await this.page.locator(this.newconsignmentvehicle_webelement.Marketing_Tab).click()

    }
    async RibbonLevel()
    {
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
                const dialogPromise = this.page.waitForEvent('dialog');
                await frame.locator(this.newconsignmentvehicle_webelement.submitbtn).click();
                const dialog = await dialogPromise;
                await dialog.accept();

                await this.page.locator(this.newconsignmentvehicle_webelement.PrintAll).click()
                await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click()

                await this.page.locator(this.newconsignmentvehicle_webelement.WordTemplate).click()
                await this.page.locator(this.newconsignmentvehicle_webelement.PrintConsignmentForm).click()
                await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click()

                await this.page.locator(this.newconsignmentvehicle_webelement.Integration_Tab).click()
                await this.page.waitForTimeout(3000)
                await this.page.locator(this.newconsignmentvehicle_webelement.Refresh_consignment).click()

   }

}