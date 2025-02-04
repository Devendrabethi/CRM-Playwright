exports.PersonalAccount_WebElements =
class PersonalAccount_WebElements
{
    constructor()
    {
        this.AccountType_Dropdown = "//select[@aria-label='Account Type']"
        this.Firstname =            "//input[@aria-label='First Name']"
        this.Firstname_text =       "//label[text()='First Name']"
        this.Lastname =             "//input[@aria-label='Last Name']"
        this.Source_text =          "//h2[text()='Source']"
        this.Source_field =         "//input[@aria-label='Source, Lookup']"
        this.Source_Other =         "//ul[@aria-label='Lookup results']/li[1]"
        this.Savebtn =              "//button[@aria-label='Save (CTRL+S)']"
        this.Veridy_address_text =  "//h3[text()='Addresses']"
        this.Verify_Customet_text = "//h2[text()='Customer']"


        this.Documents_Tab = "//ul[@aria-label='Account Form']/li[contains(@title,'Documents')]"
        this.Add_Document_btn = "//button[@aria-label='Add Document']"
        this.frame = "//iframe[@id='FullPageWebResource']"
        this.Select_DocumentType_dropdown = "//select[@id='documentType']"
        this.Expiration_Date_field = "//input[@id='date-picker']"
        this.Next_Month = "//div[@class='datepicker-days']/table[@class='table-condensed'][1]/thead/tr[2]/th[3]"
        this.Select_NextMonthDate = "//table[@class='table-condensed']/thead/following-sibling::tbody/tr[4]/td[5]"
        this.Upload_Document = "//input[@id='fileInput']"
        this.Upload_btn = "//button[@id='uploadButton']"
        this.Persondoc_Refresh = "//ul[@aria-label='Account Documents Commands']/li[2]/button[@aria-label='Refresh']"
    }
}