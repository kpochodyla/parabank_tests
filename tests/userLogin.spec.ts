import { expect } from '@playwright/test';
import { test } from '../my-test'

test.describe('User Log in', () => {
    test('Login user', async ({ page, user}) =>{
        await page.goto('/');
        // Input username to login panel
        await page.locator('input[name="username"]').type(user.username);
        // Input password to login panel
        await page.locator('input[name="password"]').type(user.password);
        // Click Log in button
        await page.locator('text="Log In"').click();
        // Validate that information present for Loged in user are present
        const leftPanel = await page.locator('[id="leftPanel"]');
        await expect(leftPanel.locator('text=Open New Account')).toBeVisible();
        await expect(leftPanel.locator('text=Accounts Overview')).toBeVisible();
        await expect(leftPanel.locator('text=Transfer Funds')).toBeVisible();
        await expect(leftPanel.locator('text=Bill Pay')).toBeVisible();
        await expect(leftPanel.locator('text=Find Transactions')).toBeVisible();
        await expect(leftPanel.locator('text=Update Contact Info')).toBeVisible();
        await expect(leftPanel.locator('text=Request Loan')).toBeVisible();
        await expect(leftPanel.locator('text=Log out')).toBeVisible();
    });
    test('Login user without password', async ({ page, user}) =>{
        await page.goto('/');
        // Input username to login panel
        await page.locator('input[name="username"]').type(user.username);
        // Click Log in button
        await page.locator('text="Log In"').click();
        // Validate that error message is present
        await expect(page.locator('text=Please enter a username and password.')).toBeVisible();
    });
    test('Login user without username', async ({ page, user}) =>{
        await page.goto('/');
        // Input password to login panel
        await page.locator('input[name="password"]').type(user.username);
        // Click Log in button
        await page.locator('text="Log In"').click();
        // Validate that error message is present
        await expect(page.locator('text=Please enter a username and password.')).toBeVisible();
    });
});

