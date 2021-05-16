export default {
  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  modules:[
    [ 'nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebook', 'faTwitter', 'faInstagram']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faGlobe']
        }
      ]
    }
    ]
  ],
  // Disable loading
  loading: false,

  // Disbale prefetch
  router: {
    prefetchLinks: false
  },

  // Enable to create static files
  // Options are 'server' or 'static'
  target: 'static',

  // Headers of the page
  head: {
    title: 'Watermelon',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Watermelon est une association de loi 1901 qui réalise vos projets de la partie préproduction à la partie post-production.'
      },
      {hid: 'keyword', name: 'keyword', content: 'AUDIOVISUEL, PRODUCTION, REALISATION, ASSOCIATION'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', type: 'text/css', media: 'screen', href: '/default.css'}
    ]
  }
}

