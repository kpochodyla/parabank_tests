import { expect } from '@playwright/test';
import { test } from '../my-test'
import { BankPage } from '../playwright-dev-page'

test.describe('Check accounts details', () => {
    test('Savings account', async ({ page, user}) =>{
        const bankPage = new BankPage(page);
        // Login the user
        await bankPage.loginUser(user);
        // Go to Open Accounts Overwie page
        await bankPage.accountsOverview.click();
        // Save Accounts Table
        const accountsTable = await bankPage.page.locator('#accountsTable');
        // Save all the Accounts from Accounts Table
        const accounts = await accountsTable.locator('[class="ng-scope"]');
        // For every account
        for (let i = 0; i < await accounts.count(); i++) {
            console.log(i)
            const account = await accounts.nth(i);
            await account.locator('a[]').click();
            await expect(account.locator('#accountId')).toBeVisible();
            await expect(account.locator('#accountType')).toBeVisible();
            await expect(account.locator('#balance')).toBeVisible();
            await expect(account.locator('#transactionTable')).toBeVisible();
        }
    });

});


