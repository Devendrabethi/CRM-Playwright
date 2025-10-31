exports.MediaCredential_WebElements = 
class MediaCredential_WebElements {
    constructor() 
    {
            this.managementbtn = "//div[@title='Management']";
            this.MediaCredential_button ="//ul[@aria-label='Management']/li[@aria-label='Media Credentials']"
            this.Primary_mediaCredential = "//button[@aria-label='Primary Media Credentials']"
            this.Select_AllMediaCredential = "//label[text()='All Media Credentials']"
            this.All_MediaCredential = "//button[@aria-label='All Media Credentials']"
            this.Select_OtherMediaContacts = "//label[text()='Other Media Contacts']"
            this.Other_MediaContact = "//button[@aria-label='Other Media Contacts']"
            this.Select_PrimaryMediaCredential = "//label[text()='Primary Media Credentials']"
            this.NewContact_Media = "//ul[@aria-label='Contact Commands']/li[contains(@id,'contact')]/button[contains(@aria-label,'New')]"
            this.FirstName = "//input[@aria-label='First Name']"
            this.LastName = "//input[@aria-label='Last Name']"
            this.Email = "//input[@aria-label='Email']"
            this.Event = "//input[contains(@aria-label,'Event')]"
            this.Select_Event = "//ul[@aria-label='Lookup results']/li[1]"
            this.Media_Organization = "//input[contains(@aria-label,'Media Organization ')]"
            this.Save_Button = "//button[contains(@aria-label,'Save (CTRL+S)')]"

            this.Select_CredentidalStatus = "//select[@aria-label='Credential Status']"
            this.Refresh_Button = "//button[@aria-label='Refresh']"


            this.Iframe_DocuSignStatus = "//iframe [@title='Resend']"
            this.Print = "//button[text()='Print']"
            //new page
            this.Select_CheckBox = "//span[text()='I agree to use electronic records and signatures.']/parent::span"
            this.Continue_Button = "//button[contains(@aria-describedby,'continue')]"
            this.Sign_Button = "//div[@data-type='SignHere']/button"
            this.AdoptandSign = "//button[text()='Adopt and Sign']"
            this.Finish_Button = "//button[contains(@aria-describedby,'finish')]"
           // close tab
            this.Refresh_Button = "//button[@aria-label='Refresh']"

            this.OrgDetails_Tab = "//li[@aria-label='Org Details ']"
            this.AddMediaContact_Button = "//button[contains(@aria-label,'Add New Contact')]"
            this.OrgDetails_FirstName = "(//input[@aria-label='First Name'])[2]"
            this.orgDetails_LastName = "(//input[@aria-label='Last Name'])[2]"
            this.orgDetails_Email = "(//input[@aria-label='Email'])[2]"
            this.orgDetails_SaveandClose = "//button[@aria-label='Save and Close']"
            
    }
};