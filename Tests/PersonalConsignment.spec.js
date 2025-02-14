import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { PersonalAccountPage} from '../Pages/PersonalAccountPage'
import { AddressPage} from '../Pages/AddressPage'
import { PhoneNumberPage} from '../Pages/PhoneNumberPage'
import { EmailPage} from '../Pages/EmailPage'
import { NewConsignmentVehiclePage} from '../Pages/NewConsignmentVehiclePage'
import { BidderOpportunityPage} from '../Pages/BidderOpportunityPage'

test('test',async({page}) =>    // Activity functionality works only in UAT
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

    await newconsignmentvehiclepage.newcon()
    await newconsignmentvehiclepage.vehicledeatails()
    await newconsignmentvehiclepage.Mileage()
    await newconsignmentvehiclepage.SaleDetails()
    //await newconsignmentvehiclepage.Account()  //not req for personal cong
    await newconsignmentvehiclepage.Account_Address()
    await newconsignmentvehiclepage.Appilication_Info()
    await newconsignmentvehiclepage.SaleDay()
    await newconsignmentvehiclepage.Assign()
    await newconsignmentvehiclepage.ConsVehicleDoc()
    await newconsignmentvehiclepage.UploadPhoto()
    await newconsignmentvehiclepage.TaskTab()
    //await newconsignmentvehiclepage.ActivitiesTab()  // Activity functionality works only in UAT
    await newconsignmentvehiclepage.RibbonLevel()
    await bidderopportunitypage.HamburgerMenu()

})