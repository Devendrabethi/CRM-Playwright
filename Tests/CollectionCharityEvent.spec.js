import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { ConsignmentManagerPage } from '../Pages/ConsignmentManagerPage'

test('Validating Colection, Charities and Events',async({page}) =>    // Must have the useraccount TestUser3
{
    const customerpage = new CustomerPage(page)
    const consignmentmanagerPage = new ConsignmentManagerPage(page) 

    await customerpage.url()
    await consignmentmanagerPage.ChangeArea()
    await consignmentmanagerPage.Collections()
    await consignmentmanagerPage.Charities()
    await consignmentmanagerPage.Events()
    await consignmentmanagerPage.Consignment()
    await consignmentmanagerPage.MarkettingTab()
})