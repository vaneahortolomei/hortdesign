export default defineNuxtConfig({
  devtools: { enabled: true },
  mode: 'universal',
  target: 'server',
  head: {
    title: 'Main',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0,' },
      { hid: 'Portfolio', name: 'Portfolio', content: 'Portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    ],
  },
  css: [
    '~/src/styles/index.scss'
  ],
})
