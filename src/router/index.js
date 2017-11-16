import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import ArticlePackage from '../pages/article'
import CasePackage from '../pages/case'
import StarsPackage from '../pages/stars'
import LovePackage from '../pages/love'
import PicturePackage from '../pages/picture'

Vue.use(Router)

export default new Router({
  history: true,
  mode: 'history',
  routes: [
    {
      path: '/index/:navIndex',
      name: 'index',
      component: Index,
    },
    {
      path: '/case/:navIndex',
      name: 'case',
      component: CasePackage,
    },
    {
      path: '/stars/:navIndex',
      name: 'stars',
      component: StarsPackage,
    },
    {
      path: '/love/:navIndex',
      name: 'love',
      component: LovePackage,
    },
    {
      path: '/picture/:navIndex',
      name: 'picture',
      component: PicturePackage,
    },
    {
      path: '/article/:navIndex',
      name: 'article',
      component: ArticlePackage,
    },
    {
      path: '*',
      redirect: '/index/0',
    }
  ]
})
