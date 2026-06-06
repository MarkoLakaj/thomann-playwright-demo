import { test as base, Page } from '@playwright/test'
import { PageManager } from '../page-objects/PageManager'

type Fixtures = {
    pageManager: PageManager
}

export const test = base.extend<Fixtures> ({

    pageManager: async ({page}, use) => {
        const pageManager = new PageManager(page)
        await use(pageManager)
    }
})

export { expect } from '@playwright/test'