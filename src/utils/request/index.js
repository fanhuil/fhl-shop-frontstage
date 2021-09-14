import axios from 'axios'

const request = axios.create({
	baseURL: 'http://www.backstage.com/api',
	timeout: 10000,
	headers: {
		"Authorization": '111'
	}
})


export default {
	request
}
