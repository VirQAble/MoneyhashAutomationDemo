const { test, expect } = require('@playwright/test');
import { AddtoCart } from "../pageRepository/Payment.common";
import { Page } from "@playwright/test";
let page: Page;
let addtoCart: AddtoCart;


test.beforeEach(async ({ page, browser }) => {
  await page.goto('https://decathlon.moneyhash.io/');
  addtoCart = new AddtoCart(page)
});

test('verify add to Cart functionality by Card Payment Method', async ({ page }) => {
  await addtoCart.clickOnShopCollection(page)
  await addtoCart.clickOnFirstProduct(page)
  await addtoCart.verifyAddToBagTextIsVisible(page)
  await addtoCart.clickOnAddToBagText(page)
  await addtoCart.clickOnItemInCartButton(page)
  await addtoCart.verifyTheSelectedItemInCart(page)
  await addtoCart.clickOnCheckoutButton(page)
  await addtoCart.verifyThePersonalInformationText(page)
  await addtoCart.enterThePersonalInformationDetails(page)
  await addtoCart.clickOnNextStepButton(page)
  await addtoCart.enterTheAddressDetails(page)
  await addtoCart.clickOnNextStepButton(page)
  await addtoCart.selectTheHomeDeliveryAsShippingMethod(page)
  await addtoCart.clickOnNextStepButton(page)
  await addtoCart.selectTheCardAsPaymentMethod(page)
  await addtoCart.clickOnCompleteOrderButton(page)
  await addtoCart.verifyTheCardHolderNameText(page)
  await addtoCart.enterTheCardHolderName(page)
  await addtoCart.verifyTheCardNumberText(page)
  await addtoCart.enterTheCardNumberInfieldBox(page)
  await addtoCart.verifyTheExpiryDateText(page)
  await addtoCart.enterTheMonthAndYear(page)
  await addtoCart.enterTheCvvNumber(page)
  await addtoCart.clickOnPayButton(page)
});

test('verify add to Cart functionality by Cash on delivery Payment Method', async ({ page }) => {
  await addtoCart.clickOnShopCollection(page)
  await addtoCart.clickOnFirstProduct(page)
  await addtoCart.verifyAddToBagTextIsVisible(page)
  await addtoCart.clickOnAddToBagText(page)
  await addtoCart.clickOnItemInCartButton(page)
  await addtoCart.verifyTheSelectedItemInCart(page)
  await addtoCart.clickOnCheckoutButton(page)
  await addtoCart.verifyThePersonalInformationText(page)
  await addtoCart.enterThePersonalInformationDetails(page)
  await addtoCart.clickOnNextStepButton(page)
  await addtoCart.enterTheAddressDetails(page)
  await addtoCart.clickOnNextStepButton(page)
  await addtoCart.selectTheHomeDeliveryAsShippingMethod(page)
  await addtoCart.clickOnNextStepButton(page)
  await addtoCart.selectCashOnDelivery(page)
  await addtoCart.clickOnCompleteOrderButton(page)
  await addtoCart.validateTheThankyouMessageOnOrderSucessScreen(page)
});

test('verify add to Cart functionality by Bank Transfer Payment Method', async ({ page }) => {
  await addtoCart.clickOnShopCollection(page)
  await addtoCart.clickOnFirstProduct(page)
  await addtoCart.verifyAddToBagTextIsVisible(page)
  await addtoCart.clickOnAddToBagText(page)
  await addtoCart.clickOnItemInCartButton(page)
  await addtoCart.verifyTheSelectedItemInCart(page)
  await addtoCart.clickOnCheckoutButton(page)
  await addtoCart.verifyThePersonalInformationText(page)
  await addtoCart.enterThePersonalInformationDetails(page)
  await addtoCart.clickOnNextStepButton(page)
  await addtoCart.enterTheAddressDetails(page)
  await addtoCart.clickOnNextStepButton(page)
  await addtoCart.selectTheHomeDeliveryAsShippingMethod(page)
  await addtoCart.clickOnNextStepButton(page)
  await addtoCart.selectBankTransferPaymentMethod(page)
  await addtoCart.clickOnCompleteOrderButton(page)
  await addtoCart.verifyUserIsOnPayByBankPage(page)
  await addtoCart.clickOnNedBankOptionFromTheList(page)
  await addtoCart.enterUserNameOnLoginPage(page)
  await addtoCart.enterPassWordOnLoginPage(page)
  await addtoCart.clickOnSignInButton(page)
  await addtoCart.verifySettingUpYourPaymentTextIsVisible(page)
  await addtoCart.clickOnPaidResponse(page)
  await addtoCart.verifyPaymentSucessfullText(page)
  await addtoCart.clickOnFailedResponse(page)
  await addtoCart.validateTheThankyouMessageOnOrderSucessScreen(page)
});

test('verify add to Cart functionality by PickUp store shipping Method', async ({ page }) => {
  await addtoCart.clickOnShopCollection(page)
  await addtoCart.clickOnFirstProduct(page)
  await addtoCart.verifyAddToBagTextIsVisible(page)
  await addtoCart.clickOnAddToBagText(page)
  await addtoCart.clickOnItemInCartButton(page)
  await addtoCart.verifyTheSelectedItemInCart(page)
  await addtoCart.clickOnCheckoutButton(page)
  await addtoCart.verifyThePersonalInformationText(page)
  await addtoCart.enterThePersonalInformationDetails(page)
  await addtoCart.clickOnNextStepButton(page)
  await addtoCart.enterTheAddressDetails(page)
  await addtoCart.clickOnNextStepButton(page)
  await addtoCart.selectPickUpStoreDeliveryAsShippingMethod(page)
  await addtoCart.clickOnNextStepButton(page)
  await addtoCart.selectCashOnDelivery(page)
  await addtoCart.clickOnCompleteOrderButton(page)
  await addtoCart.validateTheThankyouMessageOnOrderSucessScreen(page)
  
});