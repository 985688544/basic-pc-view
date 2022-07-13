import {  Persistent, BasicKeys } from '/@/utils/cache/persistent';
import { TOKEN_KEY } from '/@/enums/cacheEnum';

export function getToken() {
    return getAuthCache(TOKEN_KEY);
  }

export function getAuthCache<T>(key: BasicKeys) {
    const fn = Persistent.getSession;
    return fn(key) as T
}

export function setAuthCache(key: BasicKeys, value){
    const fn = Persistent.setSession;
    return fn(key, value)
}