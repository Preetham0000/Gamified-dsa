import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,  // This makes `expect` available globally
    environment: 'jsdom',  // This simulates the browser environment
    // setupFiles: './test/setup.ts',  // If you have any setup files
  },
});
