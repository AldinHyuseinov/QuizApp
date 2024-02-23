import { test as it, expect } from "@playwright/test";

it("changes theme", async ({ page }) => {
  await page.goto("/");

  await page.locator("li button").click();

  expect(await page.locator("html").evaluate((element) => element.className)).toBe("dark");
});

it("changes button icon when theme changes", async ({ page }) => {
  await page.goto("/");

  await page.locator("li button").click();

  expect(
    // @ts-expect-error
    await page.getByAltText("Icon for toggling theme").evaluate((element) => element.src)
  ).toContain("moon");
});

it("changes button position when clicked", async ({ page }) => {
  await page.goto("/");

  const themeSwitcher = page.locator("li button");
  await themeSwitcher.click();

  expect(await themeSwitcher.evaluate((element) => element.className)).toBe(
    "flex items-center justify-center w-6 h-6 text-dark bg-white rounded-full transform translate-x-6 transition-transform duration-500 ease-in-out"
  );
});
