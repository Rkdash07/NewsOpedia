import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Rely on root path in production unless a custom base is explicitly provided.
  base: process.env.VITE_BASE_PATH && process.env.VITE_BASE_PATH.trim().length > 0
    ? process.env.VITE_BASE_PATH
    : '/',
})
