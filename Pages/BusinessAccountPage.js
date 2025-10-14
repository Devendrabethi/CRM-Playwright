import { expect } from '@playwright/test'
import { BusinessAccount_WebElements } from '../WebElements/BusinessAccount_WebElements'
import { PersonalAccount_WebElements } from '../WebElements/PersonalAccount_WebElements'  
import { TestData } from '../TestData/testdata';


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
        await this.page.locator(this.businessaccount_webelements.Account_Type_Business).click();
        await this.page.selectOption(this.businessaccount_webelements.Account_Type_Business,this.testdata.Account_Type_Business);      
        
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
                    const Businessname = generateRandomString(Math.floor(Math.random() * (26-19)) + 3);
                    
                    
                    const businessname ="Business"+ Businessname;
                    
                await this.page.locator(this.businessaccount_webelements.Customer_Name_Business).click()
                await this.page.locator(this.businessaccount_webelements.Customer_Name_Business).fill(businessname)
                await expect(this.page.locator(this.businessaccount_webelements.Business_Field_text)).toBeVisible({ timeout: 10000 })
                await this.page.locator(this.businessaccount_webelements.EIN).click();
                await this.page.locator(this.businessaccount_webelements.EIN).fill(this.testdata.EIN_Number);
                await this.page.screenshot({ path: './ScreenShot/BusinessAccount.png', fullPage: true})
                await this.page.waitForTimeout(1000); 
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
                    await expect(this.page.locator(this.businessaccount_webelements.Business_Document_Text)).toBeVisible({ timeout: 10000 })
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
                    await this.page.screenshot({ path: './ScreenShot/BusinessAccountDocumentsPage.png', fullPage: true})
                    await this.page.locator(this.PersonalAccount_WebElements.Select_FirstDocumentUnarchived).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Archive_Button).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Ok_Button).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Refresh_Account).click()
                    await this.page.locator(this.PersonalAccount_WebElements.Documents_Tab).click()
                    await this.page.waitForTimeout(2000)
                    await this.page.screenshot({ path: './ScreenShot/BusinessDocumentWithArchived.png', fullPage: true})
                    await this.page.locator(this.PersonalAccount_WebElements.Select_FirstDocumentUnarchived).click()
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
                    await this.page.screenshot({ path: './ScreenShot/BusinessDocumentWithArchivedtoUnArchived.png', fullPage: true})
                  
    }
    async RelatedAccount()
    {
        await expect(this.page.locator(this.businessaccount_webelements.Overview_tab)).toBeVisible({ timeout: 30000 })
        await this.page.locator(this.businessaccount_webelements.Overview_tab).click();
        await this.page.locator(this.businessaccount_webelements.threedotbtn).click();
        await this.page.locator(this.businessaccount_webelements.Add_Existing_Account).click();
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.businessaccount_webelements.FirstAccount_Realting).click();
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.businessaccount_webelements.Add_btn).click();
        await this.page.locator(this.businessaccount_webelements.RealtedAccount_More_option).click();
        await this.page.locator(this.businessaccount_webelements.Related_Accounts_refresh).click();
        await this.page.screenshot({ path: './ScreenShot/BusinessRelateAccount.png', fullPage: true})
        await this.page.locator(this.businessaccount_webelements.DoubleclickPersonalAccount).dblclick()
    }

 };
