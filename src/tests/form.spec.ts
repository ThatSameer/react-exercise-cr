import { expect, test } from "@playwright/test";

test.describe("Form validation tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
  });

  test("should show error for invalid 'keywords' input", async ({ page }) => {
    const keywordsField = page.locator('input[name="keywords"]');
    await keywordsField.fill("a");
    await keywordsField.blur();

    const errorMessage = page.locator(
      "text=Keywords must have at least 2 characters."
    );
    await expect(errorMessage).toBeVisible();

    await keywordsField.fill("a".repeat(51));
    await keywordsField.blur();
    const errorMessage2 = page.locator(
      "text=Keywords must have at most 50 characters."
    );
    await expect(errorMessage2).toBeVisible();
  });

  test("should show error for invalid 'yearStart' input", async ({ page }) => {
    const yearStartField = page.locator('input[name="yearStart"]');

    await yearStartField.fill("abcd");
    await yearStartField.blur();
    const validNumber = page.locator("text=Please enter a valid number.");
    await expect(validNumber).toBeVisible();

    await yearStartField.fill("1");
    await yearStartField.blur();
    const minYearError = page.locator("text=Year start must be after 1900.");
    await expect(minYearError).toBeVisible();

    const nextYear = new Date().getFullYear() + 1;
    await yearStartField.fill(nextYear.toString());
    await yearStartField.blur();
    const maxYearError = page.locator(
      "text=Year start must not be in the future."
    );
    await expect(maxYearError).toBeVisible();
  });

  test("should show error if 'mediaType' is not selected", async ({ page }) => {
    await page.click('button[type="submit"]');
    const mediaTypeError = page.locator("text=Please select a media type.");
    await expect(mediaTypeError).toBeVisible();
  });

  test("should submit form successfully with valid inputs", async ({
    page,
  }) => {
    await page.locator('input[name="keywords"]').fill("Valid Keywords");
    await page.locator('select[name="mediaType"]').selectOption("image");
    await page.locator('input[name="yearStart"]').fill("2000");

    await page.click('button[type="submit"]');

    const errorMessages = page.locator(".error-message");
    await expect(errorMessages).not.toBeVisible();
  });
});
