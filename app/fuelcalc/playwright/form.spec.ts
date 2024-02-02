import { test, expect } from '@playwright/test'

test('Use the form', async ({ page }) => {
	await page.goto('http://localhost:5173')
	await page.screenshot({ path: './playwright-report/screenshot.png' })

	await page.fill('input[name="laptimeM"]', '2')
	await page.fill('input[name="laptimeS"]', '0')
	await page.fill('input[name="raceLength"]', '60')
	await page.fill('input[name="literPerLap"]', '3')
	await page.fill('input[name="maxTank"]', '105')

	await expect(page.locator('input[name="litersTotal"]')).toHaveJSProperty(
		'value',
		'94'
	)
})
