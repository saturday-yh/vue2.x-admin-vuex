let modules = {
	namespaced: true,
	state: {
		users: [
			{ name: "张三", age: 18 },
			{ name: "李四", age: 28 },
			{ name: "王五", age: 38 },
			{ name: "乐乐", age: 48 },
		]
	},
	getters: {
		getUsers(state) {
			let auser = state.users.filter((item) => {
				return item.age > 18
			});
			return auser
		}
	},
}
export default modules;
