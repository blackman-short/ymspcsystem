<template>
  <div class="show-dialog">
    <el-dialog>

    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'EditDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    },
    fields: {
      type: Array,
      default: []
    },
    dialogModel: {
      type: Object,
      default: null
    }
  },
  data() {
    return {

    }
  },
  created () {

  }
}
</script>

<style lang="stylus" scoped>
  .show-dialog

</style>

