import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("navigates to the home page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL("http://localhost:5500");
  });
});
