import { Page, Locator } from '@playwright/test'

/**
 * Page Object for the Cookie consent modal.
 */
export class CookieModal {

    private readonly page: Page
    private readonly acceptCookiesButton: Locator

    constructor(page: Page) {
        this.page = page
        this.acceptCookiesButton = page.locator('.consent-button--primary')
    }

    /** Clicks the accept cookies button if visible */
    async acceptCookies(): Promise<void> {
        if (await this.acceptCookiesButton.isVisible()) {
            await this.acceptCookiesButton.click()
        }
    }
}