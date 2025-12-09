// import{test} from '@playwright/test'
// import { CustomerPage } from '../../Pages/CustomerPage'
// import { PersonalAccountPage} from '../../Pages/PersonalAccountPage'
// import { AddressPage} from '../../Pages/AddressPage'
// import { PhoneNumberPage} from '../../Pages/PhoneNumberPage'
// import { EmailPage} from '../../Pages/EmailPage'
// import { DealerAccountPage} from '../../Pages/DealerAccountPage'
// import { DealerPhoneNumberPage} from '../../Pages/DealerPhoneNumberPage'

// test('Creating Personal and Dealer account and Print Bidder Agreement with Personal and Dealer', async ({ page }) => {

//     const customerpage = new CustomerPage(page);
//     const personalaccountpage = new PersonalAccountPage(page);
//     const addresspage = new AddressPage(page);
//     const phonenumberpage = new PhoneNumberPage(page);
//     const emailpage = new EmailPage(page);
//     const dealeraccountpage = new DealerAccountPage(page);
//     const dealerphonenumberpage = new DealerPhoneNumberPage(page);

//     // ---------------- PERSONAL ACCOUNT ----------------
//     await test.step('Open Customer Page', async () => {
//         await customerpage.url();
//         await customerpage.manager();
//         await customerpage.customer();
//     });

//     await test.step('Create Personal Account', async () => {
//         await personalaccountpage.accounttype_dropdown();
//         await personalaccountpage.names();
//         await personalaccountpage.save();
//     });

//     await test.step('Enter Personal Address', async () => {
//         await addresspage.newaddress();
//         await addresspage.generaladdress();
//         await addresspage.saveandclose();
//     });

//     await test.step('Enter Personal Phone Number', async () => {
//         await phonenumberpage.phonenumberbtn();
//         await phonenumberpage.General_PhoneNumber();
//     });

//     await test.step('Enter Personal Email', async () => {
//         await emailpage.NewEmailbtn();
//         await emailpage.enter_emailid();
//     });

//     // ---------------- DEALER ACCOUNT ----------------
//     await test.step('Create Dealer Account', async () => {
//         await dealeraccountpage.accounttype_dropdown();
//         await dealeraccountpage.names();
//         await dealeraccountpage.save();
//     });

//     await test.step('Enter Dealer Address', async () => {
//         await addresspage.newaddress();
//         await addresspage.generaladdress();
//         await addresspage.saveandclose();
//     });

//     await test.step('Enter Dealer Phone Number', async () => {
//         await dealerphonenumberpage.phonenumberbtn();
//         await phonenumberpage.General_PhoneNumber();
//     });

//     await test.step('Link Dealer as Related Account', async () => {
//         await dealeraccountpage.RelatedAccount();
//     });

//     // ---------------- PRINT BIDDER AGREEMENT ----------------
//     await test.step('Print Bidder Agreement for Perosonal and Dealer', async () => {
//         await personalaccountpage.RegularAccount_Print_Bidder_Aggreement();
//     });

// });

// test('Creating VIP account for Personal and Dealer account and Print Bidder Agreement with Personal and Dealer', async ({ page }) => {

//     const customerpage = new CustomerPage(page);
//     const personalaccountpage = new PersonalAccountPage(page);
//     const addresspage = new AddressPage(page);
//     const phonenumberpage = new PhoneNumberPage(page);
//     const emailpage = new EmailPage(page);
//     const dealeraccountpage = new DealerAccountPage(page);
//     const dealerphonenumberpage = new DealerPhoneNumberPage(page);

//     // ---------------- CUSTOMER NAVIGATION ----------------
//     await test.step('Open Customer Page and Navigate', async () => {
//         await customerpage.url();
//         await customerpage.manager();
//         await customerpage.customer();
//     });

//     // ---------------- PERSONAL ACCOUNT CREATION ----------------
//     await test.step('Create Personal Account', async () => {
//         await personalaccountpage.accounttype_dropdown();
//         await personalaccountpage.names();
//         await personalaccountpage.save();
//     });

//     await test.step('Add Personal Address', async () => {
//         await addresspage.newaddress();
//         await addresspage.generaladdress();
//         await addresspage.saveandclose();
//     });

//     await test.step('Add Personal Phone Number', async () => {
//         await phonenumberpage.phonenumberbtn();
//         await phonenumberpage.General_PhoneNumber();
//     });

//     await test.step('Add Personal Email', async () => {
//         await emailpage.NewEmailbtn();
//         await emailpage.enter_emailid();
//     });

//     // ---------------- DEALER ACCOUNT CREATION ----------------
//     await test.step('Create Dealer Account', async () => {
//         await dealeraccountpage.accounttype_dropdown();
//         await dealeraccountpage.names();
//         await dealeraccountpage.save();
//     });

//     await test.step('Add Dealer Address', async () => {
//         await addresspage.newaddress();
//         await addresspage.generaladdress();
//         await addresspage.saveandclose();
//     });

//     await test.step('Add Dealer Phone Number', async () => {
//         await dealerphonenumberpage.phonenumberbtn();
//         await phonenumberpage.General_PhoneNumber();
//     });

//     await test.step('Link Dealer as Related Account', async () => {
//         await dealeraccountpage.RelatedAccount();
//     });

//     // ---------------- PRINT VIP BIDDER AGREEMENT ----------------
//     await test.step('Print VIP Bidder Agreement for Perosonal and Dealer', async () => {
//         await personalaccountpage.VIP_Print_Bidder_Aggreement();
//     });

// });

// test('Creating Automobilia account for Personal and Dealer and Print Bidder Agreement with Personal and Dealer', async ({ page }) => {

//     const customerpage = new CustomerPage(page);
//     const personalaccountpage = new PersonalAccountPage(page);
//     const addresspage = new AddressPage(page);
//     const phonenumberpage = new PhoneNumberPage(page);
//     const emailpage = new EmailPage(page);
//     const dealeraccountpage = new DealerAccountPage(page);
//     const dealerphonenumberpage = new DealerPhoneNumberPage(page);

//     // ---------------- CUSTOMER NAVIGATION ----------------
//     await test.step('Open Customer Page and Navigate', async () => {
//         await customerpage.url();
//         await customerpage.manager();
//         await customerpage.customer();
//     });

//     // ---------------- PERSONAL ACCOUNT ----------------
//     await test.step('Create Personal Account', async () => {
//         await personalaccountpage.accounttype_dropdown();
//         await personalaccountpage.names();
//         await personalaccountpage.save();
//     });

//     await test.step('Add Personal Address', async () => {
//         await addresspage.newaddress();
//         await addresspage.generaladdress();
//         await addresspage.saveandclose();
//     });

//     await test.step('Add Personal Phone Number', async () => {
//         await phonenumberpage.phonenumberbtn();
//         await phonenumberpage.General_PhoneNumber();
//     });

//     await test.step('Add Personal Email', async () => {
//         await emailpage.NewEmailbtn();
//         await emailpage.enter_emailid();
//     });

//     // ---------------- DEALER ACCOUNT ----------------
//     await test.step('Create Dealer Account', async () => {
//         await dealeraccountpage.accounttype_dropdown();
//         await dealeraccountpage.names();
//         await dealeraccountpage.save();
//     });

//     await test.step('Add Dealer Address', async () => {
//         await addresspage.newaddress();
//         await addresspage.generaladdress();
//         await addresspage.saveandclose();
//     });

//     await test.step('Add Dealer Phone Number', async () => {
//         await dealerphonenumberpage.phonenumberbtn();
//         await phonenumberpage.General_PhoneNumber();
//     });

//     await test.step('Link Dealer as Related Account', async () => {
//         await dealeraccountpage.RelatedAccount();
//     });

//     // ---------------- PRINT AUTOMOBILIA BIDDER AGREEMENT ----------------
//     await test.step('Print Automobilia Bidder Agreement with Personal and Dealer', async () => {
//         await personalaccountpage.Automobilia_Print_Bidder_Aggreement();
//     });

// });

import { test } from '@playwright/test';

import { CustomerPage } from '../../Pages/CustomerPage';
import { PersonalAccountPage } from '../../Pages/PersonalAccountPage';
import { AddressPage } from '../../Pages/AddressPage';
import { PhoneNumberPage } from '../../Pages/PhoneNumberPage';
import { EmailPage } from '../../Pages/EmailPage';
import { DealerAccountPage } from '../../Pages/DealerAccountPage';
import { DealerPhoneNumberPage } from '../../Pages/DealerPhoneNumberPage';


// =====================================================
// WORKFLOW 1: Personal + Dealer + Regular Bidder Agreement
// =====================================================
test.describe('Workflow: Personal + Dealer + Regular Bidder Agreement', () => {

    let browser, context, page;
    let customerpage, personalaccountpage, addresspage, phonenumberpage, emailpage, dealeraccountpage, dealerphonenumberpage;

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        personalaccountpage = new PersonalAccountPage(page);
        addresspage = new AddressPage(page);
        phonenumberpage = new PhoneNumberPage(page);
        emailpage = new EmailPage(page);
        dealeraccountpage = new DealerAccountPage(page);
        dealerphonenumberpage = new DealerPhoneNumberPage(page);
    });

    test('01. Open customer page', async () => {
        await customerpage.url();
    });

    test('02. Select manager', async () => {
        await customerpage.manager();
    });

    test('03. Open customer section', async () => {
        await customerpage.customer();
    });

    test('04. Create Personal Account', async () => {
        await personalaccountpage.accounttype_dropdown();
        await personalaccountpage.names();
        await personalaccountpage.save();
    });

    test('05. Enter Personal Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    test('06. Enter Personal Phone Number', async () => {
        await phonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    test('07. Enter Personal Email', async () => {
        await emailpage.NewEmailbtn();
        await emailpage.enter_emailid();
    });

    test('08. Create Dealer Account', async () => {
        await dealeraccountpage.accounttype_dropdown();
        await dealeraccountpage.names();
        await dealeraccountpage.save();
    });

    test('09. Enter Dealer Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    test('10. Dealer Phone Number', async () => {
        await dealerphonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    test('11. Link Dealer as Related Account', async () => {
        await dealeraccountpage.RelatedAccount();
    });

    test('12. Print Regular Bidder Agreement', async () => {
        await personalaccountpage.RegularAccount_Print_Bidder_Aggreement();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });
});



// =====================================================
// WORKFLOW 2: Personal + Dealer + VIP Account
// =====================================================
test.describe('Workflow: VIP Personal + Dealer Account Bidder Agreement', () => {

    let browser, context, page;
    let customerpage, personalaccountpage, addresspage, phonenumberpage, emailpage, dealeraccountpage, dealerphonenumberpage;

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        personalaccountpage = new PersonalAccountPage(page);
        addresspage = new AddressPage(page);
        phonenumberpage = new PhoneNumberPage(page);
        emailpage = new EmailPage(page);
        dealeraccountpage = new DealerAccountPage(page);
        dealerphonenumberpage = new DealerPhoneNumberPage(page);
    });

    test('01. Open customer page', async () => {
        await customerpage.url();
    });

    test('02. Go to manager', async () => {
        await customerpage.manager();
    });

    test('03. Customer section', async () => {
        await customerpage.customer();
    });

    test('04. Create VIP Personal Account', async () => {
        await personalaccountpage.accounttype_dropdown();
        await personalaccountpage.names();
        await personalaccountpage.save();
    });

    test('05. Personal Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    test('06. Personal Phone Number', async () => {
        await phonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    test('07. Personal Email', async () => {
        await emailpage.NewEmailbtn();
        await emailpage.enter_emailid();
    });

    test('08. Create Dealer Account', async () => {
        await dealeraccountpage.accounttype_dropdown();
        await dealeraccountpage.names();
        await dealeraccountpage.save();
    });

    test('09. Dealer Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    test('10. Dealer Phone Number', async () => {
        await dealerphonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    test('11. Link Dealer', async () => {
        await dealeraccountpage.RelatedAccount();
    });

    test('12. Print VIP Bidder Agreement', async () => {
        await personalaccountpage.VIP_Print_Bidder_Aggreement();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });
});




// =====================================================
// WORKFLOW 3: Automobilia Personal + Dealer
// =====================================================
test.describe('Workflow: Automobilia Personal + Dealer Bidder Agreement', () => {

    let browser, context, page;
    let customerpage, personalaccountpage, addresspage, phonenumberpage, emailpage, dealeraccountpage, dealerphonenumberpage;

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        personalaccountpage = new PersonalAccountPage(page);
        addresspage = new AddressPage(page);
        phonenumberpage = new PhoneNumberPage(page);
        emailpage = new EmailPage(page);
        dealeraccountpage = new DealerAccountPage(page);
        dealerphonenumberpage = new DealerPhoneNumberPage(page);
    });

    test('01. Open customer page', async () => {
        await customerpage.url();
    });

    test('02. Manager section', async () => {
        await customerpage.manager();
    });

    test('03. Customer section', async () => {
        await customerpage.customer();
    });

    test('04. Create Personal Account (Automobilia)', async () => {
        await personalaccountpage.accounttype_dropdown();
        await personalaccountpage.names();
        await personalaccountpage.save();
    });

    test('05. Personal Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    test('06. Personal Phone Number', async () => {
        await phonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    test('07. Personal Email', async () => {
        await emailpage.NewEmailbtn();
        await emailpage.enter_emailid();
    });

    test('08. Dealer Account', async () => {
        await dealeraccountpage.accounttype_dropdown();
        await dealeraccountpage.names();
        await dealeraccountpage.save();
    });

    test('09. Dealer Address', async () => {
        await addresspage.newaddress();
        await addresspage.generaladdress();
        await addresspage.saveandclose();
    });

    test('10. Dealer Phone Number', async () => {
        await dealerphonenumberpage.phonenumberbtn();
        await phonenumberpage.General_PhoneNumber();
    });

    test('11. Link Dealer', async () => {
        await dealeraccountpage.RelatedAccount();
    });

    test('12. Print Automobilia Bidder Agreement', async () => {
        await personalaccountpage.Automobilia_Print_Bidder_Aggreement();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });
});
