import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

//app.use(VueQueryPlugin)
VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        gcTime: 1000 * 60 * 10, // 10 minutes
        /* Object literal may only specify known properties, and 'cacheTime' does not exist in type 'OmitKeyof<QueryObserverOptions<unknown, Error, unknown, unknown, readonly unknown[], never>, "queryKey"> & ShallowOption'.ts(2353)
⚠ Error (TS2353)  |  |  | 

Object literal may only specify known properties, and cacheTime does not exist in type:
.
(property) cacheTime: number */
        refetchOnReconnect: 'always'
      }
    }
  }
}) // Use the install method to register the plugin
app.use(router)

app.mount('#app')
