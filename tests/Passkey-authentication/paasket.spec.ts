// import {test,expect} from "@playwright/test"
// import {PasskeyPage} from '../../pages/passkeypage'


// test.describe("pass and fingerprint authentication", () => {
//    test("passket create", async ({ page,context }) => {
//     const username="srinivasreddy"
//     const storagefilepath=test.info().outputPath("paaskey/passkeys.json")
//     const register=new PasskeyPage(page)
//       await test.step("passket create", async () => {
//          await context.credentials.install();
//       })
//        await test.step("register pass key create", async () => {
//         await register.goto()
//         await register.registeruser(username)
//         const passketId=await context.credentials.get()
//         const storage=await context.storageState({path:storagefilepath,credentials:true})
//         console.log(storage) 
//       })
//         await test.step("signin with pass key", async () => {
        
//         await register.signInuser(username)
//         await expect(page.getByText("You're logged in!")).toBeVisible()
        
//       })
//    })
// })