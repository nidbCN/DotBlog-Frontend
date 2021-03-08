import Vue from 'vue'
import VueRouter from 'vue-router';
import BlogArticleList from './components/blog-article-list.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: BlogArticleList,
    },
    {
        path: '/articles/:aid/:alias',
        name:'Articles',
        component: () => import('./components/blog-article-content'),
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes,
});

export default router;