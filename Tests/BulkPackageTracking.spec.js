import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { ConsignmentManagerPage } from '../Pages/ConsignmentManagerPage'

test('Validating Colection, Charities and Events',async({page}) =>    // Must have the useraccount TestUser3 with sold status
{
    const customerpage = new CustomerPage(page)
    const consignmentmanagerPage = new ConsignmentManagerPage(page) 

    await customerpage.url()
    await consignmentmanagerPage.BidderManager()
})