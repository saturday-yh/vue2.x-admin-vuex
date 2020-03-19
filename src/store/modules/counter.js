import * as types from "./mutation-types"
export default {
	namespaced: true,
	state: {
		total: 0,
	},
	// 改变state的值
	mutations: {
		[types.INC_COUNT](state, payload) {
			state.total = payload.total;
		},
		[types.DEC_COUNT](state, payload) {
			state.total = payload.total;
		}
	},
	actions: {
		inTotal(conText, payload) {
			conText.commit(types.INC_COUNT, payload)
		},
		decTotal(conText, payload) {
			conText.commit(types.DEC_COUNT, payload)
		},
	}
}
