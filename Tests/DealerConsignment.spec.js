import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { PersonalAccountPage} from '../Pages/PersonalAccountPage'
import { DealerAccountPage} from '../Pages/DealerAccountPage'
import { AddressPage} from '../Pages/AddressPage'
import { PhoneNumberPage} from '../Pages/PhoneNumberPage'
import { DealerPhoneNumberPage} from '../Pages/DealerPhoneNumberPage'
import { EmailPage} from '../Pages/EmailPage'
import { NewConsignmentVehiclePage} from '../Pages/NewConsignmentVehiclePage'
import { NewDealerConsignmentVehiclePage} from '../Pages/NewDealerConsignmentVehiclePage'  

test('Creating Dealer Consignmen ',async({page}) =>
{
    const customerpage = new CustomerPage(page)
    const personalaccountpage = new PersonalAccountPage(page) 
    const addresspage = new AddressPage(page)
    const phonenumberpage = new PhoneNumberPage(page)
    const emailpage = new EmailPage(page)
    const dealeraccountpage = new DealerAccountPage(page) 
    const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page)
    const dealerphonenumberpage = new DealerPhoneNumberPage(page)
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
    await newconsignmentvehiclepage.newcon()
    await newconsignmentvehiclepage.vehicledeatails()
    await newconsignmentvehiclepage.Mileage()
    await newconsignmentvehiclepage.SaleDetails()
    await newdealerconsignmentvehiclepage.Account()
    await newdealerconsignmentvehiclepage.Account_Address()
    await newconsignmentvehiclepage.Appilication_Info()
    //await newconsignmentvehiclepage.Assign()
    await newconsignmentvehiclepage.MarketingTab()
    await newconsignmentvehiclepage.ConsVehicleDoc()
    await newconsignmentvehiclepage.UploadPhoto()
    await newconsignmentvehiclepage.ComparisionTab()
    await newconsignmentvehiclepage.TaskTab()
    await newconsignmentvehiclepage.ApplicationStatus()
   // await newconsignmentvehiclepage.ActivitiesTab()  // this functionality works only in UAT
    await newconsignmentvehiclepage.RibbonLevel()
    await newconsignmentvehiclepage.IntegrationTab()
})