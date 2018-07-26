<template>
 <div class="nav-menu">
   <el-menu
    default-active="1"
    theme="dark"
    background-color="#D3DCE6"
    @select="handleMenuSelect">

     <!-- 客户预约 -->
     <el-menu-item index=1>
       <i class="el-icon-menu"></i>
       <span>导航一</span> 
     </el-menu-item>

     <!-- 访客记录 -->
     <el-menu-item index=2>
       <i class="el-icon-menu"></i>
       <span>导航二</span>
     </el-menu-item>

     <!-- 员工小计 -->
     <el-menu-item index=3>
       <i class="el-icon-menu"></i>
       <span>导航三</span>
     </el-menu-item>
   </el-menu>
 </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      routerPage: 1
    }
  },
  methods: {
    handleMenuSelect (index, indexPath) {
      this.routerPage = index
      this.$emit('handleMenuSelect', this.routerPage)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .nav-menu
    height 100%
    width -webkit-fill-available
    text-align center
  .el-menu
    .el-menu-item
      font-family Tahoma, "Microsoft Yahei", Simsun
      font-size 25px
      margin 35px 0px 0px 0px
</style>


