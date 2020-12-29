<template>
  <div id="app">
    <el-button @click="show">按钮</el-button>
    <p>hello world</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  methods: {
    show(){
      this.$message.success('element-ui提示')
    }
  }
}
</script>

<style>

</style>
