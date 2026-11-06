import { Page, Locator } from "@playwright/test"

export class DashboardPage {
  
  readonly title:Locator
    constructor(page: Page) {
        this.title=page.locator("h3",{hasText:"Automation"})
    }

    

   
}