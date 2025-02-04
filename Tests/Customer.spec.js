import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'

test('test',async({page}) =>
{
    const customerpage = new CustomerPage(page)
    await customerpage.url()
    await customerpage.manager()
    await customerpage.customer()
})