# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-page.spec.ts >> Login Page Core Functionality >> negative-testing:empty username
- Location: tests\login-page.spec.ts:21:9

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('#userEmail') to be visible

```

```
Error: apiRequestContext._wrapApiCall: Target page, context or browser has been closed
```