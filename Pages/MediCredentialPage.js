import { expect } from '@playwright/test'
import { Customer_WebElements } from '../WebElements/Customer_WebElements' 
import { MediaCredential_WebElements } from '../WebElements/MediaCredential_WebElements' 
import { TestData  } from '../TestData/testdata';


exports.MediCredentialPage =
class MediCredentialPage 
{
    constructor(page)
    {
        this.page = page
        this.customer_webElements = new Customer_WebElements(); 
        this.mediacredential_webElements = new MediaCredential_WebElements(); // Initialize Locators class
        this.testdata = new TestData();

    }

    async url()
    {
        //await this.page.setViewportSize({ width: 1920, height: 950 });
        await this.page.goto(this.testdata.URL)
        await this.page.locator(this.customer_webElements.emailid).fill(this.testdata.Emailid)
        await this.page.locator(this.customer_webElements.nextbtn).click()
        await this.page.locator(this.customer_webElements.password).fill(this.testdata.Password)
        await this.page.locator(this.customer_webElements.signinbtn).click()
        await this.page.locator(this.customer_webElements.yesbtn).click()

        const frame = await this.page.frameLocator(this.customer_webElements.frame_AuctionManager)
                    if(!frame) throw new Error('Iframe not found')
        await frame.locator(this.customer_webElements.Auction_management).click({ timeout: 60000 })
    }

    async manager()
    {
        await this.page.locator(this.mediacredential_webElements.managementbtn).click()
        await this.page.locator(this.mediacredential_webElements.MediaCredential_button).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.mediacredential_webElements.Primary_mediaCredential).click()
        await this.page.locator(this.mediacredential_webElements.Select_AllMediaCredential).click()
        await this.page.waitForTimeout(4000)
        await this.page.screenshot({ path: './ScreenShot/AllMediaCredential.png', fullPage: true})
        await this.page.locator(this.mediacredential_webElements.All_MediaCredential).click()
        await this.page.locator(this.mediacredential_webElements.Select_OtherMediaContacts).click()
        await this.page.waitForTimeout(4000)
        await this.page.screenshot({ path: './ScreenShot/OtherMediaContacts.png', fullPage: true})
        await this.page.locator(this.mediacredential_webElements.Other_MediaContact).click()
        await this.page.locator(this.mediacredential_webElements.Select_PrimaryMediaCredential).click()
        await this.page.waitForTimeout(4000)
        await this.page.screenshot({ path: './ScreenShot/PrimaryMediaCredential.png', fullPage: true})
    }

    async MediaCredential()
    {
       await this.page.locator(this.mediacredential_webElements.NewContact_Media).click()
       await this.page.locator(this.mediacredential_webElements.FirstName).fill(this.testdata.FirstName)
       await this.page.locator(this.mediacredential_webElements.LastName).fill(this.testdata.LastName)

       function generateRandomString(length) 
       {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            let result = '';
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
       }
        const randomEmail = generateRandomString(Math.floor(Math.random() * (26-19)) + 5);
    

        const emailid = randomEmail+"@yopmail.com";
        await this.page.locator(this.mediacredential_webElements.Email).click({ timeout: 60000 })
        await this.page.waitForTimeout(500)
        await this.page.locator(this.mediacredential_webElements.Email).fill(emailid)
        await this.page.waitForTimeout(1000)
       await this.page.locator(this.mediacredential_webElements.Event).click()
       await this.page.locator(this.mediacredential_webElements.Event).fill(this.testdata.Event_name)
       await this.page.locator(this.mediacredential_webElements.Select_Event).click()

       await this.page.locator(this.mediacredential_webElements.Media_Organization).fill(this.testdata.SendActivityText)
       await this.page.locator(this.mediacredential_webElements.Save_Button).click()
       await this.page.waitForTimeout(4000)
       await this.page.selectOption(this.mediacredential_webElements.Select_CredentidalStatus,this.testdata.Select_Approved);
       await this.page.waitForTimeout(5000)
       await this.page.locator(this.mediacredential_webElements.Refresh_Button).click({ timeout: 60000 })
       await this.page.waitForTimeout(2000)
       await this.page.reload()

       const frame = await this.page.frameLocator(this.mediacredential_webElements.Iframe_DocuSignStatus)
        if(!frame) throw new Error('Iframe not found')

             const [newPage] = await Promise.all
             ([
                this.page.context().waitForEvent('page'),
                await expect(frame.locator(this.mediacredential_webElements.Print)).toBeVisible(),
                await this.page.screenshot({ path: './ScreenShot/MediaCredentialSent.png', fullPage: true}),
                await frame.locator(this.mediacredential_webElements.Print).click()
            ]);
            await newPage.waitForLoadState('load');
            await this.page.waitForTimeout(4000);
            await newPage.locator(this.mediacredential_webElements.Select_CheckBox).click()
            await newPage.locator(this.mediacredential_webElements.Continue_Button).click()
            await newPage.locator(this.mediacredential_webElements.Sign_Button).click()
            await newPage.locator(this.mediacredential_webElements.AdoptandSign).click()
            await this.page.waitForTimeout(5000)
            await newPage.locator(this.mediacredential_webElements.Finish_Button).click()
            await this.page.screenshot({ path: './ScreenShot/MediaCredentialDocusign.png', fullPage: true})
            await this.page.waitForTimeout(10000)
            await newPage.close();
            await this.page.bringToFront();
            await this.page.locator(this.mediacredential_webElements.Refresh_Button).click()
            await this.page.waitForTimeout(5000)
            await this.page.locator(this.mediacredential_webElements.Refresh_Button).click()
            await this.page.waitForTimeout(3000)
            await this.page.screenshot({ path: './ScreenShot/MediaCredentialComplete.png', fullPage: true})
    }
    async Org_Details()
    {
        await this.page.waitForTimeout(5000)
        await this.page.locator(this.mediacredential_webElements.OrgDetails_Tab).click()
        await this.page.locator(this.mediacredential_webElements.AddMediaContact_Button).click()
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.mediacredential_webElements.OrgDetails_FirstName).fill(this.testdata.FirstName)
        await this.page.locator(this.mediacredential_webElements.orgDetails_LastName).fill(this.testdata.LastName)

       function generateRandomString(length) 
       {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            let result = '';
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
       }
        const randomEmail = generateRandomString(Math.floor(Math.random() * (26-19)) + 5);
        const emailid = randomEmail+"@yopmail.com";
        await this.page.locator(this.mediacredential_webElements.orgDetails_Email).click({ timeout: 60000 })
        await this.page.waitForTimeout(500)
        await this.page.locator(this.mediacredential_webElements.orgDetails_Email).fill(emailid)
        await this.page.waitForTimeout(1000)
        await this.page.screenshot({ path: './ScreenShot/OrgMediaCredentialdetails.png', fullPage: true})
        await this.page.locator(this.mediacredential_webElements.orgDetails_SaveandClose).click()
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.mediacredential_webElements.Refresh_Button).click()
    }

}

//module.exports=CustomerPage