import { sveltekit, type UserConfig } from '@sveltejs/kit/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// import nodePolyfills from 'vite-plugin-node-stdlib-browser';
// import { isoImport } from 'vite-plugin-iso-import';

const config: UserConfig = {
  plugins: [
    // isoImport(),
    // nodePolyfills(),
    sveltekit(),
    ViteImageOptimizer({})]
};

export default config;
