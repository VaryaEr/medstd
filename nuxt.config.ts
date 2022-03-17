import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        analyze: true,
        transpile: ['vuetify']
    },
    vite: {
        define: {
            'process.env.DEBUG': 'false',
        },
        configFile: false
    },
    modules: ["@nuxtjs/axios"],
    axios: {
        proxyHeaders: false,
    },
    plugins: [
        '~/plugins/axios'
    ]
})
