import { expect } from '@playwright/test'
import { Address_WebElements } from '../WebElements/Address_WebElements'    
import { TestData } from '../TestData/testdata.js';
import { Email_WebElement } from '../WebElements/Email_WebElement.js';

exports.EmailPage =
class EmailPage
{
    constructor(page)
    {
        this.page = page
        this.testdata = new TestData()
        this.address_webelements =  new Address_WebElements()
        this.email_webelement = new Email_WebElement()
    }

    async NewEmailbtn()
    {
        const New_Email = this.page.locator(this.email_webelement.New_Email_btn)
        await expect(New_Email).toHaveText('New Email',{ timeout: 10000 })
        await this.page.locator(this.email_webelement.New_Email_btn).click()
        
    }
    async enter_emailid()
    {
    function generateRandomString(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    const randomEmail = generateRandomString(Math.floor(Math.random() * (26-19)) + 5);
    

    const emailid = randomEmail+"@yopmail.com";
    await this.page.locator(this.email_webelement.Email).click({ timeout: 60000 })
    await this.page.waitForTimeout(500)
    await this.page.locator(this.email_webelement.Email).fill(emailid)
    await this.page.waitForTimeout(1000)
    //await this.page.locator(this.address_webelements.Save_btn).click()
    await this.page.waitForTimeout(1000)
    await this.page.locator(this.address_webelements.save_Close_popup).click()
    await this.page.waitForTimeout(2000)
    await this.page.screenshot({ path: './ScreenShot/0.2 EmailAddress.png', fullPage: true})
    await this.page.locator(this.address_webelements.Refresh_Accountpage).click()
    await this.page.waitForTimeout(2000)
    }

    async CredentialTab()
    {
        await expect(this.page.locator(this.email_webelement.CredentialTab)).toBeVisible({ timeout: 30000 })
        await this.page.locator(this.email_webelement.CredentialTab).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.address_webelements.Refresh_Overview).click()
        await this.page.locator(this.email_webelement.CredentialTab).click()
        await this.page.waitForTimeout(9000)
        await this.page.screenshot({ path: './ScreenShot/21 CredentialTab.png', fullPage: true})
        const frame = await this.page.frameLocator(this.email_webelement.frame)
        if(!frame) throw new Error('Iframe not found')
        await frame.locator(this.email_webelement.Createbtn).click({ timeout: 60000 })
        //await this.page.waitForTimeout(2000)
        await this.page.locator(this.email_webelement.Okbtn).click()
        await frame.locator(this.email_webelement.Verifybtn).click({ timeout: 60000 })
        //await this.page.waitForTimeout(2000)
        await this.page.locator(this.email_webelement.Okbtn).click()
        await this.page.waitForTimeout(2000)
        await frame.locator(this.email_webelement.ResetPassword).click()
        //await this.page.waitForTimeout(2000)
        await this.page.locator(this.email_webelement.Okbtn).click()
        await this.page.waitForTimeout(1000)
    }
    async Wristband()
    {
        const frame = await this.page.frameLocator(this.email_webelement.iframe_wristband)
        if(!frame) throw new Error('Iframe not found')
            const credentials = ['Bidder Badge (1)', 'Child Pass (1)', 'Drink Ticket (1)', 'Gala Event Ticket (1)', 'Guest Pass (1)'];
            for (const value of credentials) 
            {
            await frame.locator(this.email_webelement.Add_Button).click({ timeout: 60000 });
            await frame.locator(this.email_webelement.SelectEvent).selectOption(this.testdata.Event_WristBand);
            await this.page.waitForTimeout(2000)
            await frame.locator(this.email_webelement.SelectCredential).selectOption({ label: value });
            await this.page.waitForTimeout(2000)
            await frame.locator(this.email_webelement.Save_Addbutton).click();
            await this.page.locator(this.email_webelement.Okbtn).click();
            }
            await frame.locator(this.email_webelement.Select_FirstOption).click();
            await frame.locator(this.email_webelement.Delete_Button).click();
            await this.page.waitForTimeout(2000)
            await frame.locator(this.email_webelement.Add_Button).click({ timeout: 60000 })
            await frame.locator(this.email_webelement.SelectEvent).selectOption(this.testdata.Event_WristBand)
            await this.page.waitForTimeout(2000)
            await frame.locator(this.email_webelement.SelectCredential).selectOption({ label: 'Bidder Badge (1)' })
            await this.page.waitForTimeout(2000)
            await frame.locator(this.email_webelement.Save_Addbutton).click()
            await this.page.locator(this.email_webelement.Okbtn).click()
            await this.page.waitForTimeout(2000)
            await frame.locator(this.email_webelement.Submit_Button).click();
            await this.page.locator(this.email_webelement.Okbtn).click()
            await this.page.locator(this.email_webelement.Refresh_CredentialLine).click();
            await this.page.waitForTimeout(2000)
            await this.page.screenshot({ path: './ScreenShot/21.1 Wristband.png', fullPage: true})
            await this.page.waitForTimeout(3000)

    }
}