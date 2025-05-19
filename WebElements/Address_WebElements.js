exports.Address_WebElements = 
class Address_WebElements
{
    constructor() 
    {
        this.New_Address = "//button[contains(@aria-label, 'New Address')]"
        this.New_Address_Text = "//h1[@title='New Address']"
        this.Street_Address = "//input[@aria-label='Street Address']"
        this.Country = "//input[@aria-label='Country, Lookup']"
        this.Country_text_name = "//label[text()='Country']"
        this.Country_text = "//div[@aria-label='Country Lookup results']/ul/li"
        this.State_Address = "//input[@aria-label='State/Province, Lookup']"
        this.State_text = "//ul[@aria-label='Lookup results']/li"
        this.City = "//input[@aria-label='City']"
        this.Postal_Code = "//input[@aria-label='Postal Code']"
        this.County = "//input[@aria-label='County, Lookup']"
        this.County_text = "//div[@aria-label='County Lookup results']/ul/li"
        this.Select_status = "//select[@aria-label='Status']"
        this.Save_Close = "//span[text()='Save & Close']"
        this.Save_btn = "//span[text()='Save']"

        this.scripterror = "//button[@aria-label='OK']" 

    }
}