import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Builds to static files for GitHub Pages on the custom domain (served at root).
export default defineConfig({
  plugins: [react()],
  base: '/',
})
