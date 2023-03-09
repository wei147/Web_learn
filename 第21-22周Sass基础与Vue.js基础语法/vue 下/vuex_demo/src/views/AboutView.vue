<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>{{myName}}</h4>
    <h4>{{age}}</h4>
  </div>
</template>

<script>
  import {
    toRefs
  } from "vue";
  import {
    useStore
  } from "vuex";
  export default {
    setup() {
      //通过 useStore能获取到全局的对象
      const store = useStore();
      const {
        age
      } = toRefs(store.state)
      const handleClickAge = () => {
        store.commit("changeAge", "21 years old")
      }
      return {
        age,
        handleClickAge
      }
    },
    computed: {
      myName() {
        return this.$store.state.name
      }
    },
    methods: {
      //1.dispatch 方法,派发一个action,名字叫做change
      //2.感知到change 这个action,执行store中的action,执行store中action下面的change方法
      //3.commit 提交一个叫做change的数据改变,,
      //4.mutation 感知到提交的change改变,执行change方法改变数据,
      handleClick() {
        this.$store.dispatch('change')
      }
    },
  }
</script>