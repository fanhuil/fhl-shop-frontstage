// 引入Vue
import Vue from 'vue'
// 引入App文件
import App from './App.vue'

// 生产环境下信息提示
Vue.config.productionTip = false

// 引入异步请求对象
import axios from './utils/request/index.js'

// 引入路由对象
import router from'@/router'

//引入饿了么组建库和样式并使用
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


// 在Vue原型对象上添加axios
Vue.prototype.$axios = axios

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
