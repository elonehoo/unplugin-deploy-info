// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    ['unplugin-deploy-info/nuxt',{
      info:[
       { name:'Vite', message:'https://vitejs.dev/'}
      ]
    }]
  ],

})
