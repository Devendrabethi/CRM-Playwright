import { expect } from '@playwright/test'
import { BusinessAccount_WebElements } from '../WebElements/BusinessAccount_WebElements.js'
import { PersonalAccount_WebElements } from '../WebElements/PersonalAccount_WebElements.js'  
import { DealerAccount_WebElements } from '../WebElements/DealerAccount_WebElements.js'
import { GlobalUserData } from './GlobalUserData.js';  // Import it when needed
import { TestData } from '../TestData/testdata.js';


exports.DealerAccountPage =
class DealerAccountPage
{
    constructor(page)
    {
        this.page = page
        this.PersonalAccount_WebElements =  new PersonalAccount_WebElements()
        this.testdata = new TestData()
        this.businessaccount_webelements =  new BusinessAccount_WebElements()
        this.dealeraccount_webelements =  new DealerAccount_WebElements()
    }

    async accounttype_dropdown()
    {
        await this.page.locator(this.dealeraccount_webelements.Createnewaccountbtn).click();
        await this.page.selectOption(this.dealeraccount_webelements.Account_Type_Dealer,this.testdata.Account_Type_Dealer);

        await this.page.locator(this.dealeraccount_webelements.Account_Type_Dealer).click(); // Open dropdown
        await this.page.selectOption(this.dealeraccount_webelements.Account_Type_Dealer,this.testdata.Account_Type_Dealer);
        //await this.page.locator(`text=${this.testdata.Account_Type_Dealer}`).click(); // Select the option
        
    }

   
    async  names()
                {
                let GlobalUserData = {}; // Declare the global object first
                // Create a random object (JavaScript has a built-in Random function)
           function generateRandomString(length)
            {
               const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
               let result = '';
               for (let i = 0; i < length; i++) 
                {
                   result += chars.charAt(Math.floor(Math.random() * chars.length));
                }
               return result;
           }
                    
                    // Generate random first and last names (e.g., 5-10 characters each)
                    const Dealername = generateRandomString(Math.floor(Math.random() * (16 - 5 + 1)) + 5);
                    
                    
                    const dealername ="Dealer" + Dealername;
                    
                    // Store the values (example, assuming GlobalUserData is a global object)
                    GlobalUserData = { dealernametext: dealername};
                    
                    // Locate the input fields for first and last names (using selectors)
                    const dealernameField = await this.page.locator(this.dealeraccount_webelements.Customer_Name_Dealer);  
                    
                    
                    // Fill the form fields with the generated names
                    //await this.page.locator(this.email_webelement.Email).fill(this.emailid)
                    await this.page.locator(this.dealeraccount_webelements.Customer_Name_Dealer).click()
                    await dealernameField.fill(dealername)

                await this.page.locator(this.dealeraccount_webelements.Dealer_Field_text).click();
                await this.page.locator(this.dealeraccount_webelements.Dealer_Number).click();
                await this.page.locator(this.dealeraccount_webelements.Dealer_Number).fill(this.testdata.Dealer_Number);
                await this.page.locator(this.dealeraccount_webelements.Dealer_TAXID).click();
                await this.page.locator(this.dealeraccount_webelements.Dealer_TAXID).fill(this.testdata.Dealer_TaxID_Number);

                await this.page.waitForTimeout(1000); 
                return GlobalUserData; // Return the object containing names
    }

    async save()
    {
        await this.page.locator(this.dealeraccount_webelements.Savebtn).click();
    }
    async personalAccountDocuments()
    {
        await this.page.locator(this.PersonalAccount_WebElements.Documents_Tab).click()
        const fileToUpload = 
        {
            "Dealer License" :      "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Dealer License.jpg",
            "Resale License" :    "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Resale License.jpg",
            "Operating Agreement" :   "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\operating agreement.jpg",
            "Verification of Ownership" :          "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Verification of Ownership.jpg",
            "Wholesale License" :           "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Wholesale.jpg",
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
                  
    }
    async RelatedAccount()
    {
        await this.page.locator(this.dealeraccount_webelements.Related_Accounts_tab).click();
        await this.page.locator(this.dealeraccount_webelements.threedotbtn).click();
        await this.page.locator(this.dealeraccount_webelements.Add_Existing_Account).click();
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.dealeraccount_webelements.FirstAccount_Realting).click();
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.dealeraccount_webelements.Add_btn).click();
        await this.page.locator(this.dealeraccount_webelements.RealtedAccount_More_option).click();
        await this.page.locator(this.dealeraccount_webelements.Related_Accounts_refresh).click();
    }

 };
