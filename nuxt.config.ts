// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  content: {
    markdown: {
      mdc: true,
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css",
      },
    },
    highlight: {
      theme: "github-dark",
      preload: ["js"],
    },
  },
});
