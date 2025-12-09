import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { PersonalAccountPage } from '../../Pages/PersonalAccountPage';
import { AddressPage } from '../../Pages/AddressPage';
import { PhoneNumberPage } from '../../Pages/PhoneNumberPage';
import { EmailPage } from '../../Pages/EmailPage';
import { NewConsignmentVehiclePage } from '../../Pages/NewConsignmentVehiclePage';

let browser;
let context;
let page;
let customerpage;
let personalaccountpage;
let addresspage;
let phonenumberpage;
let emailpage;
let newconsignmentvehiclepage;

test.describe('Personal Consignment Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        personalaccountpage = new PersonalAccountPage(page);
        addresspage = new AddressPage(page);
        phonenumberpage = new PhoneNumberPage(page);
        emailpage = new EmailPage(page);
        newconsignmentvehiclepage = new NewConsignmentVehiclePage(page);
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

    test('04. dd Personal Phone Number', async () => {
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

    // ---------------- PERSONAL CONSIGNMENT ----------------
    test('07. Create New Vehicle Consignment', async () => {
        await newconsignmentvehiclepage.newcon();
    });

    test('08. Enter Vehicle Details', async () => {
        await newconsignmentvehiclepage.vehicledeatails();
        await newconsignmentvehiclepage.Mileage();
    });

    test('09. Enter Sale Details', async () => {
        await newconsignmentvehiclepage.SaleDetails();
    });

    test('10. Fill Account & Address Information', async () => {
        await newconsignmentvehiclepage.Account_Address();
    });

    test('11. Fill Application Information', async () => {
        await newconsignmentvehiclepage.Appilication_Info();
    });

    test('12. Assign Consignment', async () => {
        await newconsignmentvehiclepage.Assign();
    });

    test('13. Marketing, Documentation and Photo functionality', async () => {
        await newconsignmentvehiclepage.MarketingTab();
        await newconsignmentvehiclepage.ConsVehicleDoc();
        await newconsignmentvehiclepage.UploadPhoto();
    });

    test('14. Comparisons, Tasks and Review, Photo Approval toggle from Overview', async () => {
        await newconsignmentvehiclepage.ComparisionTab();
        await newconsignmentvehiclepage.TaskTab();
        await newconsignmentvehiclepage.ApplicationStatus();
    });

    // UAT-only Activity steps (commented)
    // test('Activities (UAT only)', async () => {
    //     await newconsignmentvehiclepage.ActivitiesTab();
    // });

    // test('Consignment Ribbon Level', async () => {
    //     await newconsignmentvehiclepage.RibbonLevel();
    // });

    test('15. Integration Tab', async () => {
        await newconsignmentvehiclepage.IntegrationTab();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });
});
