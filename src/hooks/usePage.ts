
import type { Router, RouteLocationRaw } from 'vue-router';
import { useRouter } from "vue-router";
import { PageEnum } from '/@/enums/pageEnum';


type PathAsPageEnum<T> = T extends{path: string}? T : T 
type RouteLocationRawEx = PathAsPageEnum<RouteLocationRaw>


function handleError(e: Error) {
    console.error(e);
  }



export function useGo(_router?: Router) {
    console.log(useRouter(), "useRouter()")

    const { push, replace } = _router || useRouter();
    console.log(push)
    function go(opt: RouteLocationRawEx = PageEnum.BASE_HOME, isReplace = false) {
      if (!opt) {
        return;
      }
      isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError);
    }
    return go;
  }