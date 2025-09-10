import{test} from '@playwright/test'
import { CustomerPage } from '../Pages/CustomerPage'
import { PersonalAccountPage} from '../Pages/PersonalAccountPage'
import { BusinessAccountPage} from '../Pages/BusinessAccountPage'
import { AddressPage} from '../Pages/AddressPage'
import { PhoneNumberPage} from '../Pages/PhoneNumberPage'
import { BusinessPhoneNumberPage} from '../Pages/BusinessPhoneNumberPage'
import { EmailPage} from '../Pages/EmailPage'
import { NewConsignmentVehiclePage} from '../Pages/NewConsignmentVehiclePage'
import { NewBusinessConsignmentVehiclePage} from '../Pages/NewBusinessConsignmentVehiclePage'

test('Creating Business Consignment',async({page}) =>
{
    const customerpage = new CustomerPage(page)
    const personalaccountpage = new PersonalAccountPage(page) 
    const addresspage = new AddressPage(page)
    const phonenumberpage = new PhoneNumberPage(page)
    const emailpage = new EmailPage(page)
    const businessaccountpage = new BusinessAccountPage(page) 
    const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page)
    const businessphonenumberpage = new BusinessPhoneNumberPage(page)
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
    await emailpage.CredentialTab()
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
    await newconsignmentvehiclepage.newcon()
    await newconsignmentvehiclepage.vehicledeatails()
    await newconsignmentvehiclepage.Mileage()
    await newconsignmentvehiclepage.SaleDetails()
    await newbusinessconsignmentvehiclepage.Account()
    await newbusinessconsignmentvehiclepage.Account_Address()
    await newconsignmentvehiclepage.Appilication_Info()
    await newconsignmentvehiclepage.SaleDay()
    //await newconsignmentvehiclepage.Assign()
    await newconsignmentvehiclepage.MarketingTab()
    await newconsignmentvehiclepage.ConsVehicleDoc()
    await newconsignmentvehiclepage.UploadPhoto()
    await newconsignmentvehiclepage.ComparisionTab()
    await newconsignmentvehiclepage.TaskTab()
    await newconsignmentvehiclepage.ApplicationStatus()
    //await newconsignmentvehiclepage.ActivitiesTab()  // this functionality works only in UAT
    await newconsignmentvehiclepage.RibbonLevel()
    await newconsignmentvehiclepage.IntegrationTab()
})