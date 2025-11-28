import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { PersonalAccountPage} from '../../Pages/PersonalAccountPage'
import { AddressPage} from '../../Pages/AddressPage'
import { PhoneNumberPage} from '../../Pages/PhoneNumberPage'
import { EmailPage} from '../../Pages/EmailPage'
import { DealerAccountPage} from '../../Pages/DealerAccountPage'
import { DealerPhoneNumberPage} from '../../Pages/DealerPhoneNumberPage'
import { NewConsignmentVehiclePage} from '../../Pages/NewConsignmentVehiclePage'
import { BidderOpportunityPage} from '../../Pages/BidderOpportunityPage'
import { NewDealerConsignmentVehiclePage} from '../../Pages/NewDealerConsignmentVehiclePage'

test('Creating Dealer Bidder Opportunity', async ({ page }) => {

    const customerpage = new CustomerPage(page);
    const personalaccountpage = new PersonalAccountPage(page);
    const addresspage = new AddressPage(page);
    const phonenumberpage = new PhoneNumberPage(page);
    const emailpage = new EmailPage(page);
    const dealeraccountpage = new DealerAccountPage(page);
    const dealerphonenumberpage = new DealerPhoneNumberPage(page);
    const newconsignmentvehiclepage = new NewConsignmentVehiclePage(page);
    const newdealerconsignmentvehiclepage = new NewDealerConsignmentVehiclePage(page);
    const bidderopportunitypage = new BidderOpportunityPage(page);

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

    await test.step('Add Personal Email + Credentials', async () => {
        await emailpage.NewEmailbtn();
        await emailpage.enter_emailid();
        await emailpage.CredentialTab();
    });

    await test.step('Upload Personal Documents', async () => {
        await personalaccountpage.personalAccountDocuments();
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

    await test.step('Upload Dealer Documents and Link Personal Accounts', async () => {
        await dealeraccountpage.personalAccountDocuments();
        await dealeraccountpage.RelatedAccount();
    });

    // ---------------- BIDDER OPPORTUNITY ----------------
    await test.step('Create New Bidder Opportunity', async () => {
        await bidderopportunitypage.New_Bidder_Opportunity();
    });

    await test.step('Fill Account + Application Info', async () => {
        await newdealerconsignmentvehiclepage.Account();
        await newconsignmentvehiclepage.Appilication_Info();
    });

    await test.step('Fill Bidder Details', async () => {
        await bidderopportunitypage.Bidder_details();
        await bidderopportunitypage.bidder_Address();
        await bidderopportunitypage.BidderAssign();
    });

    await test.step('Add Bidder Packages', async () => {
        await bidderopportunitypage.Add_Envelop();
        await bidderopportunitypage.Add_Absentee_Bid();
        await bidderopportunitypage.CreatePackage();
    });

    await test.step('Phone Observer and Documents of Registration Documents', async () => {
        await bidderopportunitypage.PhoneObserver();
        await bidderopportunitypage.RegisterDocuments();
    });

    await test.step('Adding products and generating the invoice, Making payment for multiple invoice with Credit Card and Credit Checkbox and Task Tab', async () => {
        await bidderopportunitypage.Opportunity_product_tab();
        await bidderopportunitypage.Invoice_Tab();
        await bidderopportunitypage.AnotherProduct();
        await bidderopportunitypage.TaskTab();
    });

    await test.step('Integration Tab', async () => {
        await newconsignmentvehiclepage.IntegrationTab();
    });

    // Optional
    // await test.step('Bidder Ribbon Level', async () => {
    //     await bidderopportunitypage.RibbonLevel();
    // });

});
