import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { NewConsignmentVehiclePage} from '../Pages/NewConsignmentVehiclePage'
import { BidderOpportunityPage} from '../Pages/BidderOpportunityPage'

test('Creating Business Consignment',async({page}) =>
{
    const customerpage = new CustomerPage(page)
    const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page)
    const bidderopportunitypage = new BidderOpportunityPage(page)

    await customerpage.url()
   // await customerpage.manager()
    await newconsignmentvehiclepage.Ribbon_Consignment()
    await newconsignmentvehiclepage.RibbonLevel()
    await bidderopportunitypage.Ribbon_Bidder()
    await bidderopportunitypage.RibbonLevel()
})