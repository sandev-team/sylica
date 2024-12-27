import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { peerDependencies } from "./package.json";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [["@swc/plugin-emotion", {}]],
      jsxImportSource: "@emotion/react",
      tsDecorators: true,
    }),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
      outDir: "./lib/types",
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "@sylica/sidebar",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
    },
    outDir: "./lib",
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
    ssrManifest: true, // Generates a manifest for server-side rendering.
  },
});
