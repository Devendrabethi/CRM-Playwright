import{test} from '@playwright/test'
import { LotNumberChangePage } from '../../Pages/LotNumberChangePage'
import { BidderOpportunityPage} from '../../Pages/BidderOpportunityPage'

// test('Validating Lot Assign with Lot Ovverride amount',async({page}) =>  
// {
//     const lotnumberchangepage = new LotNumberChangePage(page)

//     await lotnumberchangepage.url()
//     await lotnumberchangepage.OpportunityForLot()
// })

test('Validating Lot Assign with Lot Ovverride amount', async ({ page }) => {

    const lotnumberchangepage = new LotNumberChangePage(page);

    // ---------------- NAVIGATION ----------------
    await test.step('Open Lot Number Change Page', async () => {
        await lotnumberchangepage.url();
    });

    // ---------------- LOT ASSIGNMENT ----------------
    await test.step('Validate Opportunity for Lot Assign with Override', async () => {
        await lotnumberchangepage.OpportunityForLot();
    });

});
