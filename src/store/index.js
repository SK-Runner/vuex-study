import Vue from 'vue'
import vuex from 'vuex'

import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
import moduleA from './modules/moduleA.js'
Vue.use(vuex)
	
const store = new vuex.Store({
	state:{
		counter:10,
		student:[
			{id:110,name:'a',age:15},
			{id:111,name:'b',age:16},
			{id:112,name:'c',age:20},
			{id:113,name:'d',age:21},
			{id:114,name:'e',age:22}
		],
		teacher:{
			name:'Mr.Wang',
			age:45
		}
	},
	getters:getters,
	mutations:mutations,
	
	actions:actions,

	modules:{
		moduleA:moduleA
	}
})

export default store