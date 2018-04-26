import { Component, Vue } from 'vue-property-decorator'
import './school.component.css'

@Component({
  template: require('./school.component.html')
})
export default class SchoolComponent extends Vue {
  public mounted () {
    console.log('mouned school.ts')
  }
}
