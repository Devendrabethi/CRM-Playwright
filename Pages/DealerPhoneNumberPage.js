import { expect } from '@playwright/test'
import { Address_WebElements } from '../WebElements/Address_WebElements.js'    
import { TestData } from '../TestData/testdata.js';
import { PhoneNumber_WebElement } from '../WebElements/PhoneNumber_WebElement.js';
import { BusinessAccount_WebElements } from '../WebElements/BusinessAccount_WebElements.js';
import { DealerAccount_WebElements } from '../WebElements/DealerAccount_WebElements.js';

exports.DealerPhoneNumberPage =
class DealerPhoneNumberPage
{
    constructor(page)
    {
        this.page = page
        this.address_webelements =  new Address_WebElements()
        this.testdata = new TestData()
        this.phonenumber_webelement = new PhoneNumber_WebElement()
        this.businessaccount_webelements = new BusinessAccount_WebElements()
        this.dealeraccount_webelements = new DealerAccount_WebElements()
    }


    async phonenumberbtn()
    {
        await this.page.locator(this.phonenumber_webelement.threedotbtn).click()
        await this.page.locator(this.phonenumber_webelement.New_PhoneNumber_btn).click()
        await this.page.selectOption(this.dealeraccount_webelements.Phone_Type_DealerPhone,this.testdata.Dealer_PhoneType);

    }

    async General_PhoneNumber()
    {
        await this.page.locator(this.phonenumber_webelement.Country).fill(this.testdata.Country_name)
        await this.page.locator(this.address_webelements.Country_text).click()
        await this.page.locator(this.phonenumber_webelement.AreaCode_Text).click()
        await this.page.locator(this.phonenumber_webelement.AreaCode).fill(this.testdata.Area_code)
        await this.page.locator(this.phonenumber_webelement.Number).click()
        await this.page.locator(this.phonenumber_webelement.Number).fill(this.testdata.Phone_Number)
        await this.page.locator(this.address_webelements.Save_btn).click()
        await this.page.screenshot({ path: './ScreenShot/21.1 DealerPhoneNumber.png', fullPage: true})
       // await this.page.waitForTimeout(4000)
        await this.page.locator(this.address_webelements.Save_Close).click()
        await this.page.waitForTimeout(4000)
    }
}