# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-page.spec.ts >> Login Page Core Functionality >> negative-testing:wrong Password
- Location: tests\login-page.spec.ts:26:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button').filter({ hasText: 'Sign In' })
    - locator resolved to <button class="cursor-pointer py-2 m-2 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500">Sign In</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="mb-5 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 space-y-1.5">…</div> intercepts pointer events
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <form class="absolute w-full md:w-3/12  p-10 my-20 mx-auto right-0 left-0 text-white rounded-lg bg-slate-900/60 backdrop-blur-xl border border-slate-700/50">…</form> intercepts pointer events
  - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="mb-5 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 space-y-1.5">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    10 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="mb-5 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 space-y-1.5">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <form class="absolute w-full md:w-3/12  p-10 my-20 mx-auto right-0 left-0 text-white rounded-lg bg-slate-900/60 backdrop-blur-xl border border-slate-700/50">…</form> intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="mb-5 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 space-y-1.5">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="mb-5 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 space-y-1.5">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

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
  12 |        this.username = this.page.getByPlaceholder("Username"); 
  13 |        this.password = this.page.getByPlaceholder("Password"); 
  14 |        this.submit = this.page.locator("button",{hasText:"Sign In"}); 
  15 |        this.logoutButton = this.page.locator("button", { hasText: "Sign Out" })
  16 |     }
  17 | 
  18 |     async goto() {
  19 |         await this.page.goto("https://www.scriptedqa.com/");
  20 |     }
  21 | 
  22 |     async login(user: string, password: string) {
  23 |        
  24 |         await this.username.fill(user);
  25 |         
  26 |         await this.password.fill(password);
  27 |         
  28 |         // Ensure the submit button is enabled and clickable
> 29 |         await this.submit.click();
     |                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  30 |     }
  31 | 
  32 |     async logout() {
  33 |      
  34 |         await this.logoutButton.click();
  35 |     }
  36 | }
```