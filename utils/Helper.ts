import { Locator } from '@playwright/test'

/**
 * Utility class for reusable helper methods.
 */
export class Helper {


    static normalizeWhiteSpace(str: string | null): string {
        return (str ?? '').replace(/\s+/g, ' ').trim()
    }      

    /**
     * Selects a random item from the Locator list.
     * Waits for the element to be visible before clicking.
     * @param itemLocator Locator representing a list of items
     */
    static async selectRandomItemFromTheList(itemLocator: Locator): Promise<void> {
        const count = await itemLocator.count()
        if (count === 0) throw new Error('No item found!')

        const randomIndex = Math.floor(Math.random() * count)
        await itemLocator.nth(randomIndex).waitFor({ state: 'visible' })
        await itemLocator.nth(randomIndex).click()
    }

    /** Trims down the proce string */
    static trimDownPrice(price: string | null): string | null {
        return price?.replace(/[^\d,]/g, '').trim() ?? null
    }
}