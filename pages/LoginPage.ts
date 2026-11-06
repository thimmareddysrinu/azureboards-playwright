import { Page, Locator } from "@playwright/test"

export class LoginPage {
    readonly page: Page
    readonly username: Locator
    readonly password: Locator
    readonly submit: Locator
    readonly logoutButton: Locator

    constructor(page: Page) {
       this.page = page;
       this.username = this.page.getByPlaceholder("Username"); 
       this.password = this.page.getByPlaceholder("Password"); 
       this.submit = this.page.locator("button",{hasText:"Sign In"}); 
       this.logoutButton = this.page.locator("button", { hasText: "Sign Out" })
    }

    async goto() {
        await this.page.goto("https://www.scriptedqa.com/");
    }

    async login(user: string, password: string) {
       
        await this.username.fill(user);
        
        await this.password.fill(password);
        
        // Ensure the submit button is enabled and clickable
        await this.submit.click();
    }

    async logout() {
     
        await this.logoutButton.click();
    }
}