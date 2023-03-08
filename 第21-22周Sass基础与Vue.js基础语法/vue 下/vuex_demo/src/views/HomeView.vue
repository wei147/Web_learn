<template>
  <div class="home">
    <h4>{{myName}}</h4>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  // 获取全局仓库中创建的数据
  computed:{
    myName(){
      return this.$store.state.name
    }
  },
  components: {
    HelloWorld
  }
}
</script>
