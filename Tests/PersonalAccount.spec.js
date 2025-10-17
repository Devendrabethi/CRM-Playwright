import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { PersonalAccountPage} from '../Pages/PersonalAccountPage'
import { AddressPage} from '../Pages/AddressPage'
import { PhoneNumberPage} from '../Pages/PhoneNumberPage'
import { EmailPage} from '../Pages/EmailPage'

test('Creating Personal account without documents',async({page}) =>
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
        await personalaccountpage.Event_Auct_Comp()
        await addresspage.newaddress()
        await addresspage.generaladdress()
        await addresspage.saveandclose()
        await phonenumberpage.phonenumberbtn()
        await phonenumberpage.General_PhoneNumber()
        await emailpage.NewEmailbtn()
        await emailpage.enter_emailid()
    })