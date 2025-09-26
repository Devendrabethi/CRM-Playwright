import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { NewConsignmentVehiclePage} from '../Pages/NewConsignmentVehiclePage'
import { BidderOpportunityPage} from '../Pages/BidderOpportunityPage'

test('Validating Consignment and Bidder opportunity Ribbon level',async({page}) =>
{
    const customerpage = new CustomerPage(page)
    const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page)
    const bidderopportunitypage = new BidderOpportunityPage(page)

    await customerpage.url()
    await newconsignmentvehiclepage.Ribbon_Consignment()
    await newconsignmentvehiclepage.RibbonLevel()
    await bidderopportunitypage.Ribbon_Bidder()
    await bidderopportunitypage.RibbonLevel()
})