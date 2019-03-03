/**在 index.js 中，引入各个模块所导出的路由配置。
 * 实现路由配置的分离，利于促进模块化开发进程、便于团队合作。 
 */
import Vue from 'vue'
import Router from 'vue-router'
import blogMain from '@/components/blogMain'
import blogIndex from '@/components/blogIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blogMain',
      component: blogMain
    },
    {
      path: '/blogIndex',
      name: 'blogIndex',
      component: blogIndex
    }
  ]
})
