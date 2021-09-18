<template>
		<el-menu default-active="/" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
			background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router @select>
			<el-menu-item index="/">
				<i class="el-icon-menu"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-submenu index="/auth">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>权限管理</span>
				</template>
				<el-menu-item index="/admin-list">
					<i class="el-icon-menu"></i>
					<span slot="title">管理员列表</span>
				</el-menu-item>
				<el-menu-item index="/auth-list">
					<i class="el-icon-menu"></i>
					<span slot="title">权限列表</span>
				</el-menu-item>
				<el-menu-item index="/auth-add">
					<i class="el-icon-menu"></i>
					<span slot="title">角色管理</span>
				</el-menu-item>
			</el-submenu>
			<el-submenu index="/member">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>会员管理</span>
				</template>
				<el-menu-item index="/member-list">
					<i class="el-icon-menu"></i>
					<span slot="title">会员列表</span>
				</el-menu-item>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>商品管理</span>
				</template>
				<el-menu-item index="2">
					<i class="el-icon-menu"></i>
					<span slot="title">商品列表</span>
				</el-menu-item>
			</el-submenu>
			
		</el-menu>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			// select(){
			// 	console.log(11);
			// }
		},
		created(){
			// this.active_index = '/'
		}
	}
</script>

<style>

</style>
