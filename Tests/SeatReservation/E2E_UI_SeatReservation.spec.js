import { test } from '@playwright/test';
import { CustomerPage } from '../../Pages/CustomerPage';
import { SeatReservationPage } from '../../Pages/SeatReservationPage';

let browser;
let context;
let page;
let customerpage;
let seatreservationpage;

test.describe('Reports Validation Workflow', () => {

    test.beforeAll(async ({ playwright }) => {
        browser = await playwright.chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();

        customerpage = new CustomerPage(page);
        seatreservationpage = new SeatReservationPage(page);
    });

    test('01. Open Customer Page', async () => {
        await customerpage.url();
    });

    test('02. Change Area to Adminstartion', async () => {
        await seatreservationpage.ChangeArea_Adminstartion();
    });

    test('03. Open Auction Seating dropdown', async () => {
        await seatreservationpage.Auction_Seating();
    });

    test('04. Verifying Seat Defination ', async () => {
        await seatreservationpage.Seat_Defination();
    });

    test('05. Validate View Reservation for Arena', async () => {
        await seatreservationpage.View_Reservation_Arena();
    });

    test('06. Validate View Reservation for Hammer High 4', async () => {
        await seatreservationpage.View_Reservation_HammerHigh4();
    });8

    test('07. Validate View Reservation for Hammer High ', async () => {
        await seatreservationpage.View_Reservation_HammerHigh8();
    });

    test('08. Validate Seat Reservation View for Arena, Hammer High 4, Hammer High 8 ', async () => {
        await seatreservationpage.Seat_Reservation();
    });

    test.afterAll(async () => {
        await context.close();
        await browser.close();
    });

});
