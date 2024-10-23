import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const host = process.env.TAURI_DEV_HOST;

export default defineConfig(async () => ({
  plugins: [
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2,
          plugins: [
            { name: "removeTitle" },
            { name: "removeAttrs", params: { attrs: "(fill|stroke)" } },
          ],
        },
      },
    }),
    react(),
  ],
  build: {
    target: "esnext",
  },
  clearScreen: false,
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  esbuild: {
    target: "esnext", // Установите целевую версию на ESNext
  },
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    define: {
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify("http://localhost:8000"),
      __PROJECT__: JSON.stringify("frontend"),
    },
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
