<template>
  <el-container>
    <el-header style="height:160px">
      <Header :title="headerTitle"></Header>
    </el-header>
    <el-container>
      <el-aside style="width:18%">
        <dashboard @handleMenuSelect="getMenuSelect"></dashboard>
      </el-aside>

      <el-main v-if="this.routerPage == 1">
        <subscribe-page></subscribe-page>
      </el-main>

      <el-main v-else-if="this.routerPage == 2">
        <record-page></record-page>
      </el-main>

      <el-main v-else>
        <employee-page></employee-page>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '@/components/Header.vue'
import Dashboard from '@/components/Dashboard.vue'

import SubscribePage from '@/pages/Subscribe.vue'
import RecordPage from '@/pages/Record.vue'
import EmployeePage from '@/pages/Employee.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Dashboard,
    SubscribePage,
    RecordPage,
    EmployeePage
  },
  data () {
    return {
      headerTitle: '你好, 世界',
      routerPage: 1
    }
  },

  created () {

  },
  methods: {
    getMenuSelect (menu) {
      this.routerPage = menu
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-header
    background-color #B3C0D1
    color #333
    text-align center
    padding 0

  .el-container
    height -webkit-fill-available
    .el-aside 
      background-color #D3DCE6
      color #333
    .el-main
      background-color #E9EEF3
      color #333
  .headerH
    inline-height 160px

</style>
