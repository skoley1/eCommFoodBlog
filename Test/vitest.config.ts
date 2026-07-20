import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setup.ts'],
  },
  resolve: {
    alias: {
      // Force all React imports (from FoodBlog source AND test deps) to the
      // single copy installed in Test/node_modules, avoiding the dual-React
      // "Invalid hook call" error.
      'react': resolve(__dirname, 'node_modules/react'),
      'react-dom': resolve(__dirname, 'node_modules/react-dom'),
      'react-dom/client': resolve(__dirname, 'node_modules/react-dom/client'),
      'react-router-dom': resolve(__dirname, 'node_modules/react-router-dom'),
    },
  },
});
