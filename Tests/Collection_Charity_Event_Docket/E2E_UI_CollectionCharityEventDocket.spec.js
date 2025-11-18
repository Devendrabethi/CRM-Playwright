import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { ConsignmentManagerPage } from '../../Pages/ConsignmentManagerPage'

test('Validating Colection, Charities, Events and Docket',async({page}) =>    // Must have the useraccount TestUser3 with sold status
{
    const customerpage = new CustomerPage(page)
    const consignmentmanagerPage = new ConsignmentManagerPage(page) 

    await customerpage.url()
    await consignmentmanagerPage.ChangeArea()
    await consignmentmanagerPage.Collections()
    await consignmentmanagerPage.Charities()
    await consignmentmanagerPage.Events()
    await consignmentmanagerPage.Dockets()
    await consignmentmanagerPage.Consignment()
    await consignmentmanagerPage.MarkettingTab()
})