
import type { AppRouteRecordRaw } from '/@/router/types';
import {
    REDIRECT_NAME,
    LAYOUT,
  } from '/@/router/constant';

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw  = {
    path: '',
    name: '',
    component: '',
    meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true,
    }
}

export const REDIRECT_ROUTE: AppRouteRecordRaw = {
    path: '/redirect',
    component: LAYOUT,
    name: 'RedirectTo',
    meta: {
      title: REDIRECT_NAME,
      hideBreadcrumb: true,
      hideMenu: true,
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        name: REDIRECT_NAME,
        component: () => import('/@/views/sys/redirect/index.vue'),
        meta: {
          title: REDIRECT_NAME,
          hideBreadcrumb: true,
        },
      },
    ],
  };