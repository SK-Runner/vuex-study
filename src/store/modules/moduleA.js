export default{
	state:{
		moduleName:'A'
	},
	getters:{
		fullName(state){
			return state.moduleName+'111'
		},
		fullName2(state,getters){
			return getters.fullName + '222'
		},
		fullName3(state,getters,rootState){
			return getters.fullName2 + rootState.counter
		}
	},
	mutations:{
		changeModuleName(state,payload){
			state.moduleName = payload
		}
	},
	actions:{
		asynChangeModuleName(context,payload){
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					context.commit('changeModuleName',payload)
					resolve('--------------------')
				},1000)
			})
		}
	}
}