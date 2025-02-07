exports.BidderOpportunity_WebElements =
class BidderOpportunity_WebElements
{
    constructor()
    {
        this.Bidder_Registration = "//button[@aria-label='Bidder Registration']"
        this.Bidder_Pakage_Type = "//input[@aria-label='Bidder Package Type, Lookup']"
        this.Bidder_Package_Type_Absentee_Bidder = "//ul[@aria-label='Lookup results']/li[@aria-label='ABSENTEE (BIDDER), 61']"
        this.Select_Bid_LimitType_dropdown = "//select[@aria-label='Bid Limit Type']"
        this.Bid_Limit_Value = "//input[@aria-label='Bid Limit Value']"
        this.Bid_Limit_Estimation = "//input[@aria-label='Bid Limit Estimated']"
        this.Select_Interner_Bidder = "//select[@aria-label='Internet Bidder']"

        this.Mailing_Address = "//input[@aria-label='Mailing Address, Lookup']"
        this.Mailing_Address_select = "//div[@aria-label='Mailing Address Lookup results']/ul/li[1]"
        this.Vehicle_Titling = "//input[@aria-label='Vehicle Titling, Lookup']"
        this.Vehicle_Titling_address_select = "//div[@aria-label='Vehicle Titling Lookup results']/ul/li[2]"
        this.Save_Bidder_Opportunity = "//span[text()='Save']"
        this.Refresh_Bidder_Opportunity = "//button[@aria-label='Refresh']"


        this.Add_Envelop_btn = "//button[@aria-label='Add Envelope. Add New Bid Limit Deposit']"
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

        this.Add_New_Absentee_Bid_btn = "//button[@aria-label='New Absentee Bids. Add New Absentee Bids']"
        this.Select_Absentee_Bid = "//select[@aria-label='Absentee Bids']"
        this.Lot_Number = "//input[@aria-label='Lot Number']"
        this.Contact_Phone = "//input[@aria-label='Contact Phone']"
        this.Save_Absentee_Bid = "//button[@aria-label='Save and Close']"


        this.AddDocument_Register = "(//button[@aria-label='Add Document'])[1]"
        this.frame = "//iframe[@id='FullPageWebResource']"  
        this.Select_DocumentType_dropdown = "//select[@id='documentType']"
        this.Bidder_Registerdoc_Refresh = "//ul[@aria-label='Opportunity Document Commands']/li[2]/button[@aria-label='Refresh']"

        this.Opportunity_Product_Tab = "//ul[@aria-label='Opportunity Form']/li[contains(@title,'Opportunity Products')]"
        this.Add_Product_button = "//button[@aria-label='Add product']"
        this.Existing_Product = "//input[@aria-label='Existing Product, Lookup']"
        this.Selecting_product = "//ul[@aria-label='Lookup results']/li[1]"
        this.Quantity = "//input[@aria-label='Quantity']"


        this.Invoice_Tab = "//ul[@aria-label='Opportunity Form']/li[contains(@title,'Invoices')]"
        this.Generate_Invoive = "//button[@aria-label='Generate Invoice. Generate New Invoice']"
        this.First_Invoice = "//div[@aria-label='Press SPACE to select this row.'][1]/div[1]"
        this.Second_Invoice = "//div[@aria-label='Press SPACE to select this row.'][2]/div[1]"
        this.select_Payment_Method = "//select[@aria-label='Payment Method']"

        this.Payment_Date = "//input[@aria-label='Date of Payment Date']/following-sibling::i"
        this.Payment_current_Date = "//td[@aria-current='date']"//"//button[contains(@class, 'dayButton') and contains(@class, 'dayIsToday')]"

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
 
         this.PrintAll = "//span[text()='Print All']"

         this.Print_Agreement = "//button[@aria-label='Print Agreement']"
         this.Print = "//button[@aria-label='Print']"
         this.GoBack_btn = "//button[@aria-label='Press Enter to go back.']"

         this.Send_Agreement = "//button[@aria-label='Send Agreement']"
         this.Send = "//button[@aria-label='Send']"
         this.Okbtn = "//button[@aria-label='OK']"

         this.Sync = "//button[@aria-label='Sync']"

         this.Envelop = "//ul[@aria-label='Opportunity Form']/li[contains(@aria-label,'Envelopes')]"
         this.CheckStatus = "//button[@aria-label='Check Status']"

        this.Integration_Tab = "//ul[@aria-label='Opportunity Form']/li[contains(@aria-label,'Integration')]"
    }
}