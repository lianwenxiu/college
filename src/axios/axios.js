import Vue from 'vue';
import axios from 'axios';

// 设置请求接口和超时时间
// axios.defaults.baseURL = 'http://10.0.0.132:8088/';
// axios.defaults.timeout = 2000;

// 封装全局插件,将axios定义为vue的原型方法
// Vue.prototype.axios = axios;
let query = {
    install: function(v){
        v.prototype.$http = axios;
    }
}
Vue.use(query);

export default axios;