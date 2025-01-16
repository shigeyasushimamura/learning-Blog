import { defineConfig } from "vitest/config";

export default defineConfig({
  // your regular Vite config here
  plugins: [],
  // ... other Vite options

  // Vitest config
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
  },
});
