# Thomann Playwright Demo

This repository contains an automated end-to-end test suite for the [Thomann.de](https://www.thomann.de) Cable Guy journey.  
The framework is built with [Playwright](https://playwright.dev/) in **TypeScript**, following the Page Object Model pattern.

---

## 🚀 Setup & Run

### Prerequisites
- [Node.js](https://nodejs.org/) v24 or higher
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Install dependencies
```bash
npm ci
```

### Install browsers
```bash
npx playwright install --with-deps
```

### Run tests
```bash
npx playwright test
```

### View HTML report
```bash
npx playwright show-report
```

---

## 🧩 Project Structure

```
├── page-objects/        # Page Object classes (encapsulation of selectors & actions)
├── tests/               # Test files
├── utils/               # Helpers, fixtures and custom test base
├── playwright.config.ts # Playwright configuration
└── .github/workflows/   # CI pipeline (GitHub Actions)
```

---

## ✅ Current Capabilities
- Page Object Model with clear separation of concerns
- Custom fixture providing PageManager directly to tests
- End-to-end test covering the full Cable Guy purchase journey:
  - Random connector type selection for both cable ends
  - Manufacturer filter with product count verification
  - Cross-page product name assertion (Cable Guy → PDP)
  - Cross-page price assertion (PDP → Basket)
- Runs in GitHub Actions with artifact upload of Playwright HTML report
- Helper utilities for whitespace normalisation, price extraction and random selection

---

## 🔮 Future Improvements

- **Replace `waitForTimeout`** with explicit element state waits for more reliable synchronisation
- **`storageState`**: persist cookie consent across runs to avoid re-accepting on every execution
- **Environment config**: support multiple environments via `.env` variables for `baseURL` and locale
- **Article number anchor**: use article number instead of product name for cross-page assertions — more reliable given Thomann renders names inconsistently across locales
- **Additional test cases**: filter stacking, empty state, filter reset, quantity change in basket
- **More appealing reports**: integrate [Allure Playwright Reporter](https://allurereport.org/docs/playwright/) for interactive reports
- **Cross-browser coverage**: add Firefox and WebKit to config for broader compatibility
- **Cross-platform coverage**: add support for mobile testing

---

## 📊 CI Integration
- GitHub Actions pipeline runs on every push and pull request
- Test results are uploaded as an artifact: **`playwright-report/`**
  - Navigate to your GitHub Actions run → **Artifacts** → download and open `index.html`

---

## 📌 Notes
- Tests run against the live Thomann.de production environment — no staging environment was identified
- Some selectors on the Cable Guy page rely on CSS classes due to absence of `data-testid` attributes on the React components
- See `INVESTIGATION_NOTES.md` for detailed findings and reasoning
- See `AI_DISCLOSURE.md` for AI usage declaration