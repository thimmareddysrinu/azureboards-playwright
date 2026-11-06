import { Page, Locator, expect } from "@playwright/test";


export class DropdownPage {
    readonly page: Page;
    readonly DropDownTab: Locator;
    readonly dropdowns: Locator;
    readonly cards: Locator;
    readonly singleDropdown: Locator;
    readonly multiselectDropdown: Locator;
    readonly CascadingDropdown: Locator;
    readonly AutocompleteDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.DropDownTab = page.getByRole("link", { name: "Dropdown" });
        this.dropdowns = this.page.locator('.grid')
        this.cards = page.locator(".grid > div");

        this.singleDropdown = this.cards.filter({
            has: page.getByText("Single Select Dropdown"),
        });
        this.multiselectDropdown = this.cards.filter({
            has: page.getByText("Multi Select Dropdown"),
        });
        this.CascadingDropdown = this.cards.filter({
            has: page.getByText("Cascading Dropdown"),
        });
        this.AutocompleteDropdown = this.cards.filter({
            has: page.getByText("Autocomplete / Searchable Dropdown"),
        });


    }

    async tableGoto() {
        await this.DropDownTab.click();
        await expect(this.DropDownTab).toBeVisible();
    }
    async singleDropdownsTesting() {

        await this.singleDropdown.locator(".relative button").first().click();
        await this.singleDropdown.locator(".relative ul li").filter({ hasText: "React.js" }).click();
        await expect(this.singleDropdown.locator("p span")).toHaveText("React.js");
    }
    async multiselectDropdownsTesting() {

        await this.multiselectDropdown.locator(".relative button").first().click();

        const absoluteclass = this.multiselectDropdown.locator(".absolute")

        const selectoptions = absoluteclass.locator("ul li span")
        await selectoptions.filter({ hasText: "United States" }).click()
        await absoluteclass.locator("button").filter({hasText:"Confirm Selection"}).click()
        
        await expect(this.multiselectDropdown.locator(".mt-4 > div span")).toHaveText(["United States×"]);
    }
    async cascadingDropdownsTesting() {

        await this.singleDropdown.locator("button", { hasText: "Select an option..." }).click()

        const selectedoption = this.singleDropdown.locator("ul li").filter({ hasText: "React.js" })

        expect(await this.singleDropdown.locator("p span").textContent()).toBe(await selectedoption.textContent())
    }
    async autocompleteDropdownsTesting() {

        await this.singleDropdown.locator("button", { hasText: "Select an option..." }).click()

        const selectedoption = this.singleDropdown.locator("ul li").filter({ hasText: "React.js" })

        expect(await this.singleDropdown.locator("p span").textContent()).toBe(await selectedoption.textContent())
    }






}