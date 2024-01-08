import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  base: '/', // set folder where it'll be deployed (eg. /weather-app/ for gh pages project)
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },
  plugins: [ViteImageOptimizer({})],
});
