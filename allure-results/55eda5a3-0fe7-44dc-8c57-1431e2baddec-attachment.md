# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-page.spec.ts >> Login Page Core Functionality >> Login page loads with required controls
- Location: tests\login-page.spec.ts:5:7

# Error details

```
Error: Screenshot name "snapshots" must have a '.png' or '.webp' extension
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - img "logo" [ref=e6]
  - generic [ref=e7]:
    - generic [ref=e8]: Scripted QA
    - generic [ref=e9]: Your QA Automation Playground
  - generic [ref=e10]:
    - generic [ref=e11]:
      - paragraph [ref=e12]: Credentials
      - generic [ref=e13]:
        - generic [ref=e14]:
          - text: "User:"
          - strong [ref=e15]: admin
        - generic [ref=e16]:
          - text: "Pass:"
          - strong [ref=e17]: Pass@9211
    - heading "Sign In" [level=1] [ref=e18]
    - textbox "Username" [ref=e19]
    - textbox "Password" [ref=e20]
    - paragraph [ref=e21]
    - button "Sign In" [ref=e22] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import {LoginPage} from '../pages/LoginPage'
  3  | 
  4  | test.describe('Login Page Core Functionality', () => {
  5  |   test('Login page loads with required controls',{ tag: '@visual-testing' }, async ({ page }) => {
  6  |     const loginPage = new LoginPage(page);
  7  | 
  8  |     await loginPage.goto();
  9  | 
  10 |  await page.screenshot({ path: 'Screenshots/Login/LoginPage.png', fullPage: true });
  11 | 
  12 |     // Visual comparison: whole page
> 13 |     await expect(page).toHaveScreenshot('login-page-full.png', { fullPage: true });
     |                        ^ Error: Screenshot name "snapshots" must have a '.png' or '.webp' extension
  14 |   });
  15 | })
  16 | 
  17 | 
```