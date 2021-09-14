<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'

export default {
  name: 'App',
  data(){
	return {
		token:'fanhuilinabc'
	}
  },
  components: {
  },
  mounted(){
	var jwt_token = VueCookies.get('jwt-token')
	if(jwt_token == null){
		this.$router.push('/login')
	}
	// this.$axios.request.request({
	// 	url:'/login',
	// }).then((res)=>{
	// 	console.log(res.data)
	// })
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
