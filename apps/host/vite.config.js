import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "../../", "");

  return {
    plugins: [
      react(),
      federation({
        name: "host",
        remotes: {
          remote1: {
            external: false?"http://localhost:5001/remoteEntry.js":env.VITE_REMOTE1_URL,
            format: "esm",
            from: "vite",
          },
          remote2:{
            external: false?"http://localhost:5002/remoteEntry.js":env.VITE_REMOTE2_URL,
            format: "esm",
            from: "vite",
          }
        },
        shared: ["react", "react-dom", "react-router-dom"],
        dev: true,
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
    server: {
      port: 5000,
      strictPort: true,
      cors: true,
      hmr: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "*",
      },
    },
    preview: {
      port: 5000,
      strictPort: true,
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "*",
      },
    },
  };
});
