exports.SeatReservation_WebElements =
class SeatReservation_WebElements
{
    constructor()
    {
        this.Change_Area = "//button[@id='areaSwitcherId']"
        this.Administartion_Button = "//li[@title='Administration']"
        this.Auction_Seating = "//li[@aria-label='Auction Seating']"
        this.Seat_Defination = "//li[@aria-label='Seat Definitions']"
        this.View_Reservation = "//li[@aria-label='View Reservations']"
        this.iframe_SeatReservation = "//iframe[@aria-label='LaunchSeatReservation']"
        this.SelectSeat_Defination_Dropdown = "//select[@id='seatDefinitionDropdown']"
        this.Launch_Button = "//button[@id='launchBtn']"
        this.Iframe_SeatChart = "//iframe[@aria-label='SeatChart']"
        this.Seat_52 = "//span[contains(text(),'C - Row')]/parent::div/following-sibling::div/div[3]/div[2]/div/div[@data-seat-number='52']"
        this.Seat_53 = "//span[contains(text(),'C - Row')]/parent::div/following-sibling::div/div[3]/div[2]/div/div[@data-seat-number='53']"
        this.Seat_54 = "//span[contains(text(),'C - Row')]/parent::div/following-sibling::div/div[3]/div[2]/div/div[@data-seat-number='54']"
        this.Block_Seat = "//button[@id='blockSeatsBtn']"
        this.Yes_BlockSeat = "//button[@aria-label='Yes, Block Seats']"
        this.Ok_Button = "//button[@aria-label='OK']"
        this.UnBlock_Seat = "//button[@id='unblockSeatsBtn']"
        this.Yes_UnBlockSeat = "//button[@aria-label='Yes, Unblock Seats']"
        this.Reserve_Seat = "//button[@id='reserveBtn']"
        //this.Yes_UnBlockSeat = "//button[@aria-label='Yes, Unblock Seats']"
        this.Clear_Seat = "//button[text()='Clear']"
        this.Cancel_Button = "//button[text()='Cancel']"
        this.Search_Button = "//button[text()='Search']"
        this.Search_Account = "//input[@aria-label='Select record, Lookup']"
        this.First_Account = "//ul[@aria-label='Lookup results']/li[1]"
        this.Add_Account = "//button[@aria-label='Add']"
        this.Reserve_Seat_Popup = "//span[text()='Reserve Seats']"
        this.Open_Reserved_Seat = "//span[contains(text(),'C - Row')]/parent::div/following-sibling::div/div[3]/div[2]/div/div[@data-seat-number='52']/following-sibling::div/a"
        this.Reservation_Button = "//li[@aria-label='Reservations']"
        this.Open_Active_Reservation = "//label[@aria-label='Active']"
        this.Cancel_Seat = "//button[@id='cancelSeatsBtn']"
        this.Yes_CancelSeat = "//button[@aria-label='Yes, Cancel Seats']"
        this.Close_SeatChart = "//button[@aria-label='Close']"

        this.Select_E_Table = "//div[@id='seatChart']/div[7]/div/div/input"
        this.ClearAll_E_Table = "//div[@id='seatChart']/div[7]/div/div[2]/button[contains(text(),'Clear All')]"
        this.OpenResertved_Seat_High4 = "//div[@data-seat-number='1' and @data-row-name='E - Table']/following-sibling::div/a"

        this.Seat_Reservation = "//li[@aria-label='Seat Reservation']"
        this.Iframe_SeatReservationView = "//iframe[@aria-label='SeatReservationView']"
        this.Select_Event = "//select[@id='eventDropdown']"
        this.Select_SearchDefination = "//select[@id='seatDefDropdown']"
        this.Search_Filter = "//input[@type='search']"

    }
}