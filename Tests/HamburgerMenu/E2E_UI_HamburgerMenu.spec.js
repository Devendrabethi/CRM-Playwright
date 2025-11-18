import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { BidderOpportunityPage} from '../../Pages/BidderOpportunityPage'

test('Validating Hamburger Menu',async({page}) =>  
{
    const customerpage = new CustomerPage(page)
    const bidderopportunitypage = new BidderOpportunityPage(page)

    await customerpage.url()
    await bidderopportunitypage.BidderHamburgerMenu()
    await bidderopportunitypage.ConsignmentHamburgerMenu()
})