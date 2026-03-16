import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined

          if (id.includes('@react-three')) return 'vendor-r3f'
          if (id.includes('@react-spring')) return 'vendor-r3f'
          if (id.includes('/node_modules/three/examples/')) return 'vendor-three-extras'
          if (id.includes('/node_modules/three/')) return 'vendor-three'
          if (id.includes('react-github-calendar')) return 'vendor-github'
          if (id.includes('framer-motion')) return 'vendor-motion'

          return undefined
        },
      },
    },
  },
})
