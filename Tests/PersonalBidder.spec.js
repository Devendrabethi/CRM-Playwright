import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { PersonalAccountPage} from '../Pages/PersonalAccountPage'
import { AddressPage} from '../Pages/AddressPage'
import { PhoneNumberPage} from '../Pages/PhoneNumberPage'
import { EmailPage} from '../Pages/EmailPage'
import { NewConsignmentVehiclePage} from '../Pages/NewConsignmentVehiclePage'
import { BidderOpportunityPage} from '../Pages/BidderOpportunityPage'

test('Creating Individual Bidder Opportunity',async({page}) =>
{
    const customerpage = new CustomerPage(page)
    const personalaccountpage = new PersonalAccountPage(page) 
    const addresspage = new AddressPage(page)
    const phonenumberpage = new PhoneNumberPage(page)
    const emailpage = new EmailPage(page)
    const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page)
    const bidderopportunitypage = new BidderOpportunityPage(page)

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
    await emailpage.CredentialTab()
    await personalaccountpage.personalAccountDocuments()
    await bidderopportunitypage.New_Bidder_Opportunity()
    await newconsignmentvehiclepage.Appilication_Info()
    await bidderopportunitypage.Bidder_details_CompType()
    await bidderopportunitypage.bidder_Address()
    await bidderopportunitypage.BidderAssign()
    await bidderopportunitypage.Add_Envelop()
    await bidderopportunitypage.Add_Absentee_Bid()
    await bidderopportunitypage.CreatePackage()
    await bidderopportunitypage.PhoneObserver()
    await bidderopportunitypage.RegisterDocuments()
    await bidderopportunitypage.Opportunity_product_tab()
    await bidderopportunitypage.Invoice_Tab()
    await bidderopportunitypage.AnotherProduct()    
    await bidderopportunitypage.TaskTab()
    await bidderopportunitypage.RibbonLevel()
})