import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        analyze: true,
        transpile: ['vuetify']
    },
    vite: {
        configFile: false
    },
    modules: ["@nuxtjs/axios"],
    axios: {
        proxyHeaders: false,
    },
})
