import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/My-Portfolio-/',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  build: {
    rollupOptions: {
      // Ensure Rollup resolves files with extensions
      external: [],
    },
  },
})
