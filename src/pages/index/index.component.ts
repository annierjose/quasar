import { Component, Vue } from 'vue-property-decorator'
import './index.component.css'
import GoogleLoginComponent from '@/components/googleLogin/google-login.component'

@Component({
  template: require('./index.component.html'),
  components: {
    googleLogin: GoogleLoginComponent
  }
})
export default class IndexComponent extends Vue {
  public mounted () {
    console.log('mouned index.ts')
  }
}
