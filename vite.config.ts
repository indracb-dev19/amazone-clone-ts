import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
