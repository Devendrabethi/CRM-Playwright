exports.NewConsignmentVehicle_WebElement =
class NewConsignmentVehicle_WebElement
{
    constructor()
    {
        this.New_Consignment_opportunity_btn = "//button[@title='New Consignment Opportunity']"
        this.Vehicle_field = "//input[@aria-label='Vehicle, Lookup']"
        this.New_Vehicle_link = "//span[text()='New Vehicle']"
        this.Quick_Create_Vehicle_text = "//h1[text()='Quick Create: Vehicle']"
        this.Vin = "//input[@aria-label='VIN']"
        this.Year ="//input[@aria-label='Year']"
        this.Make_field ="//input[@aria-label='Make, Lookup']"
        this.Select_Make ="//div[@aria-label='Make Lookup results']/ul/li"
        this.Model_field ="//input[@aria-label='Model, Lookup']"
        this.Select_Model ="//div[@aria-label='Model Lookup results']/ul/li"
        this.Transmission_Type_dropdown ="//select[@aria-label='Transmission Type']"
        this.Transmission_Speed_dropdown ="//select[@aria-label='Transmission Speeds']"
        this.CloseQuiclCreateVehicle ="//button[@id='quickFormCloseBtn_12']"
        this.SaveandContinuePopUp ="//span[@id='confirmButtonText_14']"
        this.OkPopup ="//button[@aria-label='OK']"

        this.Save_and_Close_btn ="//button[@aria-label='Save and Close']"


        this.Odometer_Type_dropdown = "//select[@aria-label='Odometer Type'] "
        this.Description_Mileage = "//input[@aria-label='Description Mileage'] "
        this.Sale_Type_dropdown = "//select[@aria-label='Sale Type'] "
        this.Owner_Estimate_value = "//input[@aria-label='Owner Estimated Value'] "
        this.Bjack_value = " //input[@aria-label='Barrett-Jackson Value']"
        this.Responsible_Account = "//input[@aria-label='Responsible Account, Lookup'] "
        this.Responsible_Account_dropdown = "//div[@aria-label='Responsible Account Lookup results']/ul/li "
        this.Account_Address = "//input[@aria-label='Account Address, Lookup'] "
        this.Account_Address_dropdown = "//div[@aria-label='Account Address Lookup results']/ul/li "
        this.Title_To = "//input[@aria-label='Titled To'] "
        this.Event_text = "//span[@title='Event']"
        this.Event_name = " //input[@aria-label='Event, Lookup']"
        this.Event_Name_dropdown = "//div[@aria-label='Event Lookup results']/ul/li "
        this.Representative_Consignment_name = "//input[@aria-label='Requested Consignment Representative, Lookup'] "
        this.Representative_consignment_dropdown = " //div[@aria-label='Requested Consignment Representative Lookup results']/ul/li[1]"
        this.Sale_Day_Tab = " //ul[@aria-label='Opportunity Form']/li[contains(@aria-label,'Sale Day')]"
        this.Time_on_Block = "//div[@aria-label='Time on Block'] "
        this.Time_on_Block_minutes = "//ul[@aria-label='Time on Block']/div/li[3]"
        this.Assign_To = " //button[@aria-label='More Header Editable Fields']"
        this.Assign_To_Inputfield = " //input[@aria-label='Assign To, Lookup']"
        this.Assign_To_Specialist_dropdown = "//div[@aria-label='Assign To Lookup results']/ul/li[1] "
        this.save_consignment = " //span[text()='Save']"
        this.Refresh_consignment = "(//button[@aria-label='Refresh'])[1] "


        this.Documentation_Tab = "//ul[@aria-label='Opportunity Form']/li[contains(@aria-label,'Documentation')]"
        this.Vehicle_Add_Document_btn = "//ul[@aria-label='Vehicle Documents Commands']/li/button[contains(@aria-label,'Add Document')]"
        this.frame = "//iframe[@id='FullPageWebResource']"  
        this.Select_DocumentType_dropdown = "//select[@id='documentType']"
        this.Expiration_Date_field = "//input[@id='date-picker']"
        this.Next_Month = "//div[@class='datepicker-days']/table[@class='table-condensed'][1]/thead/tr[2]/th[3]"
        this.Select_NextMonthDate = "//table[@class='table-condensed']/thead/following-sibling::tbody/tr[4]/td[5]"
        this.Upload_Document = "//input[@id='fileInput']"
        this.Upload_btn = "//button[text()='Upload']"
        this.Vehicledoc_Refresh ="//ul[@aria-label='Vehicle Documents Commands']/li[2]/button[@aria-label='Refresh']"

        this.Photo_Tab="//ul[@aria-label='Opportunity Form']/li[contains(@aria-label,'Photos')]"
        this.Photo_frame = "//iframe[@id='WebResource_uploadphotos']"  //"//iframe[@id='WebResource_new_6']"   //hotfixqa  //iframe[@id='WebResource_uploadphotos']"
        this.plus_Add_Photo_btn="//h3[@id='primaryphotos']/button[text()=' + Add Photo ']"
        this.Upload_photo_input="//input[@name='file']"
        this.Upload_photo_btn="//button[@id='uploadButton']"
        this.Cross_mark="(//button[@aria-label='Close'])[1]"
        this.Refresh_btn="//img[@id='refreshbutton']"
        this.scroll_allphoto = "//h3[contains(text(),'All Photos ')]"

        this.Marketing_Tab="//ul[@aria-label='Opportunity Form']/li[contains(@aria-label,'Marketing')]"
        this.ShortDescription = "//textarea[@aria-label='Short Description']"
        this.LongDescription = "//textarea[@aria-label='Long Description']"
        this.Refresh_consignment="(//button[@aria-label='Refresh'])[1]"

        this.TaskTab = "//ul[@aria-label='Opportunity Form']/li[contains(@aria-label,'Tasks')]"
        this.TaskRefresh = "(//span[text()='Refresh'])[2]/../parent::button"
        this.SelectAllTaskRadiobtn = "//div[@data-testid='subject']/../../../preceding-sibling::div"
        this.MarkComplete = "//span[text()='MARK COMPLETE']/../parent::button"
        this.Status = "//label[text()='Status']"

        this.reqinforbtn ="//span[text()='Request Information']"
        this.reqinforframe ="//iframe[@id='FullPageWebResource']"
        this.selectvehiclephotoreq ="//select[@id='photosDrp']"
        this.selectconsigndoc = "//select[@id='opportunityDocumentsDrp']"
        this.selectcustomerDocumentsDrpreq = "//select[@id='customerDocumentsDrp']"
        this.submitbtn = "//button[@type='submit']"

        this.PrintAll = "//span[text()='Print All']"

        this.WordTemplate = "//span[text()='Word Templates']"
        this.PrintConsignmentForm = "//span[text()='Print Consignment Form']"

        //business account
        this.hover_Account = "//ul[@title='Account']"
        this.Delete_Personal_Account= "//button[contains(@aria-label,'Delete')]"
        this.Account_field = "//input[@aria-label='Account, Lookup']"
        this.Select_Business_Account = "//div[@aria-label='Account Lookup results']/ul/li"
        this.Account_Address = "//input[@aria-label='Account Address, Lookup']"
        this.Select_Business_Address = "//div[@aria-label='Account Address Lookup results']/ul/li"
        this.Business_TitleTo = "//input[@aria-label='Titled To']"

        //Integration
        this.Integration_Tab = "//ul[@aria-label='Opportunity Form']/li[contains(@aria-label,'Integration')]"

    }
}