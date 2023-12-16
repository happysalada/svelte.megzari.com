import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from "svelte-adapter-bun";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    sveltePreprocess({
      postcss: true,
    }),
    mdsvex({
      extensions: [".svx", ".md"],
      smartypants: {
        dashes: "oldschool",
      },
    }),
  ],
  kit: {
    adapter: adapter(),
  },
}

export default config
