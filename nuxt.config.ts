// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  extends: [
    './layers/base',
    './layers/feature',
    './layers/navigation',
    './layers/products',
    './layers/cart',
    './layers/account'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ]
})