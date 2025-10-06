import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:'host_App',
      remotes: {
        remote_app: 'http://localhost:5001/assets/remoteEntry.js',
        kycRemote: 'http://localhost:5002/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom','@reduxjs/toolkit', 'react-redux'],
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
