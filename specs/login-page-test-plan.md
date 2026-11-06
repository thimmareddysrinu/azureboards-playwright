# Scripted QA Login Page Test Plan

## Application Overview

Test plan for the Scripted QA login experience, covering the main user flows and validation behaviors of the sign-in page.

## Test Scenarios

### 1. Login Page Core Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login page loads with required controls

**File:** `tests/login/login-page.spec.ts`

**Steps:**
  1. Open the Scripted QA home page at https://www.scriptedqa.com/
    - expect: The page loads successfully.
    - expect: The login form is visible on the page.
    - expect: The page displays a title or heading for the sign-in screen, along with Username and Password fields, and a Sign In button.
  2. Review the visible form elements and credential hint text
    - expect: The credential hint text is visible and readable.
    - expect: The user can clearly identify the required fields before entering credentials.

#### 1.2. Valid credentials grant access to the authenticated home page

**File:** `tests/login/login-page.spec.ts`

**Steps:**
  1. Enter the valid username as admin
    - expect: The username field accepts the value without error.
  2. Enter the valid password as Pass@9211
    - expect: The password field accepts the value without error and masks the text as a password input.
  3. Click the Sign In button
    - expect: The user is redirected from the login page to the authenticated home page.
    - expect: The home page shows the welcome content for the signed-in user, such as 'Welcome back, Automation Engineer!'.
    - expect: The URL changes to /home.

#### 1.3. Invalid credentials are rejected and user stays on the login page

**File:** `tests/login/login-page.spec.ts`

**Steps:**
  1. Open the login page on a fresh session
    - expect: The login form is reset and ready for new input.
  2. Enter an invalid username such as invaliduser
    - expect: The field accepts the typed value for the attempt.
  3. Enter an invalid password such as wrongpass
    - expect: The password field accepts the value for the attempt.
  4. Click the Sign In button
    - expect: The login attempt fails.
    - expect: The user remains on the login page and is not redirected to /home.
    - expect: No authenticated dashboard content is displayed.

#### 1.4. Blank username and password values are blocked

**File:** `tests/login/login-page.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: The form is visible and ready for input.
  2. Leave the Username field blank
    - expect: The field remains empty.
  3. Leave the Password field blank
    - expect: The field remains empty.
  4. Click the Sign In button without entering any value
    - expect: The login action does not proceed to an authenticated page.
    - expect: The user is still on the login page.
    - expect: No successful navigation or dashboard access occurs.

#### 1.5. Signed-in user can sign out and end the session

**File:** `tests/login/login-page.spec.ts`

**Steps:**
  1. Sign in with the valid credentials admin / Pass@9211
    - expect: The user successfully reaches the authenticated home page.
  2. Locate and click the Sign Out button in the top-right area of the page
    - expect: The session ends and the user is logged out.
    - expect: The user is returned to the sign-in page or otherwise loses access to the protected home screen.
    - expect: The login form is available again for the next session.
