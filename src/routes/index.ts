import layout from '@/layout/index.js'
import Integral from '@/view/integral/index.js'
import IntegralDetails from '@/view/integral/details/index.js'
import Gather from '@/view/gather/index.js'
import GatherDetails from '@/view/gather/details/index.js'
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
        component: IntegralDetails
      },
      {
        path: 'gather',
        component: Gather
      },
      {
        path: 'gather/details',
        component: GatherDetails
      }
    ]
  }
]
export default routes
