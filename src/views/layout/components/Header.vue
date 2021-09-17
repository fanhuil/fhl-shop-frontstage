<template>
	<div class="header-container">
		<div>后台管理系统</div>
		<a @click="logout">退出</a>
	</div>
</template>

<script>
	import VueCookies from 'vue-cookies'
	export default{
		methods:{
			logout(){
				VueCookies.set('jwt-token','')
				this.$message({
					message:'退出成功',
					type:'success'
				})
				this.$router.push('/login')
			}
		}
	}
</script>

<style scoped lang="scss">
	.header-container{
		display: flex;
		justify-content: space-around;
	}
</style>
