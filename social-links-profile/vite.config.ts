import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import postcssNesting from "postcss-nesting";
import autoprefixer from "autoprefixer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@domains": path.resolve(__dirname, "./src/domains"),
    },
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
    postcss: {
      plugins: [postcssNesting, autoprefixer],
    },
  },
});
