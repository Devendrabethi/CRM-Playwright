import{test} from '@playwright/test'
import { MediCredentialPage } from '../Pages/MediCredentialPage'
import { BidderOpportunityPage} from '../Pages/BidderOpportunityPage'

test('Validating Media Credential',async({page}) =>  
{
    const medicredentialpage = new MediCredentialPage(page)

    await medicredentialpage.url()
    await medicredentialpage.manager()
    await medicredentialpage.MediaCredential()
    await medicredentialpage.Org_Details()
})