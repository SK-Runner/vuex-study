import * as types from './mutations-types.js'
export default{
	/**
	 * @param {Object} context:上下文
	 * @param {Object} payload:负载
	 * 设置异步成功回调
	 */
	//写法一：
	// updateAge(context,payload){
	// 	setTimeout(()=>{
	// 		context.commit(types.UPDATEAGE)
	// 		console.log('修改后的年龄为：'+payload.age)
	// 		payload.success()
	// 		console.log('--------------------');
	// 	},1000)
	// },
	//更优雅写法：
	updateAge(context,payload){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				context.commit(types.UPDATEAGE)
				console.log('修改后的年龄为：'+payload)
				resolve('--------------------')
			},1000)
		})
	}
}