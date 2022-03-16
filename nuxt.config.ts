import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    Vite: false,
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify']
    },
    vite: {
        define: {
            'process.env.DEBUG': 'false',
        }
    },
    modules: ["@nuxtjs/axios"],
    axios: {
        proxyHeaders: false,
    },
    buildModules: [
        '@nuxt/typescript-build',
    ],
})
