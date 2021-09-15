<template>
	<div class="login-contianer">
		<el-form ref="form" :model="form" class="form-area" :rules="rules">
			<div class="form-area-title">后台登录</div>
			<el-form-item prop="username">
				<el-input v-model="form.username" placeholder="请输入登录名" prefix-icon="el-icon-user"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input v-model="form.password" placeholder="请输入密码" prefix-icon="el-icon-key"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onLogin('form')" :loading="loading" class="login-btn">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					username: '',
					password: ''
				},
				loading: false,
				rules: {
					username: [            
						{ required: true, message: '请输入用户名', trigger: 'blur' },
						{ min: 5, message: '长度在不能小于5个字符', trigger: 'blur' },
					],
					password:[
						{ required: true, message: '请输入登录密码', trigger: 'blur' },
					]
				}
			}
		},
		methods: {
			// 登录
			onLogin(formName) {
				// 验证规则
				this.$refs[formName].validate((valid) => {
				  console.log(valid)
				  if (valid) {
					this.$request.request({
						url: '/login',
						method: 'post',
						data: {
							name: "fanhuilin"
						}
					}).then((res) => {
						console.log(res.data)
					})
				  } else {
					console.log(valid);
					return false;
				  }
				});

				// this.loading = true
				// this.$message({
				// 	message: '登录成功，正在跳转',
				// 	type: 'success',
				// 	duration: "1500"
				// })
				// setTimeout(() => {
				// 	this.$router.push('/')
				// }, 2000)
			}
		}
	}
</script>

<style>
	.login-contianer {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url("../../assets/login-bg.jpg") no-repeat;
		background-size: cover;
	}

	.form-area {
		background-color: rgba(221, 221, 221, 0.8);
		padding: 50px;
		min-width: 300px;
		border-radius: 10px;
	}

	.login-btn {
		width: 100%;
	}

	.form-area-title {
		font-size: 20px;
		font-weight: 600;
		padding: 10px 0px;
		text-align: center;

	}
</style>
