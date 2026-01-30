import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { PersonalAccountPage } from '../../Pages/PersonalAccountPage';
import { AddressPage } from '../../Pages/AddressPage';
import { PhoneNumberPage } from '../../Pages/PhoneNumberPage';
import { EmailPage } from '../../Pages/EmailPage';
import { DealerAccountPage } from '../../Pages/DealerAccountPage';
import { DealerPhoneNumberPage } from '../../Pages/DealerPhoneNumberPage';
import { NewConsignmentVehiclePage } from '../../Pages/NewConsignmentVehiclePage';
import { NewDealerConsignmentVehiclePage } from '../../Pages/NewDealerConsignmentVehiclePage';
import { BidderOpportunityPage } from '../../Pages/BidderOpportunityPage';

let browser;
let context;
let page;
let customerpage;
let personalaccountpage;
let addresspage;
let phonenumberpage;
let emailpage;
let dealeraccountpage;
let dealerphonenumberpage;
let newconsignmentvehiclepage;
let newdealerconsignmentvehiclepage;
let bidderopportunitypage;

test.describe('Dealer Bidder Opportunity Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        personalaccountpage = new PersonalAccountPage(page);
        addresspage = new AddressPage(page);
        phonenumberpage = new PhoneNumberPage(page);
        emailpage = new EmailPage(page);
        dealeraccountpage = new DealerAccountPage(page);
        dealerphonenumberpage = new DealerPhoneNumberPage(page);
        newconsignmentvehiclepage = new NewConsignmentVehiclePage(page);
        newdealerconsignmentvehiclepage = new NewDealerConsignmentVehiclePage(page);
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
    });

    test('06. Upload Personal Documents', async () => {
        await personalaccountpage.personalAccountDocuments();
    });

    // ---------------- DEALER ACCOUNT ----------------
    test('07. Create Dealer Account', async () => {
        await dealeraccountpage.accounttype_dropdown();
        await dealeraccountpage.names();
        await dealeraccountpage.save();
    });

    test('08. Add Dealer Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    test('09. Add Dealer Phone Number', async () => {
        await dealerphonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    test('10. Upload Dealer Documents and Link Personal Accounts', async () => {
        await dealeraccountpage.personalAccountDocuments();
        await dealeraccountpage.RelatedAccount();
    });

    // ---------------- BIDDER OPPORTUNITY ----------------
    test('11. Create New Bidder Opportunity', async () => {
        await bidderopportunitypage.New_Bidder_Opportunity();
        await newdealerconsignmentvehiclepage.Account();
    });

    test('12. Fill Account and Application Info', async () => {
        await newconsignmentvehiclepage.Appilication_Info();
    });

    test('13. Fill Bidder Details', async () => {
        await bidderopportunitypage.Bidder_details();
        await bidderopportunitypage.bidder_Address();
        await bidderopportunitypage.BidderAssign();
    });

    test('14. Add Bidder Packages', async () => {
        await bidderopportunitypage.Add_Envelop();
        await bidderopportunitypage.Add_Absentee_Bid();
        await bidderopportunitypage.CreatePackage();
    });

    test('15. Phone Observer and Registration Documents', async () => {
        await bidderopportunitypage.PhoneObserver();
        await bidderopportunitypage.RegisterDocuments();
    });

    test('16. Add Products, Generate Invoice, Make Payment, and Task Tab', async () => {
        await bidderopportunitypage.Opportunity_product_tab();
        await bidderopportunitypage.Invoice_Tab();
        await bidderopportunitypage.AnotherProduct();
        await bidderopportunitypage.TaskTab();
    });

    test('17. Integration Tab', async () => {
        await newconsignmentvehiclepage.IntegrationTab();
    });

    // Optional RibbonLevel
    // test('Bidder Ribbon Level', async () => {
    //     await bidderopportunitypage.RibbonLevel();
    // });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });

});
