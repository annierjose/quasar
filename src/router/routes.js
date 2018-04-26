
export default [
  {
    path: '/',
    component: () => import('src/layouts/default/default.component'),
    children: [
      { path: '', component: () => import('src/pages/index/index.component') },
      { path: 'code', component: () => import('src/pages/code/code.component') },
      { path: 'school', component: () => import('src/pages/school/school.component') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
