import { expect, Page, Locator } from '@playwright/test';

export class BankPage {
  readonly page: Page;
  readonly openNewAccount: Locator;
  readonly accountsOverview: Locator;
  readonly transferFunds: Locator;
  readonly billPay: Locator;
  readonly findTransactions: Locator;
  readonly updateContactInfo: Locator;
  readonly requestLoan: Locator;
  readonly logOut: Locator;

  constructor(page: Page) {
    this.page = page;
    const leftPanel = this.page.locator('[id="leftPanel"]');
    this.openNewAccount = leftPanel.locator('text=Open New Account');
    this.accountsOverview = leftPanel.locator('text=Accounts Overview');
    this.transferFunds = leftPanel.locator('text=Transfer Funds');
    this.billPay = leftPanel.locator('text=Bill Pay');
    this.findTransactions = leftPanel.locator('text=Find Transactions');
    this.updateContactInfo = leftPanel.locator('text=Update Contact Info');
    this.requestLoan = leftPanel.locator('text=Request Loan');
    this.logOut = leftPanel.locator('text=Log out');
  }

  async loginUser(user) {
    await this.page.goto('/');
    await this.page.locator('input[name="username"]').type(user.username);
    await this.page.locator('input[name="password"]').type(user.password);
    await this.page.locator('text="Log In"').click();
    await expect(this.openNewAccount).toBeVisible();
    await expect(this.accountsOverview).toBeVisible();
    await expect(this.transferFunds).toBeVisible();
    await expect(this.billPay).toBeVisible();
    await expect(this.findTransactions).toBeVisible();
    await expect(this.updateContactInfo).toBeVisible();
    await expect(this.requestLoan).toBeVisible();
    await expect(this.logOut).toBeVisible();
  }
}