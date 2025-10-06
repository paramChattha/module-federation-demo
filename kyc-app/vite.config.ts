import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "kycRemote",
      filename: "remoteEntry.js",
      exposes: {
        "./KycApp": "./src/KycApp",
        "./store":"./src/store"
      },
      shared: ["react", "react-dom",'@reduxjs/toolkit', 'react-redux'],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    port: 5002,
    strictPort: true,
    cors: true,
  },
});