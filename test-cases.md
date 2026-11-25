# Test Plan: QATools Playground — Exhaustive

## Application Overview

Execution-ready plan covering every reachable module and the principal controls observed during direct exploration of the QA Tools Playground.

## Test Scenarios

### 1. Home and Global Navigation

**Seed:** `tests/seed.spec.ts`

#### 1.1. TC-HOME-001: Initial load

**File:** `tests/home.spec.ts`

**Steps:**
  1. Navigate to https://playground.qatools.dev/.
    - expect: The Test Automation Playground title, update banner, header, hero, practice-app cards, footer, and welcome tour are displayed.
  2. Dismiss the welcome tour and update banner.
    - expect: Both overlays disappear without overlapping core page content.
  3. Monitor console and network.
    - expect: No unexpected JavaScript or resource failure occurs.

#### 1.2. TC-HOME-002: Hero Shop navigation

**File:** `tests/home.spec.ts`

**Steps:**
  1. Click Open the Shop app.
    - expect: The page opens /qashop/products.

#### 1.3. TC-HOME-003: Hero Clinic navigation

**File:** `tests/home.spec.ts`

**Steps:**
  1. Click Open the Clinic app.
    - expect: The page opens /clinic.

#### 1.4. TC-HOME-004: Hero Bank navigation

**File:** `tests/home.spec.ts`

**Steps:**
  1. Click Banking app Preview.
    - expect: The page opens /bank.

#### 1.5. TC-HOME-005: Widgets navigation

**File:** `tests/home.spec.ts`

**Steps:**
  1. Open Widgets from the hero or primary navigation.
    - expect: The page opens /widgets.

#### 1.6. TC-HOME-006: Practice-card navigation

**File:** `tests/home.spec.ts`

**Steps:**
  1. Open Shop, Clinic, Bank, Widgets, API, Locator Game, Learn, Patterns, Challenges, Test cases, and Quiz cards.
    - expect: Every card opens the matching destination.
    - expect: External Pro links open only when explicitly selected.

#### 1.7. TC-HOME-007: Banner and feedback

**File:** `tests/home.spec.ts`

**Steps:**
  1. Switch announcements, dismiss the banner, open feedback, submit/close, and reopen.
    - expect: Announcement selection and dismissal work.
    - expect: Feedback validation and close/reopen behavior remain stable.

#### 1.8. TC-HOME-008: Mobile keyboard and history

**File:** `tests/home.spec.ts`

**Steps:**
  1. Test 390x844, 768x1024, and 1280x800; use Tab, Enter, Space, Back, and Forward.
    - expect: There is no horizontal overflow.
    - expect: Focus is visible and navigation history restores routes.

### 2. QA Shop Catalog

**Seed:** `tests/seed.spec.ts`

#### 2.1. TC-SHOP-001: Catalog load

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Navigate to /qashop/products.
    - expect: Search, category, maximum price, sort, stock checkbox, product cards, and pagination are visible.
    - expect: Running Shoes is marked out of stock.

#### 2.2. TC-SHOP-002: Search valid/blank/no-match

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Search for Wireless, blank/whitespace, and xyz-no-product.
    - expect: Matching cards appear for valid text.
    - expect: Blank/whitespace is neutral.
    - expect: No-match has a clear empty state or no cards.

#### 2.3. TC-SHOP-003: Search edge input

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Enter !@#$, 500 characters, and HTML-like text.
    - expect: No script executes.
    - expect: No markup is interpreted.
    - expect: The UI remains usable.

#### 2.4. TC-SHOP-004: Category links and filter

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Open All, Electronics, Clothing, Books, Home, Toys, and Sports.
    - expect: Every route filters to only the selected category.
    - expect: All restores the complete catalog.

#### 2.5. TC-SHOP-005: Price and sort

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Set price to 0, a middle value, and 200; choose every sort.
    - expect: Price boundaries and sorting are deterministic.
    - expect: Combined filters remain consistent.

#### 2.6. TC-SHOP-006: In-stock filter

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Enable and disable In stock only.
    - expect: Out-of-stock products are excluded while enabled.
    - expect: They return when disabled.

#### 2.7. TC-SHOP-007: Pagination

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Use Prev, Next, page numbers, refresh, and browser history.
    - expect: Prev/Next boundaries, active page, and direct URL state are correct.

#### 2.8. TC-SHOP-008: Product card controls

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Activate image, name, Details, wishlist heart, and Add to cart separately.
    - expect: Image/name/details open the matching product.
    - expect: Wishlist/cart state updates independently.

#### 2.9. TC-SHOP-009: Out-of-stock add

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Attempt Add to cart for Running Shoes.
    - expect: The control remains disabled and no cart item is added.

#### 2.10. TC-SHOP-010: Duplicate cart add

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Add one in-stock product twice.
    - expect: One line with quantity 2 or quantity 2 is represented.
    - expect: Totals and header count remain correct.

### 3. QA Shop Product, Wishlist, Cart, Login, and Checkout

**Seed:** `tests/seed.spec.ts`

#### 3.1. TC-SHOP-011: Product detail load

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Open /qashop/products/1.
    - expect: Name, brand, category, rating, stock, description, Add to cart, Share, Wishlist, breadcrumbs, and recommendations are visible.

#### 3.2. TC-SHOP-012: Breadcrumb and recommendation navigation

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Click Home, All products, Electronics, and You may also like items.
    - expect: Each destination matches its label and selected product/category.

#### 3.3. TC-SHOP-013: Share, wishlist, and cart on detail

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Use Share, Add to wishlist, and Add to cart.
    - expect: Share gives observable copy/share behavior.
    - expect: Wishlist and cart states update correctly.

#### 3.4. TC-SHOP-014: Invalid product URL

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Open unknown IDs, alphabetic IDs, and out-of-range URLs.
    - expect: A safe not-found state is shown with no stale product or crash.

#### 3.5. TC-SHOP-015: Wishlist add/remove/persistence

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Add a wishlist item, open /qashop/wishlist, remove it, refresh, and reset demo data.
    - expect: Count/heart/list state synchronize.
    - expect: Reset restores empty state.

#### 3.6. TC-SHOP-016: Empty cart

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Reset demo data and open /qashop/cart.
    - expect: Your cart is empty and browse guidance are shown.
    - expect: Header count is zero.

#### 3.7. TC-SHOP-017: Cart quantity and totals

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Add at least two units and update quantity, subtotal, and totals.
    - expect: Line and overall totals match unit price × quantity.
    - expect: Zero is removed or blocked with clear feedback.

#### 3.8. TC-SHOP-018: Cart quantity edge values

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Enter negative, zero, blank, 1, and 9999.
    - expect: Invalid values are rejected or normalized.
    - expect: No NaN, overflow, or negative line total occurs.

#### 3.9. TC-SHOP-019: Cart remove/persistence

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Remove an item, refresh, navigate away/back.
    - expect: Item count, line items, and totals update.
    - expect: Cart state remains synchronized and persists as designed.

#### 3.10. TC-SHOP-020: Login required and format

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Submit blanks and invalid email/password combinations.
    - expect: Required/format/credential errors appear.
    - expect: No authenticated state is created.

#### 3.11. TC-SHOP-021: Demo login and Remember me

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Use Fill demo login, Remember me, Sign in, refresh, and reset.
    - expect: Valid demo login succeeds.
    - expect: Session behavior matches the selected Remember me state.
    - expect: Reset clears demo session.

#### 3.12. TC-SHOP-022: Checkout happy and invalid

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Complete valid checkout and submit blank/invalid email/phone/postal fields.
    - expect: Valid dummy checkout completes safely.
    - expect: Invalid submissions stop progression and preserve valid values.

#### 3.13. TC-SHOP-023: Shop responsive and keyboard

**File:** `tests/shop.spec.ts`

**Steps:**
  1. Test 390x844, 768x1024, and 1280x800; use keyboard navigation.
    - expect: No horizontal overflow occurs.
    - expect: Controls have names and visible logical focus.
    - expect: Disabled stock controls cannot activate.

### 4. Clinic

**Seed:** `tests/seed.spec.ts`

#### 4.1. TC-CLINIC-001: Clinic Home load

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Open /clinic.
    - expect: Navigation, hero CTAs, eight specialties, and top-rated doctor cards are visible.

#### 4.2. TC-CLINIC-002: Specialty navigation

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Click General Physician, Cardiology, Dermatology, Pediatrics, Neurology, Orthopedics, Dentistry, and Psychiatry.
    - expect: Each route opens /clinic/doctors with matching specialty filtering.

#### 4.3. TC-CLINIC-003: Top doctor cards

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Open every top-rated doctor card.
    - expect: Each profile shows matching doctor name, specialty, rating, experience, and fee.

#### 4.4. TC-CLINIC-004: Doctor list load

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Open /clinic/doctors.
    - expect: Ten doctors, search, sort, All, and specialty tabs are visible.

#### 4.5. TC-CLINIC-005: Doctor search

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Search valid names/specialties, no-match text, spaces, special characters, HTML text, and 500 characters.
    - expect: Valid matches are correct.
    - expect: No-match/invalid input remains safe.
    - expect: No script executes.

#### 4.6. TC-CLINIC-006: Doctor tabs and sort

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Select All and every specialty; choose Top rated, experience, and fee sorts.
    - expect: Tab results and sort order are correct.
    - expect: All restores ten doctors.

#### 4.7. TC-CLINIC-007: Profile and booking links

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Open profiles and Book links for every doctor.
    - expect: Each profile and booking route corresponds to the selected doctor.

#### 4.8. TC-CLINIC-008: Date/time selection

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Open /clinic/book/d-vikram-shah and select each date and time.
    - expect: Only one date and slot are selected.
    - expect: Confirm remains gated until both are selected.

#### 4.9. TC-CLINIC-009: Patient name validation

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Submit blank, whitespace, digits, symbols, one character, and 500-character names.
    - expect: Invalid values are blocked.
    - expect: Valid letters/spaces/apostrophe/hyphenated names pass.

#### 4.10. TC-CLINIC-010: Phone validation

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Try blank, alphabetic, 9-digit, 10-digit, 11-digit, and padded phone values.
    - expect: Only the valid 10-digit format passes.

#### 4.11. TC-CLINIC-011: Reason and notes boundaries

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Select every reason and test blank, valid, HTML-like, and 1000-character notes.
    - expect: Reason carries to confirmation.
    - expect: Notes are optional, bounded, and escaped.

#### 4.12. TC-CLINIC-012: Booking happy path and duplicate

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Create a valid appointment and double-submit Confirm booking.
    - expect: Exactly one appointment is created.
    - expect: My appointments shows the matching details.

#### 4.13. TC-CLINIC-013: Missing date/time

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Submit neither, date only, or time only.
    - expect: Submission is blocked with clear guidance.

#### 4.14. TC-CLINIC-014: Empty/cancel/persistence

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Reset, open My appointments, create/cancel, refresh, and navigate away/back.
    - expect: Empty counts are 0/0/0.
    - expect: Cancel updates status/counts.
    - expect: Data persists until reset.

#### 4.15. TC-CLINIC-015: Invalid URLs, responsive, and keyboard

**File:** `tests/clinic.spec.ts`

**Steps:**
  1. Open unknown profiles/bookings and test mobile/tablet/desktop with keyboard.
    - expect: Unknown routes show safe not-found behavior.
    - expect: No overflow occurs.
    - expect: Controls have accessible names and visible focus.

### 5. Bank Preview

**Seed:** `tests/seed.spec.ts`

#### 5.1. TC-BANK-001: Dashboard load

**File:** `tests/bank.spec.ts`

**Steps:**
  1. Open /bank.
    - expect: Customer, total balance, account cards, hide toggle, quick actions, and recent transactions are visible.

#### 5.2. TC-BANK-002: Hide/show balances

**File:** `tests/bank.spec.ts`

**Steps:**
  1. Toggle Hide balances repeatedly.
    - expect: Balances alternate consistently between visible and masked.

#### 5.3. TC-BANK-003: Transactions load/search/filter

**File:** `tests/bank.spec.ts`

**Steps:**
  1. Open /bank/transactions and search; select All/Money in/Money out and both accounts.
    - expect: The initial 18 transactions and filtered results match criteria.
    - expect: No-match is clear.

#### 5.4. TC-BANK-004: Transfer form load

**File:** `tests/bank.spec.ts`

**Steps:**
  1. Open /bank/transfer.
    - expect: From, To, Amount, Note, and Continue are visible.
    - expect: External payee is disabled.

#### 5.5. TC-BANK-005: Transfer amount boundaries

**File:** `tests/bank.spec.ts`

**Steps:**
  1. Try blank, zero, negative, 100001, insufficient balance, and 100000.
    - expect: Invalid values are rejected.
    - expect: Only valid limit/balance values pass.
    - expect: Invalid submission does not alter balances.

#### 5.6. TC-BANK-006: Transfer note boundaries

**File:** `tests/bank.spec.ts`

**Steps:**
  1. Enter 40 and 41 characters.
    - expect: 40 passes with 40/40 counter.
    - expect: 41 is blocked or constrained.

#### 5.7. TC-BANK-007: Transfer happy path

**File:** `tests/bank.spec.ts`

**Steps:**
  1. Complete valid Savings-to-Current transfer and confirm.
    - expect: Review and confirmation match the entered transfer.
    - expect: Dummy balances/history update.

#### 5.8. TC-BANK-008: Reset and responsive

**File:** `tests/bank.spec.ts`

**Steps:**
  1. Reset data and test desktop/tablet/mobile layouts.
    - expect: Demo state resets.
    - expect: No overflow or inaccessible controls occur.

### 6. Widgets Playground

**Seed:** `tests/seed.spec.ts`

#### 6.1. TC-WIDGET-001: Page load

**File:** `tests/widgets.spec.ts`

**Steps:**
  1. Open /widgets.
    - expect: Widgets Playground and all documented widget sections are reachable.

#### 6.2. TC-WIDGET-002: Text/selection input

**File:** `tests/widgets.spec.ts`

**Steps:**
  1. Test blank, whitespace, special, HTML-like, and long text; use checkboxes/radio/select/multiselect.
    - expect: Valid output updates.
    - expect: Invalid output follows widget rules.
    - expect: Markup is escaped.

#### 6.3. TC-WIDGET-003: Date/time/range/color

**File:** `tests/widgets.spec.ts`

**Steps:**
  1. Enter valid and invalid values and test range boundaries.
    - expect: Valid values reflect; invalid/out-of-range values are blocked or reported.

#### 6.4. TC-WIDGET-004: Alerts/dialogs/tabs/accordion

**File:** `tests/widgets.spec.ts`

**Steps:**
  1. Trigger alert, confirm, toast, modal, tabs, and accordion.
    - expect: Actions, focus, dismissal, and selected state are correct.
    - expect: Only one transient state remains active.

#### 6.5. TC-WIDGET-005: Tooltip/context menu/hover

**File:** `tests/widgets.spec.ts`

**Steps:**
  1. Hover/focus tooltip targets and right-click context menu.
    - expect: Tooltip appears and leaves on exit/blur.
    - expect: Context menu closes outside/Escape and each action works.

#### 6.6. TC-WIDGET-006: Table filter/sort/pagination

**File:** `tests/widgets.spec.ts`

**Steps:**
  1. Filter, sort, paginate, combine criteria, and enter no-match/long/special text.
    - expect: Rows match criteria.
    - expect: Empty and edge states remain stable.

#### 6.7. TC-WIDGET-007: Upload/drop/drag

**File:** `tests/widgets.spec.ts`

**Steps:**
  1. Upload/drop valid, invalid, empty, multiple, duplicate files and drag items.
    - expect: Valid data updates once.
    - expect: Invalid data is rejected with clear feedback.
    - expect: No stale or duplicate state remains.

#### 6.8. TC-WIDGET-008: Carousel/loading/iframe

**File:** `tests/widgets.spec.ts`

**Steps:**
  1. Use carousel, progress, iframe, lazy, infinite, and async controls.
    - expect: Loading/completion/boundary states are observable and clear.
    - expect: Repeated actions do not duplicate content.

#### 6.9. TC-WIDGET-009: Error/retry/optimistic/download/clipboard

**File:** `tests/widgets.spec.ts`

**Steps:**
  1. Trigger error/retry/revert, download, and clipboard allowed/denied.
    - expect: Failure/recovery is correct.
    - expect: Download/clipboard results or fallback feedback are clear.

#### 6.10. TC-WIDGET-010: Keyboard/scroll/Shadow DOM

**File:** `tests/widgets.spec.ts`

**Steps:**
  1. Use keyboard, scroll region, iframe, and Shadow DOM controls.
    - expect: Controls remain reachable and isolated behavior works.
    - expect: Reset restores initial state.

#### 6.11. TC-WIDGET-011: Responsive/accessibility

**File:** `tests/widgets.spec.ts`

**Steps:**
  1. Test 390x844, 768x1024, 1280x800 and Tab through controls.
    - expect: No overflow/overlap occurs.
    - expect: Names and visible focus are present.

### 7. API Playground

**Seed:** `tests/seed.spec.ts`

#### 7.1. TC-API-001: GET list success

**File:** `tests/api.spec.ts`

**Steps:**
  1. Run GET — list (success).
    - expect: Status is 200 and timing is displayed.
    - expect: Response contains a products array with 5 items.

#### 7.2. TC-API-002: GET single/slow/404/500

**File:** `tests/api.spec.ts`

**Steps:**
  1. Run every Read endpoint.
    - expect: Single, slow, 404, and 500 states match their documented behavior.

#### 7.3. TC-API-003: Pagination and sequential requests

**File:** `tests/api.spec.ts`

**Steps:**
  1. Use Next/Prev and Run both.
    - expect: skip changes correctly.
    - expect: The dependent request uses the first response ID.
    - expect: No stale status remains.

#### 7.4. TC-API-004: POST/PUT/PATCH/DELETE

**File:** `tests/api.spec.ts`

**Steps:**
  1. Run each write method.
    - expect: Method, endpoint, body, and response status match the scenario.

#### 7.5. TC-API-005: Headers/auth

**File:** `tests/api.spec.ts`

**Steps:**
  1. Run Authorization-header and custom-header requests.
    - expect: Outgoing bearer/custom headers are visible in DevTools and request details.

#### 7.6. TC-API-006: Mock cards/tabs/login/search

**File:** `tests/api.spec.ts`

**Steps:**
  1. Switch framework tabs and load mock user/product/login/debounced search scenarios.
    - expect: Framework code changes appropriately.
    - expect: Mock success/empty/error/loading behavior is predictable.
    - expect: Debounce waits 300 ms.

#### 7.7. TC-API-007: API network/console/responsive

**File:** `tests/api.spec.ts`

**Steps:**
  1. Repeat requests while monitoring console/network and responsive widths.
    - expect: Only intentional 404/500 calls fail.
    - expect: No unexpected exceptions or failed assets occur.
    - expect: Controls remain usable.

### 8. Secondary and Cross-App Pages

**Seed:** `tests/seed.spec.ts`

#### 8.1. TC-CROSS-001: Locator Game

**File:** `tests/cross.spec.ts`

**Steps:**
  1. Open /game and complete a representative locator challenge.
    - expect: The challenge, target, input/action, success, and reset/error behavior match the visible rules.

#### 8.2. TC-CROSS-002: Learn Playwright

**File:** `tests/cross.spec.ts`

**Steps:**
  1. Open /learn/playwright and follow available lessons/navigation.
    - expect: Every lesson and next/previous link opens its documented content.
    - expect: Direct and back navigation remain stable.

#### 8.3. TC-CROSS-003: Patterns

**File:** `tests/cross.spec.ts`

**Steps:**
  1. Open /patterns and inspect all pattern entries.
    - expect: Code examples and navigation are visible and copy actions work if present.

#### 8.4. TC-CROSS-004: Challenges

**File:** `tests/cross.spec.ts`

**Steps:**
  1. Open /challenges and activate available tasks.
    - expect: Task instructions and success verification render and update predictably.

#### 8.5. TC-CROSS-005: Test cases

**File:** `tests/cross.spec.ts`

**Steps:**
  1. Open /test-cases and inspect available test-case content.
    - expect: Examples load and navigation/filtering or copy actions work without error.

#### 8.6. TC-CROSS-006: Quiz

**File:** `tests/cross.spec.ts`

**Steps:**
  1. Open /quiz, answer valid/invalid/blank, complete, reset/retry.
    - expect: Answers record, submit validates, score/result is correct, and retry/reset works.

#### 8.7. TC-CROSS-007: About and Terms

**File:** `tests/cross.spec.ts`

**Steps:**
  1. Open /about and /terms.
    - expect: Both pages load complete static content and footer navigation returns without broken routes.

#### 8.8. TC-CROSS-008: Invalid routes/history/reset

**File:** `tests/cross.spec.ts`

**Steps:**
  1. Open unknown URLs and use Back/Forward/Refresh; reset demo data.
    - expect: Invalid routes show a safe not-found state.
    - expect: History and refresh remain consistent.
    - expect: Reset restores relevant demo state.

#### 8.9. TC-CROSS-009: Console/network sign-off

**File:** `tests/cross.spec.ts`

**Steps:**
  1. Traverse every major module while monitoring console and network.
    - expect: No unexpected uncaught exception, failed asset, or 4xx/5xx occurs outside deliberate API scenarios.
    - expect: All intentional 404/500 states are clearly identified.

#### 8.10. TC-CROSS-010: Viewport matrix

**File:** `tests/cross.spec.ts`

**Steps:**
  1. Test 390x844, 844x390, 768x1024, and 1280x800 across major modules.
    - expect: Navigation/actions remain reachable.
    - expect: No horizontal overflow or modal overlap occurs.
