import { test, expect } from "@playwright/test";

test.describe("List Component Tests", () => {
  test("should display 'No results found' if API returns no items", async ({
    page,
  }) => {
    await page.route("**/images-api.nasa.gov/search*", async (route) => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ collection: { items: [] } }),
      });
    });

    await page.goto(`/`);

    await page.locator('input[name="keywords"]').fill("Valid Keywords");
    await page.locator('select[name="mediaType"]').selectOption("image");
    await page.click('button[type="submit"]');

    const noResults = page.locator("text=No results found.");
    await expect(noResults).toBeVisible();
  });

  test("should render items correctly when API returns data", async ({
    page,
  }) => {
    await page.route("**/images-api.nasa.gov/search*", async (route) => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          collection: {
            items: [
              {
                links: [
                  { href: "http://example.com/image1.jpg", rel: "preview" },
                ],
                data: [
                  {
                    title: "Test Item 1",
                    description: "Description for Item 1",
                    media_type: "image",
                    nasa_id: "test1",
                  },
                ],
              },
            ],
          },
        }),
      });
    });

    await page.goto(`/`);

    await page.locator('input[name="keywords"]').fill("Test Item 1");
    await page.locator('select[name="mediaType"]').selectOption("image");
    await page.click('button[type="submit"]');

    await page.getByAltText("Test Item 1").isVisible();

    const image = page.locator('img[src="http://example.com/image1.jpg"]');
    await expect(image).toBeVisible();
  });
});
