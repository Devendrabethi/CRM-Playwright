import{test} from '@playwright/test'
import { CustomerPage } from '../../Pages/CustomerPage'
import { ConsignmentManagerPage } from '../../Pages/ConsignmentManagerPage'

// test('Validating Colection, Charities, Events and Docket',async({page}) =>    // Must have the useraccount TestUser3 with sold status
// {
//     const customerpage = new CustomerPage(page)
//     const consignmentmanagerPage = new ConsignmentManagerPage(page) 

//     await customerpage.url()
//     await consignmentmanagerPage.ChangeArea()
//     await consignmentmanagerPage.Collections()
//     await consignmentmanagerPage.Charities()
//     await consignmentmanagerPage.Events()
//     await consignmentmanagerPage.Dockets()
//     await consignmentmanagerPage.Consignment()
//     await consignmentmanagerPage.MarkettingTab()
// })

test('Validating Collection, Charities, Events and Docket (Assigning Lot)', async ({ page }) => {  
    // Must have the useraccount TestUser3 with sold status

    const customerpage = new CustomerPage(page);
    const consignmentmanagerPage = new ConsignmentManagerPage(page);

    // ---------------- NAVIGATION ----------------
    await test.step('Open Customer Page', async () => {
        await customerpage.url();
    });

    // ---------------- CONSIGNMENT MANAGER AREAS ----------------
    await test.step('Change Area to Consignment Manager', async () => {
        await consignmentmanagerPage.ChangeArea();
    });

    // await test.step('Validate Collections', async () => {
    //     await consignmentmanagerPage.Collections();
    // });

    // await test.step('Validate Charities', async () => {
    //     await consignmentmanagerPage.Charities();
    // });

    // await test.step('Validate Events', async () => {
    //     await consignmentmanagerPage.Events();
    // });

    await test.step('Validate Dockets and assigning Lot', async () => {
        await consignmentmanagerPage.Dockets();
    });

    await test.step('Open Consignment and Add Buyer and Add Doner Details ', async () => {
        await consignmentmanagerPage.Consignment();
    });

    await test.step('Validate Marketing Tab adding Collections and Charity', async () => {
        await consignmentmanagerPage.MarkettingTab();
    });

});
