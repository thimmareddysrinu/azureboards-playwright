# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-page.spec.ts >> Login Page Core Functionality >> Login page loads with required controls
- Location: tests\login-page.spec.ts:5:7

# Error details

```
Error: A snapshot doesn't exist at C:\Users\thimm\OneDrive\Desktop\fighttickets-playwright\snapshots\login-page.spec.ts\LoginPage-chrome-Samsung-Galaxy-S22-Ultra-12-0-browserstack-mobile-win32.png, writing actual.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import {LoginPage} from '../pages/LoginPage'
  3  | import {Logindata} from '../utils/login-testData'
  4  | test.describe('Login Page Core Functionality', () => {
  5  |   test('Login page loads with required controls',{ tag: '@visual-testing' }, async ({ page }) => {
  6  |     const loginPage = new LoginPage(page);
  7  | 
  8  |     await loginPage.goto();
  9  | 
  10 |  await page.screenshot({ path: 'LoginPage.png', fullPage: true });
  11 | 
  12 | 
> 13 |   await expect(page).toHaveScreenshot('LoginPage.png', {
     |   ^ Error: A snapshot doesn't exist at C:\Users\thimm\OneDrive\Desktop\fighttickets-playwright\snapshots\login-page.spec.ts\LoginPage-chrome-Samsung-Galaxy-S22-Ultra-12-0-browserstack-mobile-win32.png, writing actual.
  14 |   fullPage: true,
  15 |   animations: 'disabled',
  16 |   maxDiffPixelRatio: 0.00,
  17 | });
  18 |   });
  19 | 
  20 | 
  21 | 
  22 | 
  23 |   // Login Tests Are Below
  24 |   for (let c of Logindata) {
  25 |     
  26 |     test(`${c.success?"positive-testing":"negative-testing"}:${c.title}`,async({page})=>{
  27 |       const Login=new LoginPage(page)
  28 | 
  29 |       await Login.goto()
  30 |       await Login.login(c.username,c.username)
  31 | 
  32 |       if(c.success){
  33 |         await expect(page).not.toHaveURL(/Login/)
  34 |       }
  35 |       else{
  36 |         const errorText=page.locator(".text-red-500 p-2").allTextContents()
  37 |         console.log(errorText)
  38 |         await expect(page.getByText(c.expectedMessage!)).toBeVisible();
  39 |       }
  40 | 
  41 |     })
  42 |   }
  43 | 
  44 | 
  45 | 
  46 | 
  47 | 
  48 |   
  49 |   
  50 | })
  51 | 
  52 | 
```