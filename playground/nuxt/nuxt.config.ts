// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['unplugin-deploy-info/nuxt', {
      info: [
        {
          name: 'Vite',
          message: 'https://vitejs.dev/',
        },
        {
          name: 'outline',
          message: 'Vue',
          messageStyle: {
            color: 'green',
          },
          isUrlMessage: false,
        },
      ],
    }],
  ],
  devtools: { enabled: false },
})
