<!-- 今日预约 -->
<template>
  <div class="subscribe">
    <div class="operator">
      
      <div class="new-add">
        <el-button type="success">新增预约</el-button>
      </div>

      <!-- 用户姓名关键字搜索 -->
      <div class="name-search">
        <el-input placeholder="请输入患者姓名" prefix-icon="el-icon-search" clearable></el-input>
      </div>

      <div class="schedule-time-search">
        <el-date-picker type="date" placeholder="请选择预约时间"></el-date-picker>
      </div>
    </div>

    <!-- 预约信息表格 -->
    <el-table
      :data="records"
      style="width: 100%"
      cell-style="{text-align:center}">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <div>
            <span>病症：</span>
            <span>{{scope.row.description}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="150" header-align="center"></el-table-column>
      <el-table-column prop="sex" label="性别" width="80" header-align="center"></el-table-column>
      <el-table-column prop="phoneNumber" label="手机号" width="200" header-align="center"></el-table-column>
      <el-table-column prop="scheduleTime" label="预约时间" width="180" header-align="center"></el-table-column>
      <el-table-column prop="address" label="住址" width="200" header-align="center"></el-table-column>
      <el-table-column label="操作" header-align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row.phoneNumber)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const mockData = require('../mockData').mockData

export default {
  name: 'SubscribePage',
  data () {
    return {
      records: []
    }
  },

  created () {
    this.loadSubscribeInfos()
  },

  methods: {
    // 获取预约信息, 按时间逆序输出显示.
    loadSubscribeInfos () {
      this.records = mockData.scheduleRecords
    },

    // 编辑用户预约信息.
    handleEdit (index, value) {

    },

    // 删除用户预约信息.
    handleDelete (index, userPhone) {
		this.showDelete()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .subscribe
    width -webkit-fill-available
    .operator
      float right
      width 100%
      .name-search
        float left
        margin 0px 0px 2% 2%
      .schedule-time-search
        float left
        margin 0px 0px 2% 20%
      .new-add
        float right
</style>


