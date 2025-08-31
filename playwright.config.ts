import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "e2e",
  use: { headless: true, baseURL: "http://localhost:3000", actionTimeout: 15000 },
  reporter: [["list"]],
  timeout: 30000,
});
