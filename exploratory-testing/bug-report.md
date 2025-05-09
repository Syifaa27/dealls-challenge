# Bug Report - Mentoring Feature

## Title
Intermittent issue: "Request Session" button becomes unresponsive after login

## Summary
Users occasionally experience a bug where the "Request Session" button on the mentor profile page is not clickable, even though the UI appears to have loaded correctly.

## Environment
- Platform: Web
- OS: Windows/macOS/Linux
- Browser: Chrome, Firefox (latest)
- Environment: Staging and occasionally Production

## Steps to Reproduce
1. Login as a mentee user
2. Search for a mentor
3. Open mentor profile
4. Click on "Request Session"
5. Observe the button does not respond

## Expected Result
The session request modal should open when the button is clicked

## Actual Result
Nothing happens; the UI shows no errors or loading state

## Frequency
Intermittent (1 in 5 attempts)

## Impact
Users are blocked from scheduling sessions, reducing platform reliability

## Attachments
- Screenshots (if available)
- Logs (from browser console)
