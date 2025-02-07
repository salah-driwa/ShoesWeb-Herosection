import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  assetsInclude: ['**/*.riv'], // This tells Vite to treat .riv files as assets
  plugins: [
    react(),
    Pages(),
  ],
});
