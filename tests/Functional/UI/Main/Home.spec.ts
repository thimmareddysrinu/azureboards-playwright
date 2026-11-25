import {test,expect} from '../../../../features/Base'
import {ProductsPage}from '../../../../pages/products/addingprod'



test.describe('Product Adding Flow', { tag: ['@UI', '@REGRESSION'] }, () => {
  test('adding product and completing checkout', async ({ page, loginIfRequired }) => {
    const productName = 'Cotton T-Shirt';
    const productsPage = new ProductsPage(page);

    // 1. Add product to cart
    await productsPage.goto();
    await productsPage.addproducts(productName);
    await productsPage.cartpage();
    await expect(page).toHaveURL(/cart/);

    // 2. Assert product is in the cart (prefer moving this check inside ProductsPage)
    const cartItem = page.locator('td a', { hasText: productName });
    await expect(cartItem).toBeVisible();

    // 3. Proceed to checkout and handle login redirect
    await productsPage.checkout();
    await expect(page).toHaveURL(/login/);
    await loginIfRequired(process.env.APP_EMAIL!, process.env.APP_PASSWORD!);

    // 4. Complete checkout
    await expect(page).toHaveURL(/checkout/);
    await productsPage.addressfill();
    await productsPage.paymentdetailsfill();
    await productsPage.placeorder();

    // 5. Verify order confirmation
    await expect(page.getByText(/order placed|thank you/i)).toBeVisible();
  });
});
