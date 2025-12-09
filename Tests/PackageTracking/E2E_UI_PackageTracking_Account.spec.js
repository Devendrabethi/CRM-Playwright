import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { PersonalAccountPage } from '../../Pages/PersonalAccountPage';
import { AddressPage } from '../../Pages/AddressPage';
import { PhoneNumberPage } from '../../Pages/PhoneNumberPage';
import { EmailPage } from '../../Pages/EmailPage';

let browser;
let context;
let page;
let customerpage;
let personalaccountpage;
let addresspage;
let phonenumberpage;
let emailpage;

test.describe('Package Tracking / Price Estimator Tests', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        personalaccountpage = new PersonalAccountPage(page);
        addresspage = new AddressPage(page);
        phonenumberpage = new PhoneNumberPage(page);
        emailpage = new EmailPage(page);
    });

    // ---------------- CRM ORIGINATED ----------------
    test('Validating PACKAGE TRACKING / PRICE ESTIMATOR for CRM originated', async () => {

        await test.step('Open Customer Page & Navigate', async () => {
            await customerpage.url();
            await customerpage.manager();
            await customerpage.customer();
        });

        await test.step('Create Personal Account', async () => {
            await personalaccountpage.accounttype_dropdown();
            await personalaccountpage.names();
            await personalaccountpage.save();
        });

        await test.step('Add Personal Address', async () => {
            await addresspage.newaddress();
            await addresspage.generaladdress();
            await addresspage.saveandclose();
        });

        await test.step('Add Personal Phone Number', async () => {
            await phonenumberpage.phonenumberbtn();
            await phonenumberpage.General_PhoneNumber();
        });

        await test.step('Add Email', async () => {
            await emailpage.NewEmailbtn();
            await emailpage.enter_emailid();
        });

        await test.step('Validate Package Tracking with Price Estimator', async () => {
            await personalaccountpage.Tracking_Tab();
        });

    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });
});

test.describe('Web Originated Package Tracking Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        personalaccountpage = new PersonalAccountPage(page);
    });

    test('01. Open Customer Page & Navigate', async () => {
        await customerpage.url();
        await customerpage.manager();
    });

    test('02. Select Web Originated Customer', async () => {
        await customerpage.WebCustoer();
    });

    test('03. Validate Package Tracking / Price Estimator', async () => {
        await personalaccountpage.Tracking_Tab();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });

});


