import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { PersonalAccountPage } from '../../Pages/PersonalAccountPage';
import { AddressPage } from '../../Pages/AddressPage';
import { PhoneNumberPage } from '../../Pages/PhoneNumberPage';
import { EmailPage } from '../../Pages/EmailPage';
import { NewAutomobiliaConsignmentPage } from '../../Pages/NewAutomobiliaConsignmentPage';

let browser;
let context;
let page;
let customerpage;
let personalaccountpage;
let addresspage;
let phonenumberpage;
let emailpage;
let newautomobiliaconsignmentpage;

test.describe('Personal Batch Automobilia Consignment Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        // Launch browser once
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        // Initialize page objects
        customerpage = new CustomerPage(page);
        personalaccountpage = new PersonalAccountPage(page);
        addresspage = new AddressPage(page);
        phonenumberpage = new PhoneNumberPage(page);
        emailpage = new EmailPage(page);
        newautomobiliaconsignmentpage = new NewAutomobiliaConsignmentPage(page);
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

    // ---------------- BATCH AUTOMOBILIA CONSIGNMENT ----------------
    test('07. Create New Batch Automobilia Consignment', async () => {
        await newautomobiliaconsignmentpage.NewBatchAutomobiliaConsignment();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });

});

