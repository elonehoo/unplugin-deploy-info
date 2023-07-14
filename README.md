# unplugin-deploy-info

> print some help info like vite builtin

## Install

```bash
npm i -D unplugin-deploy-info
```


<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import DeployInfo from 'unplugin-deploy-info/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    DeployInfo({
      /* options */
    })
  ],
})
```

Example: [`playground/vite`](./playground/vite)

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    ['unplugin-deploy-info/nuxt',{
      /* options */
    }]
  ]
})

```

Example: [`playground/nuxt`](./playground/nuxt)

<br></details>

## License
MIT License © 2023 [Elone Hoo](https://github.com/elonehoo)
