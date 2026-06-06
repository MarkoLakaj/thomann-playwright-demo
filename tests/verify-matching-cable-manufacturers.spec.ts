import { test, expect } from '../utils/Fixtures'

test('Should add the correct cable to the basket after random selection', async ({ page, pageManager }) => {

    // Clear session to ensure empty basket
    await page.context().clearCookies()

    // Navigate to CableGuy page and handle cookies
    await page.goto('/cableguy.html')
    await pageManager.onCookieModal().acceptCookies()

    // Select random Cable Beginning and End types
    await pageManager.onCableGuyPage().clickCableBeginningButton()
    await pageManager.onCableGuyPage().selectRandomCableType()
    await pageManager.onCableGuyPage().clickCableEndButton()
    await pageManager.onCableGuyPage().selectRandomCableType()

    // Select a random manufacturer and verify product count
    await pageManager.onCableGuyPage().selectRandomManufacturer()
    expect(await pageManager.onCableGuyPage().verifyItemListMatchesManufacturersNumberOfProducts()).toBe(true)

    // Select a random product from the list
    await pageManager.onCableGuyPage().selectRandomListedItem()

    // Store the product name and price for assertion
    const productName = await pageManager.onProductPage().getProductName()
    const productPrice = await pageManager.onProductPage().getProductPrice()

    // Add product to basket 
    await pageManager.onProductPage().addProductToBasket()

    // Verify the correct name and price of the product in basket
    expect(await pageManager.onBasketPage().getItemName()).toContain(productName)
    expect(await pageManager.onBasketPage().getItemPrice()).toContain(productPrice)

})