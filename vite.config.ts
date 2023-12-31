/// <reference types="vitest" />

import path from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Unocss from 'unocss/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import { configDefaults } from 'vitest/config'
import { defineConfig } from 'vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import progress from 'vite-plugin-progress'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    VueDevTools(),
    VueRouter({
      routesFolder: 'src/pages',
      extensions: ['.vue'],
      exclude: [],
      dts: './typed-router.d.ts',
      // getRouteName: (routeNode) => myOwnGenerateRouteName(routeNode),
      routeBlockLang: 'json5',
      importMode: 'async',
    }),
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],

      imports: ['vue', VueRouterAutoImports, 'vue/macros', 'vitest'],

      dirs: [],

      dts: './auto-imports.d.ts',

      vueTemplate: true,

      resolvers: [],

      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    Components({
      dts: true,
    }),
    Layouts(),
    // see unocss.config.ts for config
    Unocss(),
    progress(),
  ],
  test: {
    coverage: {
      provider: 'istanbul',
    },
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    globals: true,
  },
})
