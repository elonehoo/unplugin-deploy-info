import type { Options } from './types'
import unplugin from '.'
import { getInfoNuxtItem } from './utils'

export default function (options: Options, nuxt: any) {
  // install vite plugin
  nuxt.hook('vite:extendConfig', async (config: any) => {
    config.plugins = config.plugins || []
    config.plugins.push(unplugin.vite({ info: options.info }))
  })
  let printed = false
  nuxt.hook('vite:serverCreated', () => {
    if (printed) {
      return
    }
    else {
      for (const infoItem of options.info) {
        /* eslint-disable no-console */
        console.log(getInfoNuxtItem(infoItem))
      }
    }
    printed = true
  })
}
