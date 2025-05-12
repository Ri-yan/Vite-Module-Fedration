import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote2",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5003,
    strictPort: true,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  },
  preview: {
    port: 5003,
    strictPort: true,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import federation from '@originjs/vite-plugin-federation'

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'remote2',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './App': './src/App.jsx'
//       },
//       shared: ['react', 'react-dom'],
//       dev: true // ⚠️ enables dev mode support
//     })
//   ],
//   server: {
//     port: 5003,
//     cors: true,
//     headers: {
//       'Access-Control-Allow-Origin': '*'
//     }
//   }
// })
