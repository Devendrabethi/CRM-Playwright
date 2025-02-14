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
        
        await this.page.locator(this.email_webelement.New_Email_btn).click({ timeout: 60000 })
        
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
    await this.page.locator(this.email_webelement.Email).fill(emailid)
    await this.page.locator(this.address_webelements.Save_btn).click()
    //await this.page.waitForTimeout(2000)
    await this.page.locator(this.address_webelements.Save_Close).click()
    //await this.page.screenshot({path:'ScreenShot/'+Date.now()+'AccountCreated.png'})
    //await this.page.waitForTimeout(4000)
    }

    async WebsiteandForgotPassword()
    {
        await this.page.locator(this.email_webelement.WebSiteAccount).click()
        await this.page.locator(this.email_webelement.OkPopup).click()
        await this.page.locator(this.email_webelement.FrogotPassword).click()
        await this.page.locator(this.email_webelement.OkPopup).click()

    }
}