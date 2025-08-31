import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.spec.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "json"],
      exclude: ["**/e2e/**", "**/node_modules/**", "**/.next/**"]
    }
  }
});
