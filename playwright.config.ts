// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';
import { TestOptions } from './my-test';

const config: PlaywrightTestConfig<TestOptions>= {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: 'on-first-retry',
    baseURL: 'https://parabank.parasoft.com/parabank'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }
  ],
};
export default config;