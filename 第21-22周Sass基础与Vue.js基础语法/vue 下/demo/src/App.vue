<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js App  hi" />
  <div>
    <input v-model="inputValue" />
    <button class="button" @click="handleAddItem">提交</button>
  </div>
  <ul>
    <!-- ListItem 用的时候可以写成 list-item -->
    <ListItem
      v-for="(item,index) in list" 
      :key="index"
      :msg="item">
    </ListItem>
  </ul>
</template>

<script>
  // 单文件组件 (是指这个文件就代表了一个组件)
  import HelloWorld from './components/HelloWorld.vue'
  import {
    reactive,
    ref
  } from "vue";
  import ListItem from "./components/ListItem.vue";
  export default {
    name: 'App',
    //注册局部组件
    components: {
      ListItem,
      HelloWorld
    },
    setup() {
      const inputValue = ref('');
      const list = reactive([]);

      const handleAddItem = () => {
        list.push(inputValue.value); //添加到list中
        inputValue.value = ''
      }
      return {
        handleAddItem,
        inputValue,
        list
      }
    },
    // components: {
    //   HelloWorld
    // }
  }
</script>

<style>
  /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */
  .button {
    margin-left: 20px;
    /* 这里会影响到ListItem组件的class="button"的样式  父组件影响子组件*/
    color: darkcyan;
  }
</style>