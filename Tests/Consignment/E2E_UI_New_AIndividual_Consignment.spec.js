import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { PersonalAccountPage} from '../../Pages/PersonalAccountPage'
import { AddressPage} from '../../Pages/AddressPage'
import { PhoneNumberPage} from '../../Pages/PhoneNumberPage'
import { EmailPage} from '../../Pages/EmailPage'
import { NewConsignmentVehiclePage} from '../../Pages/NewConsignmentVehiclePage'

// test('Creating Personal Consignment',async({page}) =>    // Activity functionality works only in UAT
// {
//     const customerpage = new CustomerPage(page)
//     const personalaccountpage = new PersonalAccountPage(page) 
//     const addresspage = new AddressPage(page)
//     const phonenumberpage = new PhoneNumberPage(page)
//     const emailpage = new EmailPage(page)
//     const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page)

//     await customerpage.url()
//     await customerpage.manager()
//     await customerpage.customer()
//     await personalaccountpage.accounttype_dropdown()
//     await personalaccountpage.names()
//     await personalaccountpage.save()
//     await personalaccountpage.Event_Auct_Comp()
//     await addresspage.newaddress()
//     await addresspage.generaladdress()
//     await addresspage.saveandclose()
//     await phonenumberpage.phonenumberbtn()
//     await phonenumberpage.General_PhoneNumber()
//     await emailpage.NewEmailbtn()
//     await emailpage.enter_emailid()
//     await emailpage.CredentialTab()
//     await personalaccountpage.personalAccountDocuments()
//     await newconsignmentvehiclepage.newcon()
//     await newconsignmentvehiclepage.vehicledeatails()
//     await newconsignmentvehiclepage.Mileage()
//     await newconsignmentvehiclepage.SaleDetails()
//     await newconsignmentvehiclepage.Account_Address()
//     await newconsignmentvehiclepage.Appilication_Info()
//     await newconsignmentvehiclepage.Assign()
//     await newconsignmentvehiclepage.MarketingTab()
//     await newconsignmentvehiclepage.ConsVehicleDoc()
//     await newconsignmentvehiclepage.UploadPhoto()
//     await newconsignmentvehiclepage.ComparisionTab()
//     await newconsignmentvehiclepage.TaskTab()
//     await newconsignmentvehiclepage.ApplicationStatus()
//     //await newconsignmentvehiclepage.ActivitiesTab() 
//     //await newconsignmentvehiclepage.RibbonLevel()
//     await newconsignmentvehiclepage.IntegrationTab()
// })

test('Creating Personal Consignment', async ({ page }) => {  
    // Activity functionality works only in UAT

    const customerpage = new CustomerPage(page);
    const personalaccountpage = new PersonalAccountPage(page);
    const addresspage = new AddressPage(page);
    const phonenumberpage = new PhoneNumberPage(page);
    const emailpage = new EmailPage(page);
    const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page);

    // ---------------- CUSTOMER NAVIGATION ----------------
    await test.step('Open Customer Page and Navigate', async () => {
        await customerpage.url();
        await customerpage.manager();
        await customerpage.customer();
    });

    // ---------------- PERSONAL ACCOUNT ----------------
    await test.step('Create Personal Account', async () => {
        await personalaccountpage.accounttype_dropdown();
        await personalaccountpage.names();
        await personalaccountpage.save();
        await personalaccountpage.Event_Auct_Comp();
    });

    await test.step('Add Personal Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    await test.step('Add Personal Phone Number', async () => {
        await phonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    await test.step('Add Personal Email and Credentials', async () => {
        await emailpage.NewEmailbtn();
        await emailpage.enter_emailid();
        await emailpage.CredentialTab();
    });

    await test.step('Upload Personal Documents', async () => {
        await personalaccountpage.personalAccountDocuments();
    });

    // ---------------- PERSONAL CONSIGNMENT ----------------
    await test.step('Create New Vehicle Consignment', async () => {
        await newconsignmentvehiclepage.newcon();
    });

    await test.step('Enter Vehicle Details', async () => {
        await newconsignmentvehiclepage.vehicledeatails();
        await newconsignmentvehiclepage.Mileage();
    });

    await test.step('Enter Sale Details', async () => {
        await newconsignmentvehiclepage.SaleDetails();
    });

    await test.step('Fill Account & Address Information', async () => {
        await newconsignmentvehiclepage.Account_Address();
    });

    await test.step('Fill Application Information', async () => {
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
