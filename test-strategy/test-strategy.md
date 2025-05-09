# Test Strategy - Mentoring Feature (Dealls)

This document outlines the test strategy and high-level scenarios for the newly added mentoring feature on the Dealls platform.

## Objectives

- Ensure the mentoring feature works as expected.
- Maintain quality in terms of functionality, usability, and reliability.
- Detect regressions caused by future code changes.

## Scope of Testing

The following areas are included:
- User login (mentee and mentor)
- Mentor search
- Mentoring session request
- Scheduling and notifications
- Session history and feedback

## Types of Testing

| Testing Type           | Purpose |
|------------------------|---------|
| Unit Testing           | Validate individual logic units (e.g., input validation, date formatting) |
| Integration Testing    | Test interaction between UI, API, and database |
| End-to-End (E2E) Testing | Simulate full user journeys |
| Exploratory Testing    | Discover hidden bugs through unscripted testing |
| Regression Testing     | Ensure new features do not break existing ones |
| Usability Testing      | Evaluate ease of use for the mentoring flow |
| Negative Testing       | Test how the system handles invalid input or actions |

## Environments

- **Local Development**: For quick development and debugging
- **Staging**: Realistic environment simulation
- **Production (read-only observation)**: Final behavior validation using real user data (limited)

## Assumptions

- Mentoring features are only accessible to logged-in users.
- Mentees can only request sessions from available mentors.
- Session times follow the user's local timezone.

## High-Level Test Scenarios

### 1. Login
- Successful login with valid credentials
- Failed login with incorrect email/password
- Login using Google account

### 2. Search Mentor
- Search mentors by keyword (e.g., "product")
- Filter mentors by category (e.g., design, tech)
- No results found

### 3. Request Mentoring Session
- Mentee selects mentor and requests a session
- Input validation for date/time
- Mentee cancels a session request

### 4. Mentor Response
- Mentor accepts the session request
- Mentor rejects the session request
- Mentor reschedules the session

### 5. Session Execution and Feedback
- Session reminder sent via notification or email
- Mentoring session conducted (e.g., via Google Meet or Zoom)
- Mentee submits feedback post-session

## Test Priorities

| Priority | Area               | Justification |
|----------|--------------------|---------------|
| High     | Request session     | Core of the mentoring feature |
| High     | Login/authentication | Prerequisite for accessing features |
| Medium   | Mentor search/filter | Impacts user experience |
| Medium   | Mentor responses    | Validates two-way interaction |
| Low      | UI polish and empty states | Enhances user experience but not critical |

## Methodologies and Tools

- Manual Testing: Exploratory and checklist-based
- Automated Testing: Cypress for end-to-end tests
- CI/CD: GitHub Actions for continuous integration

## References

- [Dealls Platform](https://dealls.com)
- [Cypress Documentation](https://docs.cypress.io)
- [GitHub Actions](https://github.com/features/actions)
