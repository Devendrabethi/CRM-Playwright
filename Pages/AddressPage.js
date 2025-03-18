import { expect } from '@playwright/test'
import { Address_WebElements } from '../WebElements/Address_WebElements'    
import { TestData } from '../TestData/testdata.js';

exports.AddressPage =
class AddressPage
{
    constructor(page)
    {
        this.page = page
        this.address_webelements =  new Address_WebElements()
        this.testdata = new TestData()
    }

    async newaddress()
    {
       
        await this.page.locator(this.address_webelements.New_Address).click()
    }

    // async generaladdress()
    // {
    //     await this.page.locator(this.address_webelements.Street_Address).click()
    //     await this.page.locator(this.address_webelements.Street_Address).fill(this.testdata.Street_Address)
    //     await this.page.locator(this.address_webelements.Country).fill(this.testdata.Country_name)
    //     await this.page.locator(this.address_webelements.Country_text).click()
    //     await this.page.locator(this.address_webelements.State_Address).fill(this.testdata.Street_name)
    //     await this.page.locator(this.address_webelements.State_text).click()
    //     await this.page.locator(this.address_webelements.City).fill(this.testdata.City_name)
    //     await this.page.locator(this.address_webelements.Postal_Code).fill(this.testdata.Postal_code)
    //     await this.page.locator(this.address_webelements.County).fill(this.testdata.County_name)
    //     await this.page.locator(this.address_webelements.County_text).click()   
    //     await this.page.selectOption(this.address_webelements.Select_status,this.testdata.status);
    // }


    async generaladdress() {
        
            await this.page.locator(this.address_webelements.Street_Address).click();
            await this.page.locator(this.address_webelements.Street_Address).fill(this.testdata.Street_Address);

            // await this.page.locator(this.address_webelements.Country).fill(this.testdata.Country_name);
            // await this.page.locator(this.address_webelements.Country_text).click();

            await this.page.locator(this.address_webelements.State_Address).fill(this.testdata.Street_name);
            await this.page.locator(this.address_webelements.State_text).click();
            await this.page.locator(this.address_webelements.City).fill(this.testdata.City_name);
            await this.page.locator(this.address_webelements.Postal_Code).fill(this.testdata.Postal_code);
            await this.page.locator(this.address_webelements.County).click()
            await this.page.locator(this.address_webelements.County).fill(this.testdata.County_name);
            await this.page.waitForTimeout(4000)
            await this.page.locator(this.address_webelements.County_text).click();
            await this.page.selectOption(this.address_webelements.Select_status, this.testdata.status);
    
        
    }
    

    async saveandclose()
    {
        //this.page.setDefaultTimeout(15000);
        await this.page.locator(this.address_webelements.Save_btn).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator(this.address_webelements.Save_Close).click()
        await this.page.waitForTimeout(3000)
    }
}