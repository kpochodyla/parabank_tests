import { test, expect } from '@playwright/test';

test.describe('User registration', () => {
    test('Register new user', async ({ page }) =>{
        await page.goto('/');
        const loginPanel = await page.locator('id=loginPanel');
        await loginPanel.locator('text=Register').click();
        await page.pause();
    });
    test('Register new user - bad data', async ({ page }) =>{

    });
});
