import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import zipPack from "vite-plugin-zip-pack";
import {viteStaticCopy} from "vite-plugin-static-copy";
import { name, version } from "./package.json";

export default defineConfig({
 plugins: [
  react(),
  viteStaticCopy({
   targets: [{src: "./src/WidgetManisfest.xml", dest: "."}],
   hook: "writeBundle",
  }),
  zipPack({
   outDir: "./build",
   inDir: "dist",
   outFileName: `${name}-${version}.zip`,
  }),
 ],
 build: {
  lib: {
   entry: "./src/Index.tsx",
   formats: ["cjs"],
   fileName: () => `${name}-${version}.js`,
  },
  rollupOptions: {
   external: ["react", "react-dom"],
   output: {
    exports: "named",
   },
  },
 },
 define: {
  "process.env.NODE_ENV": JSON.stringify("production"),
 },
});
