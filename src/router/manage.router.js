import Manage from '@/vues/manage/index.vue'
import Test from '@/vues/manage/test.vue'

export default [{
  path: '/manage',
    // 嵌套路由配置 https://router.vuejs.org/zh-cn/essentials/nested-routes.html
  children: [
    {
      path: 'test',
      component: Test
    }
  ],
  name: 'Manage',
  component: Manage,
  alias: '/mag'   // 别名，访问"／mag"即等于路由/manage
  // 命名视图
  // components:{
  //   default: Manage,
  //   java: Java,
  //   php: Php
  // }
}]
