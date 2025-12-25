import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage.js';
import { PersonalAccountPage } from '../../Pages/PersonalAccountPage.js';
import { AddressPage } from '../../Pages/AddressPage.js';
import { PhoneNumberPage } from '../../Pages/PhoneNumberPage.js';
import { EmailPage } from '../../Pages/EmailPage.js';
import { LeadPage } from '../../Pages/LeadPage.js';

let browser;
let context;
let page;
let customerpage;
let personalaccountpage;
let addresspage;
let phonenumberpage;
let emailpage;
let leadpage;

test.describe('Lead Bidder Flow and Consignment Flow', () => {
    test.beforeAll(async ({ playwright }) => {
        // Launch the browser manually
        browser = await playwright.chromium.launch(); // visible browser msedge chrome  
        context = await browser.newContext();
        page = await context.newPage();

        // Initialize page objects
        customerpage = new CustomerPage(page);
        personalaccountpage = new PersonalAccountPage(page);
        addresspage = new AddressPage(page);
        phonenumberpage = new PhoneNumberPage(page);
        emailpage = new EmailPage(page);
        leadpage = new LeadPage(page);
    });

    test('01. Open customer page URL', async () => {
        await customerpage.url();
    });

    test('02. Select management with Lead', async () => {
        await leadpage.Management_Lead();
    });

    test('03. Open New Lead for Bidder', async () => {
        await leadpage.Lead_New();
    });

    test('04. Fill personal account information', async () => {
        await personalaccountpage.names();
    });

    test('05. Enter email address', async () => {
        await leadpage.enter_emailid();
    });

    test('06. Enter phone number', async () => {
        await leadpage.Phone();
    });
    test('07. Enter address details', async () => {
        await leadpage.generaladdress();
    });

    test('08. Enter Bidder Registration', async () => {
        await leadpage.Bidder_Registration();
    });
    test('09. Save Lead Bidder', async () => {
        await personalaccountpage.save();
    });

    test('10. Register Bidder from Ribbon Level', async () => {
        await leadpage.Register_Ribbon();
    });

    test('11. Register Bidder, will create account plus bidder opportunity', async () => {
        await leadpage.Open_Register_LeadBidder();
    });

    test('12. Open New Lead for Consignment', async () => {
        await leadpage.Lead_New();
    });
    test('13. Fill personal account information', async () => {
        await personalaccountpage.names();
    });

    test('14. Enter email address', async () => {
        await leadpage.enter_emailid();
    });

    test('15. Enter phone number', async () => {
        await leadpage.Phone();
    });
    test('16. Enter address details', async () => {
        await leadpage.generaladdress();
    });

    test('17. Enter Lead Info change to Consignment', async () => {
        await leadpage.LeadInfo_Consignment();
    });

     test('18. Enter Consignment Registration', async () => {
        await leadpage.Consignment_Registration();
    });

    test('19. Save Lead Consignment', async () => {
        await personalaccountpage.save();
    });

    test('20. Register Consignment from Ribbon Level', async () => {
        await leadpage.Register_Ribbon();
    });

    test('21. Register Consignment, will create account', async () => {
        await leadpage.Open_Register_LeadBidder();
    });

     test('22. Verifying Consignment and Bidder in Lead All', async () => {
        await leadpage.Lead_All();
    });

    test.afterAll(async () => {
        console.log('All tests finished. Browser close automatically.');
        await page.close(); // keep browser open for inspection
        //await browser.close(); // Uncomment to close browser manually
    });
});

