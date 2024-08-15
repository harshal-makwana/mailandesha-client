import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createProxyMiddleware } from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Set the limit to 1000 kB or higher
},
  plugins: [react()],
   server: {
    proxy: {
      '/api': {
        target: 'https://mailandesha.onrender.com', // Backend server URL
        changeOrigin: true,       
      },
    },
  },
})
