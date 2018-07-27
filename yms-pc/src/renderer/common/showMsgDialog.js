const MESSAGE = {
  DELETE: '此操作将永久删除该文件, 是否继续?'
}


module.exports = function (Vue, options) {
  Vue.prototype.showDelete = function () {
    this.$confirm (MESSAGE.DELETE, '提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
    })
  }
}