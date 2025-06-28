import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.', // root of your project (where index.html is)
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
