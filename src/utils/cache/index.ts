
// import { createStorage as create, CreateStorageParams } from './storageCache';



const createOptions = (storage: Storage, options)=> {
    return {
      // No encryption in debug mode
      storage,
      prefixKey: 'van_0.1',
      ...options,
    };
  };

export const createStorage = (storage: Storage = sessionStorage, options:any) => {
    return createOptions(storage, options);
  };

export const createSessionStorage = (options:any) => {
    return createStorage(sessionStorage, { ...options });
  };
  
  export const createLocalStorage = (options:any) => {
    return createStorage(localStorage, { ...options });
  };