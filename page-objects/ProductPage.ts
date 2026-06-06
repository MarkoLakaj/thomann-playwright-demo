import { Page, Locator } from '@playwright/test'
import { Helper } from '../utils/Helper'

/**
 * Page Object representing a product page.
 * Allows fetching product details and adding the product to the basket.
 */
export class ProductPage {

    private readonly page: Page
    private readonly productName: Locator
    private readonly addToBasketButton: Locator
    private readonly productPrice: Locator

    constructor(page: Page) {
        this.page = page
        this.productName = page.locator('.product-title [itemprop="name"]')
        this.addToBasketButton = page.getByTestId('add-to-cart-button')
        this.productPrice = page.locator('.price.fx-text.fx-text--no-margin')
    }

    /** Returns the normalized product name */
    async getProductName(): Promise<string> {
        const text = await this.productName.textContent()
        return Helper.normalizeWhiteSpace(text)
    }

    /** Clicks the "Add to Basket" button */
    async addProductToBasket(): Promise<void> {
        await this.addToBasketButton.click()
    }

    /** Returns the trimmed down product price */
    async getProductPrice(): Promise<string | null> {
        await this.productPrice.waitFor({ state: 'visible' })
        const text = await this.productPrice.textContent()
        return Helper.trimDownPrice(text)
    }
}