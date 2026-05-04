exports.Customer_WebElements = 
class Customer_WebElements {
    constructor() 
    {
        // Store all locators here
        this.emailid = "//input[@name='loginfmt']";
        this.nextbtn = "//input[@id='idSIButton9']";
        this.password = "//input[@name='passwd']";
        this.signinbtn = "//input[@id='idSIButton9']";
        this.yesbtn = "//input[@id='idSIButton9']";
        this.frame_AuctionManager = "//iframe[@id='AppLandingPage']"
        this.Auction_management = "//a[@title='Auction Manager']";
        this.managementbtn = "//div[@title='Management']";
        this.Customerbtn = "//span[text()='Customers']";
        this.verifyallaccount = "//span[text()='All Accounts']"
        this.Createnewaccountbtn = "//span[text()='New']";
        this.Overview_Tab = "//li[@aria-label='Overview']"
        this.Details_Tab = "//li[@aria-label='Details']"
        this.Verifynewaccounttext = "//h1[text()='New Account']";
        this.verifyallaccount = "//span[text()='All Accounts']";

        this.WebCustomer = "//div[@aria-label='Press SPACE to select this row.'][1]"
    }
};