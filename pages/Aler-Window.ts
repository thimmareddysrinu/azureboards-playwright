import { Page, Locator, expect } from "@playwright/test";


export class AlertWindowPage {
    readonly page: Page;
    readonly alertTab:Locator
    readonly allButtons:Locator
    constructor(page: Page) {
        this.page = page;
        this.alertTab=page.getByRole("link",{name:"Alerts & Windows"})
        this.allButtons=page.locator("div.flex-1.overflow-y-auto")






    }

    async tableGoto() {
        await this.alertTab.click()
        await expect(this.alertTab).toBeVisible()

    }
    async simpleAlertTesting() {
       
        this.page.once("dialog",async(dialog)=>{
            console.log(`Alert message: ${dialog.message()}`);
            await dialog.accept();
        
        })
         const simpleAlert=this.allButtons.getByRole("button",{name:"Simple Alert"})

        await simpleAlert.click()


    }
    async promptAlertTesting() {
       
        this.page.once("dialog",async(dialog)=>{
            console.log(`Alert message: ${dialog.message()}`);
            await dialog.accept("testing")
        
        })
         const promptAlert=this.allButtons.getByRole("button",{name:"Prompt Alert"})

        await promptAlert.click()


    }
    async confirumationAlertTesting() {
        
        this.page.once("dialog",async(dialog)=>{
            console.log(`Alert message: ${dialog.message()}`);
            await dialog.accept();
        
        })
         const confirumationAlert = this.allButtons.getByRole("button", { name: "Confirmation Alert" });
        await confirumationAlert.click();


    }
    async SuccessMessageTesting() {
        const successmsg=this.allButtons.getByRole("button",{name:"Success Toast"})

        await successmsg.click()
        // this.page.once("dialog",async(dialog)=>{
        //     console.log(`Alert message: ${dialog.message()}`);
        //     await dialog.dismiss();
        
        // })


    }
     async errorMessageTesting() {
        const errorMsg=this.allButtons.getByRole("button",{name:"Error Toast"})

        await errorMsg.click()
        // this.page.once("dialog",async(dialog)=>{
        //     console.log(`Alert message: ${dialog.message()}`);
        //     await dialog.dismiss();
        
        // })


    }
     async confirumationPopupTesting() {
         this.page.once("dialog",async(dialog)=>{
            console.log(`Alert message: ${dialog.message()}`);
            await dialog.accept();
        
        })
        const confirumationpopup=this.allButtons.getByRole("button",{name:"Confirmation Popup"})
        

        await confirumationpopup.click()
        
        const popupbutton=this.page.locator("div.relative.z-10")
          await popupbutton.locator(".flex.justify-end").getByRole("button", { name: "Delete Account" }).click();

       



    }
      async NewTabTesting() {
        const newTabButton=this.allButtons.getByRole("button",{name:"Open New Tab"})

        // await newTabButton.click()
        const [newPage]=await Promise.all([
            this.page.context().waitForEvent("page"),
            newTabButton.click(),
        ])
        await newPage.waitForLoadState()
        return newPage


    }







}