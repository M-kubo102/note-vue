<template>
  <div id="app">
    <noteHeader></noteHeader>
    <router-view/>
  </div>
</template>

<script>
import noteHeader from '../src/components/noteHeader'

export default {
  name: 'App',
  components:{
      noteHeader
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
