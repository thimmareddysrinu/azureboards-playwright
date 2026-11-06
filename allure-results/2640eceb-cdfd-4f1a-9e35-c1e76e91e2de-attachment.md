# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-page.spec.ts >> Login Page Core Functionality >> positive-testing:valid
- Location: tests\login-page.spec.ts:21:9

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('#userEmail') to be visible

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test"
  2  | 
  3  | export class LoginPage {
  4  |     readonly page: Page
  5  |     readonly username: Locator
  6  |     readonly password: Locator
  7  |     readonly submit: Locator
  8  |     readonly logoutButton: Locator
  9  | 
  10 |     constructor(page: Page) {
  11 |        this.page = page;
  12 |        this.username = this.page.locator("#userEmail"); 
  13 |        this.password = this.page.locator("#userPassword"); 
  14 |        this.submit = this.page.locator("#login"); 
  15 |        this.logoutButton = this.page.locator("button", { hasText: "Sign Out" })
  16 |     }
  17 | 
  18 |     async goto() {
  19 |         await this.page.goto("https://www.scriptedqa.com/");
  20 |     }
  21 | 
  22 |     async login(user: string, password: string) {
> 23 |         await this.username.waitFor({ state: 'visible' });
     |                             ^ Error: locator.waitFor: Target page, context or browser has been closed
  24 |         await this.username.fill(user);
  25 |         
  26 |         await this.password.fill(password);
  27 |         
  28 |         // Ensure the submit button is enabled and clickable
  29 |         await this.submit.click();
  30 |     }
  31 | 
  32 |     async logout() {
  33 |         await this.logoutButton.waitFor({ state: 'visible' });
  34 |         await this.logoutButton.click();
  35 |     }
  36 | }
```