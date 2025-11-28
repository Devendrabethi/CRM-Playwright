import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { PersonalAccountPage} from '../../Pages/PersonalAccountPage'
import { AddressPage} from '../../Pages/AddressPage'
import { PhoneNumberPage} from '../../Pages/PhoneNumberPage'
import { EmailPage} from '../../Pages/EmailPage'
import { NewConsignmentVehiclePage} from '../../Pages/NewConsignmentVehiclePage'
import { NewAutomobiliaConsignmentPage} from '../../Pages/NewAutomobiliaConsignmentPage'

test('Creating Personal Automobilia Consignment', async ({ page }) => {

    const customerpage = new CustomerPage(page);
    const personalaccountpage = new PersonalAccountPage(page);
    const addresspage = new AddressPage(page);
    const phonenumberpage = new PhoneNumberPage(page);
    const emailpage = new EmailPage(page);
    const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page);
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

    // ---------------- AUTOMOBILIA CONSIGNMENT ----------------
    await test.step('Create New Automobilia Consignment', async () => {
        await newautomobiliaconsignmentpage.newcon();
    });

    await test.step('Fill Sale Details', async () => {
        await newautomobiliaconsignmentpage.SaleDetails();
    });

    await test.step('Fill Account & Address Info', async () => {
        await newautomobiliaconsignmentpage.Account_Address();
    });

    await test.step('Fill Application Information', async () => {
        await newautomobiliaconsignmentpage.Appilication_Info();
    });

    await test.step('Assign Consignment', async () => {
        await newautomobiliaconsignmentpage.Assign();
    });

    await test.step('Fill Marketing Tab', async () => {
        await newautomobiliaconsignmentpage.MarketingTab();
        await newautomobiliaconsignmentpage.ConsOpportunityDoc();
        await newautomobiliaconsignmentpage.UploadPhoto();
    });

    await test.step('Integration Tab', async () => {
        await newautomobiliaconsignmentpage.IntegrationTab();
    });

});
