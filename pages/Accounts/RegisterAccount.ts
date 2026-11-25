import { Page, Locator } from "@playwright/test"

export class RegisterAccountPage {
    readonly page: Page
    readonly fullname: Locator
    readonly username: Locator
    readonly password: Locator
    readonly Confirmpassword: Locator
    readonly country: Locator
    readonly gender: Locator
    readonly privacycheckout: Locator
    readonly submit: Locator
    readonly logoutButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.fullname = this.page.getByTestId("signup-name");
        this.username = this.page.getByTestId("signup-email");
        this.password = this.page.getByPlaceholder("signup-password");
        this.Confirmpassword = this.page.getByPlaceholder("signup-confirm");
        this.country = this.page.getByPlaceholder("signup-country");
        this.gender = this.page.getByPlaceholder("signup-gender-group");
        this.privacycheckout = this.page.getByTestId("signup-agree");
        this.submit = this.page.locator("button", { hasText: "Create account" });
        this.logoutButton = this.page.locator("button", { hasText: "Sign Out" })
    }

    async goto() {
        await this.page.goto("https://playground.qatools.dev/qashop/signup");
    }

    async login(fullname: string, email: string, password: string, confirmPassword: string, country: string, gender: string) {

        await this.fullname.fill(fullname);
        await this.username.fill(email);
        await this.password.fill(password);
        await this.Confirmpassword.fill(confirmPassword);
        await this.country.fill(country);
        await this.gender.fill(gender);
        await this.privacycheckout.check();
        await this.submit.click()
    }

    async logout() {

        await this.logoutButton.click();
    }
}