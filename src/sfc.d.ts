import * as Quasar from 'quasar'
import VueRouter from 'vue-router'

declare module "vue/types/vue" {
  interface Vue {
    $q: Quasar
    $router: VueRouter
  }
}

declare const __THEME
