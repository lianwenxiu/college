import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './route.config';

var router = new VueRouter({
    routes: routes
})
export default router;