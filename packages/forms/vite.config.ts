import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { peerDependencies } from "./package.json";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [["@swc/plugin-emotion", {}]],
    }),
    dts({
      insertTypesEntry: true,
    }),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "SylicaUI",
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
