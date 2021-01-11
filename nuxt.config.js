export default {
  buildModules: [
    '@nuxtjs/eslint-module'
  ],

    /*
    ** Headers of the page
    */
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
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'}
}

