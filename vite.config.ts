import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

import react from "@vitejs/plugin-react";

const baseUrl = "./src";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        outDir: "./build/",
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/variables.scss";`,
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@atoms": path.resolve(__dirname, baseUrl, "components", "atoms"),
            "@molecules": path.resolve(__dirname, baseUrl, "components", "molecules"),
            "@organisms": path.resolve(__dirname, baseUrl, "components", "organisms"),
            "@pages": path.resolve(__dirname, baseUrl, "components", "pages"),
            "@templates": path.resolve(__dirname, baseUrl, "components", "templates"),
            "@store": path.resolve(__dirname, baseUrl, "store"),
            "@constants": path.resolve(__dirname, baseUrl, "constants"),
            "@routes": path.resolve(__dirname, baseUrl, "routes"),
            "@assets": path.resolve(__dirname, baseUrl, "assets"),
            "@images": path.resolve(__dirname, baseUrl, "assets", "images"),
            "@schemas": path.resolve(__dirname, baseUrl, "schemas"),
            "@styles": path.resolve(__dirname, baseUrl, "styles"),
            "@utils": path.resolve(__dirname, baseUrl, "utils"),
            "@services": path.resolve(__dirname, baseUrl, "services"),
            "@hooks": path.resolve(__dirname, baseUrl, "hooks"),
            "@config": path.resolve(__dirname, baseUrl, "config"),
        },
    },

    plugins: [react(), eslint()],
});
