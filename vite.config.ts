import {
    defineConfig 
} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
    ElementPlusResolver 
} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/info-web/' : './',
    server: {
        proxy: {
            '/detectLang': {
                target: 'https://ws.detectlanguage.com',
                changeOrigin: true,
                rewrite: (path) => {
                    return path.replace(/^\/detectLang/, '')
                }
            },
        }
    },
    plugins: [
        vue(),
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        })
    ],
    resolve: {
        alias:
        [
            {
                find: 'vue-i18n',
                replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
            },
            {
                find: '@',
                replacement: path.join(__dirname, './src')
            }
        ]
    },
    build: {
        rollupOptions: {
            external: [
                path.resolve(__dirname, './src/**/*.**.test.ts')
            ]
        }
    }
})
