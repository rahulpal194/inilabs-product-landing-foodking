// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools:{enabled:false},
  css: [
    '@/assets/styles/tailwind.css',
    '@/assets/styles/custom.css',
    '@/assets/fonts/plus-jakarta-sans.css',
    '@/assets/icon/iconly.css'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxt/image', 'nuxt-swiper', '@pinia/nuxt'],
})