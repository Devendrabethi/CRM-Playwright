import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { PersonalAccountPage} from '../Pages/PersonalAccountPage'
import { AddressPage} from '../Pages/AddressPage'
import { PhoneNumberPage} from '../Pages/PhoneNumberPage'
import { EmailPage} from '../Pages/EmailPage'
import { NewConsignmentVehiclePage} from '../Pages/NewConsignmentVehiclePage'
import { BidderOpportunityPage} from '../Pages/BidderOpportunityPage'

test('Creating Personal account with documents',async({page}) => 
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
})

test.skip('Checking Hamburger Menu',async({page}) =>  
{
    const customerpage = new CustomerPage(page)
    const bidderopportunitypage = new BidderOpportunityPage(page)

    await customerpage.url()
    await bidderopportunitypage.BidderHamburgerMenu()
    await bidderopportunitypage.ConsignmentHamburgerMenu()
})
test('Creating Individual Consignment',async({page}) =>    // Activity functionality works only in UAT
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
    await emailpage.CredentialTab()
    await personalaccountpage.personalAccountDocuments()
    await newconsignmentvehiclepage.newcon()
    await newconsignmentvehiclepage.vehicledeatails()
    await newconsignmentvehiclepage.Mileage()
    await newconsignmentvehiclepage.SaleDetails()
    //await newconsignmentvehiclepage.Account()  //not req for personal cong
    await newconsignmentvehiclepage.Account_Address()
    await newconsignmentvehiclepage.Appilication_Info()
    await newconsignmentvehiclepage.SaleDay()
    await newconsignmentvehiclepage.Assign()
    await newconsignmentvehiclepage.MarketingTab()
    await newconsignmentvehiclepage.ConsVehicleDoc()
    await newconsignmentvehiclepage.UploadPhoto()
    await newconsignmentvehiclepage.TaskTab()
    //await newconsignmentvehiclepage.ActivitiesTab()  // Activity functionality works only in UAT
    await newconsignmentvehiclepage.RibbonLevel()
    await newconsignmentvehiclepage.IntegrationTab()
    await bidderopportunitypage.ConsignmentHamburgerMenu()
})