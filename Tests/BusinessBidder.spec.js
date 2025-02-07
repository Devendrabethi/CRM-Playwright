import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { PersonalAccountPage} from '../Pages/PersonalAccountPage'
import { AddressPage} from '../Pages/AddressPage'
import { PhoneNumberPage} from '../Pages/PhoneNumberPage'
import { EmailPage} from '../Pages/EmailPage'
import { BusinessAccountPage} from '../Pages/BusinessAccountPage'
import { BusinessPhoneNumberPage} from '../Pages/BusinessPhoneNumberPage'
import { NewConsignmentVehiclePage} from '../Pages/NewConsignmentVehiclePage'
import { BidderOpportunityPage} from '../Pages/BidderOpportunityPage'
import { NewBusinessConsignmentVehiclePage} from '../Pages/NewBusinessConsignmentVehiclePage'

test('test',async({page}) =>
{
    const customerpage = new CustomerPage(page)
    const personalaccountpage = new PersonalAccountPage(page) 
    const addresspage = new AddressPage(page)
    const phonenumberpage = new PhoneNumberPage(page)
    const emailpage = new EmailPage(page)
    const businessaccountpage = new BusinessAccountPage(page) 
    const businessphonenumberpage = new BusinessPhoneNumberPage(page)
    const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page)
    const bidderopportunitypage = new BidderOpportunityPage(page)
    const newbusinessconsignmentvehiclepage = new NewBusinessConsignmentVehiclePage(page)

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
    await personalaccountpage.personalAccountDocuments()

    await businessaccountpage.accounttype_dropdown()
    await businessaccountpage.names()
    await businessaccountpage.save()
    await addresspage.newaddress()
    await addresspage.generaladdress()
    await addresspage.saveandclose()
    await businessphonenumberpage.phonenumberbtn()
    await phonenumberpage.General_PhoneNumber()
    await businessaccountpage.personalAccountDocuments()
    await businessaccountpage.RelatedAccount()
    await addresspage.saveandclose()

    await bidderopportunitypage.New_Bidder_Opportunity()
    await newbusinessconsignmentvehiclepage.Account()
    await newconsignmentvehiclepage.Appilication_Info()

    await bidderopportunitypage.Bidder_details()
    await bidderopportunitypage.bidder_Address()
    await bidderopportunitypage.BidderAssign()
    await bidderopportunitypage.Add_Envelop()
    await bidderopportunitypage.Add_Absentee_Bid()
    await bidderopportunitypage.RegisterDocuments()
    await bidderopportunitypage.Opportunity_product_tab()
    await addresspage.saveandclose()
    await bidderopportunitypage.Invoice_Tab()
    await bidderopportunitypage.RibbonLevel()

})