import { test, expect } from "@playwright/test";

test("RH page renders math and controls", async ({ page }) => {
  await page.goto("/docs/rh");
  await expect(page.getByRole("heading", { name: /Tri-Axis Toroidal/i })).toBeVisible();
  // KaTeX renders as .katex class
  await expect(page.locator(".katex").first()).toBeVisible();
  // progress caption present
  await expect(page.getByText(/Riimemory rebooting/i)).toBeVisible();
});
