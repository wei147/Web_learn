<template>
  <div class="home">
    <h4>{{myName}}</h4>
    <h4>{{age}}</h4>
    <button @click="handleClick">change the name</button>
    <button @click="handleClickAge">change the age</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import {
    toRefs
  } from "vue";
  import {
    useStore
  } from "vuex";
  export default {
    name: 'HomeView',
    // 获取全局仓库中创建的数据
    computed: {
      myName() {
        return this.$store.state.name
      }
    },
    setup() {
      const store = useStore();
      const {
        age
      } = toRefs(store.state)
      return {
        age
      }
    },
    methods: {
      //想改变数据,vuex 要求第一步,必须派发一个 action  (change就是这个action)
      handleClick() {
        this.$store.dispatch('change', "I'm LiHua")
      },
      handleClickAge() {
        this.$store.dispatch('changeAge', "21 years old")
      }
    },
    components: {
      HelloWorld
    }
  }
</script>