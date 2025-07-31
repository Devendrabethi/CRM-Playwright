import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { PersonalAccountPage} from '../Pages/PersonalAccountPage'
import { AddressPage} from '../Pages/AddressPage'
import { PhoneNumberPage} from '../Pages/PhoneNumberPage'
import { EmailPage} from '../Pages/EmailPage'

test('Validating Package Tracking',async({page}) =>    // CRM
{
    const customerpage = new CustomerPage(page)
    const personalaccountpage = new PersonalAccountPage(page) 
    const addresspage = new AddressPage(page)
    const phonenumberpage = new PhoneNumberPage(page)
    const emailpage = new EmailPage(page)

    await customerpage.url()
    await customerpage.manager()
    await customerpage.customer()
    await personalaccountpage.accounttype_dropdown()
    await personalaccountpage.names()
    await personalaccountpage.save()
    await addresspage.newaddress()
    await addresspage.generaladdress()
    await addresspage.saveandclose()
    await phonenumberpage.phonenumberbtn()
    await phonenumberpage.General_PhoneNumber()
    await emailpage.NewEmailbtn()
    await emailpage.enter_emailid()
    await personalaccountpage.Tracking_Tab()
})
test('Validating Package Tracking for Web Originated',async({page}) =>    // WEB originated packlage tracking with debug
{
    const customerpage = new CustomerPage(page)
    const personalaccountpage = new PersonalAccountPage(page) 

    await customerpage.url()
    await customerpage.manager()
    await customerpage.WebCustoer()
    await personalaccountpage.Tracking_Tab()
})
