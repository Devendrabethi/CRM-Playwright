import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { PersonalAccountPage } from '../../Pages/PersonalAccountPage';
import { BusinessAccountPage } from '../../Pages/BusinessAccountPage';
import { AddressPage } from '../../Pages/AddressPage';
import { PhoneNumberPage } from '../../Pages/PhoneNumberPage';
import { BusinessPhoneNumberPage } from '../../Pages/BusinessPhoneNumberPage';
import { EmailPage } from '../../Pages/EmailPage';
import { NewConsignmentVehiclePage } from '../../Pages/NewConsignmentVehiclePage';
import { NewBusinessConsignmentVehiclePage } from '../../Pages/NewBusinessConsignmentVehiclePage';

let browser;
let context;
let page;
let customerpage;
let personalaccountpage;
let businessaccountpage;
let addresspage;
let phonenumberpage;
let businessphonenumberpage;
let emailpage;
let newconsignmentvehiclepage;
let newbusinessconsignmentvehiclepage;

test.describe('Business Consignment Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        personalaccountpage = new PersonalAccountPage(page);
        businessaccountpage = new BusinessAccountPage(page);
        addresspage = new AddressPage(page);
        phonenumberpage = new PhoneNumberPage(page);
        businessphonenumberpage = new BusinessPhoneNumberPage(page);
        emailpage = new EmailPage(page);
        newconsignmentvehiclepage = new NewConsignmentVehiclePage(page);
        newbusinessconsignmentvehiclepage = new NewBusinessConsignmentVehiclePage(page);
    });

    // ---------------- NAVIGATION ----------------
    test('01. Open Customer Page & Navigate', async () => {
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

    test('04. Add Personal Phone', async () => {
        await phonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    test('05. Add Personal Email', async () => {
        await emailpage.NewEmailbtn();
        await emailpage.enter_emailid();
        await emailpage.CredentialTab();
    });

    test('06. Upload Personal Documents', async () => {
        await personalaccountpage.personalAccountDocuments();
    });

    // ---------------- BUSINESS ACCOUNT ----------------
    test('07. Create Business Account', async () => {
        await businessaccountpage.accounttype_dropdown();
        await businessaccountpage.names();
        await businessaccountpage.save();
    });

    test('08. Add Business Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    test('09. Add Business Phone', async () => {
        await businessphonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    test('10. Upload Business Documents + Link to Personal', async () => {
        await businessaccountpage.personalAccountDocuments();
        await businessaccountpage.RelatedAccount();
    });

    // ---------------- BUSINESS CONSIGNMENT ----------------
    test('11. Create New Vehicle Consignment', async () => {
        await newconsignmentvehiclepage.newcon();
    });

    test('12. Enter Vehicle Details', async () => {
        await newconsignmentvehiclepage.vehicledeatails();
        await newconsignmentvehiclepage.Mileage();
    });

    test('13. Enter Sale Details', async () => {
        await newconsignmentvehiclepage.SaleDetails();
    });

    test('14. Business Account & Address For Consignment', async () => {
        await newbusinessconsignmentvehiclepage.Account();
        await newbusinessconsignmentvehiclepage.Account_Address();
    });

    test('15. Application Information', async () => {
        await newconsignmentvehiclepage.Appilication_Info();
        await newconsignmentvehiclepage.Consignment_Representative();
    });

    test('16. Assign Consignment', async () => {
        await newconsignmentvehiclepage.Assign();
    });

    test('17. Marketing, Documentation and Photo functionality', async () => {
        await newconsignmentvehiclepage.MarketingTab();
        await newconsignmentvehiclepage.ConsVehicleDoc();
        await newconsignmentvehiclepage.UploadPhoto();
    });

    test('18. Comparisons, Tasks and Review, Photo Approval toggle from Overview', async () => {
        await newconsignmentvehiclepage.ComparisionTab();
        await newconsignmentvehiclepage.TaskTab();
        await newconsignmentvehiclepage.ApplicationStatus();
    });

    // Activity-related steps (UAT only)
    // test('Activities (UAT only)', async () => {
    //     await newconsignmentvehiclepage.ActivitiesTab();
    // });

    // test('Consignment Ribbon Level', async () => {
    //     await newconsignmentvehiclepage.RibbonLevel();
    // });

    test('19. Integration Tab', async () => {
        await newconsignmentvehiclepage.IntegrationTab();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });
});
