<template>
  <div class="show-dialog">
    <el-dialog
    title='title'
    :visible.sync="isShow">
      <el-form :model='dialogModel'>
        <el-form-item v-for="field in fields" :key="field" label="{{field.fieldName}}">
          <el-input v-if="field.type === 'text'" v-model="dialogModel[field.fieldName]"></el-input>
        </el-form-item>
      </el-form>
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
  data () {
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

