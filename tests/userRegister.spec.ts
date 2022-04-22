import { expect } from '@playwright/test';
import { test } from '../my-test'

test.describe('User registration', () => {
    test('Register new user', async ({ page, user}) =>{
        await page.goto('/');
        const loginPanel = await page.locator('id=loginPanel');
        await loginPanel.locator('text=Register').click();
        await page.locator('[id="customer.firstName"]').type(user.firstName);
        await page.locator('[id="customer.lastName"]').type(user.lastName);
        await page.locator('[id="customer.address.street"]').type(user.address);
        await page.locator('[id="customer.address.city"]').type(user.city);
        await page.locator('[id="customer.address.state"]').type(user.state);
        await page.locator('[id="customer.address.zipCode"]').type(user.zipCode);
        await page.locator('[id="customer.phoneNumber"]').type(user.phoneNumber);
        await page.locator('[id="customer.ssn"]').type(user.SSN);

        await page.locator('[id="customer.username"]').type(user.username);
        await page.locator('[id="customer.password"]').type(user.password);
        await page.locator('[id="repeatedPassword"]').type(user.password);

        // await page.locator('[class=button] >> text=Register').click()

    });
    test('Register new user - bad data', async ({ page }) =>{

    });
});
