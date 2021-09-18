import Vue from 'vue'

// 引入vue-router插件并使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入饿了么组件库和样式并使用
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI)

import { Message } from 'element-ui';

// 引入cookie库并使用
import VueCookies from 'vue-cookies'


const routes = [{
		path: '/', // 模板页
		component: () => import('@/views/layout/layout.vue'),
		children: [{
				path: '',
				name: 'home', // 首页
				component: () => import('@/views/index/index.vue')
			},
			{
				path: '/admin-list',
				name: 'admin-list', // 权限列表页
				component: () => import('@/views/auth/admin-list.vue')
			},
			{
				path: '/auth-list',
				name: 'auth-list', // 权限列表页
				component: () => import('@/views/auth/auth-list.vue')
			},
			{
				path: '/auth-add',
				name: 'auth-add', // 权限添加页
				component: () => import('@/views/auth/auth-add.vue')
			},
			{
				path: '/role',
				name: 'role',
				component: () => import('@/views/auth/role.vue')
			},
			{
				path: '/member-list',
				name: 'member-list',
				component: () => import('@/views/member/member-list.vue')
			}

		]
	},
	{
		path: '/login',
		name: 'login', // 登录页
		component: () => import('@/views/login/login.vue')
	}
]


const router = new VueRouter({
	routes
});

// 路由守卫导航：所有页面都会经过这里
// 守卫页面的导航的
// to:要去的路由信息
// from:来自哪里的路由信息
// next:方形方法
router.beforeEach((to, from, next) => {
	// 如果要访问的页面不是/login,检验登录状态
	// 如果没有登录，则跳转到登录页面
	// 如果登录了，则允许通过
	if (to.path != '/login') {
		var jwt_token = VueCookies.get('jwt-token')
		if (jwt_token) { // 有登录信息，可以通过
			next()
		} else {
			// console.log(Message)
			Message({
				message:'登录状态失效，请重新登录',
				type:'warning',
				duration:1500
			})
			next('/login')
		}
	} else {
		next()
	}
})

export default router
