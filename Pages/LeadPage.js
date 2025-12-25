import { expect } from '@playwright/test'
import { Customer_WebElements } from '../WebElements/Customer_WebElements' // Import Customer_WebElements class
import { Email_WebElement } from '../WebElements/Email_WebElement.js';
import { BidderOpportunity_WebElements } from '../WebElements/BidderOpportunity_WebElements'  
import { Lead_WebElement } from '../WebElements/Lead_WebElements'    
import { TestData } from '../TestData/testdata.js';

exports.LeadPage =
class LeadPage
{
    constructor(page)
    {
        this.page = page
        this.testdata = new TestData()
        this.customer_webElements = new Customer_WebElements(); // Initialize Locators class
        this.lead_webelement =  new Lead_WebElement()
        this.email_webelement = new Email_WebElement()
        this.bidderopportunity_webelements = new BidderOpportunity_WebElements()
    }

    async Management_Lead()
    {
        await this.page.locator(this.customer_webElements.managementbtn).click()
        await this.page.locator(this.lead_webelement.Lead_button).click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/150 Lead Hamburger.png', fullPage: true})
    }
    async Lead_New()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.lead_webelement.Lead_New).click()
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
    }
    async Phone()
    {
        await this.page.locator(this.lead_webelement.Phone_Field).click()
        await this.page.locator(this.lead_webelement.Phone_Field).fill(this.testdata.Contact_number)
    }
    async generaladdress() {
        
            await this.page.locator(this.lead_webelement.Address1).click();
            await this.page.locator(this.lead_webelement.Address1).fill(this.testdata.Street_Address);
            await this.page.locator(this.lead_webelement.Address2).click();
            await this.page.locator(this.lead_webelement.Address2).fill(this.testdata.AptSuit_Address);
            await this.page.locator(this.lead_webelement.State).fill(this.testdata.State_name,{ timeout: 4000 });
            await this.page.getByText(this.testdata.State_name).click();
            await this.page.waitForTimeout(1500)
            await this.page.locator(this.lead_webelement.City).fill(this.testdata.City_name);
            await this.page.waitForTimeout(1500)
            await this.page.locator(this.lead_webelement.Zip).fill(this.testdata.Postal_code);
            await this.page.waitForTimeout(2000)
            await this.page.keyboard.press('Tab');
            await this.page.waitForTimeout(1500)
    }
    async Bidder_Registration()
    {
        await this.page.selectOption(this.bidderopportunity_webelements.Select_Bid_LimitType_dropdown,this.testdata.Bidder_BidLImit_Type); 
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Value).click()
        await this.page.locator(this.bidderopportunity_webelements.Bid_Limit_Value).fill(this.testdata.Bidder_Limit_Value)  
        await this.page.waitForTimeout(3000)
        await this.page.screenshot({ path: './ScreenShot/151 Bidder Lead Registration.png', fullPage: true})
    }
    async Register_Ribbon()
    {
        await this.page.locator(this.lead_webelement.Register_Button).click();
        await this.page.locator(this.lead_webelement.Ok_Button).click({timeout:90000});
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/152 Bidder Register.png', fullPage: true})
    }
    async Open_Register_LeadBidder()
    {
        await this.page.locator(this.lead_webelement.Ok_Button).click({timeout:90000});
        await this.page.waitForTimeout(10000)
        await this.page.screenshot({ path: './ScreenShot/153 Bidder Opportunity.png', fullPage: true})
        await this.page.goBack({ waitUntil: 'load' });
        await this.page.waitForTimeout(10000)
    }
    async LeadInfo_Consignment()
    {
        await this.page.selectOption(this.lead_webelement.Select_Type,this.testdata.LeadType_Consignment);
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: './ScreenShot/154 Consignment Lead Info.png', fullPage: true})
    }
    async Consignment_Registration()
    {
        await this.page.locator(this.lead_webelement.Vehicle_Description).fill(this.testdata.CustomerName);

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
        await this.page.locator(this.lead_webelement.Vehicle_Vin).click()
        await this.page.locator(this.lead_webelement.Vehicle_Vin).fill(VinNumber)
        await this.page.screenshot({ path: './ScreenShot/155 Consignment Lead Registration.png', fullPage: true})
    }

    async Lead_All()
    {
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.lead_webelement.GoBack_LeadMenu).click()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.lead_webelement.GoBack_LeadMenu).click()
        await this.page.waitForTimeout(4000)
        await this.page.screenshot({ path: './ScreenShot/156 Consignment and Bidder in Lead All.png', fullPage: true})
    }
}