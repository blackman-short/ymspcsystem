<template>
  <div class="employee-page">
    <el-table :data="employees">
      <el-table-column label="姓名" header-align="center" prop="name" width="150"></el-table-column>
      <el-table-column label=""></el-table-column>
    </el-table>
  </div>  
</template>

<script>
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

    }
  },

  created () {

  }
}
</script>

<style lang="stylus" scoped>
  .employee-page

</style>
