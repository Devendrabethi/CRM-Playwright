exports.LotNumberChange_WebElements = 
class LotNumberChange_WebElements {
    constructor() 
    {
            this.Opportunity_button = "//div[@title='Opportunities']"
            this.Consignments_Button = "//div[@title='Consignments']"
            this.First_Consignment = "//div[@row-index='0']/div[1]"
            this.Lot_OverRide = "//button[contains(@aria-label,'Lot# Override')]"
            this.frame_ChangeLotNumber = "//iframe[@aria-label='ChangeLotNumber']"
            this.Select_NewDocket = "//select[@id='docketDropdown']"
            this.Select_NewDocketSpot = "//select[@id='docketDetailDropdown']"
            this.NewLotNumber_Field = "//input[@id='newLotNumber']"
            this.Select_Manager = "//select[@id='Manager']"
            this.ManagerPassword_Field = "//input[@id='passwordmanager']"
            this.ManagerPassword_Text = "//label[text()='Manager Password']"
            this.Selec_LotStatus = "//select[@id='lotStatusDropdown']"
            this.ApproveSave_Button = "//button[@id='approveButton']"
            this.Products_Tab = "//ul[@aria-label='Opportunity Form']/li[@aria-label='Products']"
            this.Invoice_Tab = "//ul[@aria-label='Opportunity Form']/li[@aria-label='Invoice']"
            this.Refresh_Invoice = "//li[contains(@id,'invoice')]/button[@aria-label='Refresh']"
            this.SelectInvoice = "(//div[@col-id='__row_status'])[3]"
            this.Selectsingleinvoive = "(//div[@col-id='__row_status'])[4]"
            this.SaveandClose = "//button[@aria-label='Save & Close']"
            this.SaleDay_Tab = "//ul[@aria-label='Opportunity Form']/li[@aria-label='Sale Day']"
    }
};