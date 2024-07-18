
import { test, expect } from '@playwright/test';
//const { Details } = require('../pageObject/playwrightpage.ts');

test('has title', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");


    await page.getByPlaceholder("Username").fill('Admin');
    await page.getByPlaceholder("Password").fill('admin123');
    await page.locator("[type='submit']").click();
    await page.getByRole('navigation').getByRole('link', { name: 'Admin' }).click();
    const xpath = "//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/div[1]";
    await page.locator(xpath).click();
    await page.waitForTimeout(1000);
    //   const vali ="//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/div[2]/i";
    await page.locator("(//*[contains(text(),'Admin')])[1]").click();
    const xpath1="//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[4]/div/div[2]/div/div/div[1]";
    await page.locator(xpath1).click();
    await page.locator("(//*[contains(text(),'Enabled')])[1]").click();
    await page.pause();
});


