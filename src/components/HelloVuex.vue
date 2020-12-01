<template>
	<div>
		<button @click="subCount(-10)">-10</button>
		<button @click="subCount(-5)">-5</button>
		<button @click="sub()">-</button>
		<span>{{$store.state.counter}}</span>
		<button @click="add()">+</button>
		<button @click="addCount(5)">+5</button>
		<button @click="addCount(10)">+10</button>
		<h2>---------------getters属性---------------</h2>
		<p>{{$store.getters.powerCounter}}</p>
		<p>{{$store.getters.more18stu}}</p>
		<p>{{$store.getters.more18stulength}}</p>
		<p>{{$store.getters.moreAgestu(21)}}</p>
		<h2>---------------mutations属性---------------</h2>
		<p>{{$store.state.teacher}}</p>
		<p>教师名字：{{$store.state.teacher.name}}</p>
		<button @click="changeName()">修改名字</button>
		<h2>---------------actions属性---------------</h2>
		<p>教师年龄：{{$store.state.teacher.age}}</p>
		<button @click="changeAge()">修改年龄</button>
		<h2>---------------modules属性---------------</h2>
		<p>moduleA的name：{{$store.state.moduleA.moduleName}}</p>
		<h3>modules属性————getters</h3>
		<p>{{$store.getters.fullName}}</p>
		<p>{{$store.getters.fullName2}}</p>
		<p>这里传入一个新的属性rootState-->{{$store.getters.fullName3}}</p>
		<h3>modules属性————mutations</h3>
		<span>{{$store.state.moduleA.moduleName}}</span>
		<button @click="upModuleName()">修改moduleName</button>
		<h3>modules属性————actions</h3>
		<span>{{$store.state.moduleA.moduleName}}</span>
		<button @click="AsynUpModuleName()">异步修改moduleName</button>
	</div>
</template>

<script>
	import * as types from '../store/mutations-types.js'
	export default{
		name:'HelloVuex',
		methods:{
			add(){
				this.$store.commit(types.INCREMENT)
				// this.$store.commit({
				// 	type:INCREMENT
				// })
			},
			sub(){
				// this.$store.commit('decrement')
				this.$store.commit({
					type:types.DECREMENT
				})
			},
			addCount(num){
				// this.$store.commit('addCount',num)
				this.$store.commit({
					type:types.ADDCOUNT,
					num
				})
			}, 
			subCount(num){
				// this.$store.commit('subCount',num)
				this.$store.commit({
					type:types.SUBCOUNT,
					num
				})
			},
			changeName(){
				this.$store.commit(types.CHANGENAME)
			},
			// 写法一：
			// changeAge(){
			// 	this.$store.dispatch({
			// 		type:'updateAge',
			// 		age:50,
			// 		//设置异步操作的回调
			// 		success(){
			// 			console.log('异步操作成功');
			// 		}
			// 	})
			// }
			// 更优雅写法
			changeAge(){
				this.$store.dispatch('updateAge',50).then(res=>{
					console.log('异步操作成功');
					console.log(res);
				})
			},
			
			upModuleName(){
				this.$store.commit('changeModuleName','B')
			},
			AsynUpModuleName(){
				this.$store.dispatch('asynChangeModuleName','C').then(res => {
					console.log('操作成功');
					console.log(res);
				})
			}
		}
	}
</script>

<style>
</style>
