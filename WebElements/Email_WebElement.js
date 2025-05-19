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

    }
}