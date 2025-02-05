import { expect } from '@playwright/test'
import { BusinessAccount_WebElements } from '../WebElements/BusinessAccount_WebElements'
import { PersonalAccount_WebElements } from '../WebElements/PersonalAccount_WebElements'  
import { GlobalUserData } from './GlobalUserData.js';  // Import it when needed
import { TestData } from '../TestData/testdata.js';


exports.BusinessAccountPage =
class BusinessAccountPage
{
    constructor(page)
    {
        this.page = page
        this.PersonalAccount_WebElements =  new PersonalAccount_WebElements()
        this.testdata = new TestData()
        this.businessaccount_webelements =  new BusinessAccount_WebElements()
    }

    async accounttype_dropdown()
    {
        await this.page.locator(this.businessaccount_webelements.Createnewaccountbtn).click();
        await this.page.selectOption(this.PersonalAccount_WebElements.AccountType_Dropdown,this.testdata.Account_Type_Business);      
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
                    const Businessname = generateRandomString(Math.floor(Math.random() * (16 - 5 + 1)) + 5);
                    
                    
                    const businessname ="Bus"+ Businessname;
                    
                    // Store the values (example, assuming GlobalUserData is a global object)
                    GlobalUserData = { businessnametext: businessname};
                    
                    // Locate the input fields for first and last names (using selectors)
                    const businessnameField = await this.page.locator(this.businessaccount_webelements.Customer_Name_Business);  
                    
                    
                    // Fill the form fields with the generated names
                    //await this.page.locator(this.email_webelement.Email).fill(this.emailid)
                    await this.page.locator(this.businessaccount_webelements.Customer_Name_Business).click()
                    await businessnameField.fill(businessname)

                await this.page.locator(this.businessaccount_webelements.EIN).click();
                await this.page.locator(this.businessaccount_webelements.EIN).fill(this.testdata.EIN_Number);//update

                await this.page.waitForTimeout(1000); 
                return GlobalUserData; // Return the object containing names
    }

    async save()
    {
        await this.page.locator(this.businessaccount_webelements.Savebtn).click();
    }
    async personalAccountDocuments()
    {
        await this.page.locator(this.PersonalAccount_WebElements.Documents_Tab).click()
        const fileToUpload = 
        {
            "Operating Agreement" :      "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\operating agreement.jpg"  
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
        await this.page.locator(this.businessaccount_webelements.Related_Accounts_tab).click();
        await this.page.locator(this.businessaccount_webelements.threedotbtn).click();
        await this.page.locator(this.businessaccount_webelements.Add_Existing_Account).click();
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.businessaccount_webelements.FirstAccount_Realting).click();
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.businessaccount_webelements.Add_btn).click();
        await this.page.locator(this.businessaccount_webelements.RealtedAccount_More_option).click();
        await this.page.locator(this.businessaccount_webelements.Related_Accounts_refresh).click();
    }

 };
