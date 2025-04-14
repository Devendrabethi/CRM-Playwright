import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { PersonalAccountPage} from '../Pages/PersonalAccountPage'
import { AddressPage} from '../Pages/AddressPage'
import { PhoneNumberPage} from '../Pages/PhoneNumberPage'
import { EmailPage} from '../Pages/EmailPage'
import { DealerAccountPage} from '../Pages/DealerAccountPage'
import { DealerPhoneNumberPage} from '../Pages/DealerPhoneNumberPage'
import { NewConsignmentVehiclePage} from '../Pages/NewConsignmentVehiclePage'
import { BidderOpportunityPage} from '../Pages/BidderOpportunityPage'
import { NewDealerConsignmentVehiclePage} from '../Pages/NewDealerConsignmentVehiclePage'

test('test',async({page}) =>
{
    const customerpage = new CustomerPage(page)
    const personalaccountpage = new PersonalAccountPage(page) 
    const addresspage = new AddressPage(page)
    const phonenumberpage = new PhoneNumberPage(page)
    const emailpage = new EmailPage(page)
    const dealeraccountpage = new DealerAccountPage(page) 
    const dealerphonenumberpage = new DealerPhoneNumberPage(page)
    const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page)
    const bidderopportunitypage = new BidderOpportunityPage(page)
    const newdealerconsignmentvehiclepage = new NewDealerConsignmentVehiclePage(page)

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
    await emailpage.CredentialTab()
    await personalaccountpage.personalAccountDocuments()

    await dealeraccountpage.accounttype_dropdown()
    await dealeraccountpage.names()
    await dealeraccountpage.save()
    await addresspage.newaddress()
    await addresspage.generaladdress()
    await addresspage.saveandclose()
    await dealerphonenumberpage.phonenumberbtn()
    await phonenumberpage.General_PhoneNumber()
    await dealeraccountpage.personalAccountDocuments()
    await dealeraccountpage.RelatedAccount()
    await addresspage.saveandclose()


    await bidderopportunitypage.New_Bidder_Opportunity()
    await newdealerconsignmentvehiclepage.Account()

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
    await bidderopportunitypage.AnotherProduct()
    await bidderopportunitypage.TaskTab()
    await bidderopportunitypage.RibbonLevel()

})