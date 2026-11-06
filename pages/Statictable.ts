import { Page, Locator } from "@playwright/test"
import {expect} from "../features/Base"

interface TableRowData {
    id: number;
    user: string;
    email: string;
    role: string;
    exp: string;
    status: string;
}
export class TablePage {
    readonly page: Page
    readonly TableTab: Locator
    readonly TableMain: Locator
    // readonly submit: Locator
    // readonly logoutButton: Locator
    readonly MockData:TableRowData[]=[
       
         { id: 1, user: "Suyash Sharma", email: "suyash@example.com", role: "QA Lead", exp: "8 yrs", status: "Active" }

]
    constructor(page: Page) {
        this.page = page;
        this.TableTab = this.page.getByRole("link",{name:"Table"});
        this.TableMain = this.page.locator(".overflow-x-auto").first();

    }
    
    async tableGoto(){
        await this.TableTab.click()
    }
    async tableHeaderscheck() {
        

        const table=this.TableMain.locator("table")

        const headerscell=table.locator("thead tr th")

        const headers=await headerscell.allInnerTexts()
        await expect(headers).toEqual([
            'ID',
            'USER',
            'EMAIL',
            'ROLE',
            'YEARS OF EXPERIENCE',
            'STATUS'
        ])
        return headers




    }
    async tableDatacheck() {
        

        const table=this.TableMain.locator("table")

        const Tablebodycell=table.locator("tbody tr td")

        const Body=await Tablebodycell.allInnerTexts()
        
        return Body




    }






}