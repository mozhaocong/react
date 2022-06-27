import layout from '@/layout/index.js'
import ViewTest from '@/view/test.js'
const routes: any = [
  {
    path: '/home',
    component: layout,
    children: [
      {
        path: '111',
        component: ViewTest
      }
    ]
  }
]
export default routes
