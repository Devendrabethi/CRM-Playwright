import { expect } from '@playwright/test'
import { Reports_WebElements } from '../WebElements/Reports_WebElements.js'    
import { TestData } from '../TestData/testdata.js';

exports.ReportsPage =
class ReportsPage
{
    constructor(page)
    {
        this.page = page
        this.reports_WebElements =  new Reports_WebElements()
        this.testdata = new TestData()
    }
    async ChangeAreaReports()
    {
      await this.page.locator(this.reports_WebElements.Change_Area).click()
      await this.page.locator(this.reports_WebElements.Reports_Button).click()
    }
    async OpportunityInvoiceReport()
    {

         const [newPage] = await Promise.all([
                        this.page.context().waitForEvent('page'),
                        this.page.locator(this.reports_WebElements.Opportunity_Invoice_Report ).dblclick()
                    ]);
      await this.page.waitForTimeout(30000)
      await newPage.close();
      await this.page.bringToFront();
    }
    async BidderList()
    {
      await this.page.locator(this.reports_WebElements.BidderList).click()
      await this.page.locator(this.reports_WebElements.BidderList_Auction).click()
      const frame = await this.page.frameLocator(this.reports_WebElements.iframe_BidderListAuction)
      if(!frame) throw new Error('Iframe not found')
      await frame.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)
      await frame.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)

      await this.page.locator(this.reports_WebElements.BidderList_LotNumber).click()
      const frame1 = await this.page.frameLocator(this.reports_WebElements.iframe_BidderLotNumber)
      if(!frame1) throw new Error('Iframe not found')
      await frame1.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await frame1.locator(this.reports_WebElements.select_Date).selectOption(this.testdata.AllDates)
      await this.page.waitForTimeout(3000)
      await frame1.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)

      await this.page.locator(this.reports_WebElements.BidderList_BidLimits).click()
      const frame2 = await this.page.frameLocator(this.reports_WebElements.iframe_BidLimit)
      if(!frame2) throw new Error('Iframe not found')
      await frame2.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)
      await frame2.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)

      await this.page.locator(this.reports_WebElements.BidderList_BidderDocuments).click()
      const frame3 = await this.page.frameLocator(this.reports_WebElements.iframe_bidder_document)
      if(!frame3) throw new Error('Iframe not found')
      await frame3.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)
      await frame3.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)

      await this.page.locator(this.reports_WebElements.BidderList_BidderOverLimit).click()
      const frame4 = await this.page.frameLocator(this.reports_WebElements.iframe_bidders_over_limit)
      if(!frame4) throw new Error('Iframe not found')
      await frame4.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)
      await frame4.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)



      await this.page.locator(this.reports_WebElements.BidderList_BidderCredentialTracking).click()
      const frame6 = await this.page.frameLocator(this.reports_WebElements.iframe_CredentialReport)
      if(!frame6) throw new Error('Iframe not found')
      await frame6.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)

      await this.page.locator(this.reports_WebElements.BidderList_BidderListPurchase).click()
      const frame7 = await this.page.frameLocator(this.reports_WebElements.iframe_BidderListPurchase)
      if(!frame7) throw new Error('Iframe not found')
      await frame7.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)
      await frame7.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)

      await this.page.locator(this.reports_WebElements.BidderList_BidLimitDeposit).click()
      const frame8 = await this.page.frameLocator(this.reports_WebElements.iframe_bidlimit_deposit)
      if(!frame8) throw new Error('Iframe not found')
      await frame8.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)
      await frame8.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)

      await this.page.locator(this.reports_WebElements.BidderList_BidderSourceCount).click()
      const frame5 = await this.page.frameLocator(this.reports_WebElements.iframe_bidder_source_count)
      if(!frame5) throw new Error('Iframe not found')
      await frame5.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)

      await this.page.locator(this.reports_WebElements.BidderList_HammerPrice).click()
      const frame9 = await this.page.frameLocator(this.reports_WebElements.iframe_HammerPrices)
      if(!frame9) throw new Error('Iframe not found')
      await frame9.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)
      await frame9.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)

      await this.page.locator(this.reports_WebElements.BidderList_TopBidder).click()
      await this.page.waitForTimeout(15000)

      await this.page.locator(this.reports_WebElements.BidderList_TopBidderAuction).click()
      const frame10 = await this.page.frameLocator(this.reports_WebElements.iframe_topbidders)
      if(!frame10) throw new Error('Iframe not found')
      await frame10.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)
      await frame10.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)

      await this.page.locator(this.reports_WebElements.BidderList_BidderListMultiple).click()
      const frame11 = await this.page.frameLocator(this.reports_WebElements.iframe_bidder_list_multiple)
      if(!frame11) throw new Error('Iframe not found')
      await frame11.locator(this.reports_WebElements.Select_ReportType).selectOption(this.testdata.ReportType_AllVIP)
      await this.page.waitForTimeout(3000)
      await frame11.locator(this.reports_WebElements.Select_ReportType).selectOption(this.testdata.ReportType_VIPAuction)
      await frame11.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)
      await frame11.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)
      await frame11.locator(this.reports_WebElements.Select_ReportType).selectOption(this.testdata.ReportType_FirstBidder)
      await frame11.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)
      await frame11.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)
      await frame11.locator(this.reports_WebElements.Select_ReportType).selectOption(this.testdata.ReportType_ReturingBidder)
      await frame11.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)
      await frame11.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)
      await frame11.locator(this.reports_WebElements.Select_ReportType).selectOption(this.testdata.ReportType_CompBidder)
      await frame11.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(3000)
      await frame11.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)
      await this.page.locator(this.reports_WebElements.BidderList).click()

      await this.page.locator(this.reports_WebElements.TopVipBidder).click()
      const frame12 = await this.page.frameLocator(this.reports_WebElements.iframe_TopVipBidder)
      if(!frame12) throw new Error('Iframe not found')
      await frame12.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)
    }
    async Customer()
    {
      await this.page.locator(this.reports_WebElements.Customer_Dropdown).click()
      await this.page.locator(this.reports_WebElements.Customer_CustomerType).click()
      const frame = await this.page.frameLocator(this.reports_WebElements.iframe_CustomerType)
      if(!frame) throw new Error('Iframe not found')
      await frame.locator(this.reports_WebElements.CustomerType_Dropdown).click()
      await this.page.waitForTimeout(1000)
      await frame.locator(this.reports_WebElements.SelectAll_CustomerType).click()
      await this.page.waitForTimeout(1000)
      await frame.locator(this.reports_WebElements.Ok_Button).click()
      await frame.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name,{ timeout: 60000 })
      await this.page.waitForTimeout(5000)
      await this.page.locator(this.reports_WebElements.Customer_Dropdown).click()
    }
    async Consignors()
    {
      await this.page.waitForTimeout(3000)
      await this.page.locator(this.reports_WebElements.Consignment_Dropdown).click()
      await this.page.locator(this.reports_WebElements.TopConsignor).click()
      await this.page.waitForTimeout(15000)
      await this.page.locator(this.reports_WebElements.TopConsignor_Auction).click()
      const frame = await this.page.frameLocator(this.reports_WebElements.iframe_TopConsignor)
      if(!frame) throw new Error('Iframe not found')
      await frame.locator(this.reports_WebElements.SelectEvent).selectOption(this.testdata.Event_name)
      await this.page.waitForTimeout(5000)
      await frame.locator(this.reports_WebElements.Search).fill(this.testdata.Account_Name)
      await this.page.waitForTimeout(3000)
      await this.page.locator(this.reports_WebElements.Consignment_Dropdown).click()
    }
}