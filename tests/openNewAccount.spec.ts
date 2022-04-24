import { expect } from '@playwright/test';
import { test } from '../my-test'
import { BankPage } from '../playwright-dev-page'

test.describe('Open new account', () => {
    test('Savings account', async ({ page, user}) =>{
        const bankPage = new BankPage(page);
        await bankPage.loginUser(user);
        await bankPage.openNewAccount.click();
        await bankPage.page.locator('#type').selectOption('1');
        await bankPage.page.locator('#fromAccountId').selectOption({index: 1});
        await bankPage.page.locator('input:has-text("Open New Account")').click();
        await expect(bankPage.page.locator('text=Account Opened!')).toBeVisible();
    });
    test('Checking account', async ({ page, user}) =>{
        const bankPage = new BankPage(page);
        await bankPage.loginUser(user);
        await bankPage.openNewAccount.click();
        await bankPage.page.locator('#type').selectOption('0');
        await bankPage.page.locator('#fromAccountId').selectOption({index: 1});
        await bankPage.page.locator('input:has-text("Open New Account")').click();
        await expect(bankPage.page.locator('text=Account Opened!')).toBeVisible();
    });
});


