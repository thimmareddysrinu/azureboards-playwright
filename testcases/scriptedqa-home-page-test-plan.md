# Scripted QA Home Page Test Plan

## Application Overview

Test plan for the landing/login page of Scripted QA, validated against the live home page at https://www.scriptedqa.com/home. The plan covers page rendering, core authentication controls, and validation behavior in a fresh user state.

## Test Scenarios

### 1. Home page and authentication flow

**Seed:** `tests/seed.spec.ts`

#### 1.1. Page loads with all core login form elements

**File:** `testcases/scriptedqa-home-page.spec.ts`

**Steps:**
  1. Open the browser to https://www.scriptedqa.com/home or the homepage URL.
    - expect: The page loads successfully without a fatal error or blank screen.
    - expect: The browser displays the Scripted QA branding and the page title or header text.
    - expect: The page shows a login form with Username and Password fields and a Sign In button.
  2. Review the page layout and visible text.
    - expect: The page includes the Scripted QA logo/brand area and a visible 'Credentials' section or equivalent help text.
    - expect: The Username field is empty and ready for input in a fresh state.
    - expect: The Password field is empty and ready for input in a fresh state.
    - expect: The Sign In button is enabled and clearly clickable.
  3. Check the page in a standard desktop viewport.
    - expect: All major form elements are visible without overlap or clipping.
    - expect: Fields are aligned and usable without horizontal scrolling.
    - expect: The page remains readable and stable across the initial render.

#### 1.2. Valid user can sign in successfully

**File:** `testcases/scriptedqa-home-page.spec.ts`

**Steps:**
  1. Navigate to the home page in a fresh browser session.
    - expect: The login screen is displayed with the Username and Password controls visible.
  2. Enter the username admin and the password Pass@9211 in the respective fields.
    - expect: The entered values appear correctly in each field without masking or truncation issues.
    - expect: No validation message is shown before the form is submitted.
  3. Click the Sign In button.
    - expect: The authentication attempt is submitted with the entered credentials.
    - expect: The user is either redirected to the next authenticated page or receives the expected success state for the application.
    - expect: No unexpected error message appears for a valid login.
  4. Verify the resulting page state after successful sign-in.
    - expect: The user lands on the correct post-login application page or dashboard.
    - expect: The session is established and the page reflects the authenticated state as designed by the product.

#### 1.3. Invalid or incomplete credentials are rejected

**File:** `testcases/scriptedqa-home-page.spec.ts`

**Steps:**
  1. Open the home page in a fresh session.
    - expect: The login form is visible and ready for user input.
  2. Leave the username blank and enter a password value, or enter a username with an incorrect password.
    - expect: The form does not proceed silently if validation is expected.
    - expect: A clear error message or validation feedback is displayed if the app requires it.
  3. Click the Sign In button with missing or incorrect values.
    - expect: The application blocks the login attempt.
    - expect: The user remains on the login form or receives the appropriate error response.
    - expect: No authenticated state is established, and the page remains stable.
  4. Retry with a valid credential set after the failed attempt.
    - expect: The user can recover by correcting the credentials and successfully signing in.
    - expect: The application returns to a normal authenticated flow after the corrected attempt.
