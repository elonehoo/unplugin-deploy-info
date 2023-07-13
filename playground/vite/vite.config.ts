import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DeployInfo from 'unplugin-deploy-info/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DeployInfo({
      info:[
        {
          name:'Vite',
          message:'https://vitejs.dev/'
        },
        {
          name:'outline',
          message:'Vue',
          messageStyle:{
            color:'green'
          },
          isUrlMessage: false
        }
      ]
    })
  ],
})
