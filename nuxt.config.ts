import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  srcDir: 'src',
  target: 'static',
  buildModules: [
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: '',
        preference: 'light',
        fallback: 'dark',
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'League+Spartan': true,
        },
        download: true,
      },
    ],
    [
      '@nuxtjs/tailwindcss',
      {
        cssPath: 'src/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
        exposeConfig: false,
        config: null,
        injectPosition: 0,
        viewer: true,
      },
    ],
  ],
  typescript: {
    strict: true,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en', style: 'font-family: League Spartan' },
      title: /*process.env.npm_package_name ||*/ 'Social Proof',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'Social Proof',
          content: 'Social Proof',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-32x32.png',
        },
      ],
    },
  },
});
