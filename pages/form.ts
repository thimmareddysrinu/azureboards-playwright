import { Page, Locator, expect } from "@playwright/test";


export class FormPage {
    readonly page: Page;
    readonly FormTab:Locator
    readonly Form:Locator
    constructor(page: Page) {
        this.page = page;
        this.FormTab=page.getByRole("link",{name:"Form"})
        this.Form=page.locator("form")
        






    }

    async tableGoto() {
        await this.FormTab.click()
        await expect(this.FormTab).toBeVisible()

    }
    async formfill(){
        const form=this.Form
        await form.getByPlaceholder("John Doe").fill("srinivasreddy")
        await form.getByPlaceholder("john@example.com").fill("srinivas@gmail.com")
        await form.getByPlaceholder("••••••••").fill("Srinu452@")
        await form.getByPlaceholder("9876543210").fill("7893559031")
        await form.getByPlaceholder("https://example.com").fill("https://www.google.com")
        await form.getByPlaceholder("25").fill("35")
        await form.locator("select").selectOption("Designer");
        await form.getByRole("radio", { name: "male", exact: true }).check();
         await form.getByRole("checkbox", { name: "coding", exact: true }).check();
         await form.getByRole("checkbox", { name: "design", exact: true }).check();
 await form.getByRole("checkbox", { name: "music", exact: true }).check();
await form.locator('input[type="file"]').setInputFiles(
  "C:/Users/thimm/Downloads/Thimmareddy_Srinivasreddy_Resume_Tester (3).pdf"
);


        await form.getByPlaceholder("Tell us a little about yourself...").fill("Are you automating the Interests checkboxes or Primary Role dropdown right below it next? Let me know if you'd like help writing clean locators for the rest of this form.")
        
        await form.locator("button",{hasText:"Submit Form"}).click()

    }
  







}