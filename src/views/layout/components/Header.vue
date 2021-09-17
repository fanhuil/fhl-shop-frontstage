<template>
	<div class="header-container">
		<div>后台管理系统</div>
		<a @click="logout">退出</a>
	</div>
</template>

<script>
	export default{
		methods:{
			logout(){
				// this.
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
