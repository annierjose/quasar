import { Component, Vue } from 'vue-property-decorator'
import './code.component.css'

@Component({
  template: require('./code.component.html')
})
export default class CodeComponent extends Vue {
  public mounted () {
    console.log('mouned code.ts')
  }
}
