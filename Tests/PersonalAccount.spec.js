import{test} from '@playwright/test'
import { PersonalAccountPage} from '../Pages/PersonalAccountPage'

test('test',async({page}) =>
{
    const personalaccountpage = new PersonalAccountPage(page)
    await personalaccountpage.accounttype_dropdown()
    await personalaccountpage.names()
    await personalaccountpage.save()
    await personalaccountpage.personalAccountDocuments()
})