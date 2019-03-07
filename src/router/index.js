/**在 index.js 中，引入各个模块所导出的路由配置。
 * 实现路由配置的分离，利于促进模块化开发进程、便于团队合作。
 * 
 * 下面的每个import都是  引入组件   引入各个组件
 */
import Vue from 'vue'
import Router from 'vue-router'
import blogMain from '@/components/blogMain'
import blogTop from '@/components/blogTop'
import blogContent from '@/components/blogContent'
import blogAside from '@/components/blogAside'
import blogContentMain from '@/components/blogContentMain'
import pageHtml from '@/components/pageHtml'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'blogMain',
      component: blogMain
    },
    {
      //compnent属性必须是一个组件的模板对象，不需要加 ‘ ’
      path: '/blogTop', //表示监听哪个路由链接的地址
      name: 'blogTop', //路由的名称
      component: blogTop //如果路由是前面匹配到的地址，则展示component属性对应的那个组件
    },
    {
      path: '/html/:username', //url传参
      name: 'pageHtml',
      component: pageHtml
    },
    {
      path: '/goBlogContent',
      redirect: '/blogContent'
    },
    {
      path: '/blogContent',
      name: 'blogContent',
      component: blogContent,
      alias:'/blogContentAlias'//给blogContent起了一个别名，类似redirect
    },
    {
      path: '/blogAside',
      name: 'blogAside',
      component: blogAside
    },
    {
      path: '/blogContentMain',
      name: 'blogContentMain',
      component: blogContentMain
    }
  ]
})
