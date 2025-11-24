import{test} from '@playwright/test'
import { MediCredentialPage } from '../../Pages/MediCredentialPage'
import { BidderOpportunityPage} from '../../Pages/BidderOpportunityPage'

// test('Validating Media Credential',async({page}) =>  
// {
//     const medicredentialpage = new MediCredentialPage(page)

//     await medicredentialpage.url()
//     await medicredentialpage.manager()
//     await medicredentialpage.MediaCredential()
//     await medicredentialpage.Org_Details()
// })

test('Validating Media Credential', async ({ page }) => {

    const medicredentialpage = new MediCredentialPage(page);

    await test.step('Open Media Credential Page', async () => {
        await medicredentialpage.url();
    });

    await test.step('Navigate to Manager Section', async () => {
        await medicredentialpage.manager();
    });

    await test.step('Validate Media Credential Page With Docusign', async () => {
        await medicredentialpage.MediaCredential();
    });

    await test.step('Validate Organization Details', async () => {
        await medicredentialpage.Org_Details();
    });

});
