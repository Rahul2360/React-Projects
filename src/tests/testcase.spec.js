const { test, expect } = require('@playwright/test');

const URL = "http://localhost:3000/"
const mockDataUrl = "https://reqres.in/api/users";

test.describe("Test cases", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Add user button should be enabled", async ({ page }) => {
    const addUserButton = page.locator("#addUser");
    await expect(addUserButton).toBeEnabled();
  })

  test("Current Theme should be light", async ({ page }) => {
    const app = page.locator("#app");
    await expect(app).toHaveClass('App light-theme');
  })

  test("Theme change to dark", async ({ page }) => {
    const app = page.locator("#app");
    const toggleThemeButton = page.locator("#toggleTheme");
    await toggleThemeButton.click();
    await expect(app).toHaveClass('App dark-theme');
  })

  test("Show create user form", async ({ page }) => {
    const addUserModal = page.locator("#addUserModal");
    const addUserButton = page.locator("#addUser");
    await addUserButton.click();
    await expect(addUserModal).toBeVisible();
  })

  test("Hide create user form", async ({ page }) => {    
    const addUserButton = page.locator("#addUser");
    await addUserButton.click();
    const closeModalButton = page.locator("#addUserModal > div > div.modal-header > button");
    await closeModalButton.click();
    const addUserModal = page.locator("#addUserModal");
    await expect(addUserModal).toBeHidden();
  })

  test("Get User Details using API", async ({ request }) => {
    const getRequest = await request.get(`${mockDataUrl}`);
    expect(getRequest.ok()).toBeTruthy()
    expect(getRequest.status()).toBe(200)
    expect(await getRequest.json()).toHaveProperty("data")
  })

  test("Button will be disbaled after submit", async ({ page }) => {
    const addUserButton = page.locator("#addUser");
    await addUserButton.click();

    const firstNameInput = page.locator("#firstName");
    const lastNameInput = page.locator("#lastName");
    const emailInput = page.locator("#email");

    await firstNameInput.fill("Test1");
    await lastNameInput.fill("last");
    await emailInput.fill("test1@last.com");

    const saveUserDetailsButton = page.locator("#saveUserDetails");
    await saveUserDetailsButton.click();
    await expect(saveUserDetailsButton).toBeDisabled();
  })

  test("Post User Details", async ({ request }) => {
    const postRequest = await request.post(`${mockDataUrl}`, {
      first_name: "Test2",
      last_name: "last",
      email: "test2@last.com",
    });
    expect(postRequest.ok()).toBeTruthy()
    expect(postRequest.status()).toBe(201)
    expect(await postRequest.json()).toHaveProperty("id")
  })
});