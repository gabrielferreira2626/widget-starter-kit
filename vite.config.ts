import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
 plugins: [react()],
 build: {
  lib: {
   entry: "./src/Index.tsx",
   formats: ["cjs"],
   fileName: () => "Widget.js",
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
