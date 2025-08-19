import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { ConsignmentManagerPage } from '../Pages/ConsignmentManagerPage'

test('Validating Bulk Package',async({page}) =>  
{
    const customerpage = new CustomerPage(page)
    const consignmentmanagerPage = new ConsignmentManagerPage(page) 

    await customerpage.url()
    await consignmentmanagerPage.BidderManager()
})