import { Page, Locator } from "@playwright/test"

export class LoginAccountPage {
    readonly page: Page
    readonly username: Locator
    readonly password: Locator
    readonly submit: Locator
    readonly logoutButton: Locator
    readonly registerButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.username = this.page.getByPlaceholder("you@example.com");
        this.password = this.page.getByPlaceholder("Your password");
        this.submit = this.page.locator("button", { hasText: "Sign in" });
        this.logoutButton = this.page.locator("button", { hasText: "Logout" })
        this.registerButton = this.page.getByRole("link", { name: "Create one" })
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
    async Register() {

        await this.registerButton.click();
    }
}