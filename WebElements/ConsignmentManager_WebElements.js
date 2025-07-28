exports.ConsignmentManager_WebElements = 
class ConsignmentManager_WebElements
{
    constructor() 
    {
        this.Change_Area = "//button[@id='areaSwitcherId']"
        this.Consignment_Manger_Button = "//li[@title='Consignment Manager']"
        this.Select_Consignment = "//li[@aria-label='Consignment']"

        this.Select_Collection_Option = "//ul[@aria-label='Consignment']/li[@aria-label='Collections']"
        this.New_Collection_Button = "//button[@aria-label='New Collection']"

        this.Name_Field = "//input[@aria-label='Name']"
        this.Description_Field = "//textarea[@aria-label='Description']"
        this.SaveandClose = "//button[@aria-label='Save & Close']"
        this.CreatedOn_Filter = "//div[@data-testid='createdon']"
        this.NewtoOld = "//button[@name='Sort newer to older']"

        this.Select_Charities = "//li[@aria-label='Charities']"
        this.New_Charities_Button = "//button[contains(@aria-label,'New Charity')]"
        this.URL_Field = "//input[@aria-label='URL']"

        this.Select_Events = "//li[@aria-label='Events']"
        this.Search_EventName = "//input[@aria-label='Event Filter by keyword']"
        this.Select_Particular_Event = "//div[@aria-label='Press SPACE to select this row.'][1]/div[1]"
        this.Select_Consignment_Event = "//ul[@aria-label='Event Form']//li[@aria-label='Consignment']"
        this.Collection_Add_Existing_Button = "//button[@aria-label='Add Existing']"
        this.CreatedOn_Filter_Event = "//div[@data-testid='createdon']"
        this.Select_Created_Collection = "(//button[@aria-label='d365testuser3 #'])[1]/preceding-sibling::div"//"(//a[@aria-label='Devendra'])[1]/ancestor::*[@col-id='bjac_name']/preceding-sibling::*[@col-id='__row_status']"
        this.SaveandClose_PopUp = "(//button[@aria-label='Save & Close'])[2]"

        this.Charity_Add_Existing_Button = "//button[@aria-label='Add Existing. New Event Charity Association']"
        this.Select_Created_Charity = "(//label[@aria-label='Devendra Testing Charities'])[1]"

        this.Select_Consignments_Option = "//li[@aria-label='Consignments']"
        this.Open_Consignment = "//div[@aria-label='Press SPACE to select this row.'][1]/div[1]"
        this.On_Charity_Toggle = "//button[@aria-label='Charity: No']"
        this.Save_Button = "//button[@aria-label='Save (CTRL+S)']"

        this.Add_Buyer = "(//button[@aria-label='Add'])[1]"
        this.Customer_Field = "//input[@aria-label='Customer, Lookup']"
        this.Select_Account = "//ul[@aria-label='Lookup results']/li[1]"
        this.HammerAmount_Field = "//input[@aria-label='Hammer Amount']"
        this.SaveandClose_ConsignmentContact = "//button[@aria-label='Save and Close']"
        
        this.Add_Donor = "(//button[@aria-label='Add'])[2]"
        this.DonationAmount_Field = "//input[@aria-label='Donation']"

        this.Marketting_Tab = "//ul[@aria-label='Opportunity Form']/li[@aria-label='Marketing']"
        this.Add_Collection = "//button[@aria-label='Add Collection']"
        this.Select_Collection ="(//input[@aria-label='Toggle selection of all rows'])[5]"
        this.SaveandClose_Collection = "//button[@aria-label='Save & Close']"
        this.DoubleClick_Collection = "(//input[@aria-label='Select or deselect the row'])[5]"
        this.GoBack_Button = "//button[@title='Go back']"

        this.Add_Charities = "//button[@aria-label='Add Charity. New']"
        this.CreatedOn = "(//div[@data-testid='createdon'])[3]"
        this.HoverFirstRow = "(//div[@aria-label='Press SPACE to select this row.'])[5]"
        this.Select_FirstRow = "(//div[@aria-label='Press SPACE to select this row.'])[1]/div[5]"
        this.Select_Charity_Association = "(//input[@aria-label='Select or deselect the row'])[3]"
        this.DoubleClick_Charities = "(//input[@aria-label='Select or deselect the row'])[6]"

        this.Bidder_Manger_Button = "//li[@title='Bidder Manager']"
        this.Select_PackageTracking = "//li[@aria-label='Package Tracking']"
        this.Select_Bulk_PackageTracking = "//ul[@aria-label='Package Tracking']/li[@aria-label='Bulk Package Tracking']"
        
        this.Iframe_Bulk_PackageTracking = "//iframe[@aria-label='Bulk_Package_Tracking']"
        this.Select_Event = "//input[@id='eventLookupText']"
        this.Enter_EventName = "//input[@aria-label='Select record, Lookup']"
        this.Select_CurrentEvent = "//ul[@aria-label='Lookup results']/li[1]"
        this.Add_Button = "//button[@aria-label='Add']"
        this.Select_Search_Type_Options = "//select[@id='searchType']"

        this.Bidder_Start = "//input[@id='startBidder']"
        this.Bidder_End = "//input[@id='endBidder']"
        this.Change_Tracking_Number = "//table[@id='resultsTable']/tbody/tr[1]/td[6]/input"
        this.SaveAll_Button = "//button[text()='SAVE ALL']"
        this.Ok_Button = "//button[@aria-label='OK']"
        this.Search_Lot_Field = "//input[@id='lotNumber']"
        
        this.SearchButton = "//button[text()='SEARCH']"
        

    }
}