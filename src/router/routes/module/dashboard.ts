import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const dashboard:AppRouteModule  = {
    path: '',
    name: '',
    meta: {
        orderNo: 10,
        icon: 'ion:grid-outline',
        title:'首页',
    },
    redirect: '/dashboard/analysis',
    component: LAYOUT,
    children: [
        {
            path: 'analysis',
            name: 'Analysis',
            component: () => import('/@/views/dashboard/analysis/index.vue'),
            meta: {
              // affix: true,
              title:'分析页',
            },
          },
          {
            path: 'workbench',
            name: 'Workbench',
            component: () => import('/@/views/dashboard/workbench/index.vue'),
            meta: {
              title:'工作台',
            },
          },
    ]

}
export default dashboard