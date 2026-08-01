import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Raíz del dominio (livecoins.net). No usar subcarpeta /proyecto-mari/ en producción.
  base: '/',
});
