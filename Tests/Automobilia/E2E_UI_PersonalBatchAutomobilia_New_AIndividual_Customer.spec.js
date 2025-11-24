import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { PersonalAccountPage} from '../../Pages/PersonalAccountPage'
import { AddressPage} from '../../Pages/AddressPage'
import { PhoneNumberPage} from '../../Pages/PhoneNumberPage'
import { EmailPage} from '../../Pages/EmailPage'
import { NewAutomobiliaConsignmentPage} from '../../Pages/NewAutomobiliaConsignmentPage'

// test('Creating Personal Batch Automobilia Consignment',async({page}) =>    // Activity functionality works only in UAT
// {
//     const customerpage = new CustomerPage(page)
//     const personalaccountpage = new PersonalAccountPage(page) 
//     const addresspage = new AddressPage(page)
//     const phonenumberpage = new PhoneNumberPage(page)
//     const emailpage = new EmailPage(page)
//     const newautomobiliaconsignmentpage = new NewAutomobiliaConsignmentPage(page)

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
//     await newautomobiliaconsignmentpage.NewBatchAutomobiliaConsignment()
// })

test('Creating Personal Batch Automobilia Consignment', async ({ page }) => {

    const customerpage = new CustomerPage(page);
    const personalaccountpage = new PersonalAccountPage(page);
    const addresspage = new AddressPage(page);
    const phonenumberpage = new PhoneNumberPage(page);
    const emailpage = new EmailPage(page);
    const newautomobiliaconsignmentpage = new NewAutomobiliaConsignmentPage(page);

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

    // ---------------- BATCH AUTOMOBILIA CONSIGNMENT ----------------
    await test.step('Create New Batch Automobilia Consignment', async () => {
        await newautomobiliaconsignmentpage.NewBatchAutomobiliaConsignment();
    });

});
