import { test, expect } from '@playwright/test';


test.describe('Checkout', () => {
    test('Add item to cart', async ({ page }) => {
        await page.goto('/index.php?route=product/category&path=25');
        await page.getByRole('link', {name: 'HTC Touch HD'}).first().click();
        await page.getByRole('button', { name: 'Add to Cart'}).click();
        await page.getByRole('button', { name: '1' }).click(); //pick locator
        // await page.locator('.cart-icon').nth(1).click();
            //await page.getByRole('button', { name: '1' })
    //await page.locator('.cart-icon').first().click();
        // await page.getByText(' Checkout').click(); - 2nd one appears for 5s after adding
        //await page.getByRole('button', { name: ' Checkout' })
            //await page.locator('a:has-text(" Checkout")').first().click();
        await page.locator(`#cart-total-drawer a.btn-secondary`).click();
        await page.getByPlaceholder('First Name').first().fill('Bill');
        await page.getByPlaceholder('Last Name').first().fill('Manchester');
        await page.getByPlaceholder('Address 1').first().fill('57 Cambridge Street');
        await page.getByPlaceholder('City').first().fill('Tolland');
        await page.getByPlaceholder('Post Code').first().fill('06084');
        //await page.getByPlaceholder('United Kingdom').selectOption('United States');
        await page.locator('#input-payment-country').selectOption('United States');
        //await page.getByPlaceholder('Lancashire').first().selectOption('Connecticut');
        await page.locator('#input-payment-zone').first().selectOption('Connecticut');
        //await page.locator('label.custom-control-label::after').click();
        await page.getByRole('button', { name: /Continue/ }).click();
       // await page.getByRole('button', { name: "Continue"}).click();//
    });
  
    test('two', async ({ page }) => {
      // ...
    });
  });