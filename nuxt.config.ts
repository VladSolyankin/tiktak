// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/image"
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  googleFonts: {
    families: {
      Manrope: [400, 500, 600, 700],
      Nunito: [700],
    },
  },
});