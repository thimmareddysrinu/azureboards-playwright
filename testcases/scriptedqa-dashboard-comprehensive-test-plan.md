# Scripted QA Dashboard Test Plan

## Application Overview

A complete end-to-end test plan for the authenticated Scripted QA dashboard and its interactive components. The plan covers login, dashboard navigation, tables, dropdowns, alerts, frames, forms, calendar workflows, mouse interactions, and shopping cart behavior on the live site at https://www.scriptedqa.com/home using the valid credentials admin / Pass@9211.

## Test Scenarios

### 1. Authentication and dashboard access

**Seed:** `tests/seed.spec.ts`

#### 1.1. User can sign in with valid credentials and view the dashboard

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. Open the Scripted QA login page in a fresh browser session.
    - expect: The login page loads successfully without a blank screen or fatal error.
    - expect: The Username and Password fields are visible and empty.
    - expect: The Sign In button is visible and enabled.
  2. Enter admin in the Username field and Pass@9211 in the Password field.
    - expect: The entered values match the credentials exactly and are not truncated or obscured incorrectly.
    - expect: The page accepts the input without validation errors before submit.
  3. Click the Sign In button.
    - expect: The user is redirected to the authenticated home page at /home.
    - expect: The dashboard header and Categories navigation are visible.
    - expect: The welcome message 'Welcome back, Automation Engineer! 👋' appears.
  4. Inspect the left navigation and main content area.
    - expect: The Categories panel lists Table, Dropdown, Alerts & Windows, Frame, Form, Calender, Mouse Actions, and Shopping.
    - expect: The main dashboard content is displayed with the best-practices cards on the page.

#### 1.2. User can sign out and return to the login screen

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. From the authenticated home page, click Sign Out in the top-right corner.
    - expect: The user session ends and the application redirects to the login page.
    - expect: The Username and Password fields are visible again in a fresh unauthenticated state.
  2. Attempt to access the protected home page directly by reloading the page or typing the URL.
    - expect: The application requires re-authentication before allowing access to the protected page.
    - expect: The user returns to the login form when session data is expired or cleared.

### 2. Dashboard navigation and categorized feature access

**Seed:** `tests/seed.spec.ts`

#### 2.1. Each category link is visible and navigates to the correct feature page

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. On the home dashboard, review the complete Categories menu.
    - expect: All eight links are present: Table, Dropdown, Alerts & Windows, Frame, Form, Calender, Mouse Actions, and Shopping.
  2. Click the Table category link.
    - expect: The page navigates to the Table feature area and displays static and dynamic table sections.
    - expect: The page title or content clearly indicates the selected category.
  3. Use the browser back navigation and then click Dropdown, Alerts & Windows, Frame, Form, Calender, Mouse Actions, and Shopping one by one.
    - expect: Each category opens the expected page content and does not crash or disappear unexpectedly.
    - expect: The page updates correctly for every menu selection.
  4. Confirm the dashboard remains stable between category transitions.
    - expect: The page layout remains consistent and the left navigation is still available.
    - expect: No broken navigation states or empty pages are shown.

### 3. Table feature

**Seed:** `tests/seed.spec.ts`

#### 3.1. Static table displays expected team records

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. Navigate to the Table page.
    - expect: The static table section is visible with the heading 'Static Table'.
  2. Inspect the table header row and first few data rows.
    - expect: Column headers include ID, USER, EMAIL, ROLE, YEARS OF EXPERIENCE, and STATUS.
    - expect: Rows show team member records including Suyash Sharma, Alex Johnson, Priya Patel, David Kim, and Sarah Connor.
  3. Verify row counts and status values.
    - expect: The summary shows 'Showing 5 static entries.'
    - expect: The statuses include Active, Inactive, and Pending values as displayed by the app.
  4. Check that the table is readable and aligned.
    - expect: The table layout is stable, with clear column separation and all values visible without truncation.

#### 3.2. Dynamic table supports pagination and order actions

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. On the Table page, locate the dynamic table section and its 'Create New Order' button.
    - expect: The dynamic table is visible with columns ORDER ID, CUSTOMER, PRODUCT, AMOUNT ($), DATE, STATUS, and ACTION.
  2. Review the page summary and first set of orders.
    - expect: The dynamic table includes orders such as ORD-9021 through ORD-9024 and shows 'Showing 4 of 7 orders.'
    - expect: Pagination controls include Previous, Next, and the current page indicator '1 / 2'.
  3. Click the sort controls or next page navigation if available.
    - expect: The order list updates in response to pagination or sorting actions.
    - expect: The page remains stable and the data changes without a crash.
  4. Click 'Cancel Order' on a row.
    - expect: The action is triggered as designed by the application.
    - expect: The order state or user feedback updates accordingly, without breaking the table presentation.

### 4. Dropdown feature

**Seed:** `tests/seed.spec.ts`

#### 4.1. Single select and multi-select dropdowns update selection state

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. Navigate to the Dropdown page.
    - expect: The page displays Single Select Dropdown, Multi Select Dropdown, Cascading Dropdown, and Autocomplete / Searchable Dropdown areas.
  2. Open the Single Select Dropdown and choose an option such as 'Option 2'.
    - expect: The selected value updates and the label 'Selected Value: Option 2' or equivalent appears.
    - expect: The dropdown closes after selection and the chosen item is visible.
  3. Open the Multi Select Dropdown and choose multiple countries.
    - expect: Each selected country is added to the confirmed list.
    - expect: The summary updates to show the user-selected countries and removes previously unselected values correctly.
  4. Clear or change the selection to verify state changes.
    - expect: The selected-value summary updates immediately after each change.
    - expect: No stale values remain from previous selections.

#### 4.2. Cascading and searchable dropdowns behave correctly

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. In the Cascading Dropdown section, select a category such as Fruits or Vegetables.
    - expect: The second dropdown enables and loads the related item list for the chosen category.
    - expect: The selection summary updates to show the category chosen.
  2. Select an item in the second dropdown.
    - expect: The item value appears in the summary and the 'Category: X' and 'Item: Y' fields are populated correctly.
  3. In the Autocomplete / Searchable Dropdown, type a fruit name or select an option from the search list.
    - expect: The page filters or selects the matching value correctly.
    - expect: The panel updates to show 'Selected Fruit: <fruit>' or an equivalent confirmation.
  4. Try an invalid or empty search before choosing an option.
    - expect: The dropdown remains usable and does not break when the user enters no match or empties the search field.
    - expect: The expected empty-state messaging is displayed when the app supports it.

### 5. Alerts and windows

**Seed:** `tests/seed.spec.ts`

#### 5.1. Alert and confirmation dialogs respond to user actions

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. Navigate to the Alerts & Windows page.
    - expect: The page contains simple alert, prompt alert, confirmation alert, success toast, error toast, confirmation popup, and open new tab actions.
  2. Click 'Simple Alert'.
    - expect: A browser alert appears with the expected message.
    - expect: The user can dismiss the alert and continue interacting with the page.
  3. Click 'Prompt Alert' and provide text input.
    - expect: The prompt dialog accepts the entered text.
    - expect: The page displays or stores the entered value as designed by the application.
  4. Click 'Confirmation Alert' and choose either OK or Cancel.
    - expect: The confirmation behavior matches the user choice.
    - expect: The page updates appropriately for confirm or cancel actions.

#### 5.2. Toast notifications and tab opening work as intended

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. Click 'Success Toast' and 'Error Toast' separately.
    - expect: A toast message appears for each action and the message matches the expected success or error state.
    - expect: The toast is dismissed or remains on screen according to the design.
  2. Click 'Confirmation Popup' and respond with either accept or dismiss.
    - expect: The confirmation modal or popup behaves according to the selected action.
    - expect: The UI returns to the main page without breaking the page state.
  3. Click 'Open New Tab'.
    - expect: A new browser tab or page opens successfully.
    - expect: The new window contains the expected content relevant to the feature and the original page remains intact.

### 6. Frame handling

**Seed:** `tests/seed.spec.ts`

#### 6.1. User can access content inside embedded iframes

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. Navigate to the Frame page.
    - expect: The page loads the parent container and the iframe content area.
    - expect: The labels 'iFrame 1 Content' and 'iFrame 2 Content' are visible.
  2. Switch context to the first iframe and read its content.
    - expect: The iframe content text is visible and matches the embedded HTML content.
    - expect: The page clearly differentiates between the parent document and the iframe document.
  3. Switch context to the second iframe and verify its content.
    - expect: The second iframe displays its distinct message or content.
    - expect: The user can interact with the frame content without mixing it with the parent page.
  4. Return to the parent page after inspecting each iframe.
    - expect: The parent page remains loaded and usable, and the app does not lose context after frame inspection.

### 7. Form validation and input handling

**Seed:** `tests/seed.spec.ts`

#### 7.1. Form accepts valid data and validates required fields

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. Navigate to the Form page.
    - expect: The page shows sections for Text & Numeric Inputs, Selections & Choices, and Files & Biography.
  2. Enter a valid full name, email, password, phone number, website, and age.
    - expect: The text fields accept valid values without error.
    - expect: The phone number field updates the entered digits count and the value remains correct.
  3. Select a role from the Primary Role dropdown and choose a gender option.
    - expect: The selected option appears in the form state and the radio selection updates correctly.
  4. Check or uncheck interests and the Email Notifications toggle.
    - expect: The form reflects each changed checkbox and toggle state immediately.
    - expect: The user can select multiple interests and enable or disable notifications as needed.
  5. Submit the form with valid data.
    - expect: The application accepts the valid submission and displays the expected success confirmation or persisted state.
    - expect: The form does not throw an error for valid inputs.

#### 7.2. Form reset and invalid data handling are correct

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. Start with partially filled or empty required fields.
    - expect: The required fields remain visible and marked as required.
    - expect: The page does not silently submit incomplete data.
  2. Enter an invalid phone number or incomplete email and attempt to submit.
    - expect: Validation feedback is shown, or the form blocks submission with the expected error behavior.
    - expect: The application does not incorrectly accept invalid values.
  3. Click the Reset Form control.
    - expect: The form clears entered values and resets controls to their default state.
    - expect: The page is ready for a fresh entry sequence after reset.
  4. Verify the disabled field remains non-editable.
    - expect: The System Token field stays disabled and does not allow user input.
    - expect: The page layout remains consistent after reset and validation checks.

### 8. Calendar and scheduling flows

**Seed:** `tests/seed.spec.ts`

#### 8.1. Date picker and hotel booking calendar selection work correctly

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. Navigate to the Calender page.
    - expect: The date picker and hotel booking calendar sections are visible and ready for use.
  2. Select a date from the primary calendar and inspect the chosen date.
    - expect: The selected date updates to the expected value, and the summary reflects the selected date.
    - expect: No duplicate or stale date remains after selection.
  3. Choose a check-in and check-out range in the hotel booking calendar.
    - expect: The date range updates correctly and the booking summary shows the expected duration.
    - expect: The app displays the selected dates clearly and consistently.
  4. Use the scheduling assistant options such as 3 Days, 1 Week, or 2 Weeks.
    - expect: The planner updates the time slot or date range according to the selected duration.
    - expect: The UI remains stable after each scheduling adjustment.

#### 8.2. Delivery window and time-slot selection flow works for booking flows

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. In the shopping or booking-related section, choose a delivery date and time window.
    - expect: The delivery date selection updates the summary correctly.
    - expect: The app highlights the selected delivery slot or date value.
  2. Select a different time slot or date and confirm the booking.
    - expect: The chosen date/time value updates without stale selections.
    - expect: The booking confirmation action proceeds only when the selection is valid.
  3. Reset or clear the date selection when available.
    - expect: The chosen dates are cleared and the summary returns to the default or empty state.
    - expect: No lingering booking state remains after reset.

### 9. Mouse actions and drag-and-drop

**Seed:** `tests/seed.spec.ts`

#### 9.1. Mouse interactions are recognized and produce the expected result

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. Navigate to the Mouse Actions page.
    - expect: The page includes Mouse Left Click, Double Click, Right Click, Hover Me to Choose, and Drag & Drop sections.
  2. Perform a left click on the designated clickable area.
    - expect: The click action is detected and the target element state changes as designed.
    - expect: The page responds immediately and remains stable.
  3. Double-click the target element.
    - expect: The double-click event is handled correctly and the expected UI state is shown.
    - expect: There is no unexpected scroll jump or state loss.
  4. Right-click or context-click a target area.
    - expect: The browser context menu or custom right-click behavior appears as designed by the page.
    - expect: The interaction remains controlled and page state is preserved.

#### 9.2. Hover and drag-and-drop behavior works across available items and drop zone

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. Hover over the 'Hover Me to Choose' area.
    - expect: The hover state changes and reveals the expected content or visual indicator.
    - expect: The page updates without a delay or visual glitch.
  2. Drag an item from the available list into the drop zone.
    - expect: The item is moved into the selected/dropped container.
    - expect: The drop target count and item list update correctly.
  3. Drag multiple items and verify the drop zone state.
    - expect: The selected container reflects the correct number of items and items remain in the expected category.
    - expect: The drag operation remains functional and the page does not freeze.
  4. Clear or reorder items if the page supports it.
    - expect: The item list and drop zone state update correctly for each interaction.
    - expect: The app remains responsive throughout the drag-and-drop flow.

### 10. Shopping and cart behavior

**Seed:** `tests/seed.spec.ts`

#### 10.1. Product filters and add-to-cart actions work correctly

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. Navigate to the Shopping page.
    - expect: The page shows product cards with category filters and price filters, plus an item count summary such as 'Checkout Items: 0'.
  2. Apply a category filter such as Electronics or Fruits.
    - expect: The visible products update to match the selected category.
    - expect: The product list is narrowed to the chosen category and the filter state remains visible.
  3. Apply a price range filter such as Under $25 or $100 to $500.
    - expect: The product list updates to match the selected price range.
    - expect: The category and price selections work together as expected.
  4. Add one or more products to the cart.
    - expect: Each click updates the cart count or checkout summary.
    - expect: The selected products remain available in the cart state after selection.

#### 10.2. Cart summary reflects the correct merchandise and totals

**File:** `testcases/scriptedqa-dashboard.spec.ts`

**Steps:**
  1. Add several products from different categories to the cart.
    - expect: The cart summary updates to show the expected total item count and product selection list.
  2. Review the product cards and check the Add to Cart button state.
    - expect: Each product button responds to the click and the selected item is clearly reflected in the cart count or checkout panel.
  3. Reset or change filters after adding items.
    - expect: The cart contents remain intact or update according to the app behavior.
    - expect: The shopping page remains responsive and retains the selected products when filters are changed.
  4. Confirm the current state is consistent and visible to the user.
    - expect: The page layout remains stable, and the selected products remain in the cart summary without duplication or loss of information.
