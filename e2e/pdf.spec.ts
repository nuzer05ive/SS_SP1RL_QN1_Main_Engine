import { test, expect } from "@playwright/test";

test("PDF endpoint returns a non-empty PDF", async ({ request }) => {
  const res = await request.get("/api/pdf?by=CI");
  expect(res.ok()).toBeTruthy();
  expect(res.headers()["content-type"]).toContain("application/pdf");
  const buf = await res.body();
  expect(buf.byteLength).toBeGreaterThan(30 * 1024); // > 30KB
});
