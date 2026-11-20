import { Page, Locator, expect } from "@playwright/test";

const data:string[]=[
    "Apple","Banana","Blueberry","Cherry","Mango","Orange","Peach","Pineapple","Strawberry","Watermelon"
]
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

        const categoryOption=await this.CascadingDropdown.locator("select").first()
        const categoryselecteddropdown=await categoryOption.selectOption({label:"Fruits"})
        const itemoption= await this.CascadingDropdown.locator("select").nth(1)
        const itemdropdown=await itemoption.selectOption({label:"Apple"})

        const summaryTable= this.CascadingDropdown.locator("div .bg-indigo-50")
        await expect(summaryTable.locator("p span").nth(0)).toHaveText("Fruits")
        await expect(summaryTable.locator("p span").nth(1)).toHaveText("Apple")
    }
    async autocompleteDropdownsTesting(searchquery: string = "", selectItem: string = "Apple") {
    const input = this.AutocompleteDropdown.getByPlaceholder("Type to search...");
    const dropdownContainer = this.AutocompleteDropdown.locator(".absolute");
    const listitems = dropdownContainer.locator("li");

    const expectedfilterresults = data.filter((item) =>
        item.toLowerCase().includes(searchquery.toLowerCase())
    );

    await input.click();
    await input.pressSequentially(searchquery);

    // Verify all filtered <li> items match expected results
    await expect(listitems).toHaveText(expectedfilterresults);
    console.log(expectedfilterresults);
    console.log(await listitems.allTextContents());

    // Fix: Use exact: true so "Apple" does not match "Pineapple"
    await dropdownContainer.getByText(selectItem).nth(0).click();
}







}