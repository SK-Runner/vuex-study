import * as types from './mutations-types.js'
export default{
	[types.INCREMENT](state){
		state.counter++
	},
	[types.DECREMENT](state){
		state.counter--
	},
	// addCount(state,num){
	// 	state.counter += num
	// },
	[types.ADDCOUNT](state,payload){
		state.counter += payload.num
	},
	[types.SUBCOUNT](state,payload){
		state.counter += payload.num
	},
	[types.CHANGENAME](state){
		//非响应式----->属性没有提前初始化完毕，现新增属性name，name不是响应式的
		state.teacher.name="'Mr.Liu'"
		console.log(state.teacher.name)
		// 响应式------>
		// Vue.set(state.teacher,'name','b')
		// console.log(state.teacher.name)
	},
	[types.UPDATEAGE](state){
		state.teacher.age=50
	}
}