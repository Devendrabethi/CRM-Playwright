exports.PersonalAccount_WebElements =
class PersonalAccount_WebElements
{
    constructor()
    {
        this.CustomerText = "//h2[@title='Customer']"
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
        this.Personal_Document_Text = "//h2[@title='Personal Documents']"
        this.Add_Document_btn = "//button[@aria-label='Add Document']"
        this.frame = "//iframe[@id='FullPageWebResource']"
        this.Select_DocumentType_dropdown = "//select[@id='documentType']"
        this.Expiration_Date_field = "//input[@id='date-picker']"
        this.Next_Month = "//div[@class='datepicker-days']/table[@class='table-condensed'][1]/thead/tr[2]/th[3]"
        this.Select_NextMonthDate = "//table[@class='table-condensed']/thead/following-sibling::tbody/tr[4]/td[5]"
        this.Upload_Document = "//input[@id='fileInput']"
        this.Upload_btn = "//button[@id='uploadButton']"
        this.Persondoc_Refresh = "//ul[@aria-label='Account Documents Commands']/li[2]/button[@aria-label='Refresh']"

        this.ExistCropPhoto = "//button[@id='cropPhotoTab']"
        this.CropImage = "//button[@id='cropButton']"
        this.Upload_Document_CropImage = "//input[@id='cropFileInput']"


        this.Tracking_Tab = "//ul[@aria-label='Account Form']/li[@aria-label='Tracking']"
        this.Create_Package = " //button[@title='Create Package']"
        this.Event = "//input[@aria-label='Event, Lookup']"
        this.Select_Tracking_Event = "//div[@aria-label='Event Lookup results']/ul/li"
        this.Select_PackageType_Dropdown = "//select[@aria-label='Package Type']"
        this.Select_Carrier = "//select[@aria-label='Carrier']"
        this.Tracking_Number= "//span[@title='Tracking Number']/following::input[1]"
        this.Recipient_Company_text = "//span[@title='Recipient Company']"
        this.Shipper_Address = "//span[@title='Address Line2']"
        this.Weight = "//span[@title='Weight']/following::input[1]" 

        this.Save_Tracking = "(//button[@aria-label='Save (CTRL+S)'])[2]"
        this.Refresh_Tracking = "(//button[@title='Refresh'])[2]"
        this.Print_Label = "//button[@aria-label='Print Label']"
        this.Close_Tracking = "//button[@aria-label='Close']"
    }
}