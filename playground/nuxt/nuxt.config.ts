// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['unplugin-deploy-info/nuxt',{
      info:[
       { name:'Vite', message:'https://vitejs.dev/'}
      ]
    }]
  ],
  devtools: { enabled: false },
})
