import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { PersonalAccountPage } from '../../Pages/PersonalAccountPage';
import { AddressPage } from '../../Pages/AddressPage';
import { PhoneNumberPage } from '../../Pages/PhoneNumberPage';
import { EmailPage } from '../../Pages/EmailPage';
import { NewConsignmentVehiclePage } from '../../Pages/NewConsignmentVehiclePage';
import { NewAutomobiliaConsignmentPage } from '../../Pages/NewAutomobiliaConsignmentPage';

let browser;
let context;
let page;
let customerpage;
let personalaccountpage;
let addresspage;
let phonenumberpage;
let emailpage;
let newconsignmentvehiclepage;
let newautomobiliaconsignmentpage;

test.describe('Automobilia Consignment Workflow', () => {

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
        newautomobiliaconsignmentpage = new NewAutomobiliaConsignmentPage(page);
    });

    // ---------------- CUSTOMER NAVIGATION ----------------
    test('01. Navigate to Customer Page', async () => {
        await customerpage.url();
        await customerpage.manager();
        await customerpage.customer();
    });

    // ---------------- PERSONAL ACCOUNT ----------------
    test('02. Create Personal Account', async () => {
        await personalaccountpage.accounttype_dropdown();
        await personalaccountpage.names();
        await personalaccountpage.save();
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

    // ---------------- AUTOMOBILIA CONSIGNMENT ----------------
    test('07. Create New Automobilia Consignment', async () => {
        await newautomobiliaconsignmentpage.newcon();
    });

    test('08. Fill Sale Details', async () => {
        await newautomobiliaconsignmentpage.SaleDetails();
    });

    test('09. Fill Account & Address Info', async () => {
        await newautomobiliaconsignmentpage.Account_Address();
    });

    test('10. Fill Application Information', async () => {
        await newautomobiliaconsignmentpage.Appilication_Info();
        await newautomobiliaconsignmentpage.Consignment_Representative();
    });

    test('11. Assign Consignment', async () => {
        await newautomobiliaconsignmentpage.Assign();
    });

    test('12. Fill Marketing, Documentation and Photos Tab', async () => {
        await newautomobiliaconsignmentpage.MarketingTab();
        await newautomobiliaconsignmentpage.ConsOpportunityDoc();
        await newautomobiliaconsignmentpage.UploadPhoto();
    });

    test('13. Integration Tab', async () => {
        await newautomobiliaconsignmentpage.IntegrationTab();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });

});
