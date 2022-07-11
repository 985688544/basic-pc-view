import type { UserInfo } from '/#/store';
import { store } from '/@/store';
import { defineStore } from "pinia";


interface UserState {
    userInfo: Nullable<UserInfo>;
    token?: string
    sessionTimeout?: boolean;
    lastUpdateTime: number;
}
export const useUserStore = defineStore({
    id: 'app-user',
    state :(): UserState => ({
        userInfo:null,
        sessionTimeout: false,
        lastUpdateTime: 0
    }),

    getters:{},
    actions: {}
})

export function useUserStoreWithOut() {
    return useUserStore(store);
  }