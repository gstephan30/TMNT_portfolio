import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    host: 'localhost'
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});