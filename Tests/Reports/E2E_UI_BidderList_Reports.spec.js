import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { ReportsPage } from '../../Pages/ReportsPage'

// test('Validating Reports',async({page}) =>    // Must have the useraccount TestUser3 with sold status
// {
//     const customerpage = new CustomerPage(page)
//     const reportspage = new ReportsPage(page) 

//     await customerpage.url()
//     await reportspage.ChangeAreaReports()
//     await reportspage.OpportunityInvoiceReport()
//     await reportspage.BidderList()
//     await reportspage.Customer()
//     await reportspage.Consignors()
// })

test('Validating Reports', async ({ page }) => {

    const customerpage = new CustomerPage(page);
    const reportspage = new ReportsPage(page);

    // ---------------- NAVIGATION ----------------
    await test.step('Open Customer Page', async () => {
        await customerpage.url();
    });

    // ---------------- REPORTS AREA ----------------
    await test.step('Change Area to Reports', async () => {
        await reportspage.ChangeAreaReports();
    });

    await test.step('Validate Opportunity Invoice Report', async () => {
        await reportspage.OpportunityInvoiceReport();
    });

    await test.step('Validate Bidder List Report', async () => {
        await reportspage.BidderList();
    });

    await test.step('Validate Customer Report', async () => {
        await reportspage.Customer();
    });

    await test.step('Validate Consignors Report', async () => {
        await reportspage.Consignors();
    });

});
