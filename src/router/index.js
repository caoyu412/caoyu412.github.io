import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/index';
import ArticlePackage from '../pages/article';
import CasePackage from '../pages/case';

Vue.use(Router);

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
      path: '/article',
      name: 'article',
      component: ArticlePackage,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
