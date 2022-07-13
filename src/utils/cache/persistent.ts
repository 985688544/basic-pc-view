import {
    TOKEN_KEY,
    USER_INFO_KEY,
    ROLES_KEY,
    LOCK_INFO_KEY,
   
  } from '/@/enums/cacheEnum';
  import type { LockInfo, UserInfo } from '/#/store';
import { Memory } from './memory';
import { toRaw } from 'vue';

interface BasicStore {
  [TOKEN_KEY]: string | number | null | undefined;
  [USER_INFO_KEY]: UserInfo;
  [ROLES_KEY]: string[];
  [LOCK_INFO_KEY]: LockInfo;
}

const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

export type BasicKeys = keyof BasicStore
type SessionStore = BasicStore;
type SessionKeys = keyof SessionStore;


const sessionMemory = new Memory(DEFAULT_CACHE_TIME); 

export class Persistent {
    static setSession(key, value):void {
        sessionMemory.set(key, toRaw(value))
    }

  static getSession<T>(key: SessionKeys) {
    return sessionMemory.get(key)?.value as Nullable<T>;
  }
}