import Vue from 'vue'

// 引入vue-router插件并使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes = [{
		path: '/',
		component: () => import('@/views/index.vue'),
		children: [{
				path: '/auth-list',
				component: () => import('@/views/auth/auth-list.vue')
			},
			{
				path: '/auth-add',
				component: () => import('@/views/auth/auth-add.vue')
			},
			{
				path: '/role',
				component: () => import('@/views/auth/role.vue')
			}
			
		]
	},
	{
		path: '/login',
		component: () => import('@/views/login.vue')
	}
]

const router = new VueRouter({
	routes
});

export default router
