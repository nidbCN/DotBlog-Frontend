import VueRouter from 'vue-router';
import BlogArticleList from './components/blog-article-list.vue';
import BlogArticleContent from './components/blog-article-content.vue'

const routes = [
    {
        path: '/home',
        component: BlogArticleList,

    },
    {
        path: '/articles',
        component: BlogArticleContent
    }
];

const router = new VueRouter({
    routes
});

export default router;