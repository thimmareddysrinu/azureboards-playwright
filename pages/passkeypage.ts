import { Page, Locator } from "@playwright/test"

export class PasskeyPage {
    readonly page: Page
    readonly username: Locator
   readonly registerbutton:Locator
   readonly signinbutton:Locator
   

    constructor(page: Page) {
       this.page = page;
       this.username = this.page.locator("#input-email"); 
       this.registerbutton=this.page.locator("#register-button");
       this.signinbutton=this.page.locator("#login-button");
    }

    async goto() {
        await this.page.goto("https://webauthn.io/");
    }

    async registeruser(username: string) {
       
        await this.username.fill(username);
        
        
        
        // Ensure the submit button is enabled and clickable
        await this.registerbutton.click();
          await this.page.getByText('Success! Now try to authenticate...').waitFor({ state: 'visible' });
    }
     async signInuser(username: string) {
       
        await this.username.fill(username);
        
        
        
        // Ensure the submit button is enabled and clickable
        await this.signinbutton.click();
    }

   
}