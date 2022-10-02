import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [Vue(), VueJsx(), Icons({ compiler: "vue3" })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
