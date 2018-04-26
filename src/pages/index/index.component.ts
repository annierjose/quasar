import { Component, Vue } from 'vue-property-decorator'
import './index.component.css'

@Component({
  template: require('./index.component.html')
})
export default class IndexComponent extends Vue {
  public mounted () {
    console.log('mouned index.ts')
  }
}
