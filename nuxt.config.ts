// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { resolve } from "node:path";

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", href: "/logo.svg" }],
      title: "ayocord",
    },
    pageTransition: { name: "page", mode: "in-out" },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["vuetify/styles", "~/global.css"],
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  srcDir: "./src",
  build: {
    transpile: ["vuetify"],
  },
  content: {
    defaultLocale: "./content",
    documentDriven: true,
    highlight: {
      theme: "github-dark",
    },
    markdown: {
      anchorLinks: false
    },
    sources: {
      content: {
        driver: "fs",
        prefix: "/docs",
        base: resolve(__dirname, "content"),
      },
    },
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@pinia/nuxt",
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
