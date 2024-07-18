
const { test, expect } = require('@playwright/test');

test('Automation Demo Site', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  
  await page.locator("//*[@id='basicBootstrapForm']/div[1]/div[1]/input").fill('vali')
  await page.locator("//*[@id='basicBootstrapForm']/div[1]/div[2]/input").fill('bhai')
  await page.locator("//*[@id='basicBootstrapForm']/div[2]/div/textarea").fill("fulladdress")
  await page.locator("//*[@id='eid']/input").fill("valishashagmail.com")
  await page.locator("//*[@id='basicBootstrapForm']/div[4]/div/input").fill("9884664646")
  await page.locator("//*[@id='basicBootstrapForm']/div[5]/div/label[1]/input").click()
  await page.locator("//*[@id='basicBootstrapForm']/div[5]/div/label[2]/input").click()
  await page.locator("//*[@id='checkbox1']").click()
  await page.locator("//*[@id='checkbox2']").click()
  await page.locator("//*[@id='checkbox3']").click()
  await page.locator("//*[@id='firstpassword']").fill("12345")
  await page.locator("//*[@id='secondpassword']").fill('12345')
  await page.locator("//*[@id='submitbtn']").click()
  await page.pause();

});


