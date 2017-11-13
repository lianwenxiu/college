import Vue from 'vue';
import routes from './routers/route.config'
import app from './vue/app.vue'; // 引入单页面组件
import reset from './css/reset';
import router from './routers/router';
import axios from './axios/axios';
import storeObj from './store/store';

new Vue({
    el: '.container',    
    router: router, // 注入路由
    store: storeObj, // 注入vuex
    render: function(createElement){ // 把单页面组件渲染到页面
        return createElement(app);
    }  
})

if(module.hot){
    module.hot.accept();
}