import { Router } from 'vue-router';
import { createPermissionGuard } from './permissionGuard'

export function setupRouterGuard(router: Router) {
    createPageGuard(router)
    createRouterLoginLoading(router)
    createPermissionGuard(router)
  }
  
  /**
   * Hooks for handling page state
   */
  function createPageGuard(router: Router) {
    const loadedPageMap = new Map<string, boolean>();
  
    router.beforeEach(async (to) => {
      // The page has already been loaded, it will be faster to open it again, you don’t need to do loading and other processing
      to.meta.loaded = !!loadedPageMap.get(to.path);
      // Notify routing changes
    //   setRouteChange(to);
  
      return true;
    });
  
    router.afterEach((to) => {
      loadedPageMap.set(to.path, true);
    });
  }


  function createRouterLoginLoading(router: Router) {
    const token  = localStorage.getItem('token')
    router.beforeEach(async (to)=>{
      if(!token) {
        return true
      }
      if (to.meta.loaded) {
        return true;
      }
    })
  }
  