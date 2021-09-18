<template>
	<el-container class="layout-container">
		<el-aside width="201px"><Left class="left-menu"></Left></el-aside>
		<el-container>
			<el-header><Header :id="id"></Header></el-header>
			<el-main><router-view /></el-main>
		</el-container>
	</el-container>
</template>

<script>
	import Header from '@/views/layout/components/Header.vue'
	import Left from '@/views/layout/components/Left.vue'
	import VueCookies from 'vue-cookies'
	export default {
		data() {
			return {
				id:null,
			}
		},
		methods: {

		},
		components: {
			Header,
			Left
		},
		created() {
			// 获取token信息并解析
			var jwt_token = VueCookies.get('jwt-token')
			let user = JSON.parse(decodeURIComponent(escape(window.atob(jwt_token.split('.')[1])))) // 获取负载信息
			this.id = user.sub
			console.log(this.id)
		}
	}
</script>

<style>
	.layout-container{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		/* text-align: center; */
		line-height: 60px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
/* 		text-align: center;
		line-height: 160px; */
	}

/* 	body>.el-container {
		margin-bottom: 40px;
	} */
/* 
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	} */
	
	
	.left-menu{
		height: 100%;
	}
</style>
