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

        this.Docket = "//ul[@aria-label='Consignment']/li[@aria-label='Docket']"
        this.iframe_DocketLaunch = "//iframe[@aria-label='DocketLaunch']"
        this.SelectEvent = "//select[@id='eventdropdown']"
        this.SelectDays = "//select[@id='days']"
        this.LaunchButton = "//button[text()='Launch']"
        this.Iframe_DaysOfConsign = "//iframe[@aria-label='DayofConsign']"
        this.Day1Prime = "//button[contains(text(), 'Prime')]"
        this.Day1Pm = "//button[contains(text(),'PM ')]"
        this.Other = "//button[text()='Others']"
        this.Seach_Field = "(//input[@type='search'])[4]"
        this.FirstCIdCheckbox = "//table[@id='rightTab_OTHERS_table']/tbody/tr[1]/td[1]"
        this.FirstAssign_Button = "//table[@id='rightTab_OTHERS_table']/tbody/tr[1]/td[7]"
        this.SelectAssign = "//table[@id='rightTab_OTHERS_table']/tbody/tr[1]/td[7]/div/div/button[text()='Assign']"
        this.iframeAssignLot = "//iframe[@aria-label='Assignlot']"
        this.AutoAssign = "//button[text()='Auto Assign']"
        this.SaveAutoAssign_Button = "//button[@id='approveButton']"
        this.Close_AutoAssign = "//h1[@aria-label='Assign Lot']/parent::div/following-sibling::button[2]"
        this.Time_Button = "//button[text()='Time']"
        this.Cancelled_Button = "//button[text()='Cancelled']"
        this.SlideShow_Button ="//button[text()='Slide Show']"
        this.Close_SlideShow = "(//button[@aria-label='Close'])[2]"
        this.Trend_Button = "//button[text()='Trend']"
        this.Refresh_Button = "//button[text()='Refresh']"
        this.NextDateDocket = "//button[@id='nextButton']/i"
        this.CurrentDateDocket = "//button[@id='prevButton']/i"
        this.ActionButton = "//button[@id='actionDropdownBtn' and contains(text(),'Action')]"
        this.SetFilter = "//button[contains(text(),'Set Filter')]"
        this.ClearFilter = "//button[contains(text(),'Clear Filter')]"
        this.FrameDocketFilter = "//iframe[@aria-label='Docket_Filter']"
        this.Description = "//input[@id='desc']"
        this.Owner = "//input[@id='owner']"
        this.SelectBjacValue = "//select[@id='valueCondition']"
        this.Value1 = "//input[@id='value1']"
        this.Value2 = "//input[@id='value2']"
        this.ApplyButton = "//button[contains(text(),'Apply')]"
        this.Close_Docket = "(//button[@aria-label='Close'])[2]"
        this.CloseMainDocket = "(//button[@aria-label='Close'])[1]"


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
        this.DoubleClick_Collection = "(//div[@aria-label='Press SPACE to select this row.'][1]/div[1])[1]"
        this.GoBack_Button = "//button[@title='Go back']"

        this.Add_Charities = "//button[@aria-label='Add Charity. New']"
        this.CreatedOn = "(//div[@data-testid='createdon'])[3]"
        this.CreatedOnCharity = "(//div[@data-testid='createdon'])[3]"
        this.HoverFirstRow = "(//div[@aria-label='Press SPACE to select this row.'])[5]"
        this.Select_FirstRow = "(//div[@aria-label='Press SPACE to select this row.'])[1]/div[5]"
        this.Select_Charity_Association = "(//input[@aria-label='Select or deselect the row'])[3]"
        this.DoubleClick_Charities = "(//div[@aria-label='Press SPACE to select this row.'][1]/div[1])[2]"

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