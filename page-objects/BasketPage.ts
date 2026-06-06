import { Page, Locator } from '@playwright/test'
import { Helper } from '../utils/Helper'

/**
 * Page Object representing the Basket page
 */
export class BasketPage {

    private readonly page: Page
    private readonly itemName: Locator
    private readonly itemPrice: Locator

    constructor(page: Page) {
        this.page = page
        this.itemName = page.locator('.content__details .headline')
        this.itemPrice = page.locator('[data-testid^="article-price-"] .price--primary').first()
    }


    /** Returns the item name text */
    async getItemName(): Promise<string | null> {
        return await this.itemName.textContent()
    }

    /** Returns the trimmed down item price */
    async getItemPrice(): Promise<string | null> {
        await this.itemPrice.waitFor({ state: 'visible' })
        const text = await this.itemPrice.textContent()
        return Helper.trimDownPrice(text)
    }
}