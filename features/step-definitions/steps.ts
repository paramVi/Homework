import { Given, Then, When } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'
import { WaitForDisplayed, openPage } from '../pageobjects/page.js';
import { elements } from '../pageobjects/elements.js';



Given("user open the page",
async () => {
  openPage();
 WaitForDisplayed();
});

When("user selects Electronics section", 
async () => {
    await (await elements.hamburgerIcon).click();
    WaitForDisplayed();
    await (await elements.electronicsSecion).click();
});

When("user selects television and add to cart",
async () => {
  await(await elements.tvSection).click();
  WaitForDisplayed();
  await(await elements.lgTv).click();
  WaitForDisplayed();
  await(await elements.item).click();
  await(await elements.addToCart).click();
  await(await elements.noThanks).click();
})

Then("user verify item on the cart", 
async () => {
  await(await elements.viewCart).click();  
    const item = await $('div.item-cell')
    await expect(item).toBeExisting();
});

