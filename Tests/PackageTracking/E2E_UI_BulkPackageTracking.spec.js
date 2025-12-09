import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { ConsignmentManagerPage } from '../../Pages/ConsignmentManagerPage';

let browser;
let context;
let page;
let customerpage;
let consignmentmanagerPage;

test.describe('Bulk Package Tracking Validation Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        consignmentmanagerPage = new ConsignmentManagerPage(page);
    });

    test('01. Open Customer Page', async () => {
        await customerpage.url();
    });

    test('02. Validate Bulk Package Tracking (Bidder Manager)', async () => {
        await consignmentmanagerPage.BidderManager();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });

});
