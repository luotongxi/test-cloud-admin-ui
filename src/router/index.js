import Vue from 'vue'
// 引入路由依赖
import Router from 'vue-router'
// 引入页面组件，命名为Hello
import Index from '@/vues/index/index.vue'

import login from './login.router';
import manage from './manage.router'
import home from './home.router'



const Java = {template : '<div>java</div>'}
const C = {template : '<div>C#</div>'}
const Php = {template : '<div>php</div>'}

// 使用路由依赖
Vue.use(Router)

// 路由配置参考：https://router.vuejs.org/zh-cn/

const router = {
  routes:[
    {
      path: '',
      name: 'Index',
      component: Index
    }
  ]
}

// 把分离出的路由整合到一个router对象上
router.routes = router.routes.concat(login,manage,home);

/*定义路由*/
const RouterInstance = new Router(router);

/*路由跳转前进行拦截处理*/
RouterInstance.beforeEach((to,from,next)=>{
  next();
});

/*路由跳转后进行拦截处理*/
RouterInstance.afterEach((to,from,next)=>{
  // console.log(to.path);
  // console.log(from.path);
});

export default RouterInstance;

/*
* 这里定义了路径为'/'的路由，该路由对应的页面是Hello组件，所以当我们在浏览器url
* 访问http://localhost:8080/#/时就渲染的Hello组件类似的，我们可以设置多个路由，
* ‘/index','/list'之类的，当然首先得引入该组件，再为该组件设置路由
* */
