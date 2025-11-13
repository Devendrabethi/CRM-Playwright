import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { NewConsignmentVehiclePage} from '../Pages/NewConsignmentVehiclePage'
import { BidderOpportunityPage} from '../Pages/BidderOpportunityPage'
import { NewAutomobiliaConsignmentPage} from '../Pages/NewAutomobiliaConsignmentPage'

test('Validating Consignment (Product, Invoice and Sale Details) and Bidder opportunity Ribbon level',async({page}) =>
{
    const customerpage = new CustomerPage(page)
    const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page)
    const bidderopportunitypage = new BidderOpportunityPage(page)
    const newautomobiliaconsignmentpage = new NewAutomobiliaConsignmentPage(page)

    await customerpage.url()
    await newconsignmentvehiclepage.Ribbon_Consignment()
    await newconsignmentvehiclepage.RibbonLevel()
    await bidderopportunitypage.Ribbon_Bidder()
    await bidderopportunitypage.RibbonLevel()
    await newautomobiliaconsignmentpage.Ribbon_AutomobiliaConsignment()
    await newautomobiliaconsignmentpage.RibbonLevel()

})