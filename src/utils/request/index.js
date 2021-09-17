import axios from 'axios'

const request = axios.create({
	baseURL: 'http://www.backstage.com/api',
	timeout: 10000,
})

import VueCookies from 'vue-cookies'
var jwt_token = VueCookies.get('jwt-token')

// 请求前置拦截器
request.interceptors.request.use(function (config) {
	if(jwt_token != null){
		config.headers.Authorization=`Bearer ${jwt_token}`
	}
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default {
	request
}
