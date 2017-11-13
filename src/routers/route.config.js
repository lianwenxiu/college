import overall from '../vue/overall.vue';
import college from '../vue/college.vue';
import major from '../vue/major.vue';

var routes = [
    {
        path: '/',
        redirect: '/overall'
    },
    {
        name: 'overall',
        path: '/overall',
        component: overall
    },
    {
        name: 'college',
        path: '/college',
        component: college
    },
    {
        name: 'major',
        path: '/major',
        component: major
    }
]
export default routes;