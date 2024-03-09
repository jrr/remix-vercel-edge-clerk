import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vercelPreset } from "@vercel/remix/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

installGlobals();

export default defineConfig({
  ssr: { noExternal: ["@clerk/remix"] },
  plugins: [
    remix({ presets: [vercelPreset()] }),

    tsconfigPaths(),
    nodePolyfills({
      include: ["crypto"],
      globals: { global: true },
      protocolImports: true,
    }),
  ],
});
