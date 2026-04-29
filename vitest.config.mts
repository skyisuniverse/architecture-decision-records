// vitest.config.mts
import { defineConfig, configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    reporters: ['html'],

    // =====================================================================
    // EXCLUDE E2E TESTS + PRESERVE DEFAULTS (node_modules, dist, etc.)
    // =====================================================================
    exclude: [
      ...configDefaults.exclude,   // ← This is the important fix
      'e2e/**',                    // everything in e2e/ folder
      '**/*.e2e.{ts,tsx}',         // any .e2e test files
      '**/*.e2e.spec.{ts,tsx}',    // any .e2e.spec files
      '**/playwright/**',          // common Playwright folder
      '**/cypress/**',             // in case you ever add Cypress
    ],

    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ['text', 'html'],
    },

    alias: {
      'server-only': './__mocks__/server-only.ts',
    },
  },
})