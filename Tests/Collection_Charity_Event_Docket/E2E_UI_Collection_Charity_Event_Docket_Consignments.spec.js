import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { ConsignmentManagerPage } from '../../Pages/ConsignmentManagerPage';

let browser;
let context;
let page;
let customerpage;
let consignmentmanagerPage;

test.describe('Consignment Manager Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        consignmentmanagerPage = new ConsignmentManagerPage(page);
    });

    // ---------------- NAVIGATION ----------------
    test('01. Open Customer Page', async () => {
        await customerpage.url();
    });

    // ---------------- CONSIGNMENT MANAGER ----------------
    test('02. Change Area to Consignment Manager', async () => {
        await consignmentmanagerPage.ChangeArea();
    });

    test('03. Validate Collections', async () => {
        await consignmentmanagerPage.Collections();
    });

    test('04. Validate Charities', async () => {
        await consignmentmanagerPage.Charities();
    });

    test('05. Validate Events', async () => {
        await consignmentmanagerPage.Events();
    });

    test('06. Validate Dockets and Assign Lot', async () => {
        await consignmentmanagerPage.Dockets();
    });

    test('07. Open Consignment and Add Buyer & Donor Details', async () => {
        await consignmentmanagerPage.Consignment();
    });

    test('08. Validate Marketing Tab by Adding Collections and Charity', async () => {
        await consignmentmanagerPage.MarkettingTab();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });
});
