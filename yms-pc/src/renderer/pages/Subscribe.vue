<!-- 今日预约 -->
<template>
  <div class="subscribe">
    <el-button type="success">新增预约</el-button>
    <el-table
      :data="records"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <div>
            <span>病症：</span>
            <span>{{scope.row.description}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="150"></el-table-column>
      <el-table-column prop="sex" lable="性别" width="80"></el-table-column>
      <el-table-column prop="phoneNumber" lable="手机号" width="200"></el-table-column>
      <el-table-column prop="scheduleTime" label="预约时间" width="180"></el-table-column>
      <el-table-column prop="address" label="住址" width="200"></el-table-column>
      <el-table-column ></el-table-column>
    </el-table>
  </div>
</template>

<script>
const mockData = require('../mockData').mockData

export default {
  name: 'SubscribePage',
  data() {
    return {
      records: []
    }
  },

  created () {
    loadSubscribeInfos()
  },

  methods: {
    // 获取预约信息, 按时间逆序输出显示.
    loadSubscribeInfos() {
      this.records = mockData.scheduleRecords
    }
  }
}
</script>

<style lang="stylus" scoped>
  .subscribe
    height -webkit-fill-available
    width -webkit-fill-available
</style>


