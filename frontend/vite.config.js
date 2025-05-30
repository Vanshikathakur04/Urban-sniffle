import { defineConfig } from 'vite'
import tailwindss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
      },
    },
  },
})
