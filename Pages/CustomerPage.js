import { expect } from '@playwright/test'
import { Customer_WebElements } from '../WebElements/Customer_WebElements' // Import Customer_WebElements class
import { TestData  } from '../TestData/testdata';
import path from 'path';

exports.CustomerPage =
class CustomerPage 
{
    constructor(page)
    {
        this.page = page
        this.customer_webElements = new Customer_WebElements(); // Initialize Locators class
        this.testdata = new TestData();
    }

    async url()
    {
        await this.page.setViewportSize({ width: 1920, height: 950 });
        await this.page.goto(this.testdata.URL)
        await this.page.locator(this.customer_webElements.emailid).fill(this.testdata.Emailid)
        await this.page.locator(this.customer_webElements.nextbtn).click()
        await this.page.locator(this.customer_webElements.password).fill(this.testdata.Password)
        await this.page.locator(this.customer_webElements.signinbtn).click()
        await this.page.locator(this.customer_webElements.yesbtn).click()
    }

    async manager()
    {
        await this.page.locator(this.customer_webElements.managementbtn).click()
        await this.page.locator(this.customer_webElements.Customerbtn).click()
       // await expect(this.page.locator(this.customer_webElements.verifyallaccount)).toBeVisible();
    }

    async customer()
    {
        await this.page.locator(this.customer_webElements.Createnewaccountbtn).click({ timeout: 60000 })
    }

}

//module.exports=CustomerPage