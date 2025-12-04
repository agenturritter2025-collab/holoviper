import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Verhindert, dass der Build bei kleinen TypeScript-Warnungen abbricht
    sourcemap: false,
  }
})