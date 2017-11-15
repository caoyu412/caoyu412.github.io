import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import ArticlePackage from '../pages/article'
import CasePackage from '../pages/case'
import StarsPackage from '../pages/stars'
import LovePackage from '../pages/love'

Vue.use(Router)

export default new Router({
  history: true,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/case',
      name: 'case',
      component: CasePackage,
    },
    {
      path: '/stars',
      name: 'stars',
      component: StarsPackage,
    },
    {
      path: '/love',
      name: 'love',
      component: LovePackage,
    },
    {
      path: '/article',
      name: 'article',
      component: ArticlePackage,
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})
