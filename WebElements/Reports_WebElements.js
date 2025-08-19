exports.Reports_WebElements = 
class Reports_WebElements
{
    constructor() 
    {
        this.Change_Area = "//button[@id='areaSwitcherId']"
        this.Reports_Button = "//li[@title='Reports']"
        this.Opportunity_Invoice_Report = "//div[@aria-label='Press SPACE to select this row.'][3]"
        this.iframe_InvoiceReport = "//iframe[@title='resultFrame']"   
        this.Calendar_StartDate = "//button[@aria-label='Start Date']"   
        this.StartDate_Field = "//button[@aria-label='Start Date']/parent::td/preceding-sibling::td/input"
        this.Calendar_EndDate = "//button[@aria-label='End Date']"
        this.EndDate_Field = "//button[@aria-label='End Date']/parent::td/preceding-sibling::td/input"
        this.PaymentStatus = "//button[@aria-label='Payment Status']"
        this.SelectAll_PaymentStatus_BidderStatus = "//label[(text()='(Select All)')]/preceding-sibling::input"
        this.BidderStatus = "//button[@aria-label='Bidder Status']"
        this.ViewReport = "//input[@value='View Report']"

        this.BidderList = "//span[text()='Bidder List']/parent::div"
        this.BidderList_Auction = "//ul[@aria-label='Bidder List']/li[@title='Bidder List for the Auction']"
        this.iframe_BidderListAuction = "//iframe[@aria-label='BidderListAuction']"
        this.SelectEvent = "//select[@id='eventDropdown']"
        this.Search = "//input[@type='search']"

        this.BidderList_LotNumber  = "//ul[@aria-label='Bidder List']/li[@title='Absentee Bid by Lot Number']"
        this.iframe_BidderLotNumber = "//iframe[@aria-label='AbsenteeBidbyLot']"
        this.select_Date = "//select[@id='dateDropdown']"


        this.BidderList_BidLimits  = "//ul[@aria-label='Bidder List']/li[@title='Bid Limits']"
        this.iframe_BidLimit = "//iframe[@aria-label='BidLimit']"


        this.BidderList_BidderDocuments  = "//ul[@aria-label='Bidder List']/li[@title='Bidder Documents']"
        this.iframe_bidder_document = "//iframe[@aria-label='bidder_document']"


        this.BidderList_BidderOverLimit  = "//ul[@aria-label='Bidder List']/li[@title='Bidders Over Limit']"
        this.iframe_bidders_over_limit = "//iframe[@aria-label='bidders_over_limit']"


        this.BidderList_BidderSourceCount  = "//ul[@aria-label='Bidder List']/li[@title='Bidder Source Count']"
        this.iframe_bidder_source_count = "//iframe[@aria-label='bidder_source_count']"

        this.BidderList_BidderCredentialTracking  = "//ul[@aria-label='Bidder List']/li[@title='Bidder Credential Tracking']"
        this.iframe_CredentialReport = "//iframe[@aria-label='CredentialReport']"

        this.BidderList_BidderListPurchase  = "//ul[@aria-label='Bidder List']/li[@title='Bidder List Purchase']"
        this.iframe_BidderListPurchase = "//iframe[@aria-label='BidderListPurchase']"

        this.BidderList_BidLimitDeposit  = "//ul[@aria-label='Bidder List']/li[@title='Bid Limit Deposit']"
        this.iframe_bidlimit_deposit = "//iframe[@aria-label='bidlimit_deposit']"

        this.BidderList_HammerPrice  = "//ul[@aria-label='Bidder List']/li[@title='Hammer Prices']"
        this.iframe_HammerPrices = "//iframe[@aria-label='HammerPrices']"

        this.BidderList_TopBidder  = "//ul[@aria-label='Bidder List']/li[@title='Top Bidders']"

        this.BidderList_TopBidderAuction  = "//ul[@aria-label='Bidder List']/li[@title='Top Bidders - Auction']"
        this.iframe_topbidders = "//iframe[@aria-label='topbidders']"

        this.BidderList_BidderListMultiple  = "//ul[@aria-label='Bidder List']/li[@title='Bidder List Multiple']"
        this.iframe_bidder_list_multiple = "//iframe[@aria-label='bidder_list_multiple']"
        this.Select_ReportType = "//select[@id='ReportTypeDropdown']"

        this.Customer_Dropdown = "//span[text()='Customer']/parent::div"
        this.Customer_CustomerType = "//ul[@aria-label='Customer']/li[@aria-label='Customers by Customer Type ']"
        this.iframe_CustomerType = "//iframe[@aria-label='customer_by_customer']"
        this.CustomerType_Dropdown = "//div[@id='customerTypeTrigger']"
        this.SelectAll_CustomerType = "//div[@id='customerTypePanel']/div/a[text()='Select All']"
        this.Ok_Button = "//button[@id='applyFilterBtn']"

        this.Consigonor_Dropdown = "//span[text()='Consignors']/parent::div"
        this.TopConsignor = "//ul[@aria-label='Consignors']/li[@aria-label='Top Consignors']"
        this.iframe_TopConsignor = "//iframe[@aria-label='topconsigners']"
        this.TopConsignor_Auction = "//ul[@aria-label='Consignors']/li[@aria-label='Top Consignors - Auction']"
    }
}