import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages: https://paleteriadeyellow-tech.github.io/livecoins.net/
  // Dominio propio: build sin GITHUB_PAGES (base '/').
  base: process.env.GITHUB_PAGES === 'true' ? '/livecoins.net/' : '/',
});
