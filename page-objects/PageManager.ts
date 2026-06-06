import { Page } from '@playwright/test'
import { CookieModal } from './CookieModal'
import { CableGuyPage } from './CableGuyPage'
import { ProductPage } from './ProductPage'
import { BasketPage } from './BasketPage'

/**
 * Central manager for all page objects.
 * Provides easy access to page components and modals.
 */
export class PageManager {

    private readonly page: Page
    private readonly cookieModal: CookieModal
    private readonly cableGuyPage: CableGuyPage
    private readonly productPage: ProductPage
    private readonly basketPage: BasketPage

    constructor(page: Page) {
        this.page = page

        // Initialize all page objects
        this.cookieModal = new CookieModal(this.page)
        this.cableGuyPage = new CableGuyPage(this.page)
        this.productPage = new ProductPage(this.page)
        this.basketPage = new BasketPage(this.page)
    }

    /** Accessor for the cookie modal */
    onCookieModal(): CookieModal {
        return this.cookieModal
    }

    /** Accessor for the CableGuy page */
    onCableGuyPage(): CableGuyPage {
        return this.cableGuyPage
    }

    /** Accessor for the Product page */
    onProductPage(): ProductPage {
        return this.productPage
    }

    /** Accessor for the Basket page */
    onBasketPage(): BasketPage {
        return this.basketPage
    }
}