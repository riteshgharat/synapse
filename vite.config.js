import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      manifest: {
        theme_color: "#ffffff",
        background_color: "#2EC6FE",
        icons: [
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "icon512_maskable.png",
            type: "image/png",
          },
          {
            purpose: "any",
            sizes: "512x512",
            src: "icon512_rounded.png",
            type: "image/png",
          },
        ],
        orientation: "any",
        display: "standalone",
        dir: "auto",
        lang: "en-US",
        name: "Synapse AI",
        short_name: "Synapse",
        start_url: "https://url/app/learning",
        scope: "https://url/app",
      },
      registerType: "autoUpdate", // Ensures the service worker automatically updates when a new version is available
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,svg}"],
      },
    }),
  ],
  server: {
    watch: {
      ignored: ["**/node_modules/**", "**/dist/**"],
    },
  },
});
