export default{
	powerCounter(state){
		return state.counter*state.counter
	},
	more18stu(state){
		return state.student.filter(s => {
			return s.age>18
		})
	},
	more18stulength(state,getters){
		return getters.more18stu.length
	},
	// 组件向getters传值，返回一个函数
	moreAgestu(state){
		return function(Age){
			return state.student.filter(s => s.age>Age)
		}
	},
}