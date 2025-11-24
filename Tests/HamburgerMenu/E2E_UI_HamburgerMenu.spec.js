import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { BidderOpportunityPage} from '../../Pages/BidderOpportunityPage'

// test('Validating Hamburger Menu',async({page}) =>  
// {
//     const customerpage = new CustomerPage(page)
//     const bidderopportunitypage = new BidderOpportunityPage(page)

//     await customerpage.url()
//     await bidderopportunitypage.BidderHamburgerMenu()
//     await bidderopportunitypage.ConsignmentHamburgerMenu()
// })

test('Validating Hamburger Menu', async ({ page }) => {

    const customerpage = new CustomerPage(page);
    const bidderopportunitypage = new BidderOpportunityPage(page);

    await test.step('Open Customer Page', async () => {
        await customerpage.url();
    });

    await test.step('Validate Bidder Hamburger Menu', async () => {
        await bidderopportunitypage.BidderHamburgerMenu();
    });

    await test.step('Validate Consignment Hamburger Menu', async () => {
        await bidderopportunitypage.ConsignmentHamburgerMenu();
    });

});
