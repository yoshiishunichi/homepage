export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      {
        name: 'google-site-verification',
        content: '72_8kEVqtgSdj2G0UgnwYwKRRlkkd25cDQbd8zH29Ro',
      },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ganja_tuber(yoshii shunichi)のホームページです。',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@ganja_tuber' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'ganja_tuber(yoshii shunichi)のホームページです。',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://ganja-tuber.netlify.app/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ganja_tuberのホームページ',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://ganja-tuber.netlify.app/images/twitter-image.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    titleTemplate: '%s | ganja_tuberホームページ',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/styles.scss', lang: 'scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-fontawesome',
    'nuxt-webfontloader',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },

  webfontloader: {
    google: {
      families: ['Asap:600'],
    },
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://ganja-tuber.netlify.app',
    exclude: ['/errors/404'],
    // eslint-disable-next-line require-await
    routes: async () => {
      const array = [
        {
          // トップページ
          url: '/',
          changefreq: 'daily',
          priority: 1,
          lastmod: new Date(),
        },
        {
          // Products
          url: '/Products',
          changefreq: 'daily',
          priority: 1,
          lastmod: new Date(),
        },
        {
          // Biography
          url: '/Biography',
          changefreq: 'daily',
          priority: 1,
          lastmod: new Date(),
        },
        {
          // News
          url: '/News',
          changefreq: 'daily',
          priority: 1,
          lastmod: new Date(),
        },
      ]
      return array
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/errors/404.vue'),
      })
    },
  },
  loadingIndicator: {
    name: 'cube-grid',
    color: 'white',
    background: 'rgb(11, 82, 153)',
  },
}
