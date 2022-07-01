import layout from '@/layout/index.js'
import Integral from '@/view/integral/index.js'
import Details from '@/view/integral/details/index.js'
const routes: any = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'integral',
        component: Integral
      },
      {
        path: 'integral/details',
        component: Details
      }
    ]
  }
]
export default routes
