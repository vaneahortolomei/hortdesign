export default defineNuxtConfig({
  devtools: { enabled: true },
  mode: 'universal',
  target: 'server',
  head: {
    title: 'HortDesign',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0,' },
      { hid: 'Portfolio', name: 'Portfolio', content: 'Portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  css: [
    '~/src/styles/index.scss'
  ],
})
