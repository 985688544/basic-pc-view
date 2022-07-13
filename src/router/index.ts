
import NProgress from "/@/utils/progress";
// import { storageSession } from "/@/utils/storage";
import {
  Router,
  createRouter,
  RouteRecordRaw,
  RouteComponent,
} from "vue-router";

import {
  ascending,
  formatTwoStageRoutes,
  formatFlatteningRoutes
} from "./utils";

import homeRouter from "./modules/home";
import remainingRouter from "./modules/remaining";
import { useTree } from '../utils/tree/index';
import { createWebHistory } from 'vue-router';

// 原始静态路由（未做任何处理）
const routes = [homeRouter];

// 导出处理后的静态路由（三级及以上的路由全部拍成二级）
const { buildHierarchyTree } = useTree()
export const constantRoutes: Array<RouteRecordRaw> = formatTwoStageRoutes(
  formatFlatteningRoutes(buildHierarchyTree(ascending(routes)))
);

// 用于渲染菜单，保持原始层级
export const constantMenus: Array<RouteComponent> = ascending(routes).concat(
  ...remainingRouter
);

// 不参与菜单的路由
export const remainingPaths = Object.keys(remainingRouter).map(v => {
  return remainingRouter[v].path;
});

// 创建路由实例
export const router: Router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes.concat(...remainingRouter),
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      if (savedPosition) {
        return savedPosition;
      } else {
        if (from.meta.saveSrollTop) {
          const top: number =
            document.documentElement.scrollTop || document.body.scrollTop;
          resolve({ left: 0, top });
        }
      }
    });
  }
});

// 路由白名单
const whiteList = ["/login"];

router.beforeEach((to, _from, next) => {
  if (to.meta?.keepAlive) {
    // const newMatched = to.matched;

  }
  const name = undefined;
  NProgress.start();
  if (name) {
    if (_from?.name) {
        next();    
    } else {
      // 刷新
    }
  } else {
    if (to.path !== "/login") {
      if (whiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        next({ path: "/login" });
      }
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
