import { Page, Locator } from '@playwright/test'
import { Helper } from '../utils/Helper'

/**
 * Page Object representing the Basket page
 */
export class BasketPage {

    private readonly page: Page
    private readonly basketNotificationPopup: Locator
    private readonly itemDetails: Locator
    private readonly itemPrice: Locator

    constructor(page: Page) {
        this.page = page
        this.basketNotificationPopup = page.locator('.fx-notification__content > div')
        this.itemDetails = page.locator('.content__details')
        this.itemPrice = page.locator('[data-testid^="article-price-"]')
    }

    /**
     * Returns the text displayed in the basket notification popup.
     */
    async getBasketNotificationPopupText(): Promise<string | null> {
        return await this.basketNotificationPopup.textContent()
    }

    /** Returns the item name text */
    async getItemName(): Promise<string | null> {
        return await this.itemDetails.textContent()
    }

    /** Returns the trimmed down item price */
    async getItemPrice(): Promise<string | null> {
        await this.itemPrice.first().waitFor({ state: 'visible' })
        const text = await this.itemPrice.first().textContent()
        return Helper.trimDownPrice(text)
    }
}