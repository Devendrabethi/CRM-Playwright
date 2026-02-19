exports.Email_WebElement =
class Email_WebElement
{
    constructor()
    {
        this.New_Email_btn = "//button[contains(@aria-label,'New Email')]"
        this.Email = "//input[@aria-label='Email']"

        this.CredentialTab = "//ul[@aria-label='Account Form']/li[contains(@title,'Credentials')]"
        this.frame = "//iframe[@id='WebResource_Create_Credentials']"
        this.Createbtn = "//button[@id='create']"
        this.Okbtn = "//button[@aria-label='OK']"
        this.Verifybtn = "//button[@id='verify']"
        this.ResetPassword = "//button[text()='RESET PASSWORD']"
//wristband
        this.iframe_wristband = "//iframe[@title='Account WRSTBAND Credential']"
        this.Add_Button = "//button[@id='addBtn']"
        this.SelectEvent = "//select[@id='eventSelect']"
        this.SelectCredential = "//select[@id='credentialSelect']"
        this.Save_Addbutton = "//button[@id='saveBtn']"
        this.Select_FirstOption = "//tbody[@id='credentialBody']/tr[1]/td/input"
        this.Delete_Button = "//button[@id='deleteBtn']"
        this.Submit_Button = "//button[@id='submitBtn']"
        this.Refresh_CredentialLine = "(//button[@aria-label='Refresh'])[2]"
    }
}