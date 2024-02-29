const assert = require("assert");
import { expect } from "@playwright/test";
import { Page } from "@playwright/test";
export class AddtoCart {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickOnShopCollection(page) {
        await expect(page.getByRole('link', { name: 'Shop Collection' })).toBeVisible();
        await this.page.getByRole('link', { name: 'Shop Collection' }).click();
    }

    async clickOnFirstProduct(page) {
        await this.page.getByRole('button', { name: 'Hiking Fleece Jacket - MH520' }).click();
    }

    async verifyAddToBagTextIsVisible(page) {
        await this.page.waitForTimeout(2000)
        await expect(page.getByRole('button', { name: 'Add to bag' })).toBeVisible();
    }

    async clickOnAddToBagText(page) {
        await this.page.getByRole('button', { name: 'Add to bag' }).click();
    }

    async clickOnItemInCartButton(page) {
        await this.page.waitForTimeout(2000)
        await this.page.locator('//button[@id="headlessui-popover-button-:r0:"]').click();
    }

    async verifyTheSelectedItemInCart(page) {
        await this.page.waitForTimeout(2000)
        await expect(this.page.getByLabel('Top').getByRole('heading', { name: 'Hiking Fleece Jacket - Hood' })).toBeVisible();
    }

    async clickOnCheckoutButton(page) {
        await this.page.getByRole('link', { name: 'Checkout' }).click();
    }

    async verifyThePersonalInformationText(page) {
        await this.page.waitForTimeout(2000)
        await expect(this.page.getByRole('button', { name: 'Personal Information' })).toBeVisible();
    }

    async enterThePersonalInformationDetails(page) {
        await this.page.waitForTimeout(2000)
        await page.getByLabel('First Name').click();
        await page.getByLabel('First Name').press('Control+a');
        await page.getByLabel('First Name').fill('TestUser');
        await this.page.waitForTimeout(2000)
        await page.getByLabel('Last Name').click();
        await page.getByLabel('Last Name').press('Control+a');
        await page.getByLabel('Last Name').fill('TestUser1');
        await this.page.waitForTimeout(2000)
        await page.getByLabel('Phone Number').click();
        await page.getByLabel('Phone Number').press('Control+a');
        await page.getByLabel('Phone Number').fill('9098909890');
        await this.page.waitForTimeout(2000)
        await page.getByLabel('Email address').click();
        await page.getByLabel('Email address').press('Control+a');
        await this.page.waitForTimeout(2000)
        await page.getByLabel('Email address').fill('test1@yopmail.com');
    }

    async clickOnNextStepButton(page) {
        await this.page.waitForTimeout(5000)
        await page.getByRole('button', { name: 'Next Step' }).nth(0).click();
    }

    async enterTheAddressDetails(page) {
        await page.getByLabel('Address', { exact: true }).click();
        await page.getByLabel('Address', { exact: true }).press('Control+a');
        await page.getByLabel('Address', { exact: true }).fill('36 New Delhi');
        await page.getByLabel('City').click();
        await page.getByLabel('City').press('Control+a');
        await page.getByLabel('City').fill('Delhi');
        await page.getByLabel('State').click();
        await page.getByLabel('State').press('Control+a');
        await page.getByLabel('State').fill('Delhi');
        await page.getByLabel('Postal code').click();
        await page.getByLabel('Postal code').press('Control+a');
        await page.getByLabel('Postal code').fill('123434');
    }

    async selectTheHomeDeliveryAsShippingMethod(page) {
        await page.getByLabel('Home delivery').check();
    }

    async selectPickUpStoreDeliveryAsShippingMethod(page) {
        await page.getByLabel('Pick-up in store').check();
    }

    async selectTheCardAsPaymentMethod(page) {
        await page.waitForTimeout(1000)
        await page.getByLabel('Card').click();
    }

    async clickOnCompleteOrderButton(page) {
        await page.getByRole('link', { name: 'Complete Order' }).click();
    }

    async verifyTheCardHolderNameText(page) {
        await this.page.waitForTimeout(2000)
        await expect(page.frameLocator('#vault-card-form').getByText('Cardholder Name')).toBeVisible();
    }

    async enterTheCardHolderName(page) {
        await this.page.waitForTimeout(2000)
        await page.frameLocator('#vault-card-form').getByPlaceholder('Name').click();
        await page.frameLocator('#vault-card-form').getByPlaceholder('Name').fill('TestUser');
    }

    async verifyTheCardNumberText(page) {
        await this.page.waitForTimeout(2000)
        await expect(page.frameLocator('#vault-card-form').getByText('Card Number')).toBeVisible();
    }

    async enterTheCardNumberInfieldBox(page) {
        await this.page.waitForTimeout(2000)
        await page.frameLocator('#vault-card-form').getByPlaceholder('#### #### #### ####').click();
        await page.frameLocator('#vault-card-form').getByPlaceholder('#### #### #### ####').fill('4111 1111 1111 1111');
    }

    async verifyTheExpiryDateText(page) {
        await this.page.waitForTimeout(2000)
        await expect(page.frameLocator('#vault-card-form').getByText('Expiry Date')).toBeVisible();
    }

    async enterTheMonthAndYear(page) {
        await this.page.waitForTimeout(2000)
        await page.frameLocator('#vault-card-form').getByPlaceholder('MM').click();
        await page.frameLocator('#vault-card-form').getByPlaceholder('MM').fill('17');
        await page.frameLocator('#vault-card-form').getByPlaceholder('YY').click();
        await page.frameLocator('#vault-card-form').getByPlaceholder('YY').fill('25');
    }

    async enterTheCvvNumber(page) {
        await this.page.waitForTimeout(2000)
        await page.frameLocator('#vault-card-form').getByPlaceholder('***').click();
        await page.frameLocator('#vault-card-form').getByPlaceholder('***').fill('100');
    }

    async clickOnPayButton(page) {
        await page.locator('//button[@type="submit"]').click();
    }

    async selectCashOnDelivery(page) {
        await page.getByLabel('Cash On Delivery').click();
    }

    async validateTheThankyouMessageOnOrderSucessScreen(page) {
        await this.page.waitForTimeout(12000)
        await expect(page.getByRole('heading', { name: 'Thank you!' })).toBeVisible();
        await expect(page.getByText('It\'s on the way!')).toBeVisible();
    }

    async selectBankTransferPaymentMethod(page) {
        await page.getByLabel('Bank Transfer').click();
    }

    async verifyUserIsOnPayByBankPage(page) {
        await this.page.waitForTimeout(7000)
        await expect(page.frameLocator('iframe').getByTestId('checkout-heading')).toBeVisible();
        await expect(page.frameLocator('iframe').getByTestId('checkout-menu-paybybank')).toBeVisible();
    }

    async clickOnNedBankOptionFromTheList(page) {
        await page.frameLocator('iframe').getByTestId('checkout-nedbank-button').click();
    }


    async enterUserNameOnLoginPage(page) {
        await page.frameLocator('iframe').frameLocator('[data-testid="checkout-iframe"]').getByText('Username').click();
        await page.frameLocator('iframe').frameLocator('[data-testid="checkout-iframe"]').locator('input[name="username"]').click();
        await page.frameLocator('iframe').frameLocator('[data-testid="checkout-iframe"]').locator('input[name="username"]').fill('Test');
    }

    async enterPassWordOnLoginPage(page) {
        await page.frameLocator('iframe').frameLocator('[data-testid="checkout-iframe"]').getByText('Password').click();
        await page.frameLocator('iframe').frameLocator('[data-testid="checkout-iframe"]').locator('input[name="password"]').click();
        await page.frameLocator('iframe').frameLocator('[data-testid="checkout-iframe"]').locator('input[name="password"]').fill('Test@123');
        await page.frameLocator('iframe').frameLocator('[data-testid="checkout-iframe"]').locator('input[name="password"]').click();
        await this.page.waitForTimeout(5000)
    }

    async clickOnSignInButton(page) {
        await this.page.waitForTimeout(3000)
        await page.frameLocator('iframe').frameLocator('[data-testid="checkout-iframe"]').locator('input[name="password"]').press('Enter');
    }

    async verifySettingUpYourPaymentTextIsVisible(page) {
        await expect(page.frameLocator('iframe').frameLocator('[data-testid="checkout-iframe"]').getByText('Setting up your payment')).toBeVisible();
    }

    async clickOnPaidResponse(page) {
        await page.frameLocator('iframe').frameLocator('[data-testid="checkout-iframe"]').getByRole('button', { name: 'Paid Response' }).click();
    }

    async verifyPaymentSucessfullText(page) {
        await expect(page.frameLocator('iframe').frameLocator('[data-testid="checkout-iframe"]').getByText('Payment successful')).toBeVisible();
    }

    async clickOnFailedResponse(page) {
        await page.frameLocator('iframe').frameLocator('[data-testid="checkout-iframe"]').getByRole('button', { name: 'Failed Response' }).click();
    }

}
