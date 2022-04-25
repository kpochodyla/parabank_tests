import { expect } from '@playwright/test';
import { test } from '../my-test'
import { BankPage } from '../playwright-dev-page'

test.describe('Open new account', () => {
    test('Savings account', async ({ page, user}) =>{
        const bankPage = new BankPage(page);
        // Login the user
        await bankPage.loginUser(user);
        // Go to Open New Account page
        await bankPage.openNewAccount.click();
        // Select type of Account
        await bankPage.page.locator('#type').selectOption('1');
        // Select source account for transfer of initial founds
        await bankPage.page.locator('#fromAccountId').selectOption({index: 1});
        // Open new account
        await bankPage.page.locator('input:has-text("Open New Account")').click();
        // Validate that new Account is opened 
        await expect(bankPage.page.locator('text=Account Opened!')).toBeVisible();
        // Save Id of new Account
        const newAccountId = await bankPage.page.locator('[id="newAccountId"]').textContent();
        // Go to Accounts Overview page
        await bankPage.accountsOverview.click();
        // Validate that new Account is present on the Accounts List
        await expect(bankPage.page.locator('text='+newAccountId)).toBeVisible();
        // Go to the information of new Account
        await bankPage.page.locator('text='+newAccountId).click();
        // Validate that the new Account type is correct
        await expect(bankPage.page.locator('text=SAVINGS')).toBeVisible();
    });
    test('Checking account', async ({ page, user}) =>{
        const bankPage = new BankPage(page);
        // Login the user
        await bankPage.loginUser(user);
        // Go to Open New Account page
        await bankPage.openNewAccount.click();
        // Select type of Account
        await bankPage.page.locator('#type').selectOption('0');
        // Select source account for transfer of initial founds
        await bankPage.page.locator('#fromAccountId').selectOption({index: 1});
        // Open new account
        await bankPage.page.locator('input:has-text("Open New Account")').click();
        // Validate that new Account is opened 
        await expect(bankPage.page.locator('text=Account Opened!')).toBeVisible();
        // Save Id of new Account
        const newAccountId = await bankPage.page.locator('[id="newAccountId"]').textContent();
        // Go to Accounts Overview page
        await bankPage.accountsOverview.click();
        // Validate that new Account is present on the Accounts List
        await expect(bankPage.page.locator('text='+newAccountId)).toBeVisible();
        // Go to the information of new Account
        await bankPage.page.locator('text='+newAccountId).click();
        // Validate that the new Account type is correct
        await expect(bankPage.page.locator('text=CHECKING')).toBeVisible();
    });
});


