exports.Lead_WebElement =
class Lead_WebElement
{
    constructor()
    {
        this.managementbtn = "//div[@title='Management']";
        this.Lead_button = "//li[@aria-label='Leads']";
        this.ReadOnlyGrid = "//button[@aria-label='Read Only Grid']"
        this.Lead_New = "//button[@aria-label='New']"
        this.Phone_Field = "//input[@aria-label='Phone']"
        this.Address1 = "//input[@aria-label='Address Line 1']"
        this.Address2 = "//input[@aria-label='Address Line 2']"
        this.State = "//input[@aria-label='State, Lookup']"
        this.City = "//input[@aria-label='City']"
        this.Zip = "//input[@aria-label='ZIP']"
        this.Register_Button = "//button[contains(@aria-label,'Register')]"
        this.Ok_Button = "//button[@aria-label='OK']"

        this.Select_Type = "//select[@aria-label='Type']"
        this.Vehicle_Description = "//input[@aria-label='Vehicle Description']"
        this.Vehicle_Vin = "//input[@aria-label='Vehicle VIN']"

        this.GoBack_LeadMenu = "//button[@title='Go back']"
    }
}