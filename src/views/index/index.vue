<template>
	<div class="index-container">
		首页内容
	</div>
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		created(){
			this.$request.request({
				url:'/index'
			}).then(res=>{
				console.log(res.data)
			}).catch(res=>{
				console.log(res)
			})
		}
	}
</script>
<style scoped lang="scss">

</style>
