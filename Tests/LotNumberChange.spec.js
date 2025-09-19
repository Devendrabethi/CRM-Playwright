import{test} from '@playwright/test'
import { LotNumberChangePage } from '../Pages/LotNumberChangePage'
import { BidderOpportunityPage} from '../Pages/BidderOpportunityPage'

test('Validating Lot Ovverride and Lot Assign',async({page}) =>  
{
    const lotnumberchangepage = new LotNumberChangePage(page)

    await lotnumberchangepage.url()
    await lotnumberchangepage.Opportunity()
})