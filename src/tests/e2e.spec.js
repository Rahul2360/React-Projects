const { test, expect } = require('@playwright/test');

const URL = "http://localhost:3000/"

test("only valid email adddress can be submitted" , async () => {
    await page.goto(URL);

    // const submitButton = page.locator("button[type='submit']");
    const submitButton = page.locator("text=Submit");
    
    await page.fill('#email', 'test@gmail.com');
    await expect(submitButton).toBeDisabled();

})