// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: "@my-org/nuxt-layer-hello-world",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/test-utils"],
});
