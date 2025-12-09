import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { BidderOpportunityPage } from '../../Pages/BidderOpportunityPage';

let browser;
let context;
let page;
let customerpage;
let bidderopportunitypage;

test.describe('Hamburger Menu Validation Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        bidderopportunitypage = new BidderOpportunityPage(page);
    });

    test('01. Open Customer Page', async () => {
        await customerpage.url();
    });

    test('02. Validate Bidder Hamburger Menu', async () => {
        await bidderopportunitypage.BidderHamburgerMenu();
    });

    test('03. Validate Consignment Hamburger Menu', async () => {
        await bidderopportunitypage.ConsignmentHamburgerMenu();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });

});
