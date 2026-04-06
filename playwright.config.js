import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['list'], // console
    ['html', { open: 'never' }] // HTML report
  ],

  use: {
    // screenshot: 'only-on-failure',
    // video: 'retain-on-failure',
    trace: 'on-first-retry',
    screenshot : "on" , 
    video : "on"
  }
});