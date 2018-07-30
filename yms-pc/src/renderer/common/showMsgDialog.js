const MESSAGE = {
  DELETE: '删除成功!',
  UPDATE: '修改成功!',
  ADD: '添加成功!'
}

module.exports = function (Vue, options) {
  Vue.prototype.showSuccess = function (type) {
    this.$message({
      type: 'success',
      message: MESSAGE[type]
    })
  }
}
