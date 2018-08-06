<template>
  <div class="employee-page">
    <el-table :data="employees" stripe
      expand-change="expandChange(v1, v2)">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <p ref="echart{{scope.$index}}">{{scope.$index}}</p>
        </template>
      </el-table-column>
      <el-table-column label="姓名" prop="name" width="100"></el-table-column>
      <el-table-column label="性别" prop="sex" width="60"></el-table-column>
      <el-table-column label="手机号" prop="phoneNumber" width="120"></el-table-column>
      <el-table-column lable="住址" prop="address" width="150"></el-table-column>
    </el-table>
  </div>  
</template>

<script>
// import echarts from 'echarts'
const mockData = require('../mockData').mockData
export default {
  name: 'EmployeePage',

  data () {
    return {
      employees: []
    }
  },

  methods: {
    // 加载.
    loadEmployees () {
      this.employees = mockData.emplyees
    },

    expandChange (v1, v2) {
      console.log(v1)
      console.log(v2)
    }
  },

  created () {
    this.loadEmployees()
  }
}
</script>

<style lang="stylus" scoped>

</style>
