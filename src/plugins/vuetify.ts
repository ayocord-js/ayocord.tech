// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";


import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    directives,
    components,
    defaults: {
      global: {
        body: false,
      },
    },
    theme: {
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            background: "#161616",

            text: "#E2DFDF",

            surface: "#333333",
            primary: "#66C0FF",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
