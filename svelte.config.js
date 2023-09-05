import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess'
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static'
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
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: adapter(),
  },
}

export default config
