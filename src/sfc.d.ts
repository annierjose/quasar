import * as Quasar from 'quasar'
import VueRouter from 'vue-router'
import VueGAPI from 'vue-gapi'

declare module "vue/types/vue" {
  interface Vue {
    $q: Quasar
    $router: VueRouter,
    $getGapiClient: VueGAPI
  }
}

declare const __THEME
