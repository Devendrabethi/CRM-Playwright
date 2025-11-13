exports.NewAutomobiliaConsignment_WebElements =
class NewAutomobiliaConsignment_WebElements
{
    constructor()
    {
        this.NewOpportunity_Button = "//button[@aria-label='New Opportunity']"
        this.New_Automobilia_opportunity_btn = "//button[@aria-label='Automobilia Consignment']"
        this.New_Batch_Automobilia_Opportunity_btn = "//button[@aria-label='Batch Automobilia Consignment']"
       
        this.Save_and_Close_btn ="//button[@aria-label='Save and Close']"
        // this.Account_Address = "//input[@aria-label='Titled To Address, Lookup'] "
        // this.Account_Address_dropdown = "//div[@aria-label='Titled To Address Lookup results']/ul/li "
        this.Poa_Odo = "//input[@aria-label='POA/ODO'] "

        this.NewAutomobilia_Batch = "//button[contains(@aria-label,'New Automobilia')]"

       
        this.Marketing_Description = "//input[@aria-label='Marketing Description']"
        this.save_consignment = "(//button[contains(@aria-label,'Save')])[1]"
        this.BatchItem_Short_description = "//input[@aria-label='Short Description']"
        this.BatchItem_Long_Description = "//input[@aria-label='Long Description']"
        this.saveandclose_ItemAutomobilia = "(//button[contains(@aria-label,'Save & Close')])[1]"
        this.Submit_BatchAutomobilia = "//button[@aria-label='Submit']"

        this.Verify_RegistrationDocuments_Text = "//h2[@title='Registration Documents']"
        this.Opportunity_Add_Document_btn = "//ul[@aria-label='Opportunity Document Commands']/li/button[contains(@aria-label,'Add Document')]"
        this.frame = "//iframe[@aria-label='bidder_documents']"  
        this.Opportunitydoc_Refresh ="//ul[@aria-label='Opportunity Document Commands']/li[2]/button[@aria-label='Refresh']"

        this.Photo_frame = "//iframe[@title='bjac_AutoPhotosUpload']"
        this.Cross_mark="//button[@aria-label='Close' and contains(@class, 'close')]"
        
        this.SelectAll_Misc = "//input[contains(@id,'select-all')]"
        this.Download_MiscPhotos = "//div[contains(@id,'download')]"
        this.Delete_MiscPhotos = "//div[contains(@id,'delete')]"


        this.Hover_on_photo = "(//div[@id='containerExterior']/div/div/div[@class='photo-status-label'])[1]"
        this.Dropdown_Primary_Section = "(//div[@id='containerExterior']/div/following-sibling::div/div/div[contains(@class,'dropdown move-button')]/button)[1]"
        this.Move_To_FrontPhoto = "(//div[@id='containerExterior']/div/div/div[@class='dropdown move-button show'])[1]/div/a[1]"

        //business account
        this.hover_Account = "//ul[@title='Titled To']"
        this.Delete_Personal_Account= "//button[contains(@aria-label,'Delete')]"
        this.Account_field = "//input[@aria-label='Titled To, Lookup']"
        this.Select_Business_Account = "//div[@aria-label='Titled To Lookup results']/ul/li"
        this.Account_Address = "//input[@aria-label='Titled To Address, Lookup']"
        this.Select_Business_Address = "//div[@aria-label='Titled To Address Lookup results']/ul/li"
        this.Business_TitleTo = "//input[@aria-label='POA/ODO']"

        //ribbon
         this.Select_Automobilia = "(//div[@title='Automobilia'])[2]"

         this.Select_ConsignmentManager_Vehicle = "(//div[@title='Vehicle'])[2]"
    }
}