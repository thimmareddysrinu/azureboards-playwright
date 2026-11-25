import { Page, Locator } from "@playwright/test"

export class ProductsPage {
    readonly page: Page
    readonly productgrid: Locator
    readonly ShopButton: Locator
    readonly Tourkip: Locator
    readonly cartbutton: Locator
    readonly checkbutton: Locator
    readonly shoopingaddressform: Locator
    readonly paymentform: Locator
    readonly placeorderbutton: Locator
    readonly checkoutorderbutton: Locator
    readonly nextbutton: Locator

    constructor(page: Page) {
        this.page = page;
        this.ShopButton = this.page.getByTestId("cta-shop");
        this.Tourkip = this.page.getByTestId("tour-skip");
        this.productgrid = this.page.getByTestId("product-grid");
        this.cartbutton = this.page.getByRole('link', { name: "cart" });
        this.checkbutton = this.page.getByRole('button', { name: "Proceed to checkout" });
        this.shoopingaddressform = this.page.getByTestId("step-shipping-form")
        this.paymentform = this.page.getByTestId("step-payment-form")
        this.checkoutorderbutton = this.page.getByTestId("confirm-order")
        this.placeorderbutton = this.page.getByTestId("place-order")
        this.nextbutton = this.page.getByTestId("step-next")
    }

    async goto() {
        await this.page.goto(process.env.BASE_URL!)
        await this.Tourkip.click()
        await this.ShopButton.click()
        await this.productgrid.waitFor()

    }

    async addproducts(productName: string) {

        const cards = await this.productgrid.locator(".product-card").all();

        for (let i = 0; i < cards.length; i++) {
            const title = (await cards[i].locator(".product-card-title a").innerText()).trim();
            if (title === productName) {
                await cards[i].getByTestId(/^add-to-cart-/).click();
                return;
            }
        }
        throw new Error(`Product "${productName}" not found`);




    }
    async cartpage() {

        await this.cartbutton.click()



    }
    async checkout() {
        await this.checkbutton.click()







    }
    async addressfill() {
        const form = this.shoopingaddressform
        await form.locator("#ship-name").fill("srinivasreddy")
        await form.locator("#ship-address").fill("srinivasreddy")
        await form.locator("#ship-city").fill("srinivasreddy")
        await form.locator("#ship-zip").fill("srinivasreddy")
        await form.locator("#ship-country").selectOption("India")
        await form.getByTestId("ship-method-express").check()
        await this.nextbutton.click()






    }
    async paymentdetailsfill() {
        const form = this.paymentform
        await form.locator("#card-number").fill("4242 4242 4242 4242")
        await form.locator("#card-expiry").fill("12/30")
        await form.locator("#card-cvv").fill("123")
        await form.locator("#card-name").fill("srinivasreddy")

        await this.nextbutton.click()






    }
    async placeorder() {
        await this.checkoutorderbutton.click()
        await this.page.getByTestId("place-order").click()







    }


}