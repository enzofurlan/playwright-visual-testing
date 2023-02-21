import { test, expect } from "@playwright/test";

test("1. Check Page", async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot();
});