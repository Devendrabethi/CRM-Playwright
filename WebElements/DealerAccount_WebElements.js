exports.DealerAccount_WebElements =
class DealerAccount_WebElements
{
    constructor()
    {
        this.Createnewaccountbtn = "//span[text()='New']"
        this.Account_Type_Dealer = "//select[@aria-label='Account Type']"   
        this.Customer_Name_Dealer =  "//input[@aria-label='Company Name']"
        this.Dealer_Field_text =     "//h2[text()='Dealer']"
        this.Dealer_Number =         "//input[@aria-label='Dealer Number']"
        this.Dealer_TAXID =          "//input[@aria-label='Tax ID']"
        this.Savebtn =              "//button[@aria-label='Save (CTRL+S)']"
        this.Phone_Type_DealerPhone = "//select[@aria-label='Phone Type']"


        this.Documents_Tab = "//ul[@aria-label='Account Form']/li[contains(@title,'Documents')]"
        this.Dealer_Document_Text = "//h2[@title='Dealer Documents']"
        this.Add_Document_btn = "//button[@aria-label='Add Document']"
        this.frame = "//iframe[@id='FullPageWebResource']"
        this.Select_DocumentType_dropdown = "//select[@id='documentType']"
        this.Expiration_Date_field = "//input[@id='date-picker']"
        this.Next_Month = "//div[@class='datepicker-days']/table[@class='table-condensed'][1]/thead/tr[2]/th[3]"
        this.Select_NextMonthDate = "//table[@class='table-condensed']/thead/following-sibling::tbody/tr[4]/td[5]"
        this.Upload_Document = "//input[@id='fileInput']"
        this.Upload_btn = "//button[@id='uploadButton']"
        this.Dealerdoc_Refresh = "//ul[@aria-label='Account Documents Commands']/li[2]/button[@aria-label='Refresh']"


        this.Related_Accounts_tab = "//ul[@aria-label='Account Form']/li[contains(@aria-label,'Related Accounts')]"
        this.threedotbtn= "//button[@title='More commands for Account']"
        this.Add_Existing_Account= "//span[text()='Add Existing Account']"
        this.FirstAccount_Realting= "//div[@role='region']/ul/li[contains(@id,'resultsContainer_0_0')]"
        this.Add_btn= "//span[text()='Add']"
        this.RealtedAccount_More_option= "//button[@aria-label='More commands for Account']"
        this.Related_Accounts_refresh= "(//span[text()='Refresh'])[2]"
    }
}