import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { PersonalAccountPage} from '../../Pages/PersonalAccountPage'
import { AddressPage} from '../../Pages/AddressPage'
import { PhoneNumberPage} from '../../Pages/PhoneNumberPage'
import { EmailPage} from '../../Pages/EmailPage'
import { DealerAccountPage} from '../../Pages/DealerAccountPage'
import { DealerPhoneNumberPage} from '../../Pages/DealerPhoneNumberPage'

test('Creating Personal and Dealer account and Print Bidder Agreement with Personal and Dealer', async ({ page }) => {

    const customerpage = new CustomerPage(page);
    const personalaccountpage = new PersonalAccountPage(page);
    const addresspage = new AddressPage(page);
    const phonenumberpage = new PhoneNumberPage(page);
    const emailpage = new EmailPage(page);
    const dealeraccountpage = new DealerAccountPage(page);
    const dealerphonenumberpage = new DealerPhoneNumberPage(page);

    // ---------------- PERSONAL ACCOUNT ----------------
    await test.step('Open Customer Page', async () => {
        await customerpage.url();
        await customerpage.manager();
        await customerpage.customer();
    });

    await test.step('Create Personal Account', async () => {
        await personalaccountpage.accounttype_dropdown();
        await personalaccountpage.names();
        await personalaccountpage.save();
    });

    await test.step('Enter Personal Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    await test.step('Enter Personal Phone Number', async () => {
        await phonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    await test.step('Enter Personal Email', async () => {
        await emailpage.NewEmailbtn();
        await emailpage.enter_emailid();
    });

    // ---------------- DEALER ACCOUNT ----------------
    await test.step('Create Dealer Account', async () => {
        await dealeraccountpage.accounttype_dropdown();
        await dealeraccountpage.names();
        await dealeraccountpage.save();
    });

    await test.step('Enter Dealer Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    await test.step('Enter Dealer Phone Number', async () => {
        await dealerphonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    await test.step('Link Dealer as Related Account', async () => {
        await dealeraccountpage.RelatedAccount();
    });

    // ---------------- PRINT BIDDER AGREEMENT ----------------
    await test.step('Print Bidder Agreement for Perosonal and Dealer', async () => {
        await personalaccountpage.RegularAccount_Print_Bidder_Aggreement();
    });

});

test('Creating VIP account for Personal and Dealer account and Print Bidder Agreement with Personal and Dealer', async ({ page }) => {

    const customerpage = new CustomerPage(page);
    const personalaccountpage = new PersonalAccountPage(page);
    const addresspage = new AddressPage(page);
    const phonenumberpage = new PhoneNumberPage(page);
    const emailpage = new EmailPage(page);
    const dealeraccountpage = new DealerAccountPage(page);
    const dealerphonenumberpage = new DealerPhoneNumberPage(page);

    // ---------------- CUSTOMER NAVIGATION ----------------
    await test.step('Open Customer Page and Navigate', async () => {
        await customerpage.url();
        await customerpage.manager();
        await customerpage.customer();
    });

    // ---------------- PERSONAL ACCOUNT CREATION ----------------
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

    await test.step('Add Personal Email', async () => {
        await emailpage.NewEmailbtn();
        await emailpage.enter_emailid();
    });

    // ---------------- DEALER ACCOUNT CREATION ----------------
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

    await test.step('Link Dealer as Related Account', async () => {
        await dealeraccountpage.RelatedAccount();
    });

    // ---------------- PRINT VIP BIDDER AGREEMENT ----------------
    await test.step('Print VIP Bidder Agreement for Perosonal and Dealer', async () => {
        await personalaccountpage.VIP_Print_Bidder_Aggreement();
    });

});

test('Creating Automobilia account for Personal and Dealer and Print Bidder Agreement with Personal and Dealer', async ({ page }) => {

    const customerpage = new CustomerPage(page);
    const personalaccountpage = new PersonalAccountPage(page);
    const addresspage = new AddressPage(page);
    const phonenumberpage = new PhoneNumberPage(page);
    const emailpage = new EmailPage(page);
    const dealeraccountpage = new DealerAccountPage(page);
    const dealerphonenumberpage = new DealerPhoneNumberPage(page);

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

    await test.step('Add Personal Email', async () => {
        await emailpage.NewEmailbtn();
        await emailpage.enter_emailid();
    });

    // ---------------- DEALER ACCOUNT ----------------
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

    await test.step('Link Dealer as Related Account', async () => {
        await dealeraccountpage.RelatedAccount();
    });

    // ---------------- PRINT AUTOMOBILIA BIDDER AGREEMENT ----------------
    await test.step('Print Automobilia Bidder Agreement with Personal and Dealer', async () => {
        await personalaccountpage.Automobilia_Print_Bidder_Aggreement();
    });

});
