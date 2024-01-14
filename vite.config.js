import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // '@': './src'
      // vue: "vue/dist/vue.esm-bundler.js",
      // '@': path.resolve(__dirname, 'src')

      '@':path.resolve(__dirname,'src')
    }
  },
  server: {
    // hmr: {
    //   overlay: false
    // }
    hmr: true
  }
})
