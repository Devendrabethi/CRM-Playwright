import { expect } from '@playwright/test'
import { BusinessAccount_WebElements } from '../WebElements/BusinessAccount_WebElements.js'
import { PersonalAccount_WebElements } from '../WebElements/PersonalAccount_WebElements.js'  
import { DealerAccount_WebElements } from '../WebElements/DealerAccount_WebElements.js'
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
        await this.page.locator(this.dealeraccount_webelements.Account_Type_Dealer).click(); // Open dropdown
        await this.page.selectOption(this.dealeraccount_webelements.Account_Type_Dealer,this.testdata.Account_Type_Dealer);
        //await this.page.locator(`text=${this.testdata.Account_Type_Dealer}`).click(); // Select the option
        
    }

   
    async  names()
                {
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
                    const Dealername = generateRandomString(Math.floor(Math.random() * (26-19)) + 3);
                    
                    
                    const dealername ="Dealer" + Dealername;
                    await this.page.locator(this.dealeraccount_webelements.Customer_Name_Dealer).click()
                    await this.page.locator(this.dealeraccount_webelements.Customer_Name_Dealer).fill(dealername)
                    await expect(this.page.locator(this.dealeraccount_webelements.Dealer_Field_text)).toBeVisible({ timeout: 10000 })

                await this.page.locator(this.dealeraccount_webelements.Dealer_Field_text).click();
                await this.page.locator(this.dealeraccount_webelements.Dealer_Number).click();
                await this.page.locator(this.dealeraccount_webelements.Dealer_Number).fill(this.testdata.Dealer_Number);
                await this.page.locator(this.dealeraccount_webelements.Dealer_TAXID).click();
                await this.page.locator(this.dealeraccount_webelements.Dealer_TAXID).fill(this.testdata.Dealer_TaxID_Number);
                await this.page.screenshot({ path: './ScreenShot/21 DealerAccount.png', fullPage: true})
                await this.page.waitForTimeout(1000); 
                //return GlobalUserData; // Return the object containing names
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
            "Operating Agreement" :   "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Insurance.pdf",
            "Verification of Ownership" :          "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Verification of Ownership.jpg",
            "Wholesale License" :           "C:\\Users\\bdevendra\\source\\repos\\CRM Playwright\\Photos\\Wholesale.jpg",
        }
        for (const [documentType, documentPath] of Object.entries(fileToUpload))
             {
                     await expect(this.page.locator(this.dealeraccount_webelements.Dealer_Document_Text)).toBeVisible({ timeout: 10000 })
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
                    await this.page.screenshot({ path: './ScreenShot/22 DealerAccountDocumentsPage.png', fullPage: true})
                    await this.page.locator(this.PersonalAccount_WebElements.Select_FirstDocumentUnarchived).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Archive_Button).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Ok_Button).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Account).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Documents_Tab).click()
                    await this.page.waitForTimeout(2000)
                    await this.page.screenshot({ path: './ScreenShot/23 DealerDocumentWithArchived.png', fullPage: true})
                    await this.page.locator(this.PersonalAccount_WebElements.SelectFirstDocument_Archived).click()
                    await this.page.waitForTimeout(1000)
                    await this.page.locator(this.PersonalAccount_WebElements.UnArchived_Button).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Ok_Button).click()
                     const frame = await this.page.frameLocator(this.PersonalAccount_WebElements.frame_AccountExp)
                    if(!frame) throw new Error('Iframe not found')
                    await frame.locator(this.PersonalAccount_WebElements.Expiration_Date_field).click()
                    await frame.locator(this.PersonalAccount_WebElements.Next_Month).click()
                    await frame.locator(this.PersonalAccount_WebElements.Select_NextMonthDate).click()
                    await frame.locator(this.PersonalAccount_WebElements.Ok_ExpiryDate).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Account).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Documents_Tab).click()
                    await this.page.waitForTimeout(2000)
                    await this.page.screenshot({ path: './ScreenShot/24 DealerDocumentWithArchivedtoUnArchived.png', fullPage: true})
                  
    }
    async RelatedAccount()
    {
        await expect(this.page.locator(this.dealeraccount_webelements.Overview_tab)).toBeVisible({ timeout: 30000 })
        await this.page.locator(this.dealeraccount_webelements.Overview_tab).click();
        await this.page.locator(this.dealeraccount_webelements.threedotbtn).click();
        await this.page.locator(this.dealeraccount_webelements.Add_Existing_Account).click();
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.dealeraccount_webelements.FirstAccount_Realting).click();
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.dealeraccount_webelements.Add_btn).click();
        await this.page.locator(this.dealeraccount_webelements.RealtedAccount_More_option).click();
        await this.page.locator(this.dealeraccount_webelements.Related_Accounts_refresh).click();
        await this.page.screenshot({ path: './ScreenShot/25 DealerRelateAccount.png', fullPage: true})
        await this.page.locator(this.dealeraccount_webelements.DoubleclickPersonalAccount).dblclick()
        await this.page.waitForTimeout(3000)
    }

 };
