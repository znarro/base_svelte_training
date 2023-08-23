import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import sveltePreprocess from "svelte-preprocess";

const root = resolve(__dirname, "src/client");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        scss: {
          // Para que los componentes accedan a las variables SASS
          prependData: `@import 'src/client/styles/abstracts/_variables.scss';`,
        },
      }),
      inspector: true,
      onwarn: (warning, handler) => {
        const { code } = warning;
        // Omite los warning por clases no utilizadas (sucede mucho con Material)
        if (code === "css-unused-selector") return;
        handler(warning);
      },
    }),
  ],
  root,
  appType: "mpa",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        example: resolve(root, "layouts/example.html"),
      },
    },
  },
  resolve: {
    alias: {
      $lib: resolve("src/client/lib"),
      $locales: resolve("config/locales"),
      $helpers: resolve("helpers"),
    },
  },
});
