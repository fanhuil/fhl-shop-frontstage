import Vue from 'vue'

// 引入vue-router插件并使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes = [{
		path: '/', // 模板页
		component: () => import('@/views/layout/layout.vue'),
		children: [{
				path: '',
				name: 'home', // 首页
				component: () => import('@/views/index/index.vue')
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

export default router
