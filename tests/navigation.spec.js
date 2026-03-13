import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("navigates to the home page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL("http://localhost:5500");
  });

  test("waits for the venue list to load", async ({ page }) => {
    await page.goto("/");
    const venueList = page.locator("#venue-container");
    await expect(venueList).toBeVisible();
  });

  test("clicks the first venue and page loads with 'Venue details' in the heading", async ({
    page,
  }) => {
    await page.goto("/");
    await page.locator("#venue-container a").first().click();
    const heading = page.locator("h1");
    await expect(heading).toContainText("Venue details");
  });
});
