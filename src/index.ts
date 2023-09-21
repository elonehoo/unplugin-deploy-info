import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { getInfoViteItem } from './utils'

export default createUnplugin<Options>(options => ({
  name: 'unplugin-deploy-info',
  enforce: 'pre',
  vite: {
    configureServer(server) {
      const _printUrls = server.printUrls
      server.printUrls = () => {
        _printUrls()
        for (const infoItem of options.info)
          /* eslint-disable no-console */
          console.info(getInfoViteItem(infoItem))
      }
    },
  },
}))
