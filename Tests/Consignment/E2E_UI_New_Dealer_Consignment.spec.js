import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { PersonalAccountPage } from '../../Pages/PersonalAccountPage';
import { DealerAccountPage } from '../../Pages/DealerAccountPage';
import { AddressPage } from '../../Pages/AddressPage';
import { PhoneNumberPage } from '../../Pages/PhoneNumberPage';
import { DealerPhoneNumberPage } from '../../Pages/DealerPhoneNumberPage';
import { EmailPage } from '../../Pages/EmailPage';
import { NewConsignmentVehiclePage } from '../../Pages/NewConsignmentVehiclePage';
import { NewDealerConsignmentVehiclePage } from '../../Pages/NewDealerConsignmentVehiclePage';

let browser;
let context;
let page;
let customerpage;
let personalaccountpage;
let dealeraccountpage;
let addresspage;
let phonenumberpage;
let dealerphonenumberpage;
let emailpage;
let newconsignmentvehiclepage;
let newdealerconsignmentvehiclepage;

test.describe('Dealer Consignment Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        personalaccountpage = new PersonalAccountPage(page);
        dealeraccountpage = new DealerAccountPage(page);
        addresspage = new AddressPage(page);
        phonenumberpage = new PhoneNumberPage(page);
        dealerphonenumberpage = new DealerPhoneNumberPage(page);
        emailpage = new EmailPage(page);
        newconsignmentvehiclepage = new NewConsignmentVehiclePage(page);
        newdealerconsignmentvehiclepage = new NewDealerConsignmentVehiclePage(page);
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
        await emailpage.Wristband();
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

    test('10. Upload Dealer Documents & Link to Personal', async () => {
        await dealeraccountpage.personalAccountDocuments();
        await dealeraccountpage.RelatedAccount();
    });

    // ---------------- DEALER CONSIGNMENT ----------------
    test('11. Start New Dealer Consignment', async () => {
        await newconsignmentvehiclepage.newcon();
    });

    test('12. Enter Vehicle Details', async () => {
        await newconsignmentvehiclepage.vehicledeatails();
        await newconsignmentvehiclepage.Mileage();
    });

    test('13. Enter Sale Details', async () => {
        await newconsignmentvehiclepage.SaleDetails();
    });

    test('14. Dealer Account For Consignment', async () => {
        await newdealerconsignmentvehiclepage.Account();
        await newdealerconsignmentvehiclepage.Account_Address();
    });

    test('15. Application Info & Assignment', async () => {
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
        await newconsignmentvehiclepage.AutocheckTab();
        await newconsignmentvehiclepage.SalesFeeTab();
        await newconsignmentvehiclepage.TaskTab();
        await newconsignmentvehiclepage.ApplicationStatus();
    });

    // Activity/UAT steps (commented out)
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
