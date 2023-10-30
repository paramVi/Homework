import { browser } from '@wdio/globals'


export async function openPage() {
  await browser.setWindowSize(1920, 1080)
  return browser.navigateTo(`https://www.newegg.com/`)
}

export async function WaitForDisplayed() {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === 'complete'),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: 'Message on failure'
    }
  );
}