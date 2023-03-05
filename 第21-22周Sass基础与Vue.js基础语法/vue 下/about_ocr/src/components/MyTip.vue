<template>
  <div>
    <slot name="header"></slot>
    <slot>我这里设置默认值</slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  export default {
    name: 'MyTip',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>