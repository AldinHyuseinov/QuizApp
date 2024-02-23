import { test as it, expect } from "@playwright/test";

it("handles i18n routing", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL("/en");

  // A cookie remembers the last locale
  await page.goto("/bg");
  await page.goto("/");
  await expect(page).toHaveURL("/bg");
  await page.locator("select").selectOption({ value: "en" });

  await expect(page).toHaveURL("/en");
  page.getByRole("heading", { name: "Brainy | For the big brains!" });
});

it("handles not found pages", async ({ page }) => {
  await page.goto("/unknown");
  page.getByRole("heading", { name: "The page you're looking for can't be found." });

  await page.goto("/bg/unknown");
  page.getByRole("heading", { name: "Страницата която търсите не може да бъде открит" });
});

it("handles not found pages for routes that don't match the middleware", async ({ page }) => {
  await page.goto("/test.png");
  page.getByRole("heading", { name: "This page could not be found." });
  await page.goto("/api/hello");
  page.getByRole("heading", { name: "This page could not be found." });
});

it("can be used to configure metadata", async ({ page }) => {
  await page.goto("/en");
  await expect(page).toHaveTitle("Brainy | For the big brains!");

  await page.goto("/bg");
  await expect(page).toHaveTitle("Brainy | За Умници!");
});

it("can be used to localize the page", async ({ page }) => {
  await page.goto("/en");
  page.getByRole("heading", { name: "Brainy | For the big brains!" });

  await page.goto("/bg");
  page.getByRole("heading", { name: "Brainy | За Умници!" });
});

it("sets a cookie", async ({ page }) => {
  function getCookieValue() {
    return page.evaluate(() => document.cookie);
  }

  const response = await page.goto("/en");
  const value = await response?.headerValue("set-cookie");
  expect(value).toContain("NEXT_LOCALE=en;");
  expect(value).toContain("Path=/;");
  expect(value).toContain("SameSite=lax");
  expect(value).toContain("Max-Age=31536000;");
  expect(value).toContain("Expires=");
  expect(await getCookieValue()).toBe("NEXT_LOCALE=en");

  await page.locator("select").selectOption({ value: "bg" });
  await expect(page).toHaveURL("/bg");
  expect(await getCookieValue()).toBe("NEXT_LOCALE=bg");

  await page.locator("select").selectOption({ value: "en" });
  await expect(page).toHaveURL("/en");
  expect(await getCookieValue()).toBe("NEXT_LOCALE=en");

  await page.locator("select").selectOption({ value: "bg" });
  await expect(page).toHaveURL("/bg");
  expect(await getCookieValue()).toBe("NEXT_LOCALE=bg");
});
