import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import handlebars from 'vite-plugin-handlebars';                       // Template-Engine fuer statische Seiten
import { fileURLToPath } from 'url';
import path from 'path';
import { routeContent } from './src/page-content/landing.js';          // Content fuer statische Seiten

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = {
  'index': path.resolve(__dirname, 'index.html'),                      // Home
  'about': path.resolve(__dirname, 'about.html'),                      // About
  'de/index': path.resolve(__dirname, 'de/index.html'),                // Sprache /de/
  'en/index': path.resolve(__dirname, 'en/index.html'),                // Sprache /en/  
};

export default defineConfig({
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: path.resolve(__dirname, 'src/page-template'),  // Template fuer Landing
      context(pagePath) {
        const normalizedPath = pagePath.replace(/^\//, '');            // Routes.js anwenden
        return routeContent.find(r => r.path === normalizedPath) || {};
      }
    })
  ],
  base: './', 
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    copyPublicDir: true,
    rollupOptions: {
      input: input,                                                    // Mapping Input-Files
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  }
});