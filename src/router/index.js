/**在 index.js 中，引入各个模块所导出的路由配置。
 * 实现路由配置的分离，利于促进模块化开发进程、便于团队合作。 
 */
import Vue from 'vue'
import Router from 'vue-router'
import blogMain from '@/components/blogMain'
import blogIndex from '@/components/blogIndex'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'blogMain',
      component: blogMain
    },
    {
      //compnent属性必须是一个组件的模板对象，不需要加 ‘ ’
      path: '/blogIndex',//表示监听哪个路由链接的地址
      name: 'blogIndex',
      component: blogIndex//如果路由是前面匹配到的地址，则展示component属性对应的那个组件
    }
  ]
})
