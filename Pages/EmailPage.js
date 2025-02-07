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
        
       // let GlobalUserData = {}; // Declare the global object first
         // Create a random object (JavaScript has a built-in Random function)
    function generateRandomString(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    // Generate random first and last names (e.g., 5-10 characters each)
    const randomEmail = generateRandomString(Math.floor(Math.random() * (26-19)) + 5);
    

    const emailid = randomEmail+"@yopmail.com";

    // Store the values (example, assuming GlobalUserData is a global object)
   //GlobalUserData = { email: emailid};

    // Locate the input fields for first and last names (using selectors)
   // const emailfield = await this.page.locator(this.email_webelement.Email);  
    

    // Fill the form fields with the generated names
    //await this.page.locator(this.email_webelement.Email).fill(this.emailid)
    await this.page.locator(this.email_webelement.Email).click({ timeout: 60000 })
    await this.page.locator(this.email_webelement.Email).fill(emailid)
    await this.page.locator(this.address_webelements.Save_btn).click()
    //await this.page.waitForTimeout(2000)
    await this.page.locator(this.address_webelements.Save_Close).click()
    //await this.page.screenshot({path:'ScreenShot/'+Date.now()+'AccountCreated.png'})
    //await this.page.waitForTimeout(4000)
    }
}