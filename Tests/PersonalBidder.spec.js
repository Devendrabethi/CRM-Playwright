import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { PersonalAccountPage} from '../Pages/PersonalAccountPage'
import { AddressPage} from '../Pages/AddressPage'
import { PhoneNumberPage} from '../Pages/PhoneNumberPage'
import { EmailPage} from '../Pages/EmailPage'
import { NewConsignmentVehiclePage} from '../Pages/NewConsignmentVehiclePage'
import { BidderOpportunityPage} from '../Pages/BidderOpportunityPage'

test('test',async({page}) =>
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
    
    
    await addresspage.newaddress()
    await addresspage.generaladdress()
    await addresspage.saveandclose()

    await phonenumberpage.phonenumberbtn()
    await phonenumberpage.General_PhoneNumber()

    await emailpage.NewEmailbtn()
    await emailpage.enter_emailid()

    await emailpage.WebsiteandForgotPassword()
    
    await personalaccountpage.personalAccountDocuments()

    await bidderopportunitypage.New_Bidder_Opportunity()
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
    await bidderopportunitypage.TaskTab()
    await bidderopportunitypage.RibbonLevel()
    await bidderopportunitypage.HamburgerMenu()
})