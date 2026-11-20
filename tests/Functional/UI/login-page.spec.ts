import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage'
import {Logindata} from '../../utils/login-testData'
test.describe('Login Page Core Functionality', () => {
  test('Login page loads with required controls',{ tag: '@visual-testing' }, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

//  await page.screenshot({ path: 'LoginPage.png', fullPage: true });


//   await expect(page).toHaveScreenshot('LoginPage.png', {
//   fullPage: true,
//   animations: 'disabled',
//   maxDiffPixelRatio: 0.00,
// });
  });




  // Login Tests Are Below
  for (let c of Logindata) {
    
    test(`${c.success?"positive-testing":"negative-testing"}:${c.title}`,async({page})=>{
      const Login=new LoginPage(page)

      await Login.goto()
      await Login.login(c.username,c.password)

      if(c.success){
        await expect(page).not.toHaveURL(/Login/)
      }
      else{
        const errorText=await page.locator(".text-red-500 .p-2").allTextContents()
        console.log(errorText)
        await expect(page.getByText(c.expectedMessage!)).toBeVisible();
      }

    })
  }





  
  
})

