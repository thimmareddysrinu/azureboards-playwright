import { Page, Locator, expect } from "@playwright/test";

export interface OrderRow {
  orderId: string;
  customer: string;
  product: string;
  amount: string;
  date: string;
  status: string;
}

export class DynamicTablePage {
  readonly page: Page;
  readonly TableTab: Locator;
  readonly table: Locator;
  readonly headerCells: Locator;
  readonly bodyRows: Locator;
  readonly searchBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.TableTab = page.getByRole("link", { name: "Table" });

    // pick the table by one of its headers instead of by position
    this.table = page
      .locator("table")
      .filter({ has: page.getByRole("columnheader", { name: /order id/i }) });
    this.headerCells = this.table.locator("thead tr th");
    this.bodyRows = this.table.locator("tbody tr");
    this.searchBox = page.getByPlaceholder(/search orders/i);
  }

  async tableGoto() {
    await this.TableTab.click();
    await expect(this.table).toBeVisible();
  }

  async dynamicTableHeadersCheck() {
    // regexes ignore the sort arrows, line breaks and case
    await expect(this.headerCells).toHaveText([
      /order\s*id/i,
      /customer/i,
      /product/i,
      /amount/i,
      /date/i,
      /status/i,
      /action/i,
    ]);
  }

  async dynamicTableDataCheck(): Promise<OrderRow[]> {
    await expect(this.bodyRows.first()).toBeVisible();
    const rows = await this.bodyRows.all();
    expect(rows.length).toBeGreaterThan(0);

    const data: OrderRow[] = [];
    for (const row of rows) {
      const c = (await row.locator("td").allInnerTexts()).map((t) =>
        t.replace(/\s+/g, " ").trim()   // collapse line breaks like "ORD-\n9022"
      );
      data.push({
        orderId: c[0],
        customer: c[1],
        product: c[2],
        amount: c[3],
        date: c[4],
        status: c[5],
      });
    }
    return data;
  }

  async search(text: string) {
    await this.searchBox.fill(text);
  }
}






