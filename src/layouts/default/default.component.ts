import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import './default.component.css'
// import IHttpService from '@/httpService/interface/http-interface-service'
// import { UserService } from '@/httpService/services/user.service'
import { Menu } from '@/layouts/default/menu'

import VueGAPI from 'vue-gapi'

const apiConfig = {
  apiKey: 'AIzaSyAC7DtltZlBWSa3SP0Y914_IcAA30AFGvw',
  clientId: '813252868868-l4c5tjs3e7dv15tb7cgg320qrf0gs8iv.apps.googleusercontent.com',
  discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  scope: 'https://www.googleapis.com/auth/spreadsheets'
  // see all available scopes here: https://developers.google.com/identity/protocols/googlescopest
}
Vue.use(VueGAPI, apiConfig)
@Component({
  template: require('./default.component.html')
})
export default class DefaultComponent extends Vue {
  public leftDrawerOpen: boolean = false
  public user: object = {}
  public menu: Menu = new Menu()

  public mounted () {
    console.log(this)
    this.leftDrawerOpen = this.$q.platform.is.desktop ? true : false
    /*let service: IHttpService = new UserService()
    service.get('1').then(value => {
      this.user = value
    }).catch()*/
  }
}
