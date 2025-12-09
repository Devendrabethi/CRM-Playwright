import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { NewConsignmentVehiclePage } from '../../Pages/NewConsignmentVehiclePage';
import { BidderOpportunityPage } from '../../Pages/BidderOpportunityPage';
import { NewAutomobiliaConsignmentPage } from '../../Pages/NewAutomobiliaConsignmentPage';

let browser;
let context;
let page;
let customerpage;
let newconsignmentvehiclepage;
let bidderopportunitypage;
let newautomobiliaconsignmentpage;

test.describe('Ribbon Level Validation Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        newconsignmentvehiclepage = new NewConsignmentVehiclePage(page);
        bidderopportunitypage = new BidderOpportunityPage(page);
        newautomobiliaconsignmentpage = new NewAutomobiliaConsignmentPage(page);
    });

    test('01. Open Customer Page', async () => {
        await customerpage.url();
    });

    test('02. Validate Consignment Ribbon (Product, Invoice, Sale Details)', async () => {
        await newconsignmentvehiclepage.Ribbon_Consignment();
        await newconsignmentvehiclepage.RibbonLevel();
    });

    test('03. Validate Bidder Opportunity Ribbon', async () => {
        await bidderopportunitypage.Ribbon_Bidder();
        await bidderopportunitypage.RibbonLevel();
    });

    test('04. Validate Automobilia Consignment Ribbon', async () => {
        await newautomobiliaconsignmentpage.Ribbon_AutomobiliaConsignment();
        await newautomobiliaconsignmentpage.RibbonLevel();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });

});
