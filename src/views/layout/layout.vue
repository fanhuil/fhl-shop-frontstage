<template>
	<el-container class="layout-container">
		<el-aside width="201px"><Left class="left-menu"></Left></el-aside>
		<el-container>
			<el-header><Header></Header></el-header>
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

			}
		},
		methods: {

		},
		components: {
			Header,
			Left
		},
		created() {
			// var jwt_token = VueCookies.get('jwt-token')
			// if (jwt_token == null) {
			// 	this.$router.push('/login')
			// }
			// this.$message({
			// 	message: '登录状态已过期，请重新登录',
			// 	type: 'warning'
			// });
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
