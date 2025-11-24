import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { PersonalAccountPage} from '../../Pages/PersonalAccountPage'
import { DealerAccountPage} from '../../Pages/DealerAccountPage'
import { AddressPage} from '../../Pages/AddressPage'
import { PhoneNumberPage} from '../../Pages/PhoneNumberPage'
import { DealerPhoneNumberPage} from '../../Pages/DealerPhoneNumberPage'
import { EmailPage} from '../../Pages/EmailPage'
import { NewConsignmentVehiclePage} from '../../Pages/NewConsignmentVehiclePage'
import { NewDealerConsignmentVehiclePage} from '../../Pages/NewDealerConsignmentVehiclePage'  

// test('Creating Dealer Consignmen ',async({page}) =>
// {
//     const customerpage = new CustomerPage(page)
//     const personalaccountpage = new PersonalAccountPage(page) 
//     const addresspage = new AddressPage(page)
//     const phonenumberpage = new PhoneNumberPage(page)
//     const emailpage = new EmailPage(page)
//     const dealeraccountpage = new DealerAccountPage(page) 
//     const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page)
//     const dealerphonenumberpage = new DealerPhoneNumberPage(page)
//     const newdealerconsignmentvehiclepage = new NewDealerConsignmentVehiclePage(page)

//     await customerpage.url()
//     await customerpage.manager()
//     await customerpage.customer()
//     await personalaccountpage.accounttype_dropdown()
//     await personalaccountpage.names()
//     await personalaccountpage.save()
//     await addresspage.newaddress()
//     await addresspage.generaladdress()
//     await addresspage.saveandclose()
//     await phonenumberpage.phonenumberbtn()
//     await phonenumberpage.General_PhoneNumber()
//     await emailpage.NewEmailbtn()
//     await emailpage.enter_emailid()
//     await emailpage.CredentialTab()
//     await personalaccountpage.personalAccountDocuments()
//     await dealeraccountpage.accounttype_dropdown()
//     await dealeraccountpage.names()
//     await dealeraccountpage.save()
//     await addresspage.newaddress()
//     await addresspage.generaladdress()
//     await addresspage.saveandclose()
//     await dealerphonenumberpage.phonenumberbtn()
//     await phonenumberpage.General_PhoneNumber()
//     await dealeraccountpage.personalAccountDocuments()
//     await dealeraccountpage.RelatedAccount()
//     await newconsignmentvehiclepage.newcon()
//     await newconsignmentvehiclepage.vehicledeatails()
//     await newconsignmentvehiclepage.Mileage()
//     await newconsignmentvehiclepage.SaleDetails()
//     await newdealerconsignmentvehiclepage.Account()
//     await newdealerconsignmentvehiclepage.Account_Address()
//     await newconsignmentvehiclepage.Appilication_Info()
//     await newconsignmentvehiclepage.Assign()
//     await newconsignmentvehiclepage.MarketingTab()
//     await newconsignmentvehiclepage.ConsVehicleDoc()
//     await newconsignmentvehiclepage.UploadPhoto()
//     await newconsignmentvehiclepage.ComparisionTab()
//     await newconsignmentvehiclepage.TaskTab()
//     await newconsignmentvehiclepage.ApplicationStatus()
//     //await newconsignmentvehiclepage.ActivitiesTab()  // this functionality works only in UAT
//     //await newconsignmentvehiclepage.RibbonLevel()
//     await newconsignmentvehiclepage.IntegrationTab()
// })

test('Creating Dealer Consignment', async ({ page }) => {

    const customerpage = new CustomerPage(page);
    const personalaccountpage = new PersonalAccountPage(page);
    const addresspage = new AddressPage(page);
    const phonenumberpage = new PhoneNumberPage(page);
    const emailpage = new EmailPage(page);
    const dealeraccountpage = new DealerAccountPage(page);
    const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page);
    const dealerphonenumberpage = new DealerPhoneNumberPage(page);
    const newdealerconsignmentvehiclepage = new NewDealerConsignmentVehiclePage(page);

    // ---------------- NAVIGATION ----------------
    await test.step('Open Customer Page & Navigate', async () => {
        await customerpage.url();
        await customerpage.manager();
        await customerpage.customer();
    });

    // ---------------- PERSONAL ACCOUNT SETUP ----------------
    await test.step('Create Personal Account', async () => {
        await personalaccountpage.accounttype_dropdown();
        await personalaccountpage.names();
        await personalaccountpage.save();
    });

    await test.step('Add Personal Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    await test.step('Add Personal Phone', async () => {
        await phonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    await test.step('Add Personal Email', async () => {
        await emailpage.NewEmailbtn();
        await emailpage.enter_emailid();
        await emailpage.CredentialTab();
    });

    await test.step('Upload Personal Documents', async () => {
        await personalaccountpage.personalAccountDocuments();
    });

    // ---------------- DEALER ACCOUNT SETUP ----------------
    await test.step('Create Dealer Account', async () => {
        await dealeraccountpage.accounttype_dropdown();
        await dealeraccountpage.names();
        await dealeraccountpage.save();
    });

    await test.step('Add Dealer Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    await test.step('Add Dealer Phone Number', async () => {
        await dealerphonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    await test.step('Upload Dealer Documents & Link to Personal', async () => {
        await dealeraccountpage.personalAccountDocuments();
        await dealeraccountpage.RelatedAccount();
    });

    // ---------------- DEALER CONSIGNMENT ----------------
    await test.step('Start New Dealer Consignment', async () => {
        await newconsignmentvehiclepage.newcon();
    });

    await test.step('Enter Vehicle Details', async () => {
        await newconsignmentvehiclepage.vehicledeatails();
        await newconsignmentvehiclepage.Mileage();
    });

    await test.step('Enter Sale Details', async () => {
        await newconsignmentvehiclepage.SaleDetails();
    });

    await test.step('Dealer Account For Consignment', async () => {
        await newdealerconsignmentvehiclepage.Account();
        await newdealerconsignmentvehiclepage.Account_Address();
    });

    await test.step('Application Info & Assignment', async () => {
        await newconsignmentvehiclepage.Appilication_Info();
    });

    await test.step('Assign Consignment', async () => {
        await newconsignmentvehiclepage.Assign();
    });

    await test.step('Marketing, Documentation and Photo functionality', async () => {
        await newconsignmentvehiclepage.MarketingTab();
        await newconsignmentvehiclepage.ConsVehicleDoc();
        await newconsignmentvehiclepage.UploadPhoto();
    });

    await test.step('Comparisons, Tasks and Review, Photo Approval toggle from Overview', async () => {
        await newconsignmentvehiclepage.ComparisionTab();
        await newconsignmentvehiclepage.TaskTab();
        await newconsignmentvehiclepage.ApplicationStatus();
    });

    // Activity-related steps (UAT only)
    // await test.step('Activities (UAT only)', async () => {
    //     await newconsignmentvehiclepage.ActivitiesTab();
    // });

    // await test.step('Consignment Ribbon Level', async () => {
    //     await newconsignmentvehiclepage.RibbonLevel();
    // });
    
    await test.step('Integration Tab', async () => {
        await newconsignmentvehiclepage.IntegrationTab();
    });

});
