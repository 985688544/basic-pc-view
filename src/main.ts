import { createApp } from 'vue';
import App from '/@/App.vue';
import { setupRouterGuard } from '/@/router/guard';
import { router, setupRouter } from '/@/router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


function bootstrap() {
  
  const app = createApp(App)
  
  // 注册全局组件
  // registerGlobComp(app)

  // 配置路由
  setupRouter(app)


  // 路由守卫
  setupRouterGuard(router)
  // 全局错误处理 

  
  app.use(ElementPlus).mount('#app')
}

bootstrap()
