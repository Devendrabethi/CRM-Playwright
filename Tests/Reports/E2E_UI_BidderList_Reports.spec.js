import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { ReportsPage } from '../../Pages/ReportsPage';

let browser;
let context;
let page;
let customerpage;
let reportspage;

test.describe('Reports Validation Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        reportspage = new ReportsPage(page);
    });

    test('01. Open Customer Page', async () => {
        await customerpage.url();
    });

    test('02. Change Area to Reports', async () => {
        await reportspage.ChangeAreaReports();
    });

    test('03. Validate Opportunity Invoice Report', async () => {
        await reportspage.OpportunityInvoiceReport();
    });

    test('04. Validate Bidder List Report', async () => {
        await reportspage.BidderList();
    });

    test('05. Validate Customer Report', async () => {
        await reportspage.Customer();
    });

    test('06. Validate Consignors Report', async () => {
        await reportspage.Consignors();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });

});
