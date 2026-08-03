import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Dominio custom https://livecoins.net → base en raíz.
  // No usar /livecoins.net/ o los assets fallan en el dominio propio.
  base: '/',
});
