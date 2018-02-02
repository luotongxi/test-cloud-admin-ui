// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 引入vue框架
import Vue from 'vue'
// 引入根组件
import App from './App'
// 引入路由设置
import router from './router'
// 引入vue-resource
import VueResource from 'vue-resource'
// 引入bootstrap
import 'bootstrap/bootstrap.min.js'
import 'bootstrap/bootstrap.css'
// 引入jquery
import $ from 'jquery'


Vue.config.productionTip = false
Vue.use(VueResource);

/* eslint-disable no-new */
// 定义vue实例
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
