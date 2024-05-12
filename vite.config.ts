import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';


const manifestForPlugin: Partial<any> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Music App",
    short_name: "Music App",
    description: "Music screeaming platform",
    icons: [
      {
        src: "./src/assets/icons/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./src/assets/icons/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "./src/assets/icons/logo.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "./src/assets/icons/logo.png",
        sizes: "225x225",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
  theme_color: "#171717",
  background_color: "#e8ebf2",
  display: "standalone",
  scope: "/",
  start_url: "/",
  orientation: "portrait",
};


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
})
