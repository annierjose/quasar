import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import './default.component.css'
import { openURL } from 'quasar'
// import IHttpService from '@/httpService/interface/http-interface-service'
// import { UserService } from '@/httpService/services/user.service'
import { Menu } from '@/layouts/default/menu'

@Component({
  template: require('./default.component.html')
})
export default class DefaultComponent extends Vue {
  public leftDrawerOpen: boolean = false
  public openURL = openURL
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
