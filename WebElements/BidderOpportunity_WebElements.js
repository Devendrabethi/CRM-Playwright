exports.BidderOpportunity_WebElements =
class BidderOpportunity_WebElements
{
    constructor()
    {
        this.Bidder_Registration = "//button[@aria-label='Bidder Registration']"
        this.Verify_NewOpportunity_Text = "//h1[@title='New Opportunity']"
        this.Bidder_Pakage_Type = "//input[@aria-label='Bidder Package Type, Lookup']"
        this.Select_Bidder_Package_Type = "//ul[@aria-label='Lookup results']/li[1]"//"//ul[@aria-label='Lookup results']/li[@aria-label='ABSENTEE (BIDDER), 61']"
        this.Select_Bid_LimitType_dropdown = "//select[@aria-label='Bid Limit Type']"
        this.Bid_Limit_Value = "//input[@aria-label='Bid Limit Value']"
        this.Bid_Limit_Estimation = "//input[@aria-label='Bid Limit Estimated']"
        this.Select_Interner_Bidder = "//select[@aria-label='Internet Bidder']"

        this.Mailing_Address = "//input[@aria-label='Mailing Address, Lookup']"
        this.Mailing_Address_select = "//div[@aria-label='Mailing Address Lookup results']/ul/li[1]"
        this.Vehicle_Titling = "//input[@aria-label='Vehicle Titling, Lookup']"
        this.Vehicle_Titling_address_select = "//div[@aria-label='Vehicle Titling Lookup results']/ul/li[1]"
        this.Save_Bidder_Opportunity = "//span[text()='Save']"
        this.Refresh_Bidder_Opportunity = "//button[@aria-label='Refresh']"

        this.Verify_BidLimitDeposits_Text = "//h3[text()='Bid Limit Deposits']"
        this.Add_Envelop_btn = "//button[contains(@aria-label, 'Add Envelope')]"//"//span[text()='New Bid Limit Deposit']"//
        this.Envelop_Number = "//input[@aria-label='Envelope Number']"
        this.Select_Deposite_Type = "//select[@aria-label='Deposit Type']"
        this.Deposite_Amount = "//input[@aria-label='Deposit Amount']"
        this.Deposite_Date = "//input[@aria-label='Date of Deposit Date']"
        this.Payment_Number = "//input[@aria-label='Payment Number']"
        this.Deposite_Value = "//input[@aria-label='Deposit Value']"
        this.Select_second_field = "//div[@aria-label='Editable Grid']/div/div/div/div[2]/div[1]"
        this.Return_Type = "//div[@aria-label='Editable Grid']/div/div/div/div[2]/div[7]"
        this.Toggle_button_dropdown = "//button[@aria-label='Toggle Dropdown']"
        this.Cashiering = "//div[text()='At Cashiering']"
        this.Cashiering_Save = "//button[@title='Save']"

        this.Verify_Absentees_Bids_Text = "//h3[text()='Absentees Bids']"
        this.Add_New_Absentee_Bid_btn = "//button[@aria-label='New Absentee Bids. Add New Absentee Bids']"
        this.Select_Absentee_Bid = "//select[@aria-label='Absentee Bids']"
        this.Lot_Number = "//input[@aria-label='Lot Number']"
        this.Contact_Phone = "//input[@aria-label='Contact Phone']"
        this.MaximumBid = "//input[@aria-label='Maximum Bid']"
        this.SaveandClosebutton = "//button[@aria-label='Save and Close Options']"
        this.saveandCReateNew = "//span[text()='Save & Create New']"
        this.Save_Absentee_Bid = "//button[@aria-label='Save and Close']"
        this.PhoneObserver = "//button[contains(@aria-label,'Phone Observer')]"
        this.FrameSendAbsenteebid = "//iframe[@id='WebResource_Send_Absentee_Bids']"
        this.SendAbsenteeBid = "//button[text()='Send Absentee Bids']"
        this.OkPopUp = "//button[@aria-label='OK']"

        this.Frame_PhoneObserver = "//iframe[@aria-label='launch_phone_observer']"
        this.managementbtn = "//span[text()='Management']"
        this.HamBerger_PhoneObserver = "//span[text()='Phone Observer']"
        this.SelectEvent = "//select[@id='eventdropdown']"
        this.Select_PhoneObserver_Date = "//select[@id='days']"
        this.Launch = "//button[@id='launchbutton']"
        this.Verify_TotalBids = "//div[@id='leftCol']/div/label[contains(text(), 'Bids')]"
        this.Close_PhoneObserver = "//button[@title='Close']"

        this.Create_Package = "//span[text()='Create Package']"
        this.Close_Tracking = "(//button[@aria-label='Close'])[2]"
        this.Close_Tracking_BidderPage = "//button[@aria-label='Close']"
        

        this.AddDocument_Register = "(//button[@aria-label='Add Document'])[1]"
        this.frame = "//iframe[@id='FullPageWebResource']"  
        this.Select_DocumentType_dropdown = "//select[@id='documentType']"
        this.Bidder_Registerdoc_Refresh = "//ul[@aria-label='Opportunity Document Commands']/li[2]/button[@aria-label='Refresh']"
        
        this.TaskTab = "//ul[@aria-label='Opportunity Form']/li[contains(@aria-label,'Tasks')]"
        this.TaskRefresh = "(//span[text()='Refresh'])[2]/../parent::button"

        this.Opportunity_Product_Tab = "//ul[@aria-label='Opportunity Form']/li[contains(@title,'Products')]"
        this.Add_Product_button = "//button[@aria-label='Add Product']"
        this.Existing_Product = "//input[@aria-label='Product, Lookup']"
        this.Selecting_product = "//ul[@aria-label='Lookup results']/li[1]"
        this.Quantity = "//input[@aria-label='Quantity']"
        this.Save_Close = "//span[text()='Save & Close']"


        this.Invoice_Tab = "//ul[@aria-label='Opportunity Form']/li[contains(@title,'Invoices')]"
        this.Generate_Invoive = "//button[@aria-label='Generate Invoice. Generate New Invoice']"
        this.First_Invoice = "//div[@aria-label='Press SPACE to select this row.'][1]/div[1]"
        this.Second_Invoice = "//div[@aria-label='Press SPACE to select this row.'][2]/div[1]"
        this.select_Payment_Method = "//select[@aria-label='Payment Method']"

        this.SelectAllInvoice = "(//div[@col-id='__row_status'])[1]"
        this.EnterPaymentButton = "//button[@aria-label='Enter Payment']"
        this.FrameInvoice = "//iframe[@aria-label='Pay_Invoice']"
        this.SelectPaymentMethod = "//select[@id='paymentMethods']"

        this.PaymentNumber = "//input[@id='paymentnumber']"

        this.FrameCard = "//iframe[contains(@name, 'single-card')]"
        this.CardNum = "//input[@title='Credit card number']"
        this.CardExpDate = "//input[@title='Expiration date']"
        this.Cvv = "//input[@title='CVV']"
        this.ZipCode = "//input[@title='ZIP Code']"
        this.SubmitButton = "//button[text()='Submit Payment']"
        this.PaymentOk = "//button[@aria-label='OK']"

        this.CardlessSubmitbutton = "//button[@id='submitButton']"


        this.Payment_Date = "//input[@aria-label='Date of Payment Date']/following-sibling::i"
        this.Payment_current_Date = "//td[@aria-current='date']"//"//button[contains(@class, 'dayButton') and contains(@class, 'dayIsToday')]"
        this.Payment_Number = "//input[@aria-label='Payment Number']"

        this.Bidder_Assign_To = "//button[@aria-label='More Header Editable Fields']"
        this.Bidder_Status = "(//div[@aria-label='Status'])[2]"
        this.Bidder_Status_Paid = "//li[text()='Paid']"
        this.Bidder_Invoice_product = "(//h3[text()='PRODUCTS']"
        this.Save_btn = "//span[text()='Save']"
        this.Save_Close = "//span[text()='Save & Close']"
         this.Refresh_Bidder="(//button[@aria-label='Refresh'])[1]"


         this.reqinforbtn ="//span[text()='Request Information']"
         this.reqinforframe ="//iframe[@id='FullPageWebResource']"
         this.selectvehiclephotoreq ="//select[@id='photosDrp']"
         this.selectconsigndoc = "//select[@id='opportunityDocumentsDrp']"
         this.selectcustomerDocumentsDrpreq = "//select[@id='customerDocumentsDrp']"
         this.selectPayment = "//select[@id='paymentDrp']"
         this.submitbtn = "//button[@type='submit']"
 
         this.PrintAll = "//button[@aria-label='Print All']"

         this.Print_Agreement = "//button[@aria-label='Print Agreement']"
         this.Print = "//button[@aria-label='Print']"
         this.GoBack_btn = "//button[@aria-label='Press Enter to go back.']"

         this.Send_Agreement = "//button[@aria-label='Send Agreement']"
         this.Send_Agreement_Close = "//span[text()='OK']"//"//button[@aria-label='OK']"
         this.Send = "//button[@title='Send']/parent::li"
         this.Okbtn = "//button[@aria-label='OK']"

         this.Sync = "//button[@aria-label='Sync']"

         this.AgreementsTab = "//ul[@aria-label='Opportunity Form']/li[contains(@aria-label,'Agreements')]"
         this.CheckStatus = "//button[@aria-label='Check Status']"

        this.Integration_Tab = "//ul[@aria-label='Opportunity Form']/li[contains(@aria-label,'Integration')]"

        this.StatusChange = "//select[@aria-label='Status']"
        this.PrintBidderBadge = "//button[@aria-label='Print Bidder Badge']"

        this.Administration = "(//li[@title='Administration'])[2]"
        this.ChangeBidderNumber = "//button[@aria-label='Change Bidder Number']"
        this.FrameChangeBidderNumber = "//iframe[@aria-label='Change_Bidder_Number']"
        this.AutoAssign = "//button[text()='Auto Assign']"
        this.BidderNumberCheckbox = "//input[@id='biddernumbercheck']"
        this.SelectBidderManager = "//select[@id='Manager']"
        this.PasswordManager = "//input[@id='passwordmanager']"
        this.Approvebutton = "//button[@id='approveButton']"

        this.Current_BidderNumber = "//input[@id='currentbiddernumber']"
        this.Enter_New_BidderNumber = "//input[@id='newBidderNumber']"

        //HamburgerMenu
        this.managementbtn = "//div[@title='Management']";
        this.MenuCusomer = "//span[text()='Customers']"
        this.ExportToExcel = "//span[text()='Export to Excel']/../parent::button"
        this.AllAccountDropdown = "//span[text()='All Accounts']"
        this.AllBusinessAccount = "//label[text()='All Business Accounts']/../parent::button"
        this.AllBusinessAccountDropdown = "//span[text()='All Business Accounts']"
        this.AllDealerAccount = "//label[text()='All Dealer Accounts']/../parent::button"
        this.AllDealerAccountDropdown = "//span[text()='All Dealer Accounts']"
        this.AllPersonalAccount = "//label[text()='All Personal Accounts']/../parent::button"
        this.AllPersonalAccountDropdown = "//span[text()='All Personal Accounts']"
        this.AllVipAccount = "//label[text()='All VIP Accounts']/../parent::button"
        this.AllVipAccountDropdown = "//span[text()='All VIP Accounts']"
        this.AllAccount = "//label[text()='All Accounts']/../parent::button"
        this.CustomerFilter = "//input[@aria-label='Account Filter by keyword']"
        this.MenuVehicle = "//span[text()='Vehicles']"
        this.VehicleFilter = "//input[@aria-label='Vehicle Filter by keyword']"
        this.MenuOpportunityDropdown = "//span[text()='Opportunities']"
        this.MenuConsignment = "//span[text()='Consignments']"
        this.ConsignmentandBidderFilter = "//input[@aria-label='Opportunity Filter by keyword']"
        this.MenuBidder = "//span[text()='Bidders']"
        this.MenuAbsenteeBids = "//span[text()='Absentees Bids']"
        this.BidderScottsdaleFall2025Dropdown = "//span[text()='Bidder Scottsdale Fall 2025']"
        this.MenuSubmit = "//span[text()='Submitted']"
        this.MenuInReview = "//span[text()='In Review']"
        this.MenuComplete = "//span[text()='Complete']"
        this.MenuAllOpportunity = "//span[text()='All Opportunities']"
        this.MenuCredentialMailing = "//span[text()='Credential Mailing']"
        this.MenuAbsentee = "//span[text()='Absentee']"
        this.MenuMethodOfPayment = "//span[text()='Method of Payment']"
        this.MenuMyAssigned = "//span[text()='My Assigned']"
        this.VIPOpportunities = "//span[text()='VIP Opportunities']"

        this.ConsignmentScottsdaleFall2025Dropdown = "//span[text()='Consignment Scottsdale Fall 2025']"
        this.MenuAllOpportunity = "//span[text()='All Opportunities']"
        this.MenuOpportunityWithOpenTask = "//span[text()='Opportunities with Open Tasks']"
        this.MenuNewOpportunity = "//span[text()='New Opportunities']"
        this.MenuInCompleteOpportunity = "//span[text()='Incomplete Opportunities']"
        this.MenuEvaluateOpportunity = "//span[text()='Evaluated Opportunities']"
        this.MenuCompleteOpportunity = "//span[text()='Complete Opportunities']"
        this.MenuAssignedOpportunity = "//span[text()='Assigned Opportunities']"

        this.MenuHome = "//span[text()='Home']"

    }
}