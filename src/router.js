import Vue from 'vue'
import VueRouter from 'vue-router';
import BlogArticleList from './views/home';

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
        component: () => import('./views/articles'),
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes,
});

export default router;