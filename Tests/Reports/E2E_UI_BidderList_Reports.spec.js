import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { ReportsPage } from '../../Pages/ReportsPage'

test('Validating Reports',async({page}) =>    // Must have the useraccount TestUser3 with sold status
{
    const customerpage = new CustomerPage(page)
    const reportspage = new ReportsPage(page) 

    await customerpage.url()
    await reportspage.ChangeAreaReports()
    await reportspage.OpportunityInvoiceReport()
    await reportspage.BidderList()
    await reportspage.Customer()
    await reportspage.Consignors()
})