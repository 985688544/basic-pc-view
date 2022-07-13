// import type { UserInfo } from '/#/store';
import { store } from '/@/store';
import { defineStore } from "pinia";
import { getAuthCache, setAuthCache } from "/@/utils/auth"
import { USER_INFO_KEY, TOKEN_KEY } from '/@/enums/cacheEnum';
import { router } from '/@/router';
import { PAGE_NOT_FOUND_ROUTE } from '../../router/basic';
import { RouteRecordRaw } from 'vue-router';
import { usePermissionStore } from './permission';

interface UserState {
    userInfo: Nullable<UserInfo>;
    token?: string
    sessionTimeout?: boolean;
    lastUpdateTime: number;
}
interface GetUserInfoModel {
    // 用户id
    userId: string | number;
    // 用户名
    username: string;
    // 真实名字
    realName: string;
    // 头像
    avatar: string;
    // 介绍
    desc?: string;
  }

  interface UserInfo {
    userId: string | number;
    username: string;
    realName: string;
    avatar: string;
    desc?: string;
    homePath?: string;
  }
  
export const useUserStore = defineStore({
    id: 'app-user',
    state :(): UserState => ({
        userInfo:null,
        sessionTimeout: false,
        lastUpdateTime: 0
    }),

    getters:{
        getUserInfo(): UserInfo {
            return this.userInfo || getAuthCache<UserInfo>(USER_INFO_KEY || '')
        },
        getToken(): string {
            return this.token || getAuthCache<string>(TOKEN_KEY);
          },
    },
    actions: {
        setToken(info: string | undefined) {
            this.token = info ? info : ''; // for null or undefined value
            setAuthCache(TOKEN_KEY, info);
          },
          setUserInfo(info: UserInfo | null) {
            this.userInfo = info;
            this.lastUpdateTime = new Date().getTime();
            setAuthCache(USER_INFO_KEY, info);
          },

         async login(params: { goHome?: boolean;}): Promise<GetUserInfoModel | null> {
            try {
                const { goHome = true } = params;
                // const data = await loginApi(loginParams, mode);
                const { token } = {token: 'devTest'};
        
                // save token
                this.setToken(token);
                return this.afterLoginAction(goHome);
              } catch (error) {
                return Promise.reject(error);
              } 
          },
         async afterLoginAction(goHome?: boolean): Promise<GetUserInfoModel | null>  {
            if (!this.getToken) return null;
            const permissionStore = usePermissionStore();
            const routes = await permissionStore.buildRoutesAction();
            routes.forEach((route) => {
              router.addRoute(route as unknown as RouteRecordRaw);
            });

            router.addRoute(PAGE_NOT_FOUND_ROUTE as unknown as RouteRecordRaw)
            
            const userInfo = await this.getUserInfoAction();
            permissionStore.setDynamicAddedRoute(true);
            return userInfo
          },
       async  getUserInfoAction(): Promise<UserInfo | null >{
            if (!this.getToken) return null;
            const data  = () =>{
                return  new Promise((resolve)=>{
                    resolve({
                        userId: '222222333',
                        username: 'dev_person',
                        realName: 'dev',
                        avatar: 'http://',
                        homePath: ''
                    })
                })
            }
            const userInfo  = await data()
            this.setUserInfo(userInfo as UserInfo);
            return userInfo as UserInfo
          }

    }
})

export function useUserStoreWithOut() {
    return useUserStore(store);
  }