exports.PhoneNumber_WebElement =
class PhoneNumber_WebElement
{
    constructor()
    {
        this.threedotbtn = "//button[@title='More commands for Phone Number']"
        this.New_PhoneNumber_btn = "//button[contains(@title,'Add New Phone Number')]"
        this.Country = "//input[@aria-label='Country, Lookup']"
        this.AreaCode_Text ="//label[text()='Area Code']"
        this.AreaCode = "//input[@aria-label='Area Code']"
        this.Number = "//input[@aria-label='Number']"

        this.Phone_Type_BusinessPhone = "//select[@aria-label='Phone Type']"

    }

}