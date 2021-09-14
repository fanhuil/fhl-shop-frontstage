<template>
	<div>
		<div class="header">
			<Header></Header>
		</div>	

		<div class="container">
			<div class="left">
				<Left></Left>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import Left from '@/components/Left.vue'
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		components:{
			Header,
			Left
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.header {
		width: 100%;
		height: 50px;
		background-color: #2C3E50;
	}

	.container{
		display: flex;
	}

	.left {
		width: 200px;
		height: auto;
	}
</style>
