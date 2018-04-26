import router from '@/router'

interface MenuItem {
  clickAction: any
  icon: string
  label: string
  sublabel: string
}

export class Menu {
  public menuItem: MenuItem[] = []
  constructor () {
    this.menuItem.push({
      clickAction: () => {this.r('school')},
      icon: 'school',
      label: 'Docs',
      sublabel: 'quasar-framework.org'
    })
    this.menuItem.push({
      clickAction: () => {this.r('code')},
      icon: 'code',
      label: 'GitHub',
      sublabel: 'github.com/quasarframework'
    })
  }
  r(name: string) {
    router.push(name)
  }
}
