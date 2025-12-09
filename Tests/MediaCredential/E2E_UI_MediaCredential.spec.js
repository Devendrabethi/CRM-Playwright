import { test } from '@playwright/test';
import { MediCredentialPage } from '../../Pages/MediCredentialPage';

let browser;
let context;
let page;
let medicredentialpage;

test.describe('Media Credential Validation Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        medicredentialpage = new MediCredentialPage(page);
    });

    test('01. Open Media Credential Page', async () => {
        await medicredentialpage.url();
    });

    test('02. Navigate to Manager Section', async () => {
        await medicredentialpage.manager();
    });

    test('03. Validate Media Credential Page With Docusign', async () => {
        await medicredentialpage.MediaCredential();
    });

    test('04. Validate Organization Details', async () => {
        await medicredentialpage.Org_Details();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });

});
