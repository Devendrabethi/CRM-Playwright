import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { NewConsignmentVehiclePage} from '../../Pages/NewConsignmentVehiclePage'
import { BidderOpportunityPage} from '../../Pages/BidderOpportunityPage'
import { NewAutomobiliaConsignmentPage} from '../../Pages/NewAutomobiliaConsignmentPage'

// test('Validating Consignment (Product, Invoice and Sale Details) and Bidder opportunity Ribbon level and Automobilia Ribbon Level',async({page}) =>
// {
//     const customerpage = new CustomerPage(page)
//     const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page)
//     const bidderopportunitypage = new BidderOpportunityPage(page)
//     const newautomobiliaconsignmentpage = new NewAutomobiliaConsignmentPage(page)

//     await customerpage.url()
//     await newconsignmentvehiclepage.Ribbon_Consignment()
//     await newconsignmentvehiclepage.RibbonLevel()
//     await bidderopportunitypage.Ribbon_Bidder()
//     await bidderopportunitypage.RibbonLevel()
//     await newautomobiliaconsignmentpage.Ribbon_AutomobiliaConsignment()
//     await newautomobiliaconsignmentpage.RibbonLevel()
// })

test('Validating Consignment, Bidder and Automobilia Ribbon Level', async ({ page }) => {

    const customerpage = new CustomerPage(page);
    const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page);
    const bidderopportunitypage = new BidderOpportunityPage(page);
    const newautomobiliaconsignmentpage = new NewAutomobiliaConsignmentPage(page);

    // ---------------- NAVIGATION ----------------
    await test.step('Open Customer Page', async () => {
        await customerpage.url();
    });

    // ---------------- CONSIGNMENT RIBBON ----------------
    await test.step('Validate Consignment Ribbon (Product, Invoice, Sale Details)', async () => {
        await newconsignmentvehiclepage.Ribbon_Consignment();
        await newconsignmentvehiclepage.RibbonLevel();
    });

    // ---------------- BIDDER OPPORTUNITY RIBBON ----------------
    await test.step('Validate Bidder Opportunity Ribbon', async () => {
        await bidderopportunitypage.Ribbon_Bidder();
        await bidderopportunitypage.RibbonLevel();
    });

    // ---------------- AUTOMOBILIA CONSIGNMENT RIBBON ----------------
    await test.step('Validate Automobilia Consignment Ribbon', async () => {
        await newautomobiliaconsignmentpage.Ribbon_AutomobiliaConsignment();
        await newautomobiliaconsignmentpage.RibbonLevel();
    });

});
