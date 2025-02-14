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
       // await page.click(this.PersonalAccount_WebElements.AccountType_Dropdown);
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
                const lastName = "Ind" + randomLastName;

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
        await this.page.locator(this.PersonalAccount_WebElements.Savebtn).click();
    }
    async personalAccountDocuments()
    {
        await this.page.locator(this.PersonalAccount_WebElements.Documents_Tab).click()
        const fileToUpload = 
        {
           // "Customer Photo" :      "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\colorphoto.jpg",
            "Driver's License" :    "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\license_09242024.jpg",
            "Trust Documents" :   "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\trust Doc.jpg",
            "Passport" :          "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\passport2.jpg",
            "Insurance" :           "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\insurance.jpg",
        }
        for (const [documentType, documentPath] of Object.entries(fileToUpload))
             {
                   // await this.page.waitForTimeout(2000)
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
                    //await this.page.screenshot({ path: './ScreenShot/AccountDocumentsPage.png', fullPage: true})

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
                               await frame.locator(this.PersonalAccount_WebElements.Upload_btn).click()
                               await this.page.locator(this.PersonalAccount_WebElements.Persondoc_Refresh).click()

                        }
                  
    }
 };
