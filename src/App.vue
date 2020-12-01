<template>
  <div id="app">
		<give-me-counter></give-me-counter>
		<hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue'
import GiveMeCounter from './components/GiveMeCounter.vue'
export default {
  name: 'App',
	components:{
		HelloVuex,GiveMeCounter
	}
}
</script>

<style>

</style>
