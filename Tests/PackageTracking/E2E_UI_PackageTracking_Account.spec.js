import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { PersonalAccountPage} from '../../Pages/PersonalAccountPage'
import { AddressPage} from '../../Pages/AddressPage'
import { PhoneNumberPage} from '../../Pages/PhoneNumberPage'
import { EmailPage} from '../../Pages/EmailPage'

 // CRM    Change the Close tracking  in Tracking TAB//
// test('Validating Package Tracking with Different Package type, Carrier, Use One Rate, Service type and Packaging for Price Estimator for CRM originated',async({page}) =>   
// {
//     const customerpage = new CustomerPage(page)
//     const personalaccountpage = new PersonalAccountPage(page) 
//     const addresspage = new AddressPage(page)
//     const phonenumberpage = new PhoneNumberPage(page)
//     const emailpage = new EmailPage(page)

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
//     await personalaccountpage.Tracking_Tab()
// })

test('Validating PACKAGE TRACKING / PRICE ESTIMATOR for CRM originated', async ({ page }) => {

    const customerpage = new CustomerPage(page);
    const personalaccountpage = new PersonalAccountPage(page);
    const addresspage = new AddressPage(page);
    const phonenumberpage = new PhoneNumberPage(page);
    const emailpage = new EmailPage(page);

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

    await test.step('Add Personal Phone Number', async () => {
        await phonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    await test.step('Add Email', async () => {
        await emailpage.NewEmailbtn();
        await emailpage.enter_emailid();
    });

    // ---------------- PACKAGE TRACKING / PRICE ESTIMATOR ----------------
    await test.step('Validate Package Tracking with Different Package type, Carrier, Use One Rate, Service type and Packaging for Price Estimator', async () => {
        await personalaccountpage.Tracking_Tab();
    });

});

 // WEB originated packlage tracking with debug
// test('Validating Package Tracking and Price Estimator for Web Originated',async({page}) =>   
// {
//     const customerpage = new CustomerPage(page)
//     const personalaccountpage = new PersonalAccountPage(page) 

//     await customerpage.url()
//     await customerpage.manager()
//     await customerpage.WebCustoer()
//     await personalaccountpage.Tracking_Tab()
// })

test('Validating Package Tracking and Price Estimator for Web Originated', async ({ page }) => {

    const customerpage = new CustomerPage(page);
    const personalaccountpage = new PersonalAccountPage(page);

    // ---------------- NAVIGATION ----------------
    await test.step('Open Customer Page & Navigate', async () => {
        await customerpage.url();
        await customerpage.manager();
    });

    // ---------------- WEB ORIGINATED CUSTOMER ----------------
    await test.step('Select Web Originated Customer', async () => {
        await customerpage.WebCustoer();
    });

    // ---------------- TRACKING TAB ----------------
    await test.step('Validate Package Tracking with Different Package type, Carrier, Use One Rate, Service type and Packaging for Price Estimator', async () => {
        await personalaccountpage.Tracking_Tab();
    });

});

