import { defineConfig } from 'vite';

export default defineConfig({
  base: '/alasas0/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    target: 'es2019',
  },
});

