import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  // 每個前面都會加上./（相對路徑，現在這個資料夾）
  base: './',
  plugins: [
    vue(),
    VueDevTools()
  ],
  resolve: {
    alias: {
      // 只要import出現@，就會預設指到src資料夾 （這樣打包才不會有問題）
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
