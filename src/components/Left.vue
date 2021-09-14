<template>
	<div>
		<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
			background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
			<el-menu-item index="/">
				<i class="el-icon-setting"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-submenu index="auth">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>权限管理</span>
				</template>
				<el-menu-item index="/auth-list">权限列表</el-menu-item>
				<el-menu-item index="/role">角色管理</el-menu-item>
			</el-submenu>
			<el-menu-item index="goods">
				<i class="el-icon-menu"></i>
				<span slot="title">商品管理</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {}

		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
</style>
