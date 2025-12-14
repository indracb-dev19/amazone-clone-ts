import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api' : {
        target : 'http://localhost:3000'
      },
      '/images' : {
        target : 'http://localhost:3000'
      },
    }
  }
})

/* 
this will be note 

setting server proxy, so any uri that contain "/api" will target "http://localhost:3000"

*/
