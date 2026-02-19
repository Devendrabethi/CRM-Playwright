import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage.js';
import { PersonalAccountPage } from '../../Pages/PersonalAccountPage.js';
import { AddressPage } from '../../Pages/AddressPage.js';
import { PhoneNumberPage } from '../../Pages/PhoneNumberPage.js';
import { EmailPage } from '../../Pages/EmailPage.js';

let browser;
let context;
let page;
let customerpage;
let personalaccountpage;
let addresspage;
let phonenumberpage;
let emailpage;

test.describe('Personal Account Workflow', () => {
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
    });

    test('01. Open customer page URL', async () => {
        await customerpage.url();
    });

    test('02. Select manager', async () => {
        await customerpage.manager();
    });

    test('03. Open customer section', async () => {
        await customerpage.customer();
    });

    test('04. Fill personal account information', async () => {
        await personalaccountpage.accounttype_dropdown();
        await personalaccountpage.names();
        await personalaccountpage.save();
        await personalaccountpage.Event_Auct_Comp();
    });

    test('05. Enter address details', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    test('06. Enter phone number', async () => {
        await phonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    test('07. Enter email address', async () => {
        await emailpage.NewEmailbtn();
        await emailpage.enter_emailid();
        await emailpage.CredentialTab();
        await emailpage.Wristband();
    });

    test.afterAll(async () => {
        console.log('All tests finished. Browser close automatically.');
        await page.close(); // keep browser open for inspection
        //await browser.close(); // Uncomment to close browser manually
    });
});

