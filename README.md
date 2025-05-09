# Dealls SDET Challenge

This repository contains the complete submission for the Dealls SDET (Software Development Engineer in Test) Challenge. It is organized into three main parts, each corresponding to a challenge described below.

## Folder Structure

```
dealls-sdet-challenge/
├── README.md                          # Overview of the challenge and instructions
├── test-strategy/
│   └── test-strategy.md              # Challenge 1: Test strategy and high-level scenarios
├── automation/
│   └── cypress/                      # Challenge 2: UI automation using Cypress
│       ├── e2e/
│       │   ├── mentee_login.cy.js
│       │   ├── search_mentor.cy.js
│       │   └── request_session.cy.js
│       ├── support/
│       │   ├── commands.js
│       │   └── e2e.js
│       ├── cypress.config.js
│       └── package.json
├── exploratory-testing/
│   ├── bug-report.md                 # Challenge 3: Bug summary and investigation steps
│   ├── root-cause-analysis.md       # Root cause analysis of the bug
│   └── flaky-test.cy.js             # Bonus test for unstable user flow
├── .github/
│   └── workflows/
|__       └── ci.yml                   # GitHub Actions CI for running tests

```

## Challenge Breakdown

### Challenge 1: Test Strategy
Located in `test-strategy/test-strategy.md`, this document outlines:
- Overall QA approach
- Types of testing
- Environments and assumptions
- High-level test scenarios

### Challenge 2: UI Automation Testing
UI automation tests are built with **Cypress** and cover key flows including:
- Login as a mentee
- Searching for a mentor
- Requesting a mentoring session

Refer to the `automation/cypress/e2e/` folder for the test scripts.

### Challenge 3: Exploratory Testing & Bug Investigation
Documentation for bug analysis is provided in:
- `exploratory-testing/bug-report.md`
- `exploratory-testing/root-cause-analysis.md`

A Cypress test (`flaky-test.cy.js`) is included to demonstrate a flaky scenario reproduction.

## How to Run Tests

1. Install dependencies: 
   ```bash
   npm install
   ```

2. Open Cypress UI:
   ```bash
   npx cypress open
   ```

3. Run tests in CLI:
   ```bash
   npx cypress run
   ```

## Continuous Integration

This project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) to automatically run tests on push and pull requests.

## Notes

- Tests were designed assuming a working Dealls staging/test environment.
- Google login automation is not included due to third-party auth restrictions.
