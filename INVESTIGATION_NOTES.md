# Investigation Notes

## Why This Scenario

- It covers the entire purchase path and therefore represents the highest-value user journey on the page
- It navigates three different pages, making it the most likely place for potential failures
- It ensures that potential failures are caught quickly without damaging revenue

## Where the Test Could Become Flaky

- **Random selection**: Cable ends, manufacturer and product are all selected randomly. Mitigated by clearing cookies before each run to ensure a clean basket state
- **No `data-testid` on majority of web elements on the Cable Guy page**: selectors rely on CSS classes which are less stable and more susceptible to UI changes
- **`waitForTimeout`**:  two instances remain in `CableGuyPage` for filter selection. They allow the React UI to settle after filter interactions. Proper fix would be explicit element state waits

## What I Would Improve With More Time

- Introduce `storageState` to store authentication and speed up test execution
- Introduce environment variables for `baseURL` and locale configuration
- Replace `waitForTimeout` with explicit element state waits
- Additional test cases: filter stacking, empty state, filter reset, quantity change in basket
- Introduce a better reporter, e.g. Allure