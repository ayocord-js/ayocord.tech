// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { resolve } from "node:path";

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", href: "/logo.svg" }],
      title: "ayocord",
      meta: [
        {
          name: "description",
          content:
            "Ayocord is a Discord.js framework based on decorators and typescript",
        },
        { property: "og:title", content: "Ayocord" },
        {
          property: "og:description",
          content:
            "Ayocord is a Discord.js framework based on decorators and typescript",
        },
        {
          name: "keywords",
          content:
            "ayocord, айокорд, библиотека для дискорд, js, ts, тайпскрипт, джаваскрипт, жабаскрипт, discord, discord.js, framework, фреймворк, дискорд джс, discord.ts, tsx, jsx, react, vue, angular, next, nuxt, css, scss, c++, one piece, hunterxhuntex, гайд, guide, community, комьюнити, developer, девелопер, программирование, programing, language, язык, programmer, програмист",
        },
        { property: "og:image", content: "https://www.ayocord.tech/logo.svg" },
        { property: "og:url", content: "https://www.ayocord.tech/" },
        { property: "og:type", content: "website" },
        { name: "twitter:title", content: "Ayocord" },
        {
          name: "twitter:description",
          content:
            "Ayocord is a Discord.js framework based on decorators and typescript",
        },
        {
          name: "twitter:image",
          content: "https://www.ayocord.tech/logo.svg",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["vuetify/styles", "~/global.css"],
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  srcDir: "./src",
  build: {
    transpile: ["vuetify"],
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
    markdown: {
      anchorLinks: false,
    },
    sources: {
      content: {
        driver: "fs",
        prefix: "/docs/",
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
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
