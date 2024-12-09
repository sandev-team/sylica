/// <reference types="vitest" />
import { defineConfig } from "vite";

// plugins
import dts from "vite-plugin-dts";

// environment config
import { peerDependencies } from "./package.json";
import path from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

// Linaria plugin for Vite
import linaria from "@linaria/vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-macros", "@babel/plugin-syntax-flow"],
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
          "@babel/preset-flow",
          [
            "@linaria/babel-preset",
            {
              evaluate: true,
              shaker: "@linaria/shaker",
            },
          ],
        ],
      },
    }),
    linaria(),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "SylicaUI",
      fileName: (format) => `sylica-ui.${format}.js`,
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
