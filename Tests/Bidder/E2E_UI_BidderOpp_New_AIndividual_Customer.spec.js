import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { PersonalAccountPage } from '../../Pages/PersonalAccountPage';
import { AddressPage } from '../../Pages/AddressPage';
import { PhoneNumberPage } from '../../Pages/PhoneNumberPage';
import { EmailPage } from '../../Pages/EmailPage';
import { NewConsignmentVehiclePage } from '../../Pages/NewConsignmentVehiclePage';
import { BidderOpportunityPage } from '../../Pages/BidderOpportunityPage';

let browser;
let context;
let page;
let customerpage;
let personalaccountpage;
let addresspage;
let phonenumberpage;
let emailpage;
let newconsignmentvehiclepage;
let bidderopportunitypage;

test.describe('Personal Bidder Opportunity Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch browser
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        // Initialize page objects
        customerpage = new CustomerPage(page);
        personalaccountpage = new PersonalAccountPage(page);
        addresspage = new AddressPage(page);
        phonenumberpage = new PhoneNumberPage(page);
        emailpage = new EmailPage(page);
        newconsignmentvehiclepage = new NewConsignmentVehiclePage(page);
        bidderopportunitypage = new BidderOpportunityPage(page);
    });

    // ---------------- CUSTOMER NAVIGATION ----------------
    test('01. Open Customer Page and Navigate', async () => {
        await customerpage.url();
        await customerpage.manager();
        await customerpage.customer();
    });

    // ---------------- PERSONAL ACCOUNT ----------------
    test('02. Create Personal Account', async () => {
        await personalaccountpage.accounttype_dropdown();
        await personalaccountpage.names();
        await personalaccountpage.save();
        await personalaccountpage.Event_Auct_Comp();
    });

    test('03. Add Personal Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    test('04. Add Personal Phone Number', async () => {
        await phonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    test('05. Add Personal Email and Credentials', async () => {
        await emailpage.NewEmailbtn();
        await emailpage.enter_emailid();
        await emailpage.CredentialTab();
        //await emailpage.Wristband();
    });

    test('06. Upload Personal Documents', async () => {
        await personalaccountpage.personalAccountDocuments();
    });

    // ---------------- BIDDER OPPORTUNITY ----------------
    test('07. Create New Bidder Opportunity', async () => {
        await bidderopportunitypage.New_Bidder_Opportunity();
    });

    test('08. Fill Application Info', async () => {
        await newconsignmentvehiclepage.Appilication_Info();
    });

    test('09. Fill Bidder Details', async () => {
        await bidderopportunitypage.Bidder_details_CompType();
        await bidderopportunitypage.bidder_Address();
        await bidderopportunitypage.BidderAssign();
    });

    test('10. Add Bidder Packages', async () => {
        await bidderopportunitypage.Add_Envelop();
        await bidderopportunitypage.Add_Absentee_Bid();
        await bidderopportunitypage.CreatePackage();
    });

    test('11. Phone Observer and Registration Documents', async () => {
        await bidderopportunitypage.PhoneObserver();
        await bidderopportunitypage.RegisterDocuments();
    });

    test('12. Add Products, Generate Invoice, Make Payment, and Task Tab', async () => {
        await bidderopportunitypage.Opportunity_product_tab();
        await bidderopportunitypage.Invoice_Tab();
        await bidderopportunitypage.AnotherProduct();
        await bidderopportunitypage.TaskTab();
    });

    test('13. Integration Tab', async () => {
        await newconsignmentvehiclepage.IntegrationTab();
    });

    // Uncomment if Ribbon Level is needed
    // test('Bidder Ribbon Level', async () => {
    //     await bidderopportunitypage.RibbonLevel();
    // });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });

});
