<template>
  <div class='header-img'>
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Hello World'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header-img
    height -webkit-fill-available
    background-image url('../assets/header.jpg')
    line-height 160px
    font-size 20px
</style>
