import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { ConsignmentManagerPage } from '../../Pages/ConsignmentManagerPage'

// test('Validating Bulk Package Tracking',async({page}) =>  
// {
//     const customerpage = new CustomerPage(page)
//     const consignmentmanagerPage = new ConsignmentManagerPage(page) 

//     await customerpage.url()
//     await consignmentmanagerPage.BidderManager()
// })

test('Validating Bulk Package Tracking', async ({ page }) => {

    const customerpage = new CustomerPage(page);
    const consignmentmanagerPage = new ConsignmentManagerPage(page);

    await test.step('Open Customer Page', async () => {
        await customerpage.url();
    });

    await test.step('Validate Bulk Package Tracking (Bidder Manager)', async () => {
        await consignmentmanagerPage.BidderManager();
    });

});
